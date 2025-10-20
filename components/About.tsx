import { getMarkdownContent } from '@/lib/markdown'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import AboutContent from './AboutContent'

export default async function About() {
  const content = await getMarkdownContent('property')

  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AboutContent>
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
        </AboutContent>
      </div>
    </section>
  )
}
