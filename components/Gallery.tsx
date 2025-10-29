'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import {
  slideUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '@/lib/animations/variants'
import { useFeatureFlags } from '@/lib/features'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Feature flags for gallery behavior
  const flags = useFeatureFlags([
    'enhanced_gallery_animations',
    'image_lazy_loading',
  ])

  const images = [
    {
      src: '/images/airbnb-2-1.png',
      alt: 'Ski in ski out Crested Butte vacation rental - 11 Emmons Road building exterior just 50 feet from Red Lady Express lift',
      placeholder: false,
    },
    {
      src: '/images/airbnb-1-1.png',
      alt: 'Modern living room at 11 Emmons Road ski in ski out rental with open kitchen and mountain decor',
      placeholder: false,
    },
    {
      src: '/images/airbnb-3-1.png',
      alt: 'Living room with private mountain view balcony at 11 Emmons Road Crested Butte ski rental',
      placeholder: false,
    },
    {
      src: '/images/airbnb-4-1.png',
      alt: 'Fully equipped modern kitchen with bar seating at 11 Emmons ski in ski out property',
      placeholder: false,
    },
    {
      src: '/images/airbnb-5-2.png',
      alt: 'Master bedroom with custom wood accent wall at 11 Emmons Road Crested Butte vacation rental',
      placeholder: false,
    },
    {
      src: '/images/airbnb-6-1.png',
      alt: 'Second bedroom with workspace at ski in ski out 11 Emmons Road rental',
      placeholder: false,
    },
    {
      src: '/images/airbnb-5-1.png',
      alt: 'Modern bathroom with ambient lighting at 11 Emmons Road Crested Butte ski rental',
      placeholder: false,
    },
    {
      src: '/images/airbnb-7-1.png',
      alt: 'Private covered balcony with mountain views at ski in ski out 11 Emmons Road Crested Butte',
      placeholder: false,
    },
    {
      src: '/images/airbnb-6-2.png',
      alt: 'Sunny outdoor deck with red seating and ski slope views at 11 Emmons Road',
      placeholder: false,
    },
    {
      src: '/images/airbnb-1-2.png',
      alt: 'Cozy living room with balcony dining area at ski in ski out Crested Butte rental',
      placeholder: false,
    },
    {
      src: '/images/airbnb-3-2.png',
      alt: 'Gourmet kitchen with butcher block countertops at 11 Emmons Road ski rental',
      placeholder: false,
    },
    {
      src: '/images/airbnb-7-2.png',
      alt: 'Games and entertainment at 11 Emmons Road Crested Butte vacation rental',
      placeholder: false,
    },
  ]

  const { ref: headerRef, controls: headerControls } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: gridRef, controls: gridControls } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (e.key) {
        case 'Escape':
          setSelectedImage(null)
          break
        case 'ArrowLeft':
          e.preventDefault()
          setSelectedImage((prev) =>
            prev === null || prev === 0 ? images.length - 1 : prev - 1
          )
          break
        case 'ArrowRight':
          e.preventDefault()
          setSelectedImage((prev) =>
            prev === null || prev === images.length - 1 ? 0 : prev + 1
          )
          break
      }
    },
    [selectedImage, images.length]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={headerControls}
          variants={slideUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Photo Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our beautiful property
          </p>
        </motion.div>

        <motion.div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          initial="hidden"
          animate={gridControls}
          variants={
            flags.enhanced_gallery_animations ? staggerContainerVariants : {}
          }
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={
                flags.enhanced_gallery_animations ? staggerItemVariants : {}
              }
              role="button"
              tabIndex={0}
              aria-label={`View image ${index + 1}: ${image.alt}`}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-gray-200 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => openImage(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openImage(index)
                }
              }}
            >
              {image.placeholder ? (
                <div className="flex h-full items-center justify-center text-gray-400">
                  <div className="text-center">
                    <p className="text-sm">{image.alt}</p>
                    <p className="mt-2 text-xs opacity-50">Image Placeholder</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={
                    flags.image_lazy_loading && index >= 3 ? 'lazy' : 'eager'
                  }
                  priority={index < 3}
                />
              )}
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Image lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1 }}
                className="absolute right-4 top-4 text-white hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[90vh] max-w-[90vw]"
                onClick={(e) => e.stopPropagation()}
              >
                {images[selectedImage].placeholder ? (
                  <div className="flex h-96 w-96 items-center justify-center bg-gray-700 text-white">
                    <p>{images[selectedImage].alt}</p>
                  </div>
                ) : (
                  <Image
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    width={1200}
                    height={800}
                    className="h-auto max-h-[90vh] w-auto object-contain"
                    quality={85}
                    priority={false}
                  />
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                Image {selectedImage + 1} of {images.length}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
