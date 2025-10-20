'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations/variants'
import PropertyMap from '@/components/PropertyMap'

const gettingHere = [
  {
    title: 'Gunnison-Crested Butte Airport:',
    distance: '30 miles (45 min drive)',
  },
  {
    title: 'Denver International Airport:',
    distance: '230 miles (4 hours)',
  },
  {
    title: 'Mountain Express:',
    distance: 'Shuttle service available from airports',
  },
]

const attractions = {
  winter: [
    'Crested Butte Mountain Resort',
    'Cross-country skiing',
    'Snowshoeing trails',
    'Ice skating',
  ],
  summer: ['Mountain biking', 'Hiking trails', 'Wildflower viewing', 'Fly fishing'],
}

interface LocationContentProps {
  children: ReactNode
}

export default function LocationContent({ children }: LocationContentProps) {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: mapRef, controls: mapControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: directionsRef, controls: directionsControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: proseRef, controls: proseControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: attractionsRef, controls: attractionsControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      {/* Header */}
      <motion.div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={headerControls}
        variants={slideUpVariants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Location & Area
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover Crested Butte - Colorado's Last Great Ski Town
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column: Map and Getting Here */}
        <div className="order-2 lg:order-1">
          {/* Map */}
          <motion.div
            ref={mapRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={mapControls}
            variants={slideUpVariants}
            className="overflow-hidden rounded-lg"
          >
            <PropertyMap />
          </motion.div>

          {/* Getting Here */}
          <motion.div
            ref={directionsRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={directionsControls}
            variants={slideUpVariants}
            className="mt-6 rounded-lg bg-white p-6 shadow-sm"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Getting Here</h3>
            <motion.ul
              variants={staggerContainerVariants}
              initial="hidden"
              animate={directionsControls}
              className="space-y-3 text-sm text-gray-600"
            >
              {gettingHere.map((item, index) => (
                <motion.li key={index} variants={staggerItemVariants} className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span>
                    <strong>{item.title}</strong> {item.distance}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Right Column: MDX Content and Nearby Attractions */}
        <div className="order-1 lg:order-2">
          {/* MDX Prose Content */}
          <motion.div
            ref={proseRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={proseControls}
            variants={slideUpVariants}
            className="prose prose-lg max-w-none"
          >
            {children}
          </motion.div>

          {/* Nearby Attractions */}
          <motion.div
            ref={attractionsRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={attractionsControls}
            variants={slideUpVariants}
            className="mt-8 rounded-lg bg-white p-6 shadow-sm"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Nearby Attractions</h3>
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate={attractionsControls}
              className="grid gap-4 sm:grid-cols-2"
            >
              <motion.div variants={staggerItemVariants}>
                <h4 className="font-medium text-gray-900">Winter</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  {attractions.winter.map((activity, index) => (
                    <li key={index}>• {activity}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={staggerItemVariants}>
                <h4 className="font-medium text-gray-900">Summer</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  {attractions.summer.map((activity, index) => (
                    <li key={index}>• {activity}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
