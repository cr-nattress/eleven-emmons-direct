import { getMarkdownContent } from '@/lib/markdown'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import LocationContent from './LocationContent'

export default async function Location() {
  const content = await getMarkdownContent('area')

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <LocationContent>
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
        </LocationContent>
      </div>
    </section>
  )
}
