// components/About.tsx

import { getMarkdownContent } from '@/lib/markdown'
import type { PropertyFrontmatter } from '@/types/property'

interface Stat {
  value: string
  label: string
}

export default async function About() {
  // Load property content from MDX
  const content = await getMarkdownContent('property')
  const frontmatter = content.data as unknown as PropertyFrontmatter

  // Build stats from frontmatter data
  const stats: Stat[] = [
    { value: frontmatter.guests?.toString() || '4', label: 'Guests' },
    { value: frontmatter.bedrooms?.toString() || '1', label: 'Bedroom' },
    { value: frontmatter.bathrooms?.toString() || '1', label: 'Bathroom' },
    { value: frontmatter.squareFeet?.toString() || '650', label: 'Sq Ft' },
    { value: `${frontmatter.rating || '4.98'} ⭐`, label: 'Guest Rating' },
  ]

  // Use features from frontmatter
  const features = frontmatter.features || [
    'Ski-in/ski-out access (0 min walk to lift)',
    'Smart home controls (thermostat, lights, locks)',
    'Recently renovated (2024)',
    'High-speed WiFi (250+ Mbps)',
    'Mountain view balcony',
    'In-unit washer/dryer',
  ]

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About This Property
        </h2>

        {/* Opening Narrative */}
        {frontmatter.opening && (
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12">
            {frontmatter.opening}
          </p>
        )}

        {/* Quick Stats Cards */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12"
          role="list"
          aria-label="Property statistics"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              role="listitem"
              className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Grid */}
        <ul className="grid sm:grid-cols-2 gap-4 my-12 list-none">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span
                className="text-green-600 text-xl flex-shrink-0"
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="text-gray-700 text-base md:text-lg">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Closing Narrative */}
        {frontmatter.closing && (
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-12">
            {frontmatter.closing}
          </p>
        )}
      </div>
    </section>
  )
}
