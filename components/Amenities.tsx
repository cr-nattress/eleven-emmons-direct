import { getMarkdownContent } from '@/lib/markdown'

export default async function Amenities() {
  const content = await getMarkdownContent('amenities')

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Amenities & Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need for a comfortable mountain getaway
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
        </div>

        {/* Icon grid for common amenities */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '🏔️',
              title: 'Mountain Views',
              description: 'Stunning views of the surrounding peaks',
            },
            {
              icon: '🔥',
              title: 'Fireplace',
              description: 'Cozy fireplace for cold mountain nights',
            },
            {
              icon: '🧑‍🍳',
              title: 'Full Kitchen',
              description: 'Complete kitchen with modern appliances',
            },
            {
              icon: '📶',
              title: 'High-Speed WiFi',
              description: 'Stay connected with fast internet',
            },
            {
              icon: '🅿️',
              title: 'Free Parking',
              description: 'Dedicated parking space included',
            },
            {
              icon: '🧺',
              title: 'Washer/Dryer',
              description: 'In-unit laundry for your convenience',
            },
            {
              icon: '❄️',
              title: 'Ski-In/Out',
              description: 'Easy access to slopes and trails',
            },
            {
              icon: '🛁',
              title: 'Hot Tub',
              description: 'Relax after a day on the mountain',
            },
          ].map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{amenity.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {amenity.title}
              </h3>
              <p className="text-sm text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
