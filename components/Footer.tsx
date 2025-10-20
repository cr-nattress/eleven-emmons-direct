import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              11 Emmons Road
            </h3>
            <p className="text-sm">
              Your premier vacation rental in the heart of Crested Butte,
              Colorado. Book direct for the best rates and personalized service.
            </p>
            <div className="mt-4">
              <p className="text-sm">
                Unit 324
                <br />
                11 Emmons Road
                <br />
                Crested Butte, CO 81224
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
                <Link
                  href="#booking"
                  className="transition-colors hover:text-white"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@11emmons.com"
                  className="transition-colors hover:text-white"
                >
                  info@11emmons.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="transition-colors hover:text-white"
                >
                  (123) 456-7890
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
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
        </div>
      </div>
    </footer>
  )
}
