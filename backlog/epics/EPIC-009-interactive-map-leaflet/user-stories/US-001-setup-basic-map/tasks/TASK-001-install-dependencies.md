# TASK-001: Install Dependencies for React-Leaflet

**Status**: To Do  
**Priority**: High  
**Estimated Time**: 10 minutes

---

## Task Description

Install React-Leaflet, Leaflet, and TypeScript type definitions required for the interactive map implementation.

## Agent Prompt

```
Install the dependencies needed for React-Leaflet map in Next.js 14 project.

Context:
- Project uses Next.js 14 with App Router
- Project uses TypeScript
- Need React-Leaflet for interactive maps
- Need Leaflet core library
- Need TypeScript types for Leaflet

Task:
1. Navigate to project root directory
2. Install react-leaflet package
3. Install leaflet package (peer dependency)
4. Install TypeScript types for Leaflet
5. Verify installation by checking package.json
6. Ensure no version conflicts

Requirements:
- Use npm (not yarn) to match existing project
- Install exact versions compatible with React 18 and Next.js 14
- Add to dependencies (not devDependencies for runtime packages)
- TypeScript types should go to devDependencies

Verification:
- All packages appear in package.json
- No error messages during installation
- node_modules contains the packages
```

## Implementation Steps

1. **Navigate to project directory**

   ```bash
   cd c:\Users\RED\OneDrive\Documents\github\eleven-emmons
   ```

2. **Install React-Leaflet and Leaflet**

   ```bash
   npm install react-leaflet leaflet
   ```

3. **Install TypeScript types**

   ```bash
   npm install --save-dev @types/leaflet
   ```

4. **Verify installation**
   ```bash
   npm list react-leaflet leaflet @types/leaflet
   ```

## Verification Steps

1. **Check package.json**
   - Open `package.json`
   - Verify `react-leaflet` in dependencies
   - Verify `leaflet` in dependencies
   - Verify `@types/leaflet` in devDependencies

2. **Check versions**
   Expected versions (as of Oct 2025):
   - `react-leaflet`: ^4.2.1 or higher
   - `leaflet`: ^1.9.4 or higher
   - `@types/leaflet`: ^1.9.8 or higher

3. **Check node_modules**

   ```bash
   ls node_modules/react-leaflet
   ls node_modules/leaflet
   ls node_modules/@types/leaflet
   ```

   - All directories should exist

4. **Test import (optional)**
   Create a test file to verify:
   ```typescript
   // test.ts
   import L from 'leaflet'
   import { MapContainer } from 'react-leaflet'
   console.log('Imports work!')
   ```

## Expected Output

```bash
# After npm install react-leaflet leaflet
+ react-leaflet@4.2.1
+ leaflet@1.9.4
added 2 packages

# After npm install --save-dev @types/leaflet
+ @types/leaflet@1.9.8
added 1 package

# package.json should show:
"dependencies": {
  "react-leaflet": "^4.2.1",
  "leaflet": "^1.9.4",
  ...
},
"devDependencies": {
  "@types/leaflet": "^1.9.8",
  ...
}
```

## Troubleshooting

**Problem**: Peer dependency warnings

- **Solution**: Safe to ignore if React 18 is installed

**Problem**: Version conflicts

- **Solution**: Use `npm install --legacy-peer-deps` flag

**Problem**: Installation fails

- **Solution**: Clear npm cache with `npm cache clean --force` and retry

**Problem**: TypeScript can't find types

- **Solution**: Restart TypeScript server in VS Code (Cmd/Ctrl + Shift + P → "Restart TypeScript Server")

## Rollback Plan

If issues arise, uninstall packages:

```bash
npm uninstall react-leaflet leaflet @types/leaflet
```

## Notes

- **React-Leaflet Version**: v4.x is compatible with Leaflet 1.9.x and React 18
- **No API Keys**: Leaflet and OpenStreetMap are completely free
- **Bundle Size**: Leaflet adds ~42KB minified (very lightweight)
- **Tree Shaking**: Only imports you use will be bundled

## Package Details

### react-leaflet

- **Purpose**: React components wrapper for Leaflet
- **Size**: ~20KB
- **Weekly Downloads**: 267k+
- **Maintained**: Yes (active development)

### leaflet

- **Purpose**: Core mapping library
- **Size**: ~42KB minified
- **Weekly Downloads**: 2M+
- **License**: BSD-2-Clause (open source)

### @types/leaflet

- **Purpose**: TypeScript type definitions
- **Size**: Types only (no runtime impact)
- **Maintained**: Yes (DefinitelyTyped)

## Related Tasks

- TASK-002: Setup Marker Icons
- TASK-003: Create Map Component

---

**Created**: 2025-10-20  
**Estimated Effort**: 10 minutes  
**Actual Effort**: _[To be filled after completion]_
