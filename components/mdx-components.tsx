import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override anchor tags with Next.js Link
    a: (props) => (
      <Link
        href={String(props.href)}
        className="text-primary hover:text-primary-dark underline transition-colors"
      >
        {props.children}
      </Link>
    ),

    // Override img tags with Next.js Image
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <Image
        src={props.src ?? ''}
        alt={props.alt ?? ''}
        width={(props.width as number) ?? 1200}
        height={(props.height as number) ?? 600}
        className="rounded-lg my-6 w-full h-auto"
      />
    ),

    // Custom Callout component for info boxes, warnings, and success messages
    Callout: ({ children, type = 'info' }: {
      children: React.ReactNode
      type?: 'info' | 'warning' | 'success' | 'error'
    }) => {
      const styles = {
        info: 'border-blue-500 bg-blue-50 text-blue-900',
        warning: 'border-yellow-500 bg-yellow-50 text-yellow-900',
        success: 'border-green-500 bg-green-50 text-green-900',
        error: 'border-red-500 bg-red-50 text-red-900',
      }

      return (
        <div className={`border-l-4 p-4 my-6 rounded ${styles[type]}`}>
          {children}
        </div>
      )
    },

    // BookingCTA component for call-to-action boxes
    BookingCTA: ({ children }: { children: React.ReactNode }) => (
      <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-8 text-center">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
        <a
          href="#booking"
          className="inline-block mt-4 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
        >
          Check Availability
        </a>
      </div>
    ),

    // FeatureHighlight component for highlighting key features
    FeatureHighlight: ({ title, children }: {
      title: string
      children: React.ReactNode
    }) => (
      <div className="bg-gray-50 rounded-lg p-6 my-6 border border-gray-200">
        <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    ),

    ...components,
  }
}
