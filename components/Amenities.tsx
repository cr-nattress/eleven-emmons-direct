import { getMarkdownContent } from '@/lib/markdown'
import AmenitiesContent from './AmenitiesContent'
import type { AmenitiesFrontmatter } from '@/types/amenities'

export default async function Amenities() {
  const content = await getMarkdownContent('amenities')
  const frontmatter = content.data as unknown as AmenitiesFrontmatter

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AmenitiesContent data={frontmatter} />
      </div>
    </section>
  )
}
