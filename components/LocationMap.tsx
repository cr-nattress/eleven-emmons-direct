'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icons in Next.js
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: ${color};
        width: 24px;
        height: 24px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          top: 6px;
          left: 6px;
        "></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  })
}

export default function LocationMap() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="h-[500px] w-full animate-pulse rounded-lg bg-gray-200">
        <div className="flex h-full items-center justify-center text-gray-500">
          Loading map...
        </div>
      </div>
    )
  }

  // Coordinates
  // 11 Emmons Road: approximate coordinates for Crested Butte Mountain Village
  const emmonsRoadCoords: [number, number] = [38.9003, -106.9631]

  // Red Lady Express Lift (base): approximate coordinates
  const redLadyLiftCoords: [number, number] = [38.9006, -106.9628]

  // Center point between the two for map centering
  const centerCoords: [number, number] = [38.9005, -106.96295]

  // Custom icons
  const propertyIcon = createCustomIcon('#0066cc') // Blue for property
  const liftIcon = createCustomIcon('#cc0000') // Red for lift

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
      <MapContainer
        center={centerCoords}
        zoom={18}
        scrollWheelZoom={false}
        className="h-full w-full"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 11 Emmons Road Marker */}
        <Marker position={emmonsRoadCoords} icon={propertyIcon}>
          <Popup>
            <div className="text-center">
              <strong className="text-base">11 Emmons Road</strong>
              <p className="mt-1 text-sm">Your Ski-In/Ski-Out Rental</p>
              <p className="mt-1 text-xs text-gray-600">Unit 324</p>
            </div>
          </Popup>
        </Marker>

        {/* Red Lady Express Lift Marker */}
        <Marker position={redLadyLiftCoords} icon={liftIcon}>
          <Popup>
            <div className="text-center">
              <strong className="text-base">Red Lady Express</strong>
              <p className="mt-1 text-sm">High-Speed Quad Chairlift</p>
              <p className="mt-1 text-xs text-gray-600">Lift Base</p>
            </div>
          </Popup>
        </Marker>

        {/* Line connecting property to lift */}
        <Polyline
          positions={[emmonsRoadCoords, redLadyLiftCoords]}
          pathOptions={{
            color: '#10b981',
            weight: 3,
            opacity: 0.7,
            dashArray: '10, 10',
          }}
        />

        {/* Circle showing 50-foot radius around property */}
        <Circle
          center={emmonsRoadCoords}
          radius={15.24} // 50 feet in meters
          pathOptions={{
            color: '#10b981',
            fillColor: '#10b981',
            fillOpacity: 0.1,
            weight: 2,
            dashArray: '5, 5',
          }}
        />
      </MapContainer>

      {/* Distance indicator overlay */}
      <div className="absolute bottom-4 left-4 z-[1000] rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-sm">
        <div className="text-sm font-semibold text-gray-900">Distance to Lift</div>
        <div className="mt-1 text-2xl font-bold text-primary">50 feet</div>
        <div className="mt-1 text-xs text-gray-600">~15 seconds walk</div>
      </div>

      {/* Legend */}
      <div className="absolute right-4 top-4 z-[1000] rounded-lg bg-white/95 p-3 shadow-lg backdrop-blur-sm">
        <div className="text-xs font-semibold text-gray-900">Legend</div>
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#0066cc] border-2 border-white shadow"></div>
            <span className="text-xs text-gray-700">11 Emmons Road</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#cc0000] border-2 border-white shadow"></div>
            <span className="text-xs text-gray-700">Red Lady Express</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-[#10b981] opacity-70" style={{ borderTop: '2px dashed #10b981' }}></div>
            <span className="text-xs text-gray-700">Walking path</span>
          </div>
        </div>
      </div>
    </div>
  )
}
