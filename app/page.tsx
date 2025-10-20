import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import BookingWidget from '@/components/BookingWidget'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Location />
      <BookingWidget />
      <Footer />
    </main>
  )
}
