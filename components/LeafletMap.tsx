'use client'

import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icons in Next.js
// This is required because webpack breaks the default icon paths
type IconDefault = typeof L.Icon.Default.prototype
delete (L.Icon.Default.prototype as IconDefault & { _getIconUrl?: unknown })._getIconUrl
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
              href="https://airbnb.com/h/elevenemmons"
              target="_blank"
              rel="noopener noreferrer"
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
