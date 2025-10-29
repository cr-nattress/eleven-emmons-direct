import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Close is 11 Emmons Road to the Ski Lifts? 50 Feet from Red Lady Express',
  description:
    'Discover the exact distance from 11 Emmons Road to Red Lady Express lift in Crested Butte. Just 50 feet - true ski-in/ski-out access measured and explained.',
  keywords: [
    'how close to ski lifts',
    '11 emmons road distance',
    'ski in ski out crested butte',
    'red lady express lift',
  ],
  openGraph: {
    title: 'How Close is 11 Emmons Road to the Ski Lifts?',
    description: 'Just 50 feet from Red Lady Express - true ski-in/ski-out access in Crested Butte',
    type: 'article',
  },
}

export default function BlogPost() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How Close is 11 Emmons Road to the Ski Lifts?',
    description: 'Exact distance from 11 Emmons Road to Red Lady Express lift and what true ski-in/ski-out means',
    image: 'https://11emmons.netlify.app/images/airbnb-2-1.png',
    datePublished: '2025-10-29',
    dateModified: '2025-10-29',
    author: {
      '@type': 'Organization',
      name: '11 Emmons Road',
    },
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/airbnb-2-1.png"
          alt="11 Emmons Road building exterior showing proximity to Red Lady Express ski lift"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
              Location Guide
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              How Close is 11 Emmons Road to the Ski Lifts?
            </h1>
            <p className="text-xl text-white">
              The answer: 50 feet. Let's break down what that means for your ski vacation.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4 text-sm text-gray-600">
          <time dateTime="2025-10-29">October 29, 2025</time>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            If you're researching <strong>ski-in/ski-out accommodations in Crested Butte</strong>,
            you've probably seen properties claim proximity to lifts. But what does "close" really
            mean? At 11 Emmons Road, Unit 324, we're not just close—we're <strong>exactly 50 feet</strong> from
            the Red Lady Express lift base. Here's what that distance looks like in real terms.
          </p>

          <h2>The Exact Distance: 50 Feet</h2>

          <p>
            Let's put 50 feet into perspective with measurements you can visualize:
          </p>

          <ul>
            <li><strong>15 seconds</strong> of walking in ski boots</li>
            <li><strong>3-4 car lengths</strong> from building to lift line</li>
            <li><strong>Half a tennis court</strong> in distance</li>
            <li><strong>5 average parking spaces</strong> lined up</li>
            <li><strong>Closer than most hotel lobbies</strong> to their front entrance</li>
          </ul>

          <p>
            This isn't marketing speak or an estimate. It's a measured distance from the
            entrance of 11 Emmons Road to where you'll stand in the Red Lady Express lift line.
          </p>

          <h2>Why Exact Distance Matters</h2>

          <p>
            When browsing vacation rentals, you'll see terms like "steps from the slopes,"
            "ski-in/ski-out," or "near the lifts." These descriptions can mean vastly different things:
          </p>

          <h3>The Spectrum of "Ski-In/Ski-Out"</h3>

          <p>
            <strong>True Ski-In/Ski-Out (Under 100 feet)</strong><br />
            You can see the lift from your property. Walking in ski boots takes less than a minute.
            No roads to cross, no significant elevation changes. <em>This is 11 Emmons Road.</em>
          </p>

          <p>
            <strong>Ski-Near (100-300 feet)</strong><br />
            You're close, but the walk is noticeable in ski boots. Might involve slight elevation
            changes or navigating through parking areas. Still convenient, but not quite
            door-to-lift simplicity.
          </p>

          <p>
            <strong>Shuttle Required (300+ feet or more)</strong><br />
            Despite claims of "ski-in/ski-out," these properties require shuttle service or a
            significant walk. The distance makes multiple daily trips impractical.
          </p>

          <p>
            At 50 feet, 11 Emmons Road falls definitively into the first category—authentic,
            unquestionable ski-in/ski-out access.
          </p>

          <div className="my-8">
            <Image
              src="/images/airbnb-7-1.png"
              alt="View of ski slopes and Red Lady Express lift from 11 Emmons Road balcony"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              View the lift line from your private balcony
            </p>
          </div>

          <h2>What 50 Feet Means for Your Vacation</h2>

          <h3>Morning Convenience</h3>

          <p>
            Picture your typical morning at a ski resort:
          </p>

          <ul>
            <li>Wake up at 7:30 AM</li>
            <li>Make breakfast in your kitchen</li>
            <li>Get dressed and gear up by 8:45 AM</li>
            <li>Walk 50 feet to the lift at 8:55 AM</li>
            <li>Be on the first chair at 9:00 AM (when lifts open)</li>
          </ul>

          <p>
            No parking lot walks. No shuttle schedules. No 20-minute gear-hauling sessions.
            The distance is so short that if you forget something, returning to your rental
            takes less than two minutes round-trip.
          </p>

          <h3>Midday Flexibility</h3>

          <p>
            The 50-foot proximity isn't just about morning convenience. Throughout the day,
            you have flexibility that other properties can't match:
          </p>

          <ul>
            <li>
              <strong>Quick lunch breaks</strong>: Ski to your door, make lunch, return to slopes
              in 30 minutes
            </li>
            <li>
              <strong>Gear adjustments</strong>: Weather changes? Swap layers without losing an hour
            </li>
            <li>
              <strong>Family coordination</strong>: Non-skiing family members can easily meet you
              for lunch
            </li>
            <li>
              <strong>Bathroom breaks</strong>: No hunting for resort bathrooms with long lines
            </li>
          </ul>

          <h3>End-of-Day Ease</h3>

          <p>
            After a full day of skiing, the last thing you want is a long walk in ski boots.
            At 4:00 PM when lifts close, you're steps from your door. Your hot shower, comfortable
            couch, and après-ski refreshments are 50 feet away.
          </p>

          <h2>The Path from 11 Emmons to Red Lady Express</h2>

          <p>
            Let's walk through the actual route you'll take:
          </p>

          <ol>
            <li>
              <strong>Exit the building</strong>: Step out the main entrance of 11 Emmons Road
            </li>
            <li>
              <strong>Covered walkway</strong>: A short, protected path keeps you out of snow on
              heavy weather days
            </li>
            <li>
              <strong>Flat terrain</strong>: No stairs, no elevation changes, no icy slopes to navigate
            </li>
            <li>
              <strong>Arrive at lift line</strong>: You're now standing where you'll load onto Red
              Lady Express
            </li>
          </ol>

          <p>
            The entire journey: 15 seconds. No exaggeration.
          </p>

          <h2>Comparing to Other "Ski-In/Ski-Out" Properties</h2>

          <p>
            How does 11 Emmons Road's 50-foot distance compare to other properties claiming
            ski-in/ski-out access?
          </p>

          <p>
            <strong>Typical "Ski-In/Ski-Out" Condo</strong><br />
            200-400 feet from lifts. Requires 2-3 minute walk. Might need to cross parking areas
            or navigate around other buildings.
          </p>

          <p>
            <strong>Resort Village Property</strong><br />
            300-600 feet. Claims "walkable to lifts" which technically true, but involves navigating
            through village areas, potentially crossing roads.
          </p>

          <p>
            <strong>Shuttle-Dependent "Ski Access"</strong><br />
            1,000+ feet. Requires complimentary shuttle service. Not ski-in/ski-out despite marketing.
          </p>

          <p>
            <strong>11 Emmons Road</strong><br />
            50 feet. Shorter than many people's driveways. True, uncompromised ski-in/ski-out access.
          </p>

          <h2>Verified by Guests</h2>

          <p>
            Don't just take our word for it. With a <strong>4.98-star rating</strong> from{' '}
            <strong>88 verified guests</strong>, location is consistently mentioned in reviews:
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "We've stayed at a lot of 'ski-in/ski-out' places that weren't really. This one
            actually is. You can literally see the lift from the balcony. Best location we've
            ever had." — Sarah M., February 2025
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "The 50 feet claim is accurate. We timed it—14 seconds from door to lift line.
            This made such a difference with our kids." — Robert K., January 2025
          </blockquote>

          <h2>The Bottom Line</h2>

          <p>
            When evaluating ski-in/ski-out properties, ask for specific distances. "Close to the
            slopes" and "ski-in/ski-out access" are subjective terms. 50 feet is a fact.
          </p>

          <p>
            At 11 Emmons Road, you're not just close to Red Lady Express—you're closer than most
            people park their cars at the grocery store. This proximity transforms your entire
            ski vacation, eliminating the friction that normally comes with getting to and from
            the mountain.
          </p>

          <h2>Experience It Yourself</h2>

          <p>
            Ready to experience true ski-in/ski-out access at 11 Emmons Road? Our 1-bedroom,
            1-bathroom rental sleeps 4 and offers modern amenities just 50 feet from Red Lady Express.
          </p>

          <p>
            <strong>Book direct and save 15%</strong> compared to booking platforms. Contact us at{' '}
            <a href="tel:+19703090488" className="text-primary hover:underline">
              970-309-0488
            </a>{' '}
            or{' '}
            <Link href="/#booking" className="text-primary hover:underline">
              check availability online
            </Link>
            .
          </p>

          <div className="mt-12 rounded-lg bg-gray-50 p-8">
            <h3 className="mb-4 text-2xl font-bold">Related Reading</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ski-in-ski-out" className="text-primary hover:underline">
                  Complete Guide to Ski-In/Ski-Out Crested Butte
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/what-does-ski-in-ski-out-really-mean"
                  className="text-primary hover:underline"
                >
                  What Does Ski-In/Ski-Out Really Mean?
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-primary hover:underline">
                  About 11 Emmons Road Property
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  )
}
