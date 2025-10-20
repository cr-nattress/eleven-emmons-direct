import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(__file__))
IMG_DIR = os.path.join(ROOT, "knowledge", "content", "images")

def find_vertical_divider(img: Image.Image, start_x: int = None, tolerance: int = 240) -> int:
    """
    Find the first vertical white divider (bright column) starting from start_x.

    Args:
        img: PIL Image object
        start_x: Starting x position to search from (default: 70% of width)
        tolerance: Brightness threshold for white detection

    Returns:
        X coordinate of the divider, or -1 if not found
    """
    gray = img.convert('L')
    w, h = img.size
    px = gray.load()

    if start_x is None:
        start_x = int(w * 0.7)  # Start searching from 70% of width

    # Look for a bright vertical column
    for x in range(start_x, w):
        # Calculate average brightness for this column
        brightness_sum = 0
        for y in range(h):
            brightness_sum += px[x, y]
        avg_brightness = brightness_sum / h

        # If this column is mostly white, we found a divider
        if avg_brightness >= tolerance:
            return x

    return -1

def crop_image_at_divider(filepath: str, output_path: str = None, tolerance: int = 240) -> None:
    """
    Crop image at vertical white divider.

    Args:
        filepath: Path to input image
        output_path: Path to save cropped image (default: overwrite original)
        tolerance: Brightness threshold for white detection
    """
    if output_path is None:
        output_path = filepath

    img = Image.open(filepath)
    original_size = img.size

    # Find the vertical divider
    divider_x = find_vertical_divider(img, tolerance=tolerance)

    if divider_x == -1:
        print(f"No vertical divider found in {os.path.basename(filepath)}")
        return

    # Crop everything before the divider
    cropped = img.crop((0, 0, divider_x, img.size[1]))
    new_size = cropped.size

    cropped.save(output_path)

    width_diff = original_size[0] - new_size[0]
    print(f"Cropped {os.path.basename(filepath)}")
    print(f"  {original_size[0]}x{original_size[1]} -> {new_size[0]}x{new_size[1]} (-{width_diff}w)")
    print(f"  Divider found at x={divider_x}")

if __name__ == "__main__":
    # Process airbnb-1-2.png specifically
    filepath = os.path.join(IMG_DIR, "airbnb-1-2.png")

    if os.path.exists(filepath):
        crop_image_at_divider(filepath, tolerance=240)
        print("\nProcessing complete!")
    else:
        print(f"File not found: {filepath}")
