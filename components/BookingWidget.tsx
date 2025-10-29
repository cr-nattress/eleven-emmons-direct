'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import {
  slideUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/animations/variants'
import { logger } from '@/lib/logger'
import { siteConfig } from '@/config/site'
import { env } from '@/lib/env'
import { useFeatureFlag } from '@/lib/features'

export default function BookingWidget() {
  const showHospitableWidget = useFeatureFlag('hospitable_widget')

  const { ref: headerRef, controls: headerControls } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: widgetRef, controls: widgetControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: cardsRef, controls: cardsControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    // Hospitable widget integration controlled by feature flag
    // Feature flag respects environment (enabled in dev, disabled in prod)
    const widgetId = env.HOSPITABLE_WIDGET_ID

    if (showHospitableWidget && widgetId) {
      logger.info('Hospitable Widget enabled with ID:', widgetId)
      // Widget integration can be added here when needed
      // For now, fallback UI with contact information is sufficient
    } else if (showHospitableWidget && !widgetId) {
      logger.warn(
        'Hospitable Widget enabled but NEXT_PUBLIC_HOSPITABLE_WIDGET_ID not configured'
      )
    } else {
      logger.info('Using fallback booking UI (Hospitable widget disabled)')
    }
  }, [showHospitableWidget])

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={headerControls}
          variants={slideUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book Your Stay
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check availability and reserve your dates
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Placeholder for Hospitable widget */}
          <motion.div
            ref={widgetRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={widgetControls}
            variants={slideUpVariants}
            className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center"
          >
            <div className="mx-auto max-w-md">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Hospitable Booking Widget
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                The booking widget will appear here once configured.
              </p>
              <p className="mt-4 text-xs text-gray-500">
                Add your NEXT_PUBLIC_HOSPITABLE_WIDGET_ID to .env.local
              </p>
            </div>
          </motion.div>

          {/* Contact information */}
          <motion.div
            ref={cardsRef as React.RefObject<HTMLDivElement>}
            initial="hidden"
            animate={cardsControls}
            variants={staggerContainerVariants}
            className="mt-12 grid gap-6 sm:grid-cols-2"
          >
            <motion.div
              variants={staggerItemVariants}
              className="rounded-lg bg-gray-50 p-6 text-center"
            >
              <svg
                className="mx-auto h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="mt-4 font-semibold text-gray-900">Email Us</h3>
              <p className="mt-2 text-sm text-gray-600">
                Questions about your booking?
              </p>
              <motion.a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 inline-block text-sm font-medium text-primary hover:text-primary-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {siteConfig.contact.email}
              </motion.a>
            </motion.div>

            <motion.div
              variants={staggerItemVariants}
              className="rounded-lg bg-gray-50 p-6 text-center"
            >
              <svg
                className="mx-auto h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h3 className="mt-4 font-semibold text-gray-900">Call Us</h3>
              <p className="mt-2 text-sm text-gray-600">
                Speak with property management
              </p>
              <motion.a
                href={`tel:${siteConfig.contact.phone.tel}`}
                className="mt-2 inline-block text-sm font-medium text-primary hover:text-primary-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {siteConfig.contact.phone.display}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
