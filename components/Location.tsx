import { getMarkdownContent } from '@/lib/markdown'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

export default async function Location() {
  const content = await getMarkdownContent('area')

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Location & Area
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover Crested Butte - Colorado's Last Great Ski Town
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
              {/* TODO: Add Google Maps embed or similar */}
              <div className="flex h-full items-center justify-center text-gray-400">
                <div className="text-center">
                  <p className="text-sm font-medium">Interactive Map</p>
                  <p className="mt-2 text-xs">
                    11 Emmons Road, Crested Butte, CO
                  </p>
                  <p className="mt-4 text-xs opacity-50">
                    Map integration coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Quick directions */}
            <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Getting Here
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span>
                    <strong>Gunnison-Crested Butte Airport:</strong> 30 miles
                    (45 min drive)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span>
                    <strong>Denver International Airport:</strong> 230 miles (4
                    hours)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <span>
                    <strong>Mountain Express:</strong> Shuttle service available
                    from airports
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="prose prose-lg max-w-none">
              <MDXRemote
                source={content.source}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: 'append' }],
                      [
                        rehypePrettyCode,
                        {
                          theme: 'github-dark',
                          keepBackground: true,
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>

            {/* Nearby attractions */}
            <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Nearby Attractions
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-medium text-gray-900">Winter</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Crested Butte Mountain Resort</li>
                    <li>• Cross-country skiing</li>
                    <li>• Snowshoeing trails</li>
                    <li>• Ice skating</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Summer</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Mountain biking</li>
                    <li>• Hiking trails</li>
                    <li>• Wildflower viewing</li>
                    <li>• Fly fishing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
