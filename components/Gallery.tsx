'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations/variants'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // TODO: Replace with actual property images
  const images = [
    {
      src: '/images/gallery-1.jpg',
      alt: 'Living room with mountain views',
      placeholder: true,
    },
    {
      src: '/images/gallery-2.jpg',
      alt: 'Master bedroom',
      placeholder: true,
    },
    {
      src: '/images/gallery-3.jpg',
      alt: 'Kitchen and dining area',
      placeholder: true,
    },
    {
      src: '/images/gallery-4.jpg',
      alt: 'Bathroom with modern fixtures',
      placeholder: true,
    },
    {
      src: '/images/gallery-5.jpg',
      alt: 'Outdoor deck with seating',
      placeholder: true,
    },
    {
      src: '/images/gallery-6.jpg',
      alt: 'Guest bedroom',
      placeholder: true,
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
          variants={staggerContainerVariants}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-gray-200 transition-transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
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
                className="absolute right-4 top-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
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
                  />
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white"
              >
                {selectedImage + 1} / {images.length}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
