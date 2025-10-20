'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations/variants'

const amenitiesList = [
  {
    icon: '🏔️',
    title: 'Mountain Views',
    description: 'Stunning views of the surrounding peaks',
  },
  {
    icon: '🔥',
    title: 'Fireplace',
    description: 'Cozy fireplace for cold mountain nights',
  },
  {
    icon: '🧑‍🍳',
    title: 'Full Kitchen',
    description: 'Complete kitchen with modern appliances',
  },
  {
    icon: '📶',
    title: 'High-Speed WiFi',
    description: 'Stay connected with fast internet',
  },
  {
    icon: '🅿️',
    title: 'Free Parking',
    description: 'Dedicated parking space included',
  },
  {
    icon: '🧺',
    title: 'Washer/Dryer',
    description: 'In-unit laundry for your convenience',
  },
  {
    icon: '❄️',
    title: 'Ski-In/Out',
    description: 'Easy access to slopes and trails',
  },
  {
    icon: '🛁',
    title: 'Hot Tub',
    description: 'Relax after a day on the mountain',
  },
]

export default function AmenitiesContent() {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: gridRef, controls: gridControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      <motion.div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={headerControls}
        variants={slideUpVariants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Amenities & Features
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need for a comfortable mountain getaway
        </p>
      </motion.div>

      {/* Icon grid for common amenities */}
      <motion.div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={gridControls}
        variants={staggerContainerVariants}
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {amenitiesList.map((amenity, index) => (
          <motion.div
            key={index}
            variants={staggerItemVariants}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <motion.div
              className="mb-4 text-4xl"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {amenity.icon}
            </motion.div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {amenity.title}
            </h3>
            <p className="text-sm text-gray-600">{amenity.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
