# TASK-002: Setup Marker Icons for Leaflet

**Status**: To Do  
**Priority**: High  
**Estimated Time**: 15 minutes

---

## Task Description

Download and configure default Leaflet marker icons to fix the common issue where markers don't display in Next.js projects due to webpack configuration.

## Agent Prompt

```
Setup Leaflet marker icons for Next.js 14 project to fix marker display issues.

Context:
- Next.js webpack configuration breaks Leaflet's default marker icon paths
- Need to manually copy marker images to public folder
- Need to configure Leaflet to use correct paths
- This is a known issue with all Next.js + Leaflet integrations

Task:
1. Create /public/leaflet/ directory
2. Download marker icon images from Leaflet repository
3. Place images in public/leaflet/ folder
4. Verify image files are accessible

Required Files:
- marker-icon.png (default marker)
- marker-icon-2x.png (retina display marker)
- marker-shadow.png (marker shadow)

Alternative:
- Copy from node_modules/leaflet/dist/images/ if available

Verification:
- Images exist in /public/leaflet/
- Images are accessible via browser at /leaflet/marker-icon.png
- File sizes are reasonable (< 10KB each)
```

## Implementation Steps

### Option 1: Copy from node_modules (Easiest)

1. **Create public directory**

   ```bash
   mkdir public/leaflet
   ```

2. **Copy marker images**

   ```bash
   # Windows (PowerShell)
   Copy-Item "node_modules/leaflet/dist/images/*" -Destination "public/leaflet/" -Force

   # Windows (Command Prompt)
   xcopy /Y "node_modules\leaflet\dist\images\*" "public\leaflet\"

   # macOS/Linux
   cp node_modules/leaflet/dist/images/* public/leaflet/
   ```

3. **Verify files copied**
   ```bash
   ls public/leaflet/
   ```
   Should show:
   - marker-icon.png
   - marker-icon-2x.png
   - marker-shadow.png
   - (possibly other files - that's okay)

### Option 2: Download directly (If node_modules method doesn't work)

1. **Create directory**

   ```bash
   mkdir public/leaflet
   ```

2. **Download from Leaflet GitHub**

   Visit these URLs and save to `public/leaflet/`:
   - https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png
   - https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png
   - https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png

   Or use wget/curl:

   ```bash
   cd public/leaflet
   curl -O https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png
   curl -O https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png
   curl -O https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png
   ```

## Verification Steps

1. **Check files exist**

   ```bash
   ls -la public/leaflet/
   ```

   Expected output:

   ```
   marker-icon.png      (1-3 KB)
   marker-icon-2x.png   (2-5 KB)
   marker-shadow.png    (600-800 bytes)
   ```

2. **Verify in browser** (after starting dev server)
   - Start dev server: `npm run dev`
   - Visit: http://localhost:3000/leaflet/marker-icon.png
   - Should see the marker icon image
   - Visit: http://localhost:3000/leaflet/marker-shadow.png
   - Should see the shadow image

3. **Check file permissions**
   - Files should be readable
   - No special permissions needed (default is fine)

## Expected File Structure

```
public/
└── leaflet/
    ├── marker-icon.png          (1.5 KB - blue marker icon)
    ├── marker-icon-2x.png       (2.5 KB - high-res blue marker)
    └── marker-shadow.png        (618 bytes - marker shadow)
```

## Image Details

### marker-icon.png

- **Size**: ~1.5 KB
- **Dimensions**: 25x41 pixels
- **Description**: Default blue marker icon

### marker-icon-2x.png

- **Size**: ~2.5 KB
- **Dimensions**: 50x82 pixels
- **Description**: Retina display version (2x resolution)

### marker-shadow.png

- **Size**: ~618 bytes
- **Dimensions**: 41x41 pixels
- **Description**: Shadow that appears under marker

## Troubleshooting

**Problem**: Files not found in node_modules

- **Solution**: Make sure Leaflet is installed: `npm install leaflet`
- **Alternative**: Use Option 2 (download directly)

**Problem**: "Access denied" or permission errors

- **Solution**: Run command prompt/terminal as administrator
- **Alternative**: Manually copy files using file explorer

**Problem**: Images don't show in browser

- **Solution**: Restart dev server (`npm run dev`)
- **Check**: Make sure files are in `/public/` not `/src/public/`

**Problem**: Wrong directory structure

- **Correct**: `/public/leaflet/marker-icon.png`
- **Wrong**: `/public/images/leaflet/marker-icon.png`

## Next Steps

After completing this task:

1. Images will be accessible at `/leaflet/marker-icon.png`
2. Next task will configure Leaflet to use these paths
3. Component will be created that uses these images

## Notes

- **Why this is needed**: Next.js uses webpack which changes how static assets are resolved, breaking Leaflet's default paths
- **One-time setup**: Once copied, these images work for all maps
- **Custom icons**: Later you can add custom icons to this folder
- **Git**: Commit these files - they're part of your project

## Related Tasks

- TASK-001: Install Dependencies (prerequisite)
- TASK-003: Create Map Component (uses these icons)

---

**Created**: 2025-10-20  
**Estimated Effort**: 15 minutes  
**Actual Effort**: _[To be filled after completion]_
