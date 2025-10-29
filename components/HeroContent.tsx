'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { slideUpVariants } from '@/lib/animations/variants'

export default function HeroContent() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0 }}
          className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Ski In Ski Out Luxury in Crested Butte
        </motion.h1>

        {/* Proximity Messaging */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.2 }}
          className="mb-4 text-xl text-gray-200 sm:text-2xl"
        >
          Just 50 Feet from Red Lady Express Lift
        </motion.p>

        {/* Trust Signals */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.25 }}
          className="mb-6 text-lg text-yellow-400 sm:text-xl"
        >
          4.98★ Rating • 88 Reviews • True Ski-In/Ski-Out
        </motion.p>

        {/* Address */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.3 }}
          className="mb-10 text-base text-gray-300 sm:text-lg"
        >
          11 Emmons Road, Unit 324 • Crested Butte, Colorado
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#booking"
              className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              Book Your Ski-In/Ski-Out Stay
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#about"
              className="rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
