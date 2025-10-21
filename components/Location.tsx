import { getMarkdownContent } from '@/lib/markdown'
import LocationClient from './location/LocationClient'
import type { LocationFrontmatter } from '@/types/location'

export default async function Location() {
  const content = await getMarkdownContent('area')
  const frontmatter = content.data as unknown as LocationFrontmatter

  return (
    <section id="location" className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {frontmatter.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {frontmatter.subtitle}
          </p>
        </div>

        {/* Tab Navigation and Content */}
        <LocationClient data={frontmatter} />
      </div>
    </section>
  )
}
