# 11 Emmons Road - Crested Butte Vacation Rental

> A modern, mobile-first direct booking website for a premium vacation rental property in Crested Butte, Colorado

[\![Netlify Status](https://api.netlify.com/api/v1/badges/placeholder/deploy-status)](https://app.netlify.com/sites/placeholder/deploys)
[\![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[\![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)](https://nextjs.org/)
[\![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## Overview

A beautifully designed single-page direct booking website for 11 Emmons Road, Unit 324 in Crested Butte, Colorado. This site enables guests to book directly without third-party booking fees, featuring seamless integration with Hospitable for reservation management and real-time availability.

**Live Site:** https://11emmons.netlify.app *(TODO: Update with actual URL)*

### Why Direct Booking?

- **Better Rates**: Lower fees mean better prices for guests and higher revenue for hosts
- **Direct Communication**: Connect directly with property management
- **Seamless Experience**: Integrated booking widget powered by Hospitable
- **Mobile Optimized**: Easily accessible via QR code at the property

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Analytics](#analytics)
- [Design Philosophy](#design-philosophy)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Single-Page Design**: Fast, fluid browsing experience with smooth scrolling navigation
- **Mobile-First Responsive**: Optimized for all devices from smartphones to desktops
- **Hospitable Integration**: Real-time availability and secure booking through Hospitable widget
- **QR Code Accessible**: Guests can easily access the site via QR code at the property
- **Content-Driven**: All property information managed through Markdown files
- **Performance Optimized**: Built with Next.js for lightning-fast page loads
- **SEO Friendly**: Optimized for search engines with proper meta tags and structure
- **Google Analytics**: Track visitor behavior and booking conversions
- **Zero Backend**: Serverless architecture leveraging Next.js and third-party integrations

---

## Technology Stack

### Core Technologies

- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[React 18+](https://react.dev/)** - UI component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling

### Integrations & Services

- **[Hospitable](https://hospitable.com/)** - Booking widget and reservation management
- **[Google Analytics 4](https://analytics.google.com/)** - Visitor tracking and insights
- **[Netlify](https://www.netlify.com/)** - Hosting and continuous deployment

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Git](https://git-scm.com/)** - Version control

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0 or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/eleven-emmons.git
   cd eleven-emmons
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```bash
   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   
   # Hospitable Widget
   NEXT_PUBLIC_HOSPITABLE_WIDGET_ID=your-widget-id
   ```

   > **Note:** Contact the property manager for actual values

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

The page will auto-reload when you make changes to the code.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Test the production build locally:

```bash
npm start
```

---

## Project Structure

```
eleven-emmons/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page (single page site)
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with property images
│   ├── About.tsx           # Property description
│   ├── Amenities.tsx       # Amenities list
│   ├── Location.tsx        # Area information and map
│   ├── BookingWidget.tsx   # Hospitable integration
│   ├── Gallery.tsx         # Photo gallery
│   ├── Footer.tsx          # Footer with contact info
│   └── ui/                 # Reusable UI components
├── content/                # Markdown content files
│   ├── property.md         # Property description
│   ├── amenities.md        # Amenities list
│   └── area.md             # Local area information
├── lib/                    # Utility functions
│   ├── markdown.ts         # Markdown parser
│   └── analytics.ts        # Google Analytics wrapper
├── public/                 # Static assets
│   ├── images/            # Property photos
│   ├── qr-code.svg        # QR code for property access
│   └── favicon.ico        # Site favicon
├── styles/                # Additional stylesheets
├── .env.local             # Environment variables (not committed)
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## Content Management

All property information is stored in Markdown files under the `content/` directory. This approach allows non-technical users to update content without touching code.

### Editing Content

1. Navigate to the `content/` directory
2. Open the relevant `.md` file in any text editor
3. Update the content using Markdown syntax
4. Commit and push changes - Netlify will auto-deploy

### Markdown Files

- **`property.md`** - Main property description, sleeping arrangements, unique features
- **`amenities.md`** - List of amenities with categories (kitchen, bedroom, outdoor, etc.)
- **`area.md`** - Information about Crested Butte, nearby attractions, seasonal activities

### Example Markdown Format

```markdown
## Welcome to 11 Emmons Road

This beautifully appointed vacation rental offers stunning mountain views...

### Sleeping Arrangements

- **Master Bedroom**: King bed, ensuite bathroom
- **Guest Bedroom**: Two twin beds
```

---

## Deployment

This site is configured for continuous deployment on Netlify.

### Initial Setup

1. **Connect to Netlify**
   - Log in to [Netlify](https://app.netlify.com/)
   - Click "Add new site" > "Import an existing project"
   - Connect your Git repository

2. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Environment variables**: Add variables from `.env.local`

3. **Custom Domain** *(Optional)*
   - Go to "Domain settings"
   - Add your custom domain
   - Configure DNS as instructed

### Automatic Deployments

Every push to the `main` branch triggers an automatic deployment:

```bash
git add .
git commit -m "Update property description"
git push origin main
```

Netlify will build and deploy within 1-2 minutes.

### Manual Deployment

You can also deploy manually via Netlify CLI:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## Analytics

### Google Analytics Setup

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Copy the Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to Environment Variables**
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Update Netlify**
   - Add the environment variable in Netlify dashboard
   - Redeploy the site

### Key Metrics to Track

- Page views and unique visitors
- Booking widget interactions
- Time on site and bounce rate
- Mobile vs. desktop traffic
- QR code scan conversions

---

## Design Philosophy

### Inspiration

This website draws design inspiration from [palmsatpark.com](https://palmsatpark.com), featuring:

- Clean, minimalist aesthetic
- Large, high-quality property images
- Intuitive single-page navigation
- Clear call-to-action for bookings
- Mobile-first responsive design

### Best Practices Implemented

- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Performance**: Optimized images, code splitting, and lazy loading
- **SEO**: Proper heading hierarchy, meta tags, and structured data
- **Security**: HTTPS, environment variables for sensitive data
- **Maintainability**: TypeScript for type safety, component-based architecture

### Color Scheme & Branding

```css
/* TODO: Define based on property photos and branding */
Primary: #... (Mountain blue/green)
Secondary: #... (Warm accent)
Neutral: #... (Clean whites/grays)
```

---

## Contributing

While this is a private project for a specific property, contributions are welcome for:

- Bug fixes
- Performance improvements
- Accessibility enhancements
- Documentation updates

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement-name`
3. Make your changes and commit: `git commit -m "Add improvement"`
4. Push to your fork: `git push origin feature/improvement-name`
5. Submit a pull request

### Code Style

- Follow existing TypeScript and React conventions
- Run `npm run lint` before committing
- Use meaningful commit messages
- Keep components small and focused

---

## Roadmap

### Phase 1: MVP (Current)
- [x] Project initialization and setup
- [ ] Basic single-page layout
- [ ] Hospitable widget integration
- [ ] Responsive design implementation
- [ ] Content migration to Markdown
- [ ] Netlify deployment

### Phase 2: Enhancement
- [ ] Advanced photo gallery with lightbox
- [ ] Guest testimonials section
- [ ] Local area interactive map
- [ ] Blog for seasonal updates
- [ ] Email newsletter signup

### Phase 3: Advanced Features
- [ ] Multi-language support (Spanish)
- [ ] Virtual tour integration
- [ ] Weather widget
- [ ] Local events calendar

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Copyright © 2025 11 Emmons Road Vacation Rental**

---

## Acknowledgments

- Design inspiration from [Palms at Park](https://palmsatpark.com)
- Booking platform by [Hospitable](https://hospitable.com/)
- Built with [Next.js](https://nextjs.org/) by Vercel
- Hosted on [Netlify](https://www.netlify.com/)

---

## Contact & Support

**Property Management Inquiries**
- Website: *[Add website URL]*
- Email: *[Add contact email]*

**Technical Issues**
- Open an issue in this repository
- Email: *[Add developer email]*

---

**QR Code Access**: Scan the QR code at the property to visit this booking site directly from your phone!

---

Made with care for guests of 11 Emmons Road, Crested Butte, CO 81224
