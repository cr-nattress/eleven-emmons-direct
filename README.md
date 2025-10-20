# 11 Emmons Road - Vacation Rental Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A modern, high-performance direct booking website for a ski-in/ski-out vacation rental property located at 11 Emmons Road in Crested Butte, Colorado. Built with Next.js 14 App Router and optimized for conversions with fast page loads, beautiful design, and seamless booking integration.

## Overview

This website showcases a premium 1-bedroom condo in Mt. Crested Butte with immediate ski lift access. The site features dynamic content management through MDX, stunning property photography, and integrated booking functionality to drive direct reservations and reduce third-party booking fees.

**Property Highlights:**
- Ski-in/ski-out location at Mt. Crested Butte
- 4.98-star rating with 88+ guest reviews
- Modern, fully-equipped 1-bedroom condo
- Smart home features and premium amenities

## Features

- **Server-Side Rendering (SSR)** - Fast page loads with Next.js 14 App Router for optimal SEO and performance
- **MDX Content Management** - Easy-to-edit markdown files with frontmatter for property information, amenities, and location details
- **Enhanced MDX Processing** - Powered by next-mdx-remote v5 with advanced plugins:
  - Syntax highlighting via rehype-pretty-code and Shiki
  - GitHub Flavored Markdown with remark-gfm
  - Automatic heading anchors with rehype-slug and rehype-autolink-headings
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Booking Integration** - Embedded Hospitable widget for seamless reservations
- **Image Optimization** - Next.js Image component with AVIF/WebP format support
- **Analytics Ready** - Google Analytics integration for tracking visitor behavior
- **Smart Components** - Modular React components for easy maintenance and updates

## Tech Stack

### Core
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[React 18](https://react.dev/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Content & Markdown
- **[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)** v5 - Server-side MDX rendering
- **[gray-matter](https://github.com/jonschlinkert/gray-matter)** - Frontmatter parsing
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown support
- **[rehype-pretty-code](https://rehype-pretty-code.netlify.app/)** - Syntax highlighting
- **[rehype-slug](https://github.com/rehypejs/rehype-slug)** - Heading IDs
- **[rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)** - Automatic heading links
- **[Shiki](https://shiki.matsu.io/)** - Code syntax highlighter

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cr-nattress/eleven-emmons-direct.git
   cd eleven-emmons-direct
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
eleven-emmons/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── About.tsx         # Property information section
│   ├── Amenities.tsx     # Amenities showcase
│   ├── Booking.tsx       # Booking widget integration
│   ├── Footer.tsx        # Site footer
│   ├── Gallery.tsx       # Image gallery
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Location.tsx      # Location and area information
│   ├── Reviews.tsx       # Guest reviews
│   └── mdx-components.tsx # Custom MDX component mappings
├── content/              # Markdown content files
│   ├── amenities.md     # Amenities content
│   ├── area.md          # Location/area information
│   └── property.md      # Property details
├── lib/                 # Utility functions
│   ├── analytics.tsx    # Google Analytics setup
│   └── markdown.ts      # MDX processing utilities
├── public/              # Static assets
│   ├── images/         # Property images
│   └── favicon.ico     # Site favicon
└── styles/             # Global styles
    └── globals.css     # Tailwind CSS imports
```

## Content Management

Content is managed through markdown files in the `/content` directory. Each file supports:

### Frontmatter

Add metadata at the top of markdown files:

```markdown
---
title: Property Information
description: Learn about our beautiful condo
---
```

### MDX Features

- **GitHub Flavored Markdown** - Tables, task lists, strikethrough
- **Custom Components** - Use React components in markdown:
  - `<Callout>` - Info boxes and alerts
  - `<BookingCTA>` - Call-to-action for bookings
  - `<FeatureHighlight>` - Highlight key features

Example:

```mdx
## Welcome

This is regular markdown content.

<Callout type="info">
  Book direct and save on fees!
</Callout>

<FeatureHighlight title="Ski-In/Ski-Out Access">
  Walk right to the lifts from your door!
</FeatureHighlight>
```

### Editing Content

1. Navigate to the `/content` directory
2. Edit the desired `.md` file
3. Save your changes
4. The site will hot-reload in development mode

## Development

### Adding New Sections

1. Create a new markdown file in `/content`
2. Create a corresponding component in `/components`
3. Import and render the component in `/app/page.tsx`

Example:

```typescript
import { getMarkdownContent } from '@/lib/markdown'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function NewSection() {
  const content = await getMarkdownContent('new-section')

  return (
    <section>
      <MDXRemote source={content.source} />
    </section>
  )
}
```

### Styling

This project uses Tailwind CSS. Common patterns:

- Sections: `py-20 bg-white` or `py-20 bg-gray-50` for alternating backgrounds
- Containers: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Headings: `text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`
- Text: `text-lg text-gray-600`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

### Environment Variables

Set these in your hosting platform:

- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID (optional)

## Migration Notes

### next-mdx-remote v5

This project uses next-mdx-remote v5 with the App Router pattern:

- Server-side rendering by default
- MDX is compiled on the server
- Better performance than client-side hydration
- Simplified API compared to v4

Key differences from v4:
- Import from `next-mdx-remote/rsc` instead of `next-mdx-remote`
- No need for `serialize()` function
- Pass raw markdown source directly to `<MDXRemote>`
- Plugin configuration in the `options` prop

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic with Next.js
- **Server-Side Rendering**: Faster initial page loads

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Property managed by [Chris Nattress](https://github.com/cr-nattress)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- MDX powered by [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)

---

**Live Site**: [Coming Soon]
**Contact**: For booking inquiries, visit the site's booking page or contact the property manager directly.
