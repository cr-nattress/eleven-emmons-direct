import os
import glob
from typing import Tuple, List
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(__file__))
SRC_DIR = os.path.join(ROOT, "knowledge")
OUT_DIR = os.path.join(ROOT, "knowledge", "content", "images")

os.makedirs(OUT_DIR, exist_ok=True)


def find_white_band(projection: List[float], min_width: int, vicinity: Tuple[int, int]) -> Tuple[int, int]:
    """
    Find the widest high-brightness band within [vicinity_start, vicinity_end).
    Returns (start, end). If not found, returns (-1, -1).
    """
    vstart, vend = vicinity
    vstart = max(0, vstart)
    vend = min(len(projection), vend)

    # Normalize projection to [0, 1]
    segment = projection[vstart:vend] if vstart < vend else []
    if not segment:
        return (-1, -1)
    minv = min(segment)
    maxv = max(segment)
    denom = (maxv - minv) if (maxv - minv) != 0 else 1.0
    proj = [(p - minv) / denom for p in projection]

    # Threshold as 90th percentile inside vicinity to adapt to lighting
    s_sorted = sorted(proj[vstart:vend])
    idx = max(0, int(0.9 * (len(s_sorted) - 1)))
    thr = s_sorted[idx] if s_sorted else 0.95
    mask = [1 if p >= thr else 0 for p in proj]

    # Scan for longest contiguous run >= min_width inside vicinity
    best_len = 0
    best = (-1, -1)
    run_start = None
    for i in range(vstart, vend):
        if mask[i]:
            if run_start is None:
                run_start = i
        else:
            if run_start is not None:
                run_len = i - run_start
                if run_len >= min_width and run_len > best_len:
                    best_len = run_len
                    best = (run_start, i)
                run_start = None
    if run_start is not None:
        run_len = vend - run_start
        if run_len >= min_width and run_len > best_len:
            best = (run_start, vend)
    return best


essential_glob = os.path.join(SRC_DIR, "**", "airbnb-*.png")

def split_image(path: str) -> None:
    img = Image.open(path).convert("RGB")
    w, h = img.size
    # Convert to grayscale once
    gray = img.convert("L")
    px = gray.load()

    # Horizontal projection for row gutter (mean brightness per row)
    row_proj: List[float] = []
    for y in range(h):
        s = 0
        for x in range(w):
            s += px[x, y]
        row_proj.append(s / float(w))

    # Expect the row gutter roughly around 60-75% of height (after big image)
    gutter_h_start, gutter_h_end = find_white_band(
        row_proj,
        min_width=max(4, h // 500),
        vicinity=(int(h * 0.5), int(h * 0.9)),
    )

    if gutter_h_start == -1:
        # Fallback: pick brightest band anywhere as last resort
        gutter_h_start, gutter_h_end = find_white_band(
            row_proj, min_width=max(3, h // 700), vicinity=(0, h)
        )

    # Define top and bottom boxes excluding the gutter with a 1px pad
    pad = 1
    top_box = (0, 0, w, max(0, gutter_h_start - pad)) if gutter_h_start != -1 else (0, 0, w, h // 2)
    bottom_y0 = min(h, (gutter_h_end + pad)) if gutter_h_end != -1 else h // 2
    bottom_box = (0, bottom_y0, w, h)

    # Now inside the bottom region, locate vertical gutter
    y0, y1 = bottom_box[1], bottom_box[3]
    # Column projection within bottom region
    col_proj: List[float] = []
    for x in range(w):
        s = 0
        for y in range(y0, y1):
            s += px[x, y]
        col_proj.append(s / float(max(1, (y1 - y0))))
    gutter_v_start, gutter_v_end = find_white_band(
        col_proj,
        min_width=max(4, w // 700),
        vicinity=(int(w * 0.35), int(w * 0.65)),
    )

    if gutter_v_start == -1:
        gutter_v_start, gutter_v_end = find_white_band(
            col_proj, min_width=max(3, w // 900), vicinity=(0, w)
        )

    left_box = (0, bottom_box[1], max(0, gutter_v_start - pad), bottom_box[3]) if gutter_v_start != -1 else (0, bottom_box[1], w // 2, bottom_box[3])
    right_x0 = bottom_box[0] + (gutter_v_end + pad if gutter_v_end != -1 else w // 2)
    right_box = (right_x0, bottom_box[1], w, bottom_box[3])

    # Crop
    top_img = img.crop(top_box)
    left_img = img.crop(left_box)
    right_img = img.crop(right_box)

    base = os.path.splitext(os.path.basename(path))[0]

    out1 = os.path.join(OUT_DIR, f"{base}-1.png")
    out2 = os.path.join(OUT_DIR, f"{base}-2.png")
    out3 = os.path.join(OUT_DIR, f"{base}-3.png")

    top_img.save(out1)
    left_img.save(out2)
    right_img.save(out3)
    print(f"Saved: {out1}, {out2}, {out3}")


def main():
    files = sorted(glob.glob(essential_glob))
    if not files:
        print(f"No files found at {essential_glob}")
        return
    for f in files:
        try:
            split_image(f)
        except Exception as e:
            print(f"Error splitting {f}: {e}")


if __name__ == "__main__":
    main()
