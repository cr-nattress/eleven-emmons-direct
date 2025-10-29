import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'A Day at a Ski-In/Ski-Out Rental: Hour-by-Hour Guide | 11 Emmons Road',
  description:
    'Experience a typical day at a true ski-in/ski-out rental. From first chair to après-ski, see how 50-foot lift proximity transforms your ski vacation.',
  keywords: [
    'day at ski in ski out',
    'ski in ski out experience',
    'ski vacation day schedule',
    'crested butte ski day',
  ],
  openGraph: {
    title: 'A Day at a Ski-In/Ski-Out Rental',
    description: 'Hour-by-hour guide to the ski-in/ski-out experience',
    type: 'article',
  },
}

export default function BlogPost() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'A Day at a Ski-In/Ski-Out Rental: Hour-by-Hour Guide',
    description: 'Detailed walkthrough of a typical ski day at a true ski-in/ski-out property',
    image: 'https://11emmons.netlify.app/images/airbnb-5-2.png',
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
          src="/images/airbnb-5-2.png"
          alt="Comfortable bedroom at ski in ski out rental for restful mornings"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
              Experience Guide
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              A Day at a Ski-In/Ski-Out Rental
            </h1>
            <p className="text-xl text-white">
              Hour-by-hour breakdown of the true ski-in/ski-out experience
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4 text-sm text-gray-600">
          <time dateTime="2025-10-29">October 29, 2025</time>
          <span>•</span>
          <span>6 min read</span>
          <span>•</span>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700">
            What does a day at a <strong>ski-in/ski-out rental in Crested Butte</strong> actually look like?
            This hour-by-hour walkthrough at <strong>11 Emmons Road</strong>, just 50 feet from Red Lady Express
            lift, shows you exactly how true ski-in/ski-out access transforms your entire ski day—from leisurely
            mornings to maximizing slope time to stress-free evenings.
          </p>

          <h2>7:30 AM - Natural Wake-Up (No Alarm Panic)</h2>

          <p>
            At shuttle-dependent properties, 7:00 AM alarms are mandatory. Miss the first shuttle, and you
            miss first tracks. But at 11 Emmons Road, you're 15 seconds from the lift line.
          </p>

          <p>
            <strong>This morning</strong>:
          </p>

          <ul>
            <li>Wake naturally around 7:30 AM</li>
            <li>Check mountain conditions from your balcony</li>
            <li>Overnight snow? You can see fresh powder from your window</li>
            <li>No rush, no stress—first chair doesn't leave until 9:00 AM</li>
          </ul>

          <p>
            The difference in how your day starts sets the tone for everything that follows. You begin relaxed,
            not frantic.
          </p>

          <h2>7:45 AM - Breakfast in Your Own Kitchen</h2>

          <p>
            No counting down minutes to shuttle departure. No eating granola bars in the shuttle line.
            You have time for real breakfast.
          </p>

          <p>
            <strong>Today's menu</strong>:
          </p>

          <ul>
            <li>Fresh coffee (bring your own beans or use the provided coffee maker)</li>
            <li>Scrambled eggs and toast</li>
            <li>Fresh fruit</li>
            <li>Everyone sits together at the table—no rushing</li>
          </ul>

          <p>
            This 30-minute breakfast costs about $8 in groceries. A resort cafeteria charges $15-20 per person
            for worse food and crowded seating.
          </p>

          <h2>8:30 AM - Leisurely Gear-Up Time</h2>

          <p>
            At shuttle properties, mornings involve hauling all gear to the shuttle stop before you know if
            you need it. Forgot sunscreen? Too late—you're on the shuttle.
          </p>

          <p>
            <strong>At 11 Emmons Road</strong>:
          </p>

          <ul>
            <li>Check weather one more time</li>
            <li>Bluebird day ahead? Light layers</li>
            <li>Adjust your clothing for actual conditions</li>
            <li>Pack a small backpack with snacks and water</li>
            <li>Everyone moves at their own pace</li>
          </ul>

          <p>
            The teenagers are still sleeping. That's fine—they'll join you later. No group coordination needed.
          </p>

          <h2>8:55 AM - 15-Second Walk to Lift Line</h2>

          <p>
            You've finished breakfast, geared up, and you're ready. Time to head to the mountain:
          </p>

          <ol>
            <li>Step out the door of 11 Emmons Road</li>
            <li>Walk down the short covered pathway (stays dry even in heavy snow)</li>
            <li>Arrive at Red Lady Express lift line</li>
          </ol>

          <p>
            <strong>Total time: 15 seconds. Distance: 50 feet.</strong>
          </p>

          <p>
            Compare this to shuttle properties where the journey involves: walking 5 minutes to shuttle
            stop, waiting 10-15 minutes for shuttle, 10-minute ride, then walking from drop-off to lift.
            That's 30-45 minutes—time you'll spend skiing instead.
          </p>

          <div className="my-8">
            <Image
              src="/images/airbnb-7-1.png"
              alt="Balcony view of Red Lady Express lift from ski in ski out rental"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              The view from your balcony—that's how close the lift is
            </p>
          </div>

          <h2>9:00 AM - First Chair of the Day</h2>

          <p>
            The lifts open at 9:00 AM. You load onto the first chair with a handful of other early birds.
            Most resort guests are still waiting for shuttles or navigating parking lots.
          </p>

          <p>
            <strong>What first chair means</strong>:
          </p>

          <ul>
            <li>Groomed corduroy runs before they get tracked out</li>
            <li>Fresh powder lines if it snowed overnight</li>
            <li>No lift lines—ski-on, ski-off</li>
            <li>Best snow conditions of the day</li>
          </ul>

          <p>
            You'll get 45-60 minutes of incredible skiing before crowds arrive around 10:00 AM.
          </p>

          <h2>9:00 AM - 12:00 PM - Morning Ski Session</h2>

          <p>
            Three hours of uninterrupted skiing. From Red Lady Express, you access:
          </p>

          <ul>
            <li>Beginner terrain: Peachtree, Bushwacker (perfect for warming up)</li>
            <li>Intermediate cruisers: Ruby Chief, Treasury, Keystone</li>
            <li>Advanced terrain: North Face access, Paradise Bowl</li>
            <li>Expert chutes and bowls: Headwall, Phoenix Bowl</li>
          </ul>

          <p>
            You complete 10-12 runs in the morning session—about 8,000-10,000 vertical feet. Legs are
            starting to feel it, and you're ready for lunch.
          </p>

          <h2>12:00 PM - The 2-Minute Lunch Commute</h2>

          <p>
            Here's where ski-in/ski-out shows its value. At shuttle properties, lunch means:
          </p>

          <ul>
            <li>Ski to base area</li>
            <li>Remove skis, walk to cafeteria</li>
            <li>Wait in 15-minute line</li>
            <li>Pay $15-25 per person for mediocre food</li>
            <li>Eat at crowded tables</li>
            <li>Total time: 60-90 minutes</li>
          </ul>

          <p>
            <strong>At 11 Emmons Road</strong>:
          </p>

          <ol>
            <li>Ski down from Red Lady Express (30 seconds)</li>
            <li>Step into your door</li>
            <li>You're home, skis off, in your own space</li>
            <li>Total time: 1 minute</li>
          </ol>

          <h2>12:05 PM - Lunch at Your Rental</h2>

          <p>
            Make quick sandwiches or heat up soup you prepared yesterday. Total cost: $3-4 per person vs.
            $20-25 at the resort.
          </p>

          <p>
            <strong>Benefits beyond cost savings</strong>:
          </p>

          <ul>
            <li>Use your own bathroom (no resort bathroom lines)</li>
            <li>Sit on comfortable couch, not hard cafeteria bench</li>
            <li>Check weather and snow reports on TV</li>
            <li>Kids can nap for 20-30 minutes</li>
            <li>Change layers if temperature shifted</li>
          </ul>

          <p>
            This midday break completely changes the energy level for the afternoon. Kids who would
            normally be melting down by 2:00 PM stay energized all day.
          </p>

          <h2>12:45 PM - Return to Slopes</h2>

          <p>
            40 minutes after leaving the slopes, you're refreshed and ready for round two. The 15-second
            walk back to Red Lady Express feels effortless.
          </p>

          <p>
            Friends at shuttle properties are just finishing their cafeteria lunch and starting the
            30-minute journey back to slopes. You've already caught three more runs.
          </p>

          <h2>1:00 PM - 3:30 PM - Afternoon Session</h2>

          <p>
            Afternoon skiing presents different conditions:
          </p>

          <ul>
            <li>Temperature warmer (started at 15°F, now 30°F)</li>
            <li>Snow softening on sun-exposed runs</li>
            <li>Some runs getting moguls where this morning they were groomed</li>
          </ul>

          <p>
            Around 2:00 PM, you notice you're overdressed. The temperature jumped 15 degrees since morning.
          </p>

          <p>
            <strong>At shuttle properties, you tough it out</strong>. Going back to change means losing an hour.
          </p>

          <p>
            <strong>At 11 Emmons Road</strong>:
          </p>

          <ol>
            <li>Ski to your door (1 minute)</li>
            <li>Swap heavy jacket for light shell (3 minutes)</li>
            <li>Return to lift (1 minute)</li>
            <li>Total interruption: 5 minutes</li>
          </ol>

          <p>
            You continue skiing in comfortable layers. Your shuttle-property friends are overheating
            and miserable.
          </p>

          <h2>3:30 PM - Teenagers Finally Arrive</h2>

          <p>
            Remember the teenagers who slept in? They finally woke up around 11:00 AM, made brunch,
            and now they're joining you on the slopes.
          </p>

          <p>
            At shuttle properties, this would have required complex coordination. At 11 Emmons Road,
            they just walked 15 seconds when they were ready.
          </p>

          <p>
            Everyone gets to ski on their preferred schedule. No compromises, no conflicts.
          </p>

          <h2>4:00 PM - Last Runs of the Day</h2>

          <p>
            Red Lady Express closes at 4:00 PM. Many skiers leave around 3:30 PM to catch shuttles or
            deal with parking lot traffic.
          </p>

          <p>
            You ski until the literal last chair. As the lift closes, you take one final run down
            to your door.
          </p>

          <p>
            <strong>End-of-day comparison</strong>:
          </p>

          <p>
            <strong>Shuttle Property</strong>:
          </p>

          <ul>
            <li>Leave slopes at 3:45 PM</li>
            <li>Walk 10 minutes to shuttle stop in ski boots</li>
            <li>Wait 15 minutes for shuttle</li>
            <li>10-minute ride</li>
            <li>Arrive at property exhausted at 4:25 PM</li>
          </ul>

          <p>
            <strong>11 Emmons Road</strong>:
          </p>

          <ul>
            <li>Last run ends at 4:00 PM</li>
            <li>Ski 30 seconds to your door</li>
            <li>Step inside</li>
            <li>You're home at 4:01 PM</li>
          </ul>

          <p>
            The difference in end-of-day experience is profound. You're home before shuttle guests
            even start their journey.
          </p>

          <h2>4:15 PM - Après-Ski at Your Place</h2>

          <p>
            You're home, boots off, in comfortable clothes. Time for après-ski:
          </p>

          <ul>
            <li>Hot chocolate or beer on your private balcony</li>
            <li>Watch the last skiers come down the mountain</li>
            <li>Kids are in the hot tub</li>
            <li>No crowds, no noise—just your group</li>
          </ul>

          <p>
            This is the après-ski experience you imagined when booking a ski vacation.
          </p>

          <div className="my-8">
            <Image
              src="/images/airbnb-1-1.png"
              alt="Comfortable living room at ski in ski out rental for evening relaxation"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              Après-ski comfort in your own space
            </p>
          </div>

          <h2>6:00 PM - Dinner and Evening</h2>

          <p>
            Options for dinner:
          </p>

          <ol>
            <li>
              <strong>Cook at your rental</strong>: Full kitchen with everything you need
            </li>
            <li>
              <strong>Drive to town</strong>: Crested Butte is 5 minutes away, dozens of restaurants
            </li>
            <li>
              <strong>Order delivery</strong>: Several restaurants deliver to the property
            </li>
          </ol>

          <p>
            Tonight you're cooking pasta—easy, affordable, and everyone's together around the dining table
            sharing stories from the day.
          </p>

          <h2>8:00 PM - Evening Wind-Down</h2>

          <p>
            After a full day of skiing (10,000+ vertical feet), everyone's tired in the best way:
          </p>

          <ul>
            <li>Kids watching a movie</li>
            <li>Adults planning tomorrow's ski strategy</li>
            <li>Maybe another hot tub session</li>
            <li>Early bedtime—tomorrow's another big day</li>
          </ul>

          <h2>The Stats: Your Day in Numbers</h2>

          <p>
            Let's quantify what true ski-in/ski-out delivered today:
          </p>

          <h3>Ski-In/Ski-Out (11 Emmons Road)</h3>

          <ul>
            <li>
              <strong>Runs completed</strong>: 18 runs
            </li>
            <li>
              <strong>Vertical feet</strong>: ~14,000 feet
            </li>
            <li>
              <strong>Time on slopes</strong>: 6.5 hours of actual skiing
            </li>
            <li>
              <strong>Transportation time</strong>: 3 minutes total for the entire day
            </li>
            <li>
              <strong>Stress level</strong>: 2/10 (only because legs are sore)
            </li>
            <li>
              <strong>Money spent on food</strong>: $40 for family of four
            </li>
          </ul>

          <h3>Typical Shuttle Property (Comparison)</h3>

          <ul>
            <li>
              <strong>Runs completed</strong>: 12 runs (33% fewer)
            </li>
            <li>
              <strong>Vertical feet</strong>: ~9,000 feet
            </li>
            <li>
              <strong>Time on slopes</strong>: 5 hours of actual skiing
            </li>
            <li>
              <strong>Transportation time</strong>: 90 minutes lost to shuttles and waits
            </li>
            <li>
              <strong>Stress level</strong>: 7/10 (rushing, coordinating, crowds)
            </li>
            <li>
              <strong>Money spent on food</strong>: $80-100 for resort cafeteria lunch
            </li>
          </ul>

          <p>
            <strong>Net difference for one day</strong>: 1.5 more hours of skiing, 6 more runs, $40-60 saved,
            and significantly less stress.
          </p>

          <p>
            Over a 5-day trip, that compounds to an extra day's worth of skiing and $200-300 in savings.
          </p>

          <h2>What Guests Say</h2>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "This was our typical day, and it was incredible. We'd never been able to do the midday lunch
            break before—it completely changed how much the kids enjoyed skiing. No meltdowns, no exhaustion.
            Just pure fun." — Karen M., January 2025
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "I tracked it with my ski app: 18 runs here vs. 11 runs at our old shuttle-based rental. Same
            effort, 60% more skiing. That's the ski-in/ski-out advantage." — Tom R., February 2025
          </blockquote>

          <h2>Experience This Day Yourself</h2>

          <p>
            This isn't an idealized scenario—it's a real day at <strong>11 Emmons Road</strong>, 50 feet from
            Red Lady Express lift in Crested Butte.
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
                  href="/blog/5-reasons-ski-in-ski-out-changes-vacation"
                  className="text-primary hover:underline"
                >
                  5 Reasons Ski-In/Ski-Out Changes Your Vacation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/ski-in-ski-out-vs-shuttle-comparison"
                  className="text-primary hover:underline"
                >
                  Ski-In/Ski-Out vs Shuttle Access Comparison
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
