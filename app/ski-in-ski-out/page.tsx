import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Ski In Ski Out Crested Butte: Complete Guide | 11 Emmons Road 50 Feet from Lifts',
  description:
    'Discover true ski-in/ski-out luxury at 11 Emmons Road, just 50 feet from Red Lady Express lift in Crested Butte. Complete guide to ski-in/ski-out access, benefits, and what to expect.',
  keywords: [
    'ski in ski out crested butte',
    'ski in ski out rental',
    'red lady express lift',
    'crested butte ski rental',
    'true ski in ski out',
    '11 emmons road',
  ],
  openGraph: {
    title: 'Ski In Ski Out Crested Butte: Complete Guide | 11 Emmons Road',
    description:
      'True ski-in/ski-out luxury just 50 feet from Red Lady Express lift. Your comprehensive guide to ski-in/ski-out access in Crested Butte.',
    url: 'https://11emmons.netlify.app/ski-in-ski-out',
    type: 'article',
    images: [
      {
        url: '/images/airbnb-2-1.png',
        width: 1200,
        height: 630,
        alt: 'Ski in ski out Crested Butte - 11 Emmons Road just 50 feet from Red Lady Express lift',
      },
    ],
  },
}

export default function SkiInSkiOutPage() {
  // Article schema markup
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Ski In Ski Out Crested Butte: Complete Guide to 11 Emmons Road',
    description:
      'Comprehensive guide to ski-in/ski-out access at 11 Emmons Road, just 50 feet from Red Lady Express lift in Crested Butte, Colorado.',
    image: 'https://11emmons.netlify.app/images/airbnb-2-1.png',
    datePublished: '2025-10-29',
    dateModified: '2025-10-29',
    author: {
      '@type': 'Organization',
      name: '11 Emmons Road',
    },
    publisher: {
      '@type': 'Organization',
      name: '11 Emmons Road',
      logo: {
        '@type': 'ImageObject',
        url: 'https://11emmons.netlify.app/images/airbnb-2-1.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://11emmons.netlify.app/ski-in-ski-out',
    },
  }

  return (
    <main className="bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/airbnb-2-1.png"
          alt="Ski in ski out Crested Butte vacation rental - 11 Emmons Road building exterior just 50 feet from Red Lady Express lift"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Ski In Ski Out Crested Butte: Your Complete Guide
            </h1>
            <p className="mb-8 text-xl text-white sm:text-2xl">
              Discover true ski-in/ski-out luxury at 11 Emmons Road
              <br />
              Just 50 feet from Red Lady Express lift
            </p>
            <Link
              href="#booking"
              className="inline-block rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto">
          <p className="lead text-xl text-gray-700">
            When searching for the perfect{' '}
            <strong>ski in ski out Crested Butte</strong> vacation rental,
            proximity to the lifts matters. At 11 Emmons Road, Unit 324,
            you&apos;re not just near the slopes—you&apos;re only{' '}
            <strong>50 feet from the Red Lady Express lift</strong>, offering
            genuine ski-in/ski-out access that most properties can only dream
            of.
          </p>

          <p>
            This comprehensive guide covers everything you need to know about
            ski-in/ski-out access at Crested Butte Mountain Resort, why true
            proximity matters, and what makes 11 Emmons Road the ultimate
            basecamp for your ski vacation.
          </p>

          {/* Table of Contents */}
          <div className="my-12 rounded-lg border border-gray-200 bg-gray-50 p-8">
            <h2 className="mt-0 text-2xl font-bold text-gray-900">
              Quick Navigation
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-ski-in-ski-out" className="text-primary">
                  What is Ski-In/Ski-Out?
                </a>
              </li>
              <li>
                <a href="#true-ski-in-ski-out" className="text-primary">
                  Why 11 Emmons is True Ski-In/Ski-Out
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-primary">
                  Benefits of Ski-In/Ski-Out Access
                </a>
              </li>
              <li>
                <a href="#red-lady-express" className="text-primary">
                  About Red Lady Express Lift
                </a>
              </li>
              <li>
                <a href="#your-stay" className="text-primary">
                  What to Expect During Your Stay
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary">
                  Guest Testimonials
                </a>
              </li>
              <li>
                <a href="#crested-butte-skiing" className="text-primary">
                  Crested Butte Skiing Overview
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* What is Ski-In/Ski-Out? */}
          <h2 id="what-is-ski-in-ski-out">What is Ski-In/Ski-Out?</h2>

          <p>
            <strong>Ski-in/ski-out</strong> refers to the ability to access ski
            slopes directly from your accommodation without the need for
            transportation, walking on roads, or taking shuttle buses. It means
            you can put on your skis at your door and ski directly to the lift,
            then ski back to your door at the end of the day.
          </p>

          <h3>The Reality: Not All &quot;Ski-In/Ski-Out&quot; is Equal</h3>

          <p>
            Many properties advertise as ski-in/ski-out, but the reality varies
            significantly:
          </p>

          <ul>
            <li>
              <strong>True Ski-In/Ski-Out</strong> (like 11 Emmons Road): Less
              than 100 feet to lifts, direct ski access both directions
            </li>
            <li>
              <strong>Ski-Near</strong>: 200-500 feet requiring short walk in
              ski boots
            </li>
            <li>
              <strong>Shuttle Required</strong>: Properties claiming
              &quot;ski-in/ski-out&quot; but requiring shuttle service
            </li>
            <li>
              <strong>One-Way Access</strong>: Can ski down but must walk or
              shuttle back up
            </li>
          </ul>

          <p>
            At <strong>11 Emmons Road</strong>, you experience authentic
            ski-in/ski-out access. The Red Lady Express lift is{' '}
            <strong>exactly 50 feet</strong> from the building entrance—closer
            than most parking lots are to their lifts.
          </p>

          <div className="my-8">
            <Image
              src="/images/airbnb-7-1.png"
              alt="Private covered balcony with mountain views at ski in ski out 11 Emmons Road Crested Butte"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              View of the slopes from your private balcony at 11 Emmons Road
            </p>
          </div>

          {/* True Ski-In/Ski-Out */}
          <h2 id="true-ski-in-ski-out">
            Why 11 Emmons Road is True Ski-In/Ski-Out
          </h2>

          <p>
            Located at the base of Crested Butte Mountain Resort, 11 Emmons
            Road, Unit 324 offers unparalleled proximity to Red Lady Express
            lift. Here&apos;s what makes our location exceptional:
          </p>

          <h3>The 50-Foot Advantage</h3>

          <p>
            From the moment you step out of the building to the moment you
            click into your skis at the lift line, you&apos;ll travel just{' '}
            <strong>50 feet</strong>. That&apos;s approximately:
          </p>

          <ul>
            <li>15 seconds of walking in ski boots</li>
            <li>3-4 car lengths</li>
            <li>Half a tennis court</li>
            <li>Less distance than most hotel lobbies</li>
          </ul>

          <h3>Direct Access, No Obstacles</h3>

          <p>The path from 11 Emmons Road to Red Lady Express is:</p>

          <ul>
            <li>
              <strong>Paved and maintained</strong>: No icy walkways or uneven
              terrain
            </li>
            <li>
              <strong>No road crossings</strong>: You never cross vehicle
              traffic
            </li>
            <li>
              <strong>No elevation changes</strong>: Flat, easy access
            </li>
            <li>
              <strong>Clear sight line</strong>: See the lift line from your
              balcony
            </li>
            <li>
              <strong>Covered areas</strong>: Protected walkway for snowy days
            </li>
          </ul>

          <h3>Ski Back to Your Door</h3>

          <p>
            Unlike many so-called ski-in/ski-out properties where you can only
            ski <em>to</em> the slopes, 11 Emmons Road offers true two-way
            access. At the end of your ski day, simply ski down to the base
            area and you&apos;re steps from your door.
          </p>

          <div className="my-8">
            <Image
              src="/images/airbnb-1-1.png"
              alt="Modern living room at 11 Emmons Road ski in ski out rental with open kitchen and mountain decor"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              Return to modern comfort after a day on the slopes
            </p>
          </div>

          {/* Benefits */}
          <h2 id="benefits">Benefits of True Ski-In/Ski-Out Access</h2>

          <p>
            The difference between true ski-in/ski-out and &quot;close to the
            slopes&quot; becomes apparent from your first morning. Here&apos;s
            why proximity matters:
          </p>

          <h3>1. Maximize Your Ski Time</h3>

          <p>
            When you&apos;re 50 feet from the lift, you can be first on the
            mountain and last off. No parking lot walks, no shuttle schedules,
            no waiting. Studies show ski-in/ski-out guests average 45-60 more
            minutes on the slopes per day compared to guests who drive or
            shuttle.
          </p>

          <p>
            <strong>Time saved per 5-day trip</strong>: 4-5 hours of additional
            skiing
          </p>

          <h3>2. Midday Convenience</h3>

          <p>
            True ski-in/ski-out access means you can easily return to your
            rental for:
          </p>

          <ul>
            <li>
              <strong>Lunch breaks</strong>: Save money by eating in your
              fully-equipped kitchen
            </li>
            <li>
              <strong>Warm-up breaks</strong>: Take a quick break on cold days
            </li>
            <li>
              <strong>Gear changes</strong>: Swap out layers as conditions
              change
            </li>
            <li>
              <strong>Afternoon naps</strong>: Recharge for après-ski or night
              skiing
            </li>
          </ul>

          <h3>3. Family-Friendly Flexibility</h3>

          <p>
            For families with children or varying skill levels, proximity
            matters enormously:
          </p>

          <ul>
            <li>Parents can tag-team: One skis while one stays with kids</li>
            <li>Quick bathroom breaks without leaving the mountain</li>
            <li>Easily handle forgotten items (gloves, goggles, snacks)</li>
            <li>Non-skiing family members can easily join for lunch</li>
          </ul>

          <h3>4. First Tracks and Last Runs</h3>

          <p>
            Being 50 feet from the lift means you can roll out of bed and be in
            the lift line before most people have left their parking spots.
            Fresh powder mornings? You&apos;ll get first tracks. Beautiful
            afternoon light? You can ski until the lifts stop.
          </p>

          <h3>5. No Gear Hassles</h3>

          <p>
            Forget hauling ski equipment to and from parking lots. Your ski
            storage is right at the property, and the walk is so short that:
          </p>

          <ul>
            <li>You can make multiple trips without frustration</li>
            <li>Forgot something? Back to the room in under a minute</li>
            <li>End-of-day exhaustion? Short walk means no shuttle wait</li>
          </ul>

          <div className="my-8">
            <Image
              src="/images/airbnb-4-1.png"
              alt="Fully equipped modern kitchen with bar seating at 11 Emmons ski in ski out property"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              Save money with midday breaks in your fully-equipped kitchen
            </p>
          </div>

          {/* Red Lady Express */}
          <h2 id="red-lady-express">About Red Lady Express Lift</h2>

          <p>
            Red Lady Express is one of Crested Butte Mountain Resort&apos;s
            primary lifts, and 11 Emmons Road sits at its base. Here&apos;s why
            this lift location is ideal:
          </p>

          <h3>Lift Specifications</h3>

          <ul>
            <li>
              <strong>Type</strong>: High-speed quad chairlift
            </li>
            <li>
              <strong>Vertical rise</strong>: 2,028 feet
            </li>
            <li>
              <strong>Length</strong>: 6,882 feet
            </li>
            <li>
              <strong>Ride time</strong>: Approximately 7 minutes
            </li>
            <li>
              <strong>Capacity</strong>: 2,400 skiers per hour
            </li>
          </ul>

          <h3>Access to Terrain</h3>

          <p>From Red Lady Express, you have immediate access to:</p>

          <ul>
            <li>
              <strong>Beginner runs</strong>: Perfect for families and those
              learning
            </li>
            <li>
              <strong>Intermediate cruisers</strong>: Great for warm-up runs
            </li>
            <li>
              <strong>Advanced terrain</strong>: Quick connection to expert
              runs
            </li>
            <li>
              <strong>Other lifts</strong>: Easy access to the entire mountain
            </li>
          </ul>

          <h3>Efficiency & Crowd Management</h3>

          <p>
            Red Lady Express is known for efficient line management. Even on
            busy holiday weekends, wait times rarely exceed 5-10 minutes. Being
            first in line means you can choose your start time strategically.
          </p>

          {/* Your Stay */}
          <h2 id="your-stay">What to Expect During Your Stay</h2>

          <h3>The Property: Modern Comfort Meets Mountain Convenience</h3>

          <p>
            11 Emmons Road, Unit 324 is a <strong>recently renovated</strong>{' '}
            (2024) 1-bedroom, 1-bathroom vacation rental offering 650 square
            feet of thoughtfully designed space:
          </p>

          <h4>Accommodations</h4>

          <ul>
            <li>
              <strong>Sleeps 4</strong>: Queen bed in bedroom, queen sleeper
              sofa in living room
            </li>
            <li>
              <strong>Modern bathroom</strong>: Walk-in shower with premium
              fixtures
            </li>
            <li>
              <strong>Full kitchen</strong>: Stainless appliances, cookware,
              coffee maker
            </li>
            <li>
              <strong>Smart home features</strong>: Keyless entry,
              programmable thermostat
            </li>
            <li>
              <strong>High-speed WiFi</strong>: 250+ Mbps for streaming and
              remote work
            </li>
          </ul>

          <h4>The Balcony Experience</h4>

          <p>
            Your private mountain-view balcony offers front-row seats to the
            ski action. Watch skiers make their way down the slopes while you
            enjoy morning coffee or après-ski beverages.
          </p>

          <div className="my-8">
            <Image
              src="/images/airbnb-5-2.png"
              alt="Master bedroom with custom wood accent wall at 11 Emmons Road Crested Butte vacation rental"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              Comfortable sleeping quarters after a full day of skiing
            </p>
          </div>

          <h3>A Typical Ski Day at 11 Emmons Road</h3>

          <p>
            <strong>7:00 AM</strong>: Wake up and check snow conditions from
            your balcony
            <br />
            <strong>7:30 AM</strong>: Make breakfast in your kitchen with
            mountain views
            <br />
            <strong>8:15 AM</strong>: Get dressed, gear up
            <br />
            <strong>8:45 AM</strong>: Walk 50 feet to Red Lady Express
            <br />
            <strong>9:00 AM</strong>: First chair up the mountain (lifts open
            at 9:00 AM)
            <br />
            <strong>12:30 PM</strong>: Quick lunch break at the condo
            <br />
            <strong>1:15 PM</strong>: Back on the slopes
            <br />
            <strong>4:00 PM</strong>: Last run down, ski right to your door
            <br />
            <strong>4:15 PM</strong>: Hot shower in your private bathroom
            <br />
            <strong>5:00 PM</strong>: Relax with après-ski drinks on the
            balcony
          </p>

          <p>
            Notice how the 50-foot proximity eliminates all the usual friction
            points: no parking lot treks, no shuttle schedules, no carrying
            gear long distances.
          </p>

          {/* Testimonials */}
          <h2 id="testimonials">Guest Testimonials</h2>

          <p>
            With a <strong>4.98-star rating</strong> from{' '}
            <strong>88 verified guests</strong>, 11 Emmons Road consistently
            receives praise for its unbeatable location:
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            &quot;This is TRUE ski-in/ski-out. We&apos;ve stayed at other
            places that claimed this, but nothing compares to being 50 feet
            from the lift. Game changer for our family ski trip.&quot;
            <br />
            <span className="not-italic text-gray-600">
              — Sarah & Mike, Denver, CO
            </span>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            &quot;The convenience is unreal. We maximized every minute on the
            slopes because there was zero commute. The property itself is
            beautifully updated and spotless.&quot;
            <br />
            <span className="not-italic text-gray-600">
              — Jennifer, Austin, TX
            </span>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            &quot;After years of skiing Crested Butte and dealing with parking
            hassles, this was heaven. Walk out the door, ski all day, walk
            back. Perfect.&quot;
            <br />
            <span className="not-italic text-gray-600">
              — Robert, Chicago, IL
            </span>
          </blockquote>

          {/* Crested Butte Overview */}
          <h2 id="crested-butte-skiing">
            Why Crested Butte for Ski-In/Ski-Out?
          </h2>

          <p>
            Crested Butte Mountain Resort offers some of Colorado&apos;s most
            diverse and challenging terrain, making ski-in/ski-out access even
            more valuable:
          </p>

          <h3>The Mountain Stats</h3>

          <ul>
            <li>
              <strong>Vertical drop</strong>: 3,062 feet (9th largest in North
              America)
            </li>
            <li>
              <strong>Skiable acres</strong>: 1,547 acres
            </li>
            <li>
              <strong>Number of trails</strong>: 121
            </li>
            <li>
              <strong>Terrain breakdown</strong>: 23% beginner, 57%
              intermediate, 20% expert
            </li>
            <li>
              <strong>Average snowfall</strong>: 309 inches per year
            </li>
            <li>
              <strong>Elevation</strong>: Base 9,375 ft, Summit 12,162 ft
            </li>
          </ul>

          <h3>What Makes Crested Butte Special</h3>

          <p>
            Known as &quot;Colorado&apos;s Last Great Ski Town,&quot; Crested
            Butte maintains an authentic, laid-back atmosphere without the
            pretension of larger resorts. The skiing is world-class, featuring:
          </p>

          <ul>
            <li>
              <strong>Extreme terrain</strong>: Over 550 acres of expert
              terrain including the famous extreme limits
            </li>
            <li>
              <strong>Family-friendly runs</strong>: Excellent beginner and
              intermediate groomed runs
            </li>
            <li>
              <strong>Tree skiing</strong>: Some of Colorado&apos;s best glade
              skiing
            </li>
            <li>
              <strong>Powder stashes</strong>: Lower crowds mean longer-lasting
              powder
            </li>
          </ul>

          <h3>Beyond Skiing: Year-Round Mountain Paradise</h3>

          <p>
            While ski-in/ski-out access is the primary draw in winter, Crested
            Butte offers incredible summer activities:
          </p>

          <ul>
            <li>
              <strong>Mountain biking</strong>: World-renowned trails including
              the Evolution Bike Park
            </li>
            <li>
              <strong>Hiking</strong>: Alpine wildflower hikes (Crested Butte
              is the Wildflower Capital of Colorado)
            </li>
            <li>
              <strong>Festivals</strong>: Music, arts, and wildflower festivals
            </li>
            <li>
              <strong>Fishing</strong>: Blue-ribbon trout streams
            </li>
          </ul>

          <p>
            11 Emmons Road is available year-round, making it an ideal basecamp
            for both winter and summer adventures.
          </p>

          {/* FAQ */}
          <h2 id="faq">Frequently Asked Questions</h2>

          <h3>Is 11 Emmons Road truly ski-in/ski-out?</h3>
          <p>
            Yes, absolutely. The property is 50 feet from the Red Lady Express
            lift base. You can see the lift line from your balcony. This is
            genuine ski-in/ski-out access, not marketing language.
          </p>

          <h3>Can beginners handle the ski-in/ski-out access?</h3>
          <p>
            Yes! The terrain around 11 Emmons Road is beginner-friendly. The
            walk to the lift is flat and paved, and Red Lady Express accesses
            excellent beginner terrain.
          </p>

          <h3>Do I need to reserve parking?</h3>
          <p>
            You get one designated parking spot with your rental. Because
            you&apos;re ski-in/ski-out, you typically won&apos;t use your car
            during your stay except for arrival/departure and trips to downtown
            Crested Butte (5-minute drive).
          </p>

          <h3>How does ski-in/ski-out work at the end of the day?</h3>
          <p>
            When the lifts close at 4:00 PM, simply ski down to the base area.
            You&apos;ll see the building from the slope—it&apos;s the closest
            structure to Red Lady Express.
          </p>

          <h3>What if I want to access different lifts?</h3>
          <p>
            Red Lady Express connects to the entire mountain. You can access
            all other lifts and terrain from here. At day&apos;s end, simply
            ski back to Red Lady&apos;s base area.
          </p>

          <h3>Is the property family-friendly?</h3>
          <p>
            Absolutely. The property sleeps 4 (perfect for a family), and the
            short walk to the lift makes it easy to manage kids, gear, and
            multiple trips if needed. The kitchen facilities also help save
            money on dining out.
          </p>

          <h3>Can I book direct?</h3>
          <p>
            Yes! Booking direct saves you 15% compared to platforms like Airbnb
            or VRBO. You get the same great property, same amenities, but at a
            lower rate.
          </p>

          <h3>What&apos;s the cancellation policy?</h3>
          <p>
            We offer flexible cancellation up to 14 days before check-in for a
            full refund. We understand that mountain weather and travel plans
            can change.
          </p>

          {/* CTA Section */}
          <div className="my-16 rounded-lg bg-primary p-8 text-white">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Experience True Ski-In/Ski-Out at 11 Emmons Road
            </h2>
            <p className="mb-6 text-lg">
              Don&apos;t settle for &quot;near the slopes.&quot; Experience
              genuine ski-in/ski-out luxury just 50 feet from Red Lady Express
              lift. Book direct and save 15%.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#booking"
                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-lg font-semibold text-primary transition-all hover:bg-gray-100"
              >
                Check Availability
              </Link>
              <a
                href="tel:+19703090488"
                className="inline-block rounded-lg border-2 border-white px-8 py-3 text-center text-lg font-semibold text-white transition-all hover:bg-white hover:text-primary"
              >
                Call: 970-309-0488
              </a>
            </div>
          </div>

          {/* Internal Links */}
          <div className="my-12 rounded-lg border border-gray-200 bg-gray-50 p-8">
            <h3 className="mt-0">Explore More About 11 Emmons Road</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-primary hover:underline">
                  About the Property
                </Link>
              </li>
              <li>
                <Link
                  href="/#amenities"
                  className="text-primary hover:underline"
                >
                  Amenities & Features
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-primary hover:underline">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#location"
                  className="text-primary hover:underline"
                >
                  Location & Area Guide
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="text-primary hover:underline">
                  Booking Information
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div className="my-12">
            <h3>Additional Resources</h3>
            <ul>
              <li>
                <a
                  href="https://www.skicb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Crested Butte Mountain Resort Official Site
                </a>
              </li>
              <li>
                <a
                  href="https://www.crestedbuttechamber.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Crested Butte Chamber of Commerce
                </a>
              </li>
              <li>
                <a
                  href="https://www.visitcrestedbutte.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit Crested Butte (Tourism Board)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  )
}
