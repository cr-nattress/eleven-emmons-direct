'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import {
  slideUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/animations/variants'
import { siteConfig } from '@/config/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const { ref: footerRef, controls: footerControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: bottomRef, controls: bottomControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          ref={footerRef as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={footerControls}
          variants={staggerContainerVariants}
          className="grid gap-8 md:grid-cols-3"
        >
          {/* About */}
          <motion.div variants={staggerItemVariants}>
            <h3 className="mb-4 text-lg font-semibold text-white">
              11 Emmons Road
            </h3>
            <p className="text-sm">
              Your premier vacation rental in the heart of Crested Butte,
              Colorado. Book direct for the best rates and personalized service.
            </p>
            <div className="mt-4">
              <p className="text-sm">
                {siteConfig.property.address.unit}
                <br />
                {siteConfig.property.address.street}
                <br />
                {siteConfig.property.address.city},{' '}
                {siteConfig.property.address.state}{' '}
                {siteConfig.property.address.zip}
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItemVariants}>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#home"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About the Property
                </Link>
              </li>
              <li>
                <Link
                  href="#amenities"
                  className="transition-colors hover:text-white"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="transition-colors hover:text-white"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="transition-colors hover:text-white"
                >
                  Location
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.booking.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={staggerItemVariants}>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.tel}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone.display}
                </a>
              </li>
            </ul>

            {/* QR Code note */}
            <div className="mt-6 rounded-lg bg-gray-800 p-4">
              <p className="text-xs">
                <strong className="text-white">Staying with us?</strong>
                <br />
                Access this site anytime via the QR code at the property!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          ref={bottomRef as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={bottomControls}
          variants={slideUpVariants}
          className="mt-8 border-t border-gray-800 pt-8 text-center text-sm"
        >
          <p>
            &copy; {currentYear} 11 Emmons Road Vacation Rental. All rights
            reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Website built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Next.js
            </a>{' '}
            and hosted on{' '}
            <a
              href="https://netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Netlify
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
