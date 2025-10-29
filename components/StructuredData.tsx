export default function StructuredData() {
  // VacationRental Schema with AggregateRating and LocationFeatureSpecification
  const vacationRentalSchema = {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    name: '11 Emmons Road, Unit 324 - Ski In Ski Out Crested Butte',
    description:
      'True ski-in/ski-out luxury vacation rental just 50 feet from Red Lady Express lift in Crested Butte, Colorado. Recently renovated with mountain views and modern amenities.',
    url: 'https://11emmons.netlify.app',
    image: [
      'https://11emmons.netlify.app/images/airbnb-2-1.png',
      'https://11emmons.netlify.app/images/airbnb-3-1.png',
      'https://11emmons.netlify.app/images/airbnb-4-1.png',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 Emmons Road, Unit 324',
      addressLocality: 'Crested Butte',
      addressRegion: 'CO',
      postalCode: '81225',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.8997,
      longitude: -106.9614,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.98',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '88',
    },
    numberOfRooms: 1,
    numberOfBedrooms: 1,
    numberOfBathroomsTotal: 1,
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: 4,
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 650,
      unitCode: 'SQF',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Ski-in/ski-out access',
        value: 'Direct access to Red Lady Express lift - only 50 feet away',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Mountain View',
        value: 'Stunning mountain views from private balcony',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'WiFi',
        value: 'High-speed WiFi (250+ Mbps)',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Smart Home',
        value: 'Smart thermostat, lights, and keyless entry',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Washer/Dryer',
        value: 'In-unit washer and dryer',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Recently Renovated',
        value: 'Fully renovated in 2024',
      },
    ],
    checkinTime: '16:00:00',
    checkoutTime: '10:00:00',
    petsAllowed: false,
  }

  // FAQPage Schema for common ski-in/ski-out questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is 11 Emmons Road truly ski-in/ski-out?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! 11 Emmons Road is a true ski-in/ski-out property located just 50 feet from the Red Lady Express lift. You can ski directly to and from the lift without walking on roads or taking shuttles.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is the property from the Red Lady Express lift?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The property is only 50 feet from the Red Lady Express lift, making it one of the closest ski-in/ski-out rentals in Crested Butte. You can be on the slopes in under a minute.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the guest rating for 11 Emmons Road?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '11 Emmons Road has an exceptional 4.98-star rating based on 88 verified guest reviews, making it one of the highest-rated vacation rentals in Crested Butte.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many guests can stay at 11 Emmons Road?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The property comfortably accommodates up to 4 guests with 1 bedroom, 1 bathroom, and 650 square feet of beautifully appointed living space.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should I book direct instead of through Airbnb or VRBO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Booking direct saves you 15% compared to third-party platforms. You get the same great property at a lower price, with direct communication with the property owner.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities does the property offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The property features high-speed WiFi (250+ Mbps), smart home controls (thermostat, lights, locks), a mountain view balcony, in-unit washer/dryer, and was fully renovated in 2024. All modern amenities you need for a comfortable ski vacation.',
        },
      },
    ],
  }

  // LocalBusiness Schema for local SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': 'https://11emmons.netlify.app/#lodging',
    name: '11 Emmons Road Vacation Rental',
    description:
      'Premium ski-in/ski-out vacation rental in Crested Butte, Colorado',
    url: 'https://11emmons.netlify.app',
    telephone: '+1-970-309-0488',
    email: 'info@11emmons.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11 Emmons Road, Unit 324',
      addressLocality: 'Crested Butte',
      addressRegion: 'CO',
      postalCode: '81225',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.8997,
      longitude: -106.9614,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.98',
      bestRating: '5',
      ratingCount: '88',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  }

  return (
    <>
      {/* VacationRental Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vacationRentalSchema),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
}
