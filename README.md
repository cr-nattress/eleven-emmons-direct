# 11 Emmons Road - Vacation Rental Website

[![CI](https://github.com/cr-nattress/eleven-emmons-direct/actions/workflows/ci.yml/badge.svg)](https://github.com/cr-nattress/eleven-emmons-direct/actions/workflows/ci.yml)
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

3. Set up environment variables:

   ```bash
   # Copy the example environment file
   cp .env.example .env.local

   # Edit .env.local and add your API keys (optional)
   ```

   The site will work without environment variables, but you can configure:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 tracking (optional)
   - `NEXT_PUBLIC_HOSPITABLE_WIDGET_ID` - Booking widget integration (optional)
   - `NEXT_PUBLIC_DISABLE_ANIMATIONS` - Disable animations in development (optional)

   See the [Environment Variables](#environment-variables) section below for detailed configuration.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run Playwright end-to-end tests
- `npm run validate` - Run all quality checks (type-check, lint, format-check, test)

## Continuous Integration

This project uses GitHub Actions for automated quality assurance. Every push and pull request triggers:

- **Type Checking** - Verify TypeScript types
- **Linting** - Check code style with ESLint
- **Formatting** - Verify code format with Prettier
- **Testing** - Run Jest test suite with coverage
- **Build Verification** - Ensure production build succeeds
- **Security Audit** - Check for vulnerabilities with npm audit

### CI Workflow

The CI pipeline runs automatically on:

- Pushes to `master`, `main`, or `develop` branches
- Pull requests targeting `master` or `main`

View workflow runs: [GitHub Actions](https://github.com/cr-nattress/eleven-emmons-direct/actions)

### Running Checks Locally

Before pushing code, run all checks locally:

```bash
npm run validate
```

This runs the same checks as CI, catching issues before they reach the remote repository.

## Testing

The project uses a comprehensive testing strategy focused on critical user paths and core functionality.

### Test Stack

- **[Jest](https://jestjs.io/)** - Test framework
- **[React Testing Library](https://testing-library.com/react)** - Component testing utilities
- **[@testing-library/user-event](https://testing-library.com/docs/user-event/intro)** - User interaction simulation
- **[@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)** - Custom Jest matchers
- **[Playwright](https://playwright.dev/)** - End-to-end testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### Test Coverage

Current test coverage: **40%+ across all metrics**

**Coverage by Category:**

- **Critical Components**: 100% (Header, Footer, Hero, About, Booking Widget)
- **Utility Functions**: 100% (markdown parsing, logger, configuration)
- **Animated Components**: 70%+ (AnimatedButton, AnimatedCard, AnimatedSection)
- **Overall**: 40% statements, 25% branches, 28% functions, 41% lines

**Testing Strategy:**
We follow a "critical path" testing approach, prioritizing:

1. User-facing components (Header, Footer, Hero, About, Booking)
2. Core utilities (markdown processing, logging, environment config)
3. Interactive elements (buttons, cards, animations)
4. Accessibility features (ARIA attributes, semantic HTML)

### Test Structure

Tests are co-located with components in `__tests__` directories:

```
components/
├── Header.tsx
├── __tests__/
│   └── Header.test.tsx
lib/
├── markdown.ts
├── __tests__/
│   └── markdown.test.ts
```

### Writing Tests

Example component test:

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '@/components/Header'

describe('Header Component', () => {
  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('toggles mobile menu when button clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /menu/i })
    await user.click(menuButton)

    expect(screen.getAllByText('Home').length).toBeGreaterThan(1)
  })
})
```

### Continuous Integration

Tests run automatically on all pull requests. Coverage thresholds are enforced to maintain code quality:

- Statements: 40%
- Branches: 25%
- Functions: 28%
- Lines: 40%

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

<Callout type="info">Book direct and save on fees!</Callout>

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

This project uses environment variables for optional third-party integrations. All variables are **optional** - the site works perfectly without them, with graceful fallbacks.

#### Setup

1. Copy the example file:

   ```bash
   cp .env.example .env.local
   ```

2. Add your configuration values to `.env.local` (never commit this file!)

#### Available Variables

**Analytics & Tracking**

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - **Description**: Google Analytics 4 Measurement ID for visitor tracking
  - **Format**: `G-XXXXXXXXXX`
  - **Required**: No (analytics disabled if not set)
  - **Get it from**: [Google Analytics](https://analytics.google.com/)
  - **Example**: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-1234567890`

**Booking Integration**

- `NEXT_PUBLIC_HOSPITABLE_WIDGET_ID`
  - **Description**: Hospitable booking widget integration ID
  - **Format**: Alphanumeric string from your Hospitable dashboard
  - **Required**: No (shows Airbnb link fallback if not set)
  - **Get it from**: Your Hospitable account dashboard
  - **Example**: `NEXT_PUBLIC_HOSPITABLE_WIDGET_ID=abc123xyz`

**Development Options**

- `NEXT_PUBLIC_DISABLE_ANIMATIONS`
  - **Description**: Disable animations for faster development iteration
  - **Format**: `true` or `false`
  - **Required**: No (defaults to `false`)
  - **Example**: `NEXT_PUBLIC_DISABLE_ANIMATIONS=true`

#### Development Warnings

In development mode, the app will show helpful console warnings if optional environment variables are missing. These warnings include:

- Which variable is missing
- What feature will be affected
- Where to find setup instructions

#### Production Deployment

For production deployments (Vercel, Netlify, etc.), add these environment variables in your hosting platform's dashboard:

**Vercel:**

1. Go to Project Settings → Environment Variables
2. Add variables with the `NEXT_PUBLIC_` prefix
3. Redeploy your application

**Netlify:**

1. Go to Site Settings → Environment Variables
2. Add variables with the `NEXT_PUBLIC_` prefix
3. Trigger a new deploy

**Important**: Never commit `.env.local` or any file containing real API keys to version control. The `.gitignore` file is configured to exclude these files automatically.

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
