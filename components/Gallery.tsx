'use client'

import { useState } from 'react'
import Image from 'next/image'

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

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Photo Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our beautiful property
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
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
            </button>
            <div className="relative max-h-[90vh] max-w-[90vw]">
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
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
