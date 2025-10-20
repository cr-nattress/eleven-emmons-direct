import { getMarkdownContent } from '@/lib/markdown'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import AmenitiesContent from './AmenitiesContent'

export default async function Amenities() {
  const content = await getMarkdownContent('amenities')

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AmenitiesContent />

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
      </div>
    </section>
  )
}
