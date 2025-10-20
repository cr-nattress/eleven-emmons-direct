import os
import glob
from PIL import Image, ImageChops

ROOT = os.path.dirname(os.path.dirname(__file__))
IMG_DIR = os.path.join(ROOT, "knowledge", "content", "images")

def trim_white_borders(img: Image.Image, tolerance: int = 240) -> Image.Image:
    """
    Trim white/near-white borders from an image.

    Args:
        img: PIL Image object
        tolerance: Brightness threshold (0-255). Pixels above this are considered white.

    Returns:
        Cropped PIL Image
    """
    # Convert to RGB if needed
    if img.mode != 'RGB':
        img = img.convert('RGB')

    # Convert to grayscale for border detection
    gray = img.convert('L')

    # Create a mask where white pixels are 0, others are 255
    # Invert so content is white, borders are black
    def is_content(pixel):
        return 0 if pixel >= tolerance else 255

    mask = gray.point(is_content, mode='L')

    # Get bounding box of non-white content
    bbox = mask.getbbox()

    if bbox:
        return img.crop(bbox)
    else:
        # If entire image is white, return original
        return img

def process_images(pattern: str = "airbnb-*-*.png", tolerance: int = 240) -> None:
    """
    Process all images matching pattern and remove white borders.

    Args:
        pattern: Glob pattern for image files
        tolerance: Brightness threshold for white detection (0-255)
    """
    search_path = os.path.join(IMG_DIR, pattern)
    files = sorted(glob.glob(search_path))

    if not files:
        print(f"No files found matching: {search_path}")
        return

    print(f"Found {len(files)} images to process")
    print(f"Using tolerance: {tolerance} (pixels >= {tolerance} brightness are treated as white)")
    print()

    for filepath in files:
        try:
            img = Image.open(filepath)
            original_size = img.size

            # Trim white borders
            cropped = trim_white_borders(img, tolerance=tolerance)
            new_size = cropped.size

            # Calculate how much was cropped
            width_diff = original_size[0] - new_size[0]
            height_diff = original_size[1] - new_size[1]

            # Only save if something was actually cropped
            if width_diff > 0 or height_diff > 0:
                cropped.save(filepath)
                print(f"[OK] {os.path.basename(filepath)}")
                print(f"  {original_size[0]}x{original_size[1]} -> {new_size[0]}x{new_size[1]} "
                      f"(-{width_diff}w, -{height_diff}h)")
            else:
                print(f"[SKIP] {os.path.basename(filepath)} - no borders detected")

        except Exception as e:
            print(f"[ERROR] Error processing {os.path.basename(filepath)}: {e}")

    print(f"\nProcessing complete!")

if __name__ == "__main__":
    # Use tolerance of 240 - pixels with brightness >= 240 are considered white
    # Adjust this value if needed (lower = more aggressive, higher = more conservative)
    process_images(pattern="airbnb-*-*.png", tolerance=240)
