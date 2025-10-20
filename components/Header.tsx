'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { slideDownVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations/variants'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Book Now', href: '#booking' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" className="text-xl font-bold text-primary">
              11 Emmons Road
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div
              initial={false}
              animate="visible"
              variants={staggerContainerVariants}
              className="ml-10 flex items-baseline space-x-4"
            >
              {navigation.map((item, index) => (
                <motion.div key={item.name} variants={staggerItemVariants}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      item.name === 'Book Now'
                        ? 'rounded-md bg-primary text-white hover:bg-primary-dark'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideDownVariants}
            className="md:hidden"
          >
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-1 px-2 pb-3 pt-2 sm:px-3"
            >
              {navigation.map((item) => (
                <motion.div key={item.name} variants={staggerItemVariants}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      item.name === 'Book Now'
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
