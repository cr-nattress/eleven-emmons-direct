import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ski-In/Ski-Out Blog | 11 Emmons Road Crested Butte',
  description:
    'Expert guides and tips about ski-in/ski-out vacations in Crested Butte. Learn about ski access, planning your trip, and making the most of your mountain getaway.',
  keywords: [
    'ski in ski out blog',
    'crested butte ski tips',
    'ski vacation planning',
    'ski in ski out guide',
  ],
}

// Blog post metadata
const blogPosts = [
  {
    slug: 'best-time-to-book-crested-butte',
    title: 'Best Time to Book Crested Butte Ski Vacation',
    excerpt:
      'When should you book your Crested Butte ski vacation? Strategic guide to pricing, availability, and optimal booking windows.',
    date: '2025-10-29',
    readTime: '7 min read',
    image: '/images/airbnb-2-1.png',
    category: 'Planning',
  },
  {
    slug: 'what-to-pack-ski-in-ski-out',
    title: 'What to Pack for Ski-In/Ski-Out Rental',
    excerpt:
      'Complete packing guide for ski-in/ski-out rentals. Learn what you need, what to skip, and how proximity changes packing strategy.',
    date: '2025-10-29',
    readTime: '6 min read',
    image: '/images/airbnb-5-2.png',
    category: 'Planning',
  },
  {
    slug: 'ski-vacation-planning-why-location-matters',
    title: 'Ski Vacation Planning: Why Location Is Everything',
    excerpt:
      'Essential guide to choosing ski rental location. Learn why proximity to lifts transforms your vacation and what questions to ask.',
    date: '2025-10-29',
    readTime: '7 min read',
    image: '/images/airbnb-2-1.png',
    category: 'Planning',
  },
  {
    slug: 'why-families-love-ski-in-ski-out',
    title: 'Why Families Love Ski-In/Ski-Out Rentals',
    excerpt:
      'Discover why ski-in/ski-out access is a game-changer for family ski vacations. From flexible schedules to safety benefits.',
    date: '2025-10-29',
    readTime: '6 min read',
    image: '/images/airbnb-1-1.png',
    category: 'Family',
  },
  {
    slug: 'a-day-at-ski-in-ski-out-rental',
    title: 'A Day at a Ski-In/Ski-Out Rental: Hour-by-Hour Guide',
    excerpt:
      'Experience a typical day at a true ski-in/ski-out rental. From first chair to après-ski, see how 50-foot lift proximity transforms your day.',
    date: '2025-10-29',
    readTime: '6 min read',
    image: '/images/airbnb-5-2.png',
    category: 'Experience',
  },
  {
    slug: 'best-ski-runs-from-11-emmons',
    title: 'Best Ski Runs from 11 Emmons Road',
    excerpt:
      'Complete guide to the best ski runs accessible from Red Lady Express lift. Beginner to expert terrain just seconds from your door.',
    date: '2025-10-29',
    readTime: '7 min read',
    image: '/images/airbnb-7-1.png',
    category: 'Terrain',
  },
  {
    slug: '5-reasons-ski-in-ski-out-changes-vacation',
    title: '5 Reasons Ski-In/Ski-Out Changes Your Vacation',
    excerpt:
      'Discover why true ski-in/ski-out access transforms your ski vacation. From time savings to family convenience, learn the real benefits.',
    date: '2025-10-29',
    readTime: '8 min read',
    image: '/images/airbnb-1-1.png',
    category: 'Benefits',
  },
  {
    slug: 'ski-in-ski-out-vs-shuttle-comparison',
    title: 'Ski-In/Ski-Out vs Shuttle Access: Complete Comparison',
    excerpt:
      'Detailed comparison of ski-in/ski-out vs shuttle-dependent ski rentals. Cost analysis, time savings, and real experiences to help you choose.',
    date: '2025-10-29',
    readTime: '7 min read',
    image: '/images/airbnb-2-1.png',
    category: 'Comparison',
  },
  {
    slug: 'how-close-is-11-emmons-to-ski-lifts',
    title: 'How Close is 11 Emmons Road to the Ski Lifts?',
    excerpt:
      'Discover the exact distance from 11 Emmons Road to Red Lady Express lift and what true ski-in/ski-out access means for your vacation.',
    date: '2025-10-29',
    readTime: '5 min read',
    image: '/images/airbnb-2-1.png',
    category: 'Location',
  },
  {
    slug: 'what-does-ski-in-ski-out-really-mean',
    title: 'What Does Ski-In/Ski-Out Really Mean?',
    excerpt:
      'Understanding the different levels of ski access and why true ski-in/ski-out makes all the difference in your ski vacation.',
    date: '2025-10-29',
    readTime: '7 min read',
    image: '/images/airbnb-7-1.png',
    category: 'Guide',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Ski-In/Ski-Out Blog
          </h1>
          <p className="text-xl">
            Expert guides and insider tips for your Crested Butte ski vacation
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-4 text-sm text-gray-600">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 font-semibold text-primary group-hover:underline">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Ready to Experience Ski-In/Ski-Out?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Book your stay at 11 Emmons Road, just 50 feet from Red Lady
            Express lift
          </p>
          <Link
            href="/#booking"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </main>
  )
}
