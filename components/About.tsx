import { getMarkdownContent } from '@/lib/markdown'

export default async function About() {
  const content = await getMarkdownContent('property')

  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to 11 Emmons Road
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your home away from home in Crested Butte
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Quick Facts
              </h3>
              <dl className="space-y-4">
                <div className="flex items-start">
                  <dt className="font-medium text-gray-700 min-w-[120px]">
                    Location:
                  </dt>
                  <dd className="text-gray-600">
                    Unit 324, 11 Emmons Road, Crested Butte, CO 81224
                  </dd>
                </div>
                <div className="flex items-start">
                  <dt className="font-medium text-gray-700 min-w-[120px]">
                    Property Type:
                  </dt>
                  <dd className="text-gray-600">Vacation Rental Condo</dd>
                </div>
                <div className="flex items-start">
                  <dt className="font-medium text-gray-700 min-w-[120px]">
                    Bedrooms:
                  </dt>
                  <dd className="text-gray-600">2 Bedrooms</dd>
                </div>
                <div className="flex items-start">
                  <dt className="font-medium text-gray-700 min-w-[120px]">
                    Bathrooms:
                  </dt>
                  <dd className="text-gray-600">2 Bathrooms</dd>
                </div>
                <div className="flex items-start">
                  <dt className="font-medium text-gray-700 min-w-[120px]">
                    Sleeps:
                  </dt>
                  <dd className="text-gray-600">Up to 6 guests</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg bg-primary/5 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Why Book Direct?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Best rates without booking fees
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Direct communication with property management
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Flexible check-in and special requests
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
