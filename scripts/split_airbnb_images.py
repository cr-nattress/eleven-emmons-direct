import os
import glob
from typing import Tuple
import numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(__file__))
SRC_DIR = os.path.join(ROOT, "knowledge")
OUT_DIR = os.path.join(ROOT, "knowledge", "content", "images")

os.makedirs(OUT_DIR, exist_ok=True)


def find_white_band(projection: np.ndarray, min_width: int, vicinity: Tuple[int, int]) -> Tuple[int, int]:
    """
    Find the widest high-brightness band within [vicinity_start, vicinity_end).
    Returns (start, end). If not found, returns (-1, -1).
    """
    vstart, vend = vicinity
    vstart = max(0, vstart)
    vend = min(len(projection), vend)

    # Normalize projection to [0, 1]
    proj = projection.astype(np.float32)
    proj = (proj - proj.min()) / (proj.ptp() + 1e-6)

    # Threshold as 90th percentile inside vicinity to adapt to lighting
    thr = np.percentile(proj[vstart:vend], 90)
    mask = (proj >= thr).astype(np.uint8)

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


essential_glob = os.path.join(SRC_DIR, "airbnb-*.png")

def split_image(path: str) -> None:
    img = Image.open(path).convert("RGB")
    w, h = img.size
    arr = np.array(img)

    # Compute brightness as mean across channels
    gray = arr.mean(axis=2)

    # Horizontal projection for row gutter
    row_proj = gray.mean(axis=1)  # per-row brightness

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
    bottom_arr = gray[bottom_box[1]:bottom_box[3], :]
    col_proj = bottom_arr.mean(axis=0)
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
