# TASK-003: Create Basic Map Component

**Status**: To Do  
**Priority**: High  
**Estimated Time**: 45 minutes

---

## Task Description

Create a React-Leaflet map component that displays an interactive map with a property marker, properly configured for Next.js 14 with SSR handling.

## Agent Prompt

```
Create an interactive map component using React-Leaflet for a Next.js 14 project.

Context:
- Next.js 14 with App Router
- Property location: 11 Emmons Road, Mt. Crested Butte, CO
- Need to show property location with a marker
- Leaflet requires client-side rendering only (SSR issues)
- Must fix default marker icon paths for Next.js

Task:
1. Create components/LeafletMap.tsx (actual map component)
2. Create components/PropertyMap.tsx (wrapper with dynamic import)
3. Configure Leaflet marker icons for Next.js
4. Set property coordinates
5. Add OpenStreetMap tile layer
6. Add property marker with popup
7. Style map to be responsive

Requirements:
- Use 'use client' directive for client-side components
- Use Next.js dynamic import with ssr: false
- Fix Leaflet icon paths to use /public/leaflet/
- Map should be 400px height on desktop
- Disable scroll wheel zoom (better UX)
- Add loading placeholder
- Center map on property location
- Zoom level: 17 (street level detail)

Verification:
- Map renders without errors
- Property marker displays correctly
- Popup works when clicking marker
- Mobile responsive
- No SSR errors
```

## Implementation Steps

### Step 1: Create LeafletMap.tsx (Actual Map Component)

Create file: `components/LeafletMap.tsx`

```typescript
'use client'

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icons in Next.js
// This is required because webpack breaks the default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

export default function LeafletMap() {
  // 11 Emmons Road coordinates (approximate - adjust as needed)
  const propertyLocation: [number, number] = [38.9005, -106.9641]

  return (
    <MapContainer
      center={propertyLocation}
      zoom={17}
      className="h-[400px] w-full rounded-lg shadow-lg z-0"
      scrollWheelZoom={false}
    >
      {/* OpenStreetMap tiles (free, no API key needed) */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Property marker */}
      <Marker position={propertyLocation}>
        <Popup className="custom-popup">
          <div className="p-2">
            <strong className="text-lg block mb-1">11 Emmons Road</strong>
            <p className="text-sm text-gray-600 mb-2">
              Your Ski-In/Ski-Out Luxury Rental
            </p>
            <a 
              href="#booking" 
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Book Now
            </a>
          </div>
        </Popup>
      </Marker>
      
      {/* Optional: Circle showing approximate 50-foot radius */}
      <Circle
        center={propertyLocation}
        radius={15} // ~50 feet in meters
        pathOptions={{ 
          color: 'blue', 
          fillColor: 'blue', 
          fillOpacity: 0.1,
          weight: 2,
          dashArray: '5, 5'
        }}
      />
    </MapContainer>
  )
}
```

### Step 2: Create PropertyMap.tsx (Wrapper with Dynamic Import)

Create file: `components/PropertyMap.tsx`

```typescript
'use client'

import dynamic from 'next/dynamic'

// Dynamically import LeafletMap with SSR disabled
// This prevents "window is not defined" errors during server-side rendering
const DynamicMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
})

export default function PropertyMap() {
  return (
    <section className="py-8 md:py-12">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Our Location
        </h3>
        <p className="text-gray-600">
          11 Emmons Road, Mt. Crested Butte - Just 50 feet from the ski lifts
        </p>
      </div>
      <DynamicMap />
      <div className="mt-4 text-sm text-gray-500">
        <p>
          Click the marker for more details. 
          Use two fingers to pan the map on mobile devices.
        </p>
      </div>
    </section>
  )
}
```

### Step 3: Import Leaflet CSS

You need to import Leaflet CSS. This is already done in `LeafletMap.tsx`:
```typescript
import 'leaflet/dist/leaflet.css'
```

However, if you get styling issues, you can also add it globally in `app/layout.tsx`:
```typescript
import 'leaflet/dist/leaflet.css'
```

## Verification Steps

1. **Check file structure**
   ```
   components/
   ├── LeafletMap.tsx
   └── PropertyMap.tsx
   ```

2. **Start dev server**
   ```bash
   npm run dev
   ```

3. **Test the component** (temporary test)
   
   Add to any page (e.g., `app/page.tsx`) temporarily:
   ```typescript
   import PropertyMap from '@/components/PropertyMap'
   
   export default function Home() {
     return (
       <main>
         <PropertyMap />
       </main>
     )
   }
   ```

4. **Verify in browser**
   - Visit http://localhost:3000
   - Map should load within 2 seconds
   - Should see OpenStreetMap tiles
   - Blue marker should be visible
   - Click marker to see popup
   - Popup should show property name and "Book Now" button

5. **Check console**
   - Open browser DevTools (F12)
   - Console should have NO errors
   - No "window is not defined" errors
   - No "Leaflet" related errors

6. **Test mobile responsiveness**
   - Open DevTools responsive mode
   - Test at 375px width (mobile)
   - Map should resize properly
   - Touch gestures should work

## Expected Output

### Desktop View
- Map renders at 400px height
- Full width of container
- Rounded corners with shadow
- Marker visible at center
- Click marker → popup appears
- Smooth interactions

### Mobile View
- Map maintains 400px height
- Full width of screen
- Touch pan/zoom works
- Marker and popup still functional

## Troubleshooting

**Problem**: "window is not defined" error
- **Cause**: SSR trying to render Leaflet
- **Solution**: Verify `ssr: false` in dynamic import
- **Check**: `'use client'` directive is present

**Problem**: Marker icons don't display
- **Cause**: Icon files not found
- **Solution**: Verify TASK-002 completed (marker files in /public/leaflet/)
- **Check**: Icon configuration in LeafletMap.tsx is correct

**Problem**: Map tiles don't load
- **Cause**: Network issue or incorrect tile URL
- **Solution**: Check internet connection
- **Alternative**: Try different tile provider (see below)

**Problem**: CSS styling issues
- **Cause**: Leaflet CSS not imported
- **Solution**: Ensure `import 'leaflet/dist/leaflet.css'` is present

**Problem**: Map container has no height
- **Cause**: Parent container issue
- **Solution**: Ensure `h-[400px]` class is on MapContainer

## Alternative Tile Providers

If OpenStreetMap tiles are slow or unavailable:

### Stamen Terrain (good for ski areas)
```typescript
<TileLayer
  attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>'
  url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
/>
```

### CartoDB Positron (clean, minimal)
```typescript
<TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
/>
```

## Coordinates Reference

Update these if needed:
- **11 Emmons Road**: [38.9005, -106.9641] (approximate)
- **Mt. Crested Butte Base**: [38.9000, -106.9650]

To find exact coordinates:
1. Go to Google Maps
2. Right-click on property location
3. Select coordinates to copy
4. Update in component

## Customization Options

### Zoom Levels
```typescript
zoom={15}  // Neighborhood view
zoom={16}  // Street view
zoom={17}  // Building view (current)
zoom={18}  // Very close
```

### Map Height
```typescript
className="h-[300px]..."  // Shorter
className="h-[400px]..."  // Current
className="h-[500px]..."  // Taller
```

### Disable Interactions
```typescript
<MapContainer
  dragging={false}        // Disable panning
  zoomControl={false}     // Hide zoom buttons
  scrollWheelZoom={false} // Current
  doubleClickZoom={false} // Disable double-click zoom
>
```

## Notes

- **Performance**: Leaflet is lightweight (~42KB), loads fast
- **Free Forever**: OpenStreetMap tiles are free with no limits
- **No API Keys**: No registration or API keys needed
- **Mobile-First**: Automatically works on touch devices
- **Accessibility**: Add aria-labels in next tasks if needed

## Next Steps

After completing this task:
1. Component is ready to use
2. Next task will add it to a page
3. Future enhancements: custom icons, multiple markers, distance lines

## Related Tasks

- TASK-001: Install Dependencies (prerequisite)
- TASK-002: Setup Marker Icons (prerequisite)
- TASK-004: Add to Location Page (next)

---

**Created**: 2025-10-20  
**Estimated Effort**: 45 minutes  
**Actual Effort**: _[To be filled after completion]_
