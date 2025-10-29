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

interface PropertyMapProps {
  showHeading?: boolean
  showInstructions?: boolean
}

export default function PropertyMap({
  showHeading = false,
  showInstructions = true,
}: PropertyMapProps) {
  return (
    <div>
      {showHeading && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Our Location
          </h3>
          <p className="text-gray-600">
            11 Emmons Road, Mt. Crested Butte - Just 50 feet from the ski lifts
          </p>
        </div>
      )}
      <DynamicMap />
      {showInstructions && (
        <div className="mt-4 text-sm text-gray-500">
          <p>
            Click the marker for more details. Use two fingers to pan the map on
            mobile devices.
          </p>
        </div>
      )}
    </div>
  )
}
