import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import BookingWidget from '@/components/BookingWidget'
import Footer from '@/components/Footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary section="Header">
        <Header />
      </ErrorBoundary>

      <div id="main-content">
        <Hero />
      </div>

      <ErrorBoundary section="About">
        <About />
      </ErrorBoundary>

      <ErrorBoundary section="Amenities">
        <Amenities />
      </ErrorBoundary>

      <ErrorBoundary section="Gallery">
        <Gallery />
      </ErrorBoundary>

      <ErrorBoundary section="Location">
        <Location />
      </ErrorBoundary>

      <ErrorBoundary
        section="BookingWidget"
        fallback={
          <section id="booking" className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Book Your Stay
                </h2>
                <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-8">
                  <p className="mb-6 text-lg text-gray-700">
                    Our booking system is temporarily unavailable. Please book
                    directly through Airbnb.
                  </p>
                  <a
                    href={siteConfig.booking.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
                  >
                    Book on Airbnb
                  </a>
                </div>
              </div>
            </div>
          </section>
        }
      >
        <BookingWidget />
      </ErrorBoundary>

      <ErrorBoundary section="Footer">
        <Footer />
      </ErrorBoundary>
    </main>
  )
}
