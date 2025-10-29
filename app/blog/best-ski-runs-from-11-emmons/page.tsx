import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Ski Runs from 11 Emmons Road | Red Lady Express Terrain Guide',
  description:
    'Complete guide to the best ski runs accessible from Red Lady Express lift at 11 Emmons Road. Beginner to expert terrain just seconds from your door.',
  keywords: [
    'red lady express runs',
    'crested butte ski runs',
    'best runs crested butte',
    '11 emmons ski terrain',
  ],
  openGraph: {
    title: 'Best Ski Runs from 11 Emmons Road',
    description: 'Your guide to incredible terrain steps from your door',
    type: 'article',
  },
}

export default function BlogPost() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Best Ski Runs from 11 Emmons Road',
    description: 'Comprehensive terrain guide for Red Lady Express lift access at Crested Butte',
    image: 'https://11emmons.netlify.app/images/airbnb-7-1.png',
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
          src="/images/airbnb-7-1.png"
          alt="Ski slopes view from 11 Emmons Road showing Red Lady Express terrain"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
              Terrain Guide
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Best Ski Runs from 11 Emmons Road
            </h1>
            <p className="text-xl text-white">
              Your complete guide to Red Lady Express terrain access
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4 text-sm text-gray-600">
          <time dateTime="2025-10-29">October 29, 2025</time>
          <span>•</span>
          <span>7 min read</span>
          <span>•</span>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            When you stay at <strong>11 Emmons Road in Crested Butte</strong>, you're 50 feet from Red Lady
            Express lift—one of the mountain's most versatile lifts with access to terrain for every skill
            level. This guide walks you through the best runs you can access directly from your door, from
            gentle groomers to challenging expert terrain.
          </p>

          <h2>Red Lady Express: Your Home Base Lift</h2>

          <p>
            <strong>Lift Specifications</strong>:
          </p>

          <ul>
            <li>
              <strong>Type</strong>: High-speed quad chairlift
            </li>
            <li>
              <strong>Vertical rise</strong>: 2,078 feet
            </li>
            <li>
              <strong>Ride time</strong>: ~8 minutes
            </li>
            <li>
              <strong>Capacity</strong>: 2,400 skiers per hour
            </li>
            <li>
              <strong>Summit elevation</strong>: 10,650 feet
            </li>
          </ul>

          <p>
            Red Lady Express is Crested Butte's workhorse lift. It serves terrain from gentle green runs
            to double-black expert chutes. Most importantly, it rarely has long lines—even on busy powder days,
            waits are typically under 5 minutes.
          </p>

          <h2>Beginner Terrain: Building Confidence</h2>

          <p>
            If you're new to skiing or have family members learning, Red Lady Express provides excellent
            beginner terrain with convenient access back to 11 Emmons Road.
          </p>

          <h3>Houston (Green Circle)</h3>

          <p>
            <strong>Characteristics</strong>:
          </p>

          <ul>
            <li>Wide, gentle cruiser</li>
            <li>Consistent pitch—no sudden steep sections</li>
            <li>Usually well-groomed</li>
            <li>Low skier traffic (most beginners use lower mountain lifts)</li>
            <li>Length: 1.2 miles</li>
          </ul>

          <p>
            <strong>Why it's great from 11 Emmons</strong>: Houston runs directly back to the base of Red
            Lady Express. Beginners can complete laps without navigating complex trail networks. Plus,
            proximity means nervous learners are always close to "home."
          </p>

          <h3>Bushwacker (Green Circle)</h3>

          <p>
            <strong>Characteristics</strong>:
          </p>

          <ul>
            <li>Slightly narrower than Houston but still beginner-friendly</li>
            <li>Winds through trees (protected from wind on stormy days)</li>
            <li>Teaches basic turning and speed control</li>
            <li>Connects to Houston for return to base</li>
          </ul>

          <p>
            <strong>Pro tip</strong>: Bushwacker is excellent for late afternoon when beginners are tired.
            The tree cover provides shade and softer snow, making turns easier.
          </p>

          <h2>Intermediate Terrain: Where You'll Spend Most of Your Time</h2>

          <p>
            Intermediate skiers will find Red Lady Express serves some of Crested Butte's best blue runs.
            These are where most skiers spend their days.
          </p>

          <h3>Ruby Chief (Blue Square)</h3>

          <p>
            <strong>Characteristics</strong>:
          </p>

          <ul>
            <li>Wide, confidence-building cruiser</li>
            <li>Morning grooming creates perfect corduroy</li>
            <li>Moderate pitch—challenging enough to improve, easy enough to relax</li>
            <li>1,500 vertical feet of sustained intermediate skiing</li>
          </ul>

          <p>
            <strong>Best time</strong>: First chair (9:00-10:00 AM) when the grooming is fresh. By 11:00 AM,
            it's tracked out but still excellent.
          </p>

          <p>
            <strong>Why guests love it</strong>: Ruby Chief offers that classic "big mountain skiing" feel
            without intimidating difficulty. It's where intermediate skiers find their flow.
          </p>

          <h3>Treasury (Blue Square)</h3>

          <p>
            <strong>Characteristics</strong>:
          </p>

          <ul>
            <li>Slightly steeper than Ruby Chief</li>
            <li>Tests intermediate skills without crossing into advanced territory</li>
            <li>Less traffic than Ruby Chief</li>
            <li>Good mogul practice when left ungroomed</li>
          </ul>

          <p>
            <strong>Strategy</strong>: Use Treasury to gauge your skills. If you're comfortable here, you're
            ready to explore upper-intermediate and advanced terrain.
          </p>

          <h3>Keystone (Blue Square)</h3>

          <p>
            <strong>Characteristics</strong>:
          </p>

          <ul>
            <li>Long cruiser with varied terrain</li>
            <li>Upper section: wide and flowy</li>
            <li>Middle section: navigates through glades</li>
            <li>Lower section: connects back to base area</li>
            <li>Total vertical: ~2,000 feet</li>
          </ul>

          <p>
            <strong>Advantage</strong>: Keystone is one of Crested Butte's longest continuous runs. You get
            8-10 minutes of skiing per lap—excellent for building endurance.
          </p>

          <div className="my-8">
            <Image
              src="/images/airbnb-2-1.png"
              alt="11 Emmons Road building showing proximity to ski runs"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              All these runs end steps from your door
            </p>
          </div>

          <h2>Advanced Terrain: Stepping Up Your Game</h2>

          <p>
            Strong intermediate and advanced skiers will find Red Lady Express provides access to Crested
            Butte's steeper, more challenging terrain.
          </p>

          <h3>Crystal (Black Diamond)</h3>

          <p>
            <strong>Characteristics</strong>:
          </p>

          <ul>
            <li>Steeper pitch than blue runs (28-32 degrees)</li>
            <li>Usually groomed early season, left to bump up mid-season</li>
            <li>Direct fall line descent</li>
            <li>Tests your technique—no hiding on this run</li>
          </ul>

          <p>
            <strong>When to ski it</strong>: Early morning when groomed for confidence building, or afternoon
            after it's bumped up for technical challenge.
          </p>

          <h3>North Face Access Routes</h3>

          <p>
            From Red Lady Express summit, you can access several routes to Crested Butte's famous North Face:
          </p>

          <p>
            <strong>Recommended routes from Red Lady</strong>:
          </p>

          <ol>
            <li>
              <strong>Traverse to Silver Queen lift</strong>: Accesses North Face terrain including
              Spellbound Bowl and Phoenix terrain
            </li>
            <li>
              <strong>Hawk terrain</strong>: Steep, technical trees and chutes
            </li>
            <li>
              <strong>Paradise Bowl access</strong>: Via short hike from top of Red Lady
            </li>
          </ol>

          <p>
            <strong>Why this matters at 11 Emmons</strong>: Advanced skiers can explore challenging terrain
            all morning, then ski directly home via intermediate runs for lunch. No traversing back to distant
            parking lots.
          </p>

          <h2>Expert Terrain: For Advanced Skiers Only</h2>

          <p>
            Red Lady Express provides hiking access to some of Crested Butte's most challenging terrain.
          </p>

          <h3>Headwall (Double Black Diamond)</h3>

          <p>
            <strong>Access</strong>: Short 5-10 minute hike from Red Lady summit
          </p>

          <p>
            <strong>Characteristics</strong>:
          </p>

          <ul>
            <li>35-40 degree sustained pitch</li>
            <li>Exposed face above treeline</li>
            <li>Requires strong advanced skiing skills</li>
            <li>Best on powder days</li>
          </ul>

          <p>
            <strong>Local tip</strong>: Headwall faces east. Ski it mid-morning (10:00-11:30 AM) when sun has
            softened snow but hasn't created too much slush.
          </p>

          <h3>Phoenix Bowl (Hike-to Terrain)</h3>

          <p>
            <strong>Access</strong>: 15-20 minute hike from Red Lady or Silver Queen
          </p>

          <p>
            <strong>Characteristics</strong>:
          </p>

          <ul>
            <li>Multiple chutes and lines (varying difficulty)</li>
            <li>Above treeline exposure</li>
            <li>Incredible views</li>
            <li>Powder stashes days after storm</li>
            <li>Requires avalanche awareness and proper equipment</li>
          </ul>

          <p>
            <strong>Convenience from 11 Emmons</strong>: After hiking for 20 minutes and skiing Phoenix,
            you can return to your rental for lunch and rest before afternoon laps. At distant properties,
            the morning would be over by the time you get back.
          </p>

          <h2>Tree Skiing and Powder Stashes</h2>

          <p>
            After powder days, Red Lady terrain offers excellent tree skiing that holds snow longer than
            open faces.
          </p>

          <h3>Recommended Tree Zones</h3>

          <p>
            <strong>Painter Boy Trees</strong> (Intermediate-Advanced):
          </p>

          <ul>
            <li>Moderate spacing—good for building tree confidence</li>
            <li>Protected from wind</li>
            <li>North-facing holds powder 2-3 days after storm</li>
          </ul>

          <p>
            <strong>Ruby Chief Trees</strong> (Intermediate):
          </p>

          <ul>
            <li>Wide-spaced trees perfect for intermediate skiers</li>
            <li>Easy escape routes back to groomed runs</li>
            <li>Fun without intimidation</li>
          </ul>

          <p>
            <strong>Hawk/North Face Trees</strong> (Expert):
          </p>

          <ul>
            <li>Tight spacing requires precise turning</li>
            <li>Steep pitch combined with tree navigation</li>
            <li>Holds powder for 4-5 days after storm</li>
          </ul>

          <h2>Daily Terrain Strategy from 11 Emmons</h2>

          <p>
            Here's how to maximize your skiing from Red Lady Express:
          </p>

          <h3>Morning Session (9:00 AM - 12:00 PM)</h3>

          <ol>
            <li>
              <strong>First chair: Groomed runs</strong> (Ruby Chief, Keystone, Treasury) for fresh corduroy
            </li>
            <li>
              <strong>9:30-10:30 AM: Advanced terrain</strong> (Crystal, Headwall if snow is good)
            </li>
            <li>
              <strong>10:30 AM-12:00 PM: Tree skiing</strong> (if powder day) or cruisers (if groomed)
            </li>
          </ol>

          <h3>Lunch Break (12:00-12:45 PM)</h3>

          <ul>
            <li>Ski directly to 11 Emmons Road (1 minute)</li>
            <li>Quick lunch and rest</li>
            <li>Check conditions, adjust layers</li>
          </ul>

          <h3>Afternoon Session (12:45-4:00 PM)</h3>

          <ol>
            <li>
              <strong>12:45-2:00 PM: Shaded runs</strong> (north-facing terrain, trees) where snow stays good
            </li>
            <li>
              <strong>2:00-3:30 PM: Mellow cruisers</strong> (Ruby Chief, Houston) as legs tire
            </li>
            <li>
              <strong>3:30-4:00 PM: Last laps</strong> on favorite runs before lift close
            </li>
          </ol>

          <h2>Weather Considerations</h2>

          <p>
            Red Lady Express faces generally east/northeast. Here's how weather affects your terrain choices:
          </p>

          <h3>Powder Days</h3>

          <ul>
            <li>
              <strong>Priority</strong>: Advanced terrain and trees (Headwall, Phoenix, tree zones)
            </li>
            <li>
              <strong>Strategy</strong>: Hit expert terrain early, then move to intermediate tree skiing
              as those get tracked
            </li>
            <li>
              <strong>Advantage of 11 Emmons</strong>: First chair access means first tracks
            </li>
          </ul>

          <h3>Warm Spring Days</h3>

          <ul>
            <li>
              <strong>Morning</strong>: Groomed runs before snow gets slushy
            </li>
            <li>
              <strong>Midday</strong>: North-facing terrain (slower to soften)
            </li>
            <li>
              <strong>Afternoon</strong>: Consider ending early—snow gets heavy
            </li>
            <li>
              <strong>Advantage of 11 Emmons</strong>: Easy to quit at 2:00 PM without shuttle stress
            </li>
          </ul>

          <h3>Stormy, Cold Days</h3>

          <ul>
            <li>
              <strong>Priority</strong>: Tree skiing (protection from wind and visibility)
            </li>
            <li>
              <strong>Avoid</strong>: Above-treeline terrain (low visibility, wind)
            </li>
            <li>
              <strong>Advantage of 11 Emmons</strong>: Pop inside to warm up without losing an hour
            </li>
          </ul>

          <h2>Family-Friendly Terrain Planning</h2>

          <p>
            If you're skiing with mixed abilities, Red Lady Express is ideal because it serves all levels:
          </p>

          <p>
            <strong>Strategy</strong>:
          </p>

          <ol>
            <li>Everyone rides Red Lady Express together</li>
            <li>Advanced skiers: Head to expert terrain</li>
            <li>Intermediates: Lap Ruby Chief and Treasury</li>
            <li>Beginners: Take Houston or Bushwacker</li>
            <li>Regroup at 11 Emmons for lunch (everyone's close)</li>
          </ol>

          <p>
            Compare this to properties where family members are scattered across different lifts and
            coordinating lunch means 45 minutes of logistics.
          </p>

          <h2>Guest Experiences on Red Lady Terrain</h2>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "We spent 90% of our week just riding Red Lady. The terrain variety was incredible—our teenagers
            could ski expert chutes while our younger kids did green runs, and we all met back at the condo
            for lunch." — Steve B., March 2025
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "First time in Crested Butte. We never ventured beyond Red Lady Express terrain all week and
            didn't feel like we missed anything. The convenience of being right there was unbeatable." — Amanda K., February 2025
          </blockquote>

          <h2>Plan Your Terrain Adventure</h2>

          <p>
            Ready to explore Crested Butte's incredible terrain from <strong>11 Emmons Road</strong>? You're
            50 feet from Red Lady Express—beginner to expert runs are all within seconds of your door.
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
                <Link
                  href="/blog/a-day-at-ski-in-ski-out-rental"
                  className="text-primary hover:underline"
                >
                  A Day at a Ski-In/Ski-Out Rental
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/5-reasons-ski-in-ski-out-changes-vacation"
                  className="text-primary hover:underline"
                >
                  5 Reasons Ski-In/Ski-Out Changes Your Vacation
                </Link>
              </li>
              <li>
                <Link href="/ski-in-ski-out" className="text-primary hover:underline">
                  Complete Ski-In/Ski-Out Crested Butte Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  )
}
