'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroContent from './HeroContent'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      {/* Hero Image - TODO: Replace with actual property image */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-gradient-to-b from-gray-900 to-gray-600">
          {/* Placeholder for hero image */}
          <div className="flex h-full items-center justify-center text-white">
            <p className="text-sm opacity-50">Hero Image Placeholder</p>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <HeroContent />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-white opacity-75 transition-opacity hover:opacity-100"
        >
          <span className="mb-2 text-sm">Scroll to explore</span>
          <svg
            className="h-6 w-6 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}
