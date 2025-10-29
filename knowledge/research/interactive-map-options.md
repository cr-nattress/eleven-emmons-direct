# Free Interactive Map Options Research

**Research Date**: October 20, 2025  
**Use Case**: Vacation rental property location map for 11 Emmons Road  
**Requirements**: Show proximity to ski lifts, property location, custom markers, mobile-friendly

---

## Executive Summary

**Best Free Options for Your Site:**

1. **🏆 React-Leaflet + OpenStreetMap** - RECOMMENDED
   - 100% Free, no limits
   - Lightweight (42KB)
   - Great for showing proximity/distance
   - Perfect for your use case

2. **Google Maps Platform** - Good alternative
   - $200/month free credit (now $3,250 in 2025)
   - Familiar to users
   - Requires API key setup

3. **Mapbox** - Premium option
   - 50,000 map loads/month free
   - Beautiful styling
   - Requires API key

---

## Detailed Comparison

### Option 1: React-Leaflet + OpenStreetMap ⭐ RECOMMENDED

**Cost**: 100% FREE (no limits, no API keys needed)

#### Pros

- ✅ **Truly free**: No usage limits, no API keys, no credit card
- ✅ **Lightweight**: Only 42KB, fast load times
- ✅ **Full control**: Customize everything
- ✅ **Open source**: Community-driven, well-maintained
- ✅ **Perfect for your use case**: Show property pin, measure distance to lifts
- ✅ **Mobile-friendly**: Responsive by default
- ✅ **Official React support**: react-leaflet is actively maintained
- ✅ **Works with Next.js 14**: Compatible with App Router
- ✅ **No vendor lock-in**: Can switch map tiles anytime

#### Cons

- ❌ No 3D views (but you don't need this)
- ❌ Fewer built-in features than Google Maps
- ❌ Requires more custom code for advanced features

#### Technical Details

- **Library**: `react-leaflet` (267k weekly downloads)
- **Map Data**: OpenStreetMap (free, community-maintained)
- **Rendering**: HTML-based (DOM elements)
- **Bundle Size**: ~42KB minified
- **TypeScript**: Fully supported with `@types/leaflet`

#### Installation

```bash
npm install react-leaflet leaflet
npm install -D @types/leaflet  # TypeScript types
```

#### Basic Implementation (Next.js 14)

```tsx
'use client'

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

export default function PropertyMap() {
  const propertyLocation = [38.9005, -106.9641] // 11 Emmons Road
  const skiLiftLocation = [38.9003, -106.9639] // 50 feet away

  return (
    <MapContainer
      center={propertyLocation}
      zoom={17}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Property marker */}
      <Marker position={propertyLocation}>
        <Popup>
          <strong>11 Emmons Road</strong>
          <br />
          Your Ski-In/Ski-Out Rental
        </Popup>
      </Marker>

      {/* Ski lift marker */}
      <Marker position={skiLiftLocation}>
        <Popup>
          <strong>Red Lady Express Lift</strong>
          <br />
          50 feet away
        </Popup>
      </Marker>

      {/* Circle showing 50-foot radius */}
      <Circle
        center={propertyLocation}
        radius={15} // ~50 feet
        pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }}
      />
    </MapContainer>
  )
}
```

#### Map Tile Providers (All Free)

1. **OpenStreetMap Standard**: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
2. **OpenTopoMap** (shows terrain): `https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png`
3. **Stamen Terrain**: Better for outdoor/ski areas
4. **CartoDB Positron**: Clean, minimal style

#### Best for Your Use Case

- Show property location with custom marker
- Show ski lift location
- Draw line/arrow between property and lift
- Display "50 feet" measurement
- Add custom popup with property details
- Style to match your website design

---

### Option 2: Google Maps Platform

**Cost**: $200/month free (expanding to $3,250/month in March 2025)

#### Pros

- ✅ **Generous free tier**: $3,250/month = ~28,500 map loads
- ✅ **Familiar**: Users know Google Maps interface
- ✅ **Rich data**: Street View, traffic, directions
- ✅ **Accurate**: Best data quality
- ✅ **Unlimited embed maps**: Static embeds are free forever

#### Cons

- ❌ Requires API key and credit card
- ❌ Can get expensive if you exceed limits
- ❌ Google tracks usage
- ❌ Terms of service restrictions
- ❌ Larger bundle size

#### Pricing Breakdown (2025)

- **Free tier**: Up to $3,250/month worth of usage
- **Maps Embed API**: UNLIMITED FREE (no API key needed for iframe embed)
- **Maps JavaScript API**:
  - Essentials: 10,000 free loads/month
  - After that: $7 per 1,000 loads
- **Street View**: 28,000 free loads/month

#### Simple Free Option: Embed Map (No Code)

```html
<!-- Completely free, no API key needed -->
<iframe
  width="100%"
  height="400"
  frameborder="0"
  style="border:0"
  src="https://www.google.com/maps/embed/v1/place?q=11+Emmons+Road,+Mt+Crested+Butte,+CO&key=YOUR_API_KEY"
  allowfullscreen
>
</iframe>
```

#### Library Options

1. **@react-google-maps/api** (official)
2. **google-map-react** (230k downloads/week)

#### Best for Your Use Case

- If you want familiar Google Maps interface
- If you need Street View feature
- If you're okay with API key setup
- If traffic is low (<10k map loads/month)

---

### Option 3: Mapbox

**Cost**: 50,000 map loads/month free

#### Pros

- ✅ **Beautiful maps**: Best-looking default styles
- ✅ **Generous free tier**: 50k loads = plenty for small sites
- ✅ **Great performance**: WebGL-powered
- ✅ **Custom styling**: Full design control
- ✅ **3D terrain**: Show mountain topography

#### Cons

- ❌ Requires API key and account
- ❌ After free tier: $5 per 100k loads
- ❌ More complex setup than Leaflet
- ❌ Larger bundle size (212KB)

#### Pricing

- **Free tier**: 50,000 map loads/month
- **Next tier**: $5 for 100,000 loads
- **Geocoding**: 100,000 free requests/month

#### Library

- **react-map-gl** (Uber-maintained, official)

#### Best for Your Use Case

- If you want the most beautiful maps
- If you need custom map styling
- If 3D terrain visualization is important
- If you're willing to manage API keys

---

## Feature Comparison Matrix

| Feature                | Leaflet + OSM | Google Maps        | Mapbox            |
| ---------------------- | ------------- | ------------------ | ----------------- |
| **Cost**               | 100% Free     | $200-3,250/mo free | 50k loads/mo free |
| **API Key Required**   | ❌ No         | ✅ Yes             | ✅ Yes            |
| **Bundle Size**        | 42KB          | ~200KB             | 212KB             |
| **Setup Complexity**   | Easy          | Medium             | Medium            |
| **Customization**      | Full control  | Limited            | Full control      |
| **Mobile Performance** | Excellent     | Good               | Excellent         |
| **Custom Markers**     | ✅ Easy       | ✅ Easy            | ✅ Easy           |
| **Measure Distance**   | ✅ Easy       | ✅ Built-in        | ✅ Built-in       |
| **Street View**        | ❌ No         | ✅ Yes             | ❌ No             |
| **3D Terrain**         | ❌ No         | ❌ No              | ✅ Yes            |
| **Usage Limits**       | None          | 28.5k loads/mo     | 50k loads/mo      |
| **Next.js 14 Support** | ✅ Great      | ✅ Good            | ✅ Good           |
| **TypeScript Support** | ✅ Full       | ✅ Full            | ✅ Full           |

---

## Recommendation for 11 Emmons Road

### 🏆 Use React-Leaflet + OpenStreetMap

**Why:**

1. **Zero cost, zero hassle**: No API keys, no limits, no surprise bills
2. **Perfect for your needs**: Simple location map with custom markers
3. **Lightweight**: Fast loading = better SEO and user experience
4. **Easy to implement**: 30 minutes to get it working
5. **Show what matters**: Property pin + ski lift pin + distance visualization
6. **Full control**: Customize to match your brand

### What You Can Build

**Basic Map (Week 1)**

- Property marker with "11 Emmons Road" label
- Ski lift marker with "Red Lady Express" label
- Circle showing 50-foot radius
- Popup with booking CTA

**Enhanced Map (Week 2+)**

- Line connecting property to lift with distance label
- Custom icons (house for property, ski lift icon)
- Multiple points of interest (parking, ski school, restaurants)
- Mobile-optimized touch controls
- Photo thumbnails in popups

**Advanced Features (Optional)**

- Interactive: Click markers for details
- Animated: Line drawing animation on page load
- Measurement tool: Let users measure distances
- Layer toggle: Show/hide different amenities

---

## Implementation Plan

### Phase 1: Basic Map (1-2 hours)

1. Install react-leaflet and leaflet
2. Create `<PropertyMap>` component
3. Add basic map with property marker
4. Style to match website
5. Deploy

### Phase 2: Enhanced Markers (1 hour)

1. Add ski lift marker
2. Add distance circle/line
3. Create custom popups
4. Add property photos

### Phase 3: Polish (1 hour)

1. Custom icons (house, ski lift)
2. Responsive sizing
3. Loading states
4. Accessibility

**Total Time**: 3-4 hours to fully implement

---

## Code Example: Complete Implementation

```tsx
// app/components/PropertyMap.tsx
'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Leaflet must be loaded client-side only in Next.js
const DynamicMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />
  ),
})

export default function PropertyMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Location</h2>
        <p className="text-gray-600 mb-8">
          Just 50 feet from the Red Lady Express lift - true ski-in/ski-out
          convenience
        </p>
        <Suspense fallback={<div>Loading map...</div>}>
          <DynamicMap />
        </Suspense>
      </div>
    </section>
  )
}

// app/components/LeafletMap.tsx
;('use client')

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Circle,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

export default function LeafletMap() {
  const property = [38.9005, -106.9641] as [number, number]
  const skiLift = [38.9003, -106.9639] as [number, number]

  return (
    <MapContainer
      center={property}
      zoom={17}
      className="h-[400px] w-full rounded-lg shadow-lg z-0"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Property marker */}
      <Marker position={property}>
        <Popup className="custom-popup">
          <div className="p-2">
            <strong className="text-lg">11 Emmons Road</strong>
            <p className="text-sm text-gray-600 mt-1">
              Your Ski-In/Ski-Out Luxury Rental
            </p>
            <a
              href="#booking"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded text-sm"
            >
              Book Now
            </a>
          </div>
        </Popup>
      </Marker>

      {/* Ski lift marker */}
      <Marker position={skiLift}>
        <Popup>
          <div className="p-2">
            <strong>Red Lady Express Lift</strong>
            <p className="text-sm text-gray-600">Just 50 feet away</p>
          </div>
        </Popup>
      </Marker>

      {/* Line connecting them */}
      <Polyline
        positions={[property, skiLift]}
        pathOptions={{ color: 'blue', weight: 3, dashArray: '10, 10' }}
      />

      {/* Circle showing proximity */}
      <Circle
        center={property}
        radius={15}
        pathOptions={{
          color: 'green',
          fillColor: 'green',
          fillOpacity: 0.1,
          weight: 2,
        }}
      />
    </MapContainer>
  )
}
```

---

## Additional Resources

### Leaflet Documentation

- Official: https://leafletjs.com/
- React-Leaflet: https://react-leaflet.js.org/
- TypeScript types: https://www.npmjs.com/package/@types/leaflet

### Free Map Tile Providers

- OpenStreetMap: https://www.openstreetmap.org/
- Stamen Maps: http://maps.stamen.com/
- CartoDB: https://carto.com/basemaps/

### Tutorials

- React-Leaflet + Next.js 14: https://react-leaflet.js.org/docs/start-installation
- Custom markers: https://react-leaflet.js.org/docs/example-custom-icons
- Measuring distance: https://leafletjs.com/examples/extending/extending-3-controls.html

---

## Next Steps

1. **Week 1**: Implement basic Leaflet map
   - Install dependencies
   - Create PropertyMap component
   - Add to location page or About section
   - Test on mobile

2. **Week 2**: Enhance with custom markers
   - Add ski lift icon
   - Add distance visualization
   - Create branded popups

3. **Week 3**: Polish and optimize
   - Improve mobile UX
   - Add loading states
   - Optimize bundle size
   - Add to SEO pillar page

---

**Status**: READY TO IMPLEMENT  
**Difficulty**: Easy  
**Time Estimate**: 3-4 hours total  
**Cost**: $0

**Recommendation**: Start with React-Leaflet + OpenStreetMap. It's free, fast, and perfect for your use case.
