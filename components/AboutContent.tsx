'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import {
  slideUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/animations/variants'

const quickFacts = [
  {
    label: 'Location:',
    value: 'Unit 324, 11 Emmons Road, Crested Butte, CO 81224',
  },
  {
    label: 'Property Type:',
    value: 'Vacation Rental Condo',
  },
  {
    label: 'Bedrooms:',
    value: '1 Bedroom',
  },
  {
    label: 'Bathrooms:',
    value: '1 Bathroom',
  },
  {
    label: 'Sleeps:',
    value: 'Up to 3 guests',
  },
  {
    label: 'Rating:',
    value: '⭐ 4.98 (88 reviews)',
  },
]

const whyBookDirect = [
  'Best rates without booking fees',
  'Direct communication with property management',
  'Flexible check-in and special requests',
]

interface AboutContentProps {
  children: ReactNode
}

export default function AboutContent({ children }: AboutContentProps) {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: proseRef, controls: proseControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: factsRef, controls: factsControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: whyBookRef, controls: whyBookControls } = useScrollAnimation({
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
          Welcome to 11 Emmons Road
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Your home away from home in Crested Butte
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: MDX Content */}
        <motion.div
          ref={proseRef as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={proseControls}
          variants={slideUpVariants}
          className="prose prose-lg max-w-none"
        >
          {children}
        </motion.div>

        {/* Right Column: Cards */}
        <div className="space-y-6">
          {/* Quick Facts Card */}
          <motion.div
            ref={factsRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={factsControls}
            variants={slideUpVariants}
            className="rounded-lg bg-gray-50 p-6"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Quick Facts
            </h3>
            <motion.dl
              variants={staggerContainerVariants}
              initial="hidden"
              animate={factsControls}
              className="space-y-4"
            >
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  className="flex items-start"
                >
                  <dt className="font-medium text-gray-700 min-w-[120px]">
                    {fact.label}
                  </dt>
                  <dd className="text-gray-600">{fact.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Why Book Direct Card */}
          <motion.div
            ref={whyBookRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={whyBookControls}
            variants={slideUpVariants}
            className="rounded-lg bg-primary/5 p-6"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Why Book Direct?
            </h3>
            <motion.ul
              variants={staggerContainerVariants}
              initial="hidden"
              animate={whyBookControls}
              className="space-y-3"
            >
              {whyBookDirect.map((reason, index) => (
                <motion.li
                  key={index}
                  variants={staggerItemVariants}
                  className="flex items-start"
                >
                  <svg
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{reason}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </>
  )
}
