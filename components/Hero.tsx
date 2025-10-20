import Image from 'next/image'
import Link from 'next/link'

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
      <div className="relative flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Your Mountain Escape Awaits
          </h1>
          <p className="mb-8 text-xl text-gray-200 sm:text-2xl">
            11 Emmons Road, Unit 324
            <br />
            Crested Butte, Colorado
          </p>
          <p className="mb-10 text-lg text-gray-300 sm:text-xl">
            Book direct for the best rates and experience luxury in the heart of
            the Rockies
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#booking"
              className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              Book Your Stay
            </Link>
            <Link
              href="#about"
              className="rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
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
      </div>
    </section>
  )
}
