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
