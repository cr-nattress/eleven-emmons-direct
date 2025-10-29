import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Pack for Ski-In/Ski-Out Rental | Essential Packing List',
  description:
    'Complete packing guide for ski-in/ski-out rentals. Learn what you need, what to skip, and how proximity changes packing strategy.',
  keywords: [
    'ski in ski out packing list',
    'what to pack ski vacation',
    'ski rental packing guide',
    'ski vacation essentials',
  ],
  openGraph: {
    title: 'What to Pack for Ski-In/Ski-Out Rental',
    description: 'Essential packing guide for true ski-in/ski-out access',
    type: 'article',
  },
}

export default function BlogPost() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'What to Pack for Ski-In/Ski-Out Rental',
    description: 'Comprehensive packing guide optimized for ski-in/ski-out vacation rentals',
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
          alt="Comfortable bedroom at ski in ski out rental ready for guests"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
              Packing Guide
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              What to Pack for Ski-In/Ski-Out
            </h1>
            <p className="text-xl text-white">
              Complete packing list for true ski-in/ski-out rentals
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
            Packing for a <strong>ski-in/ski-out rental like 11 Emmons Road</strong> in Crested Butte
            requires a different strategy than shuttle-dependent properties. Because you're 50 feet from
            Red Lady Express lift and can return to your rental in seconds, you can pack lighter, skip
            redundant items, and focus on essentials. This guide shows you exactly what to bring—and
            what to leave home.
          </p>

          <h2>The Ski-In/Ski-Out Packing Advantage</h2>

          <p>
            <strong>At shuttle-dependent properties</strong>, you must pack for every possible scenario
            because returning to your rental means losing 45-90 minutes. This creates massive overpacking:
          </p>

          <ul>
            <li>Multiple jacket options (carry heavy backpack all day)</li>
            <li>Backup gloves, goggles, face masks</li>
            <li>Extensive first aid supplies</li>
            <li>Snacks and full water bottles</li>
            <li>Sunscreen, lip balm, hand warmers</li>
          </ul>

          <p>
            <strong>At ski-in/ski-out properties</strong>, you can retrieve anything in 2-3 minutes:
          </p>

          <ul>
            <li>Pack one set of layers—swap if needed</li>
            <li>Leave backup items at rental</li>
            <li>Return for snacks and water refills</li>
            <li>Skip heavy backpack entirely</li>
          </ul>

          <p>
            <strong>Result</strong>: Travel lighter, ski more comfortably, and eliminate "just in case"
            overpacking.
          </p>

          <h2>Essential Gear: What You Must Bring</h2>

          <h3>Ski Equipment</h3>

          <p>
            <strong>If bringing your own</strong>:
          </p>

          <ul>
            <li>Skis or snowboard</li>
            <li>Boots (most important—never compromise on boot fit)</li>
            <li>Poles</li>
            <li>Helmet</li>
          </ul>

          <p>
            <strong>If renting in Crested Butte</strong>:
          </p>

          <ul>
            <li>Book rentals in advance (holiday weeks sell out)</li>
            <li>Several rental shops within 5-minute drive of 11 Emmons Road</li>
            <li>Bring your own boots if possible (better fit, hygiene)</li>
          </ul>

          <p>
            <strong>Ski-in/ski-out tip</strong>: Store rental equipment at the property, not at rental
            shop. You're 50 feet from the lift—no need to pick up gear each morning.
          </p>

          <h3>Clothing Layers</h3>

          <p>
            <strong>Base layers (2-3 sets)</strong>:
          </p>

          <ul>
            <li>Moisture-wicking thermal tops</li>
            <li>Thermal pants or leggings</li>
            <li>Wool or synthetic blend (avoid cotton)</li>
            <li>
              <strong>Why 2-3 sets</strong>: You'll want fresh layers every 2 days
            </li>
          </ul>

          <p>
            <strong>Mid layers (2 options)</strong>:
          </p>

          <ul>
            <li>Fleece or lightweight down jacket</li>
            <li>One warmer, one lighter</li>
            <li>
              <strong>Ski-in/ski-out advantage</strong>: Pack only 2 instead of 4—can swap at rental easily
            </li>
          </ul>

          <p>
            <strong>Outer layers</strong>:
          </p>

          <ul>
            <li>Waterproof ski jacket</li>
            <li>Waterproof ski pants</li>
            <li>
              <strong>Optional</strong>: Shell jacket for warm spring days (can retrieve if needed)
            </li>
          </ul>

          <p>
            <strong>Accessories (essential)</strong>:
          </p>

          <ul>
            <li>1-2 pairs ski gloves</li>
            <li>Neck gaiter or face mask</li>
            <li>Warm beanie or helmet liner</li>
            <li>Ski socks (3-4 pairs)</li>
            <li>Goggles (1 pair sufficient—backup stays at rental)</li>
          </ul>

          <h3>Après-Ski and Evening Wear</h3>

          <p>
            <strong>Comfortable loungewear</strong>:
          </p>

          <ul>
            <li>Sweatpants, hoodies (for après-ski at rental)</li>
            <li>Warm socks or slippers</li>
            <li>Swimsuit (for hot tub)</li>
          </ul>

          <p>
            <strong>Dinner outfits (1-2)</strong>:
          </p>

          <ul>
            <li>Crested Butte is casual—jeans and nice top/flannel works everywhere</li>
            <li>Warm jacket for walking to restaurants</li>
            <li>Boots suitable for snow (not ski boots)</li>
          </ul>

          <div className="my-8">
            <Image
              src="/images/airbnb-1-1.png"
              alt="Comfortable living room at ski in ski out rental for relaxing after skiing"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-gray-600">
              Cozy space to change and warm up throughout the day
            </p>
          </div>

          <h2>Convenience Items: Pack These</h2>

          <h3>Sun Protection</h3>

          <ul>
            <li>
              <strong>High-SPF sunscreen</strong> (SPF 50+ recommended—mountain sun is intense)
            </li>
            <li>
              <strong>Lip balm with SPF</strong> (reapply every 2 hours)
            </li>
            <li>
              <strong>Sunglasses</strong> (for après-ski and town visits)
            </li>
          </ul>

          <p>
            <strong>Ski-in/ski-out tip</strong>: Keep sunscreen at rental. Reapply during midday lunch
            breaks instead of carrying it.
          </p>

          <h3>Small First Aid / Comfort Items</h3>

          <ul>
            <li>Pain reliever (ibuprofen for sore muscles)</li>
            <li>Blister treatment (moleskin or bandages)</li>
            <li>Basic bandages</li>
            <li>Prescription medications</li>
          </ul>

          <p>
            <strong>Note</strong>: No need for extensive first aid kit. You're 50 feet from your rental
            where you can address any issues.
          </p>

          <h3>Snacks and Hydration</h3>

          <p>
            <strong>What to bring from home</strong>:
          </p>

          <ul>
            <li>Favorite protein bars or snacks (if picky)</li>
            <li>Coffee/tea you prefer</li>
            <li>Special dietary items not easily found in small mountain towns</li>
          </ul>

          <p>
            <strong>What to buy locally</strong>:
          </p>

          <ul>
            <li>Fresh groceries (there's a market 5 minutes from 11 Emmons)</li>
            <li>Water (or use filtered tap water at rental)</li>
            <li>Breakfast foods, lunch supplies</li>
            <li>Beer, wine, snacks</li>
          </ul>

          <p>
            <strong>Ski-in/ski-out advantage</strong>: Don't carry snacks on slopes. Return for lunch and
            snack breaks.
          </p>

          <h2>What You Can Skip (Thanks to Ski-In/Ski-Out)</h2>

          <h3>Heavy Backpacks</h3>

          <p>
            <strong>Shuttle properties require</strong>:
          </p>

          <ul>
            <li>Large backpack with lunch, water, snacks</li>
            <li>Extra layers for temperature changes</li>
            <li>Backup gloves, goggles</li>
            <li>First aid kit</li>
            <li>Phone charger, sunscreen, etc.</li>
          </ul>

          <p>
            <strong>At 11 Emmons Road</strong>:
          </p>

          <ul>
            <li>Small hip pack or pockets sufficient</li>
            <li>Carry: phone, credit card, ChapStick</li>
            <li>Everything else stays at rental (2-minute access if needed)</li>
          </ul>

          <h3>Excessive Backup Items</h3>

          <p>
            <strong>You can skip</strong>:
          </p>

          <ul>
            <li>3rd pair of goggles</li>
            <li>5 glove options</li>
            <li>Every jacket you own</li>
            <li>Multiple water bottles</li>
          </ul>

          <p>
            <strong>Why</strong>: If you need something, you retrieve it in 2 minutes. No need to pack
            for every hypothetical scenario.
          </p>

          <h3>Expensive Portable Chargers</h3>

          <p>
            At shuttle properties, phones die because you're away from rental for 8+ hours. At ski-in/ski-out,
            you return for lunch and can charge then.
          </p>

          <h2>What's Provided at 11 Emmons Road</h2>

          <p>
            To help you pack light, here's what's already at the rental:
          </p>

          <h3>Kitchen Essentials</h3>

          <ul>
            <li>Full cookware, dishes, utensils</li>
            <li>Coffee maker</li>
            <li>Microwave, stove, oven</li>
            <li>Basic spices, oil, coffee filters</li>
          </ul>

          <p>
            <strong>You should bring</strong>: Special coffee, teas, or cooking ingredients you prefer
          </p>

          <h3>Linens and Towels</h3>

          <ul>
            <li>All bed linens provided</li>
            <li>Bath towels, hand towels</li>
            <li>Kitchen towels</li>
          </ul>

          <p>
            <strong>You can skip</strong>: Beach towels, extra linens
          </p>

          <h3>Basic Toiletries</h3>

          <ul>
            <li>Shampoo, conditioner, body wash</li>
            <li>Hand soap</li>
            <li>Toilet paper, paper towels</li>
          </ul>

          <p>
            <strong>You should bring</strong>: Specific products you prefer, toothbrush, toothpaste,
            medications
          </p>

          <h2>Family Packing: Additional Considerations</h2>

          <h3>For Young Kids (Ages 5-10)</h3>

          <p>
            <strong>Essential additions</strong>:
          </p>

          <ul>
            <li>Hand warmers (kids get cold fast)</li>
            <li>Extra gloves (kids lose/soak them)</li>
            <li>Helmet (most kids' helmets don't fit well as rentals)</li>
            <li>Favorite snacks (picky eaters)</li>
            <li>Tablet/device for downtime</li>
          </ul>

          <p>
            <strong>Ski-in/ski-out advantage</strong>: When kids get cold or tired, you can return to warm
            rental in 2 minutes. No need to pack excessive backup items.
          </p>

          <h3>For Babies/Toddlers (Not Skiing)</h3>

          <p>
            <strong>If bringing non-skiing little ones</strong>:
          </p>

          <ul>
            <li>Pack n play or request crib (contact property in advance)</li>
            <li>Baby monitor</li>
            <li>Warm clothing for outdoor time</li>
            <li>Entertainment (books, toys, tablet)</li>
          </ul>

          <p>
            <strong>Ski-in/ski-out advantage</strong>: Parents can take turns skiing while one stays with
            baby. Shift changes take 2 minutes instead of 45 minutes.
          </p>

          <h2>Packing Tips from Experienced Guests</h2>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "First time at ski-in/ski-out. I packed like usual—huge backpack, tons of backups. Never used
            90% of it. Next year I'm packing half as much." — Tom R., February 2025
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 italic">
            "The proximity changed everything. I kept sunscreen, ChapStick, and snacks at the condo instead
            of carrying them. So much more comfortable skiing without a heavy pack." — Jennifer M., March 2025
          </blockquote>

          <h2>Weather-Specific Packing</h2>

          <h3>Winter (December-February): Cold Season</h3>

          <p>
            <strong>Emphasis on</strong>:
          </p>

          <ul>
            <li>Warmest layers (temperatures 10-25°F typical)</li>
            <li>Face protection (wind chill significant)</li>
            <li>Hand/toe warmers</li>
            <li>Multiple glove options (wet gloves = miserable day)</li>
          </ul>

          <h3>Spring (March-April): Variable Conditions</h3>

          <p>
            <strong>Emphasis on</strong>:
          </p>

          <ul>
            <li>Layering flexibility (mornings cold, afternoons warm)</li>
            <li>Lighter jacket option</li>
            <li>Higher SPF sunscreen (intense spring sun)</li>
            <li>Less bulky clothing</li>
          </ul>

          <p>
            <strong>Ski-in/ski-out advantage</strong>: Spring's variable temperatures make midday clothing
            changes essential. You can adjust in 5 minutes.
          </p>

          <h2>Pre-Trip Checklist</h2>

          <p>
            <strong>1 week before</strong>:
          </p>

          <ul>
            <li>☐ Check weather forecast for Crested Butte</li>
            <li>☐ Confirm all gear fits (kids especially)</li>
            <li>☐ Reserve rental equipment if needed</li>
            <li>☐ Plan grocery list for first day</li>
          </ul>

          <p>
            <strong>Day before departure</strong>:
          </p>

          <ul>
            <li>☐ Pack prescriptions and essentials first</li>
            <li>☐ Check ski equipment condition</li>
            <li>☐ Charge all devices</li>
            <li>☐ Print confirmation info for 11 Emmons Road</li>
          </ul>

          <p>
            <strong>Day of arrival</strong>:
          </p>

          <ul>
            <li>☐ Stop at grocery store before check-in</li>
            <li>☐ Unload and organize gear immediately</li>
            <li>☐ Test all ski equipment</li>
            <li>☐ Check weather for tomorrow's skiing</li>
          </ul>

          <h2>Ready to Pack Smart?</h2>

          <p>
            Book your ski-in/ski-out vacation at <strong>11 Emmons Road</strong>, where true proximity
            means packing smarter, traveling lighter, and skiing more comfortably.
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
                  href="/blog/why-families-love-ski-in-ski-out"
                  className="text-primary hover:underline"
                >
                  Why Families Love Ski-In/Ski-Out
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
