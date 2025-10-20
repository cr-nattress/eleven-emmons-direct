# About Section Redesign - Product Requirements Document

## Project Overview

**Project Name:** 11 Emmons Road Rental Property - About Section Redesign  
**Component:** About.tsx  
**Section ID:** #about  
**Layout Option:** Option B (Single Column with Feature Cards)  
**Priority:** High  
**Estimated Effort:** Medium (5-8 story points)

## Executive Summary

Redesign the About section of the 11 Emmons Road vacation rental website to improve information hierarchy, increase scannability, and drive booking conversions. The new design will use a single-column layout with feature cards, emotional storytelling, and prominent quick-facts display.

## Business Goals

1. **Increase booking conversion rate** by 15-20% through improved content presentation
2. **Reduce bounce rate** by making key property information immediately scannable
3. **Improve mobile user experience** with responsive, touch-friendly design
4. **Enhance trust signals** by prominently displaying ratings and key features
5. **Support SEO** through semantic HTML and proper content structure

## Target Users

### Primary Personas

**Persona 1: The Weekend Warrior**
- Age: 28-45
- Booking for 2-4 people
- Priorities: Ski access, modern amenities, easy booking
- Device: 60% mobile, 40% desktop

**Persona 2: The Family Planner**
- Age: 35-55
- Booking for families
- Priorities: Safety, space, reviews, clear information
- Device: 70% desktop, 30% mobile

## Current State Analysis

### Problems with Current Implementation

1. **Information overload:** Technical documentation mixed with property marketing
2. **Poor hierarchy:** Equal visual weight given to all content
3. **Lack of emotional connection:** Feature-focused rather than benefit-driven
4. **Weak trust signals:** Ratings and reviews buried in content
5. **Mobile unfriendly:** Large text blocks difficult to scan on small screens
6. **Inconsistent formatting:** No clear visual structure

## Design Requirements

### Layout Structure (Option B: Single Column with Feature Cards)

```
┌─────────────────────────────────────────────────┐
│          About This Property                    │
│          [Section Heading]                      │
├─────────────────────────────────────────────────┤
│  Opening narrative paragraph (150-200 words)    │
│  Emotional hook + experiential description      │
├─────────────────────────────────────────────────┤
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐       │
│  │  🛏️  │  │  🚿  │  │  📐  │  │  ⭐  │       │
│  │  1   │  │  1   │  │ 650  │  │ 4.98 │       │
│  │Bedrm │  │ Bath │  │Sq Ft │  │Rating│       │
│  └──────┘  └──────┘  └──────┘  └──────┘       │
│  [Quick Stats Cards - 4 columns on desktop]    │
├─────────────────────────────────────────────────┤
│  ✓ Feature 1    ✓ Feature 2                    │
│  ✓ Feature 3    ✓ Feature 4                    │
│  ✓ Feature 5    ✓ Feature 6                    │
│  [Key Features Grid - 2 columns]               │
├─────────────────────────────────────────────────┤
│  Closing narrative paragraph                    │
│  Additional details and unique selling points   │
└─────────────────────────────────────────────────┘
```

### Visual Design Specifications

#### Typography Scale
- **Section Heading (h2):** 
  - Desktop: 36-40px, font-weight: 700
  - Mobile: 28-32px, font-weight: 700
  - Color: #111827 (gray-900)
  - Margin-bottom: 32px

- **Body Text:**
  - Desktop: 18px, line-height: 1.75
  - Mobile: 16px, line-height: 1.7
  - Color: #374151 (gray-700)
  - Max-width: 65ch for readability

- **Stat Numbers:**
  - Font-size: 32px, font-weight: 700
  - Color: #111827 (gray-900)

- **Stat Labels:**
  - Font-size: 14px, font-weight: 500
  - Color: #6B7280 (gray-600)
  - Text-transform: none

#### Color Palette
- **Primary Background:** #FFFFFF (white)
- **Card Background:** #F9FAFB (gray-50)
- **Text Primary:** #111827 (gray-900)
- **Text Secondary:** #374151 (gray-700)
- **Text Tertiary:** #6B7280 (gray-600)
- **Accent/Success:** #10B981 (green-600) for checkmarks
- **Border:** #E5E7EB (gray-200)
- **Hover State:** #F3F4F6 (gray-100)

#### Spacing System
- **Section Padding:** 
  - Desktop: 80px top/bottom
  - Mobile: 64px top/bottom
- **Content Max-Width:** 1280px (max-w-7xl)
- **Horizontal Padding:** 16px (mobile), 24px (sm), 32px (lg)
- **Element Spacing:**
  - Between paragraphs: 24px
  - Between content blocks: 48px
  - Card gap: 16px

#### Responsive Breakpoints
- **Mobile:** < 640px (1 column for all)
- **Tablet:** 640px - 768px (2 columns for stats)
- **Desktop:** 768px+ (4 columns for stats, 2 for features)

### Component Specifications

#### 1. Section Container
```
<section id="about" className="py-16 md:py-20 bg-white">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

#### 2. Section Heading
```
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
  About This Property
</h2>
```

#### 3. Opening Narrative
- **Character count:** 150-200 words
- **Structure:** 2-3 sentences
- **Tone:** Warm, inviting, experiential
- **Bold key phrases:** Use `<strong>` for important terms
- **Mobile:** Same content, slightly reduced spacing

**Content Requirements:**
- Lead with emotional/experiential hook
- Mention unique selling proposition (ski-in/ski-out)
- Include sensory details (views, warmth, ambiance)
- Avoid technical jargon

#### 4. Quick Stats Cards

**Grid Container:**
```
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
  {/* Stat Cards */}
</div>
```

**Individual Stat Card:**
```
<div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
    {value}
  </div>
  <div className="text-sm md:text-base text-gray-600">
    {label}
  </div>
</div>
```

**Required Stats:**
1. **Guests:** 4 (or max occupancy)
2. **Bedrooms:** 1
3. **Bathrooms:** 1
4. **Square Feet:** 650
5. **Guest Rating:** 4.98 ⭐ (include emoji/icon)

**Interaction:**
- Subtle hover effect (background color change)
- No click action required
- Smooth transition (200ms)

#### 5. Key Features Grid

**Grid Container:**
```
<div className="grid sm:grid-cols-2 gap-4 my-12">
  {/* Feature Items */}
</div>
```

**Individual Feature Item:**
```
<div className="flex items-start gap-3">
  <span className="text-green-600 text-xl flex-shrink-0">✓</span>
  <span className="text-gray-700 text-base md:text-lg">
    {feature description}
  </span>
</div>
```

**Required Features (minimum 6):**
1. ✓ **Ski-in/ski-out access** (0 min walk to lift)
2. ✓ **Smart home controls** (thermostat, lights, locks)
3. ✓ **Recently renovated** (2024)
4. ✓ **High-speed WiFi** (250+ Mbps)
5. ✓ **Mountain view balcony**
6. ✓ **In-unit washer/dryer**

**Styling Notes:**
- Green checkmark (✓) at 20px size
- Feature text left-aligned
- Bold key terms within each feature
- 2 columns on tablet/desktop, 1 on mobile

#### 6. Closing Narrative
- **Character count:** 100-150 words
- **Structure:** 2 sentences
- **Focus:** Convenience, peace of mind, booking confidence
- **Call-to-action suggestion:** Subtle mention of booking/availability

### Content Guidelines

#### Writing Style
- **Voice:** Warm, confident, professional
- **Tone:** Inviting but not overly sales-y
- **POV:** Second person ("you'll find", "you'll enjoy")
- **Sentence length:** Mix of short (8-12 words) and medium (15-20 words)
- **Paragraph length:** 3-4 sentences maximum

#### Content Formula

**Opening Paragraph Structure:**
1. Sensory/emotional hook (1 sentence)
2. Unique value proposition (1 sentence)
3. Location/convenience benefit (1 sentence)

**Example:**
> "Wake up to panoramic views of snow-capped peaks and step directly onto the slopes from your private entrance. This thoughtfully designed condo at 11 Emmons Road offers true ski-in/ski-out access—no shuttles, no walking, just pure mountain convenience. Inside, you'll find a perfect blend of modern comfort and alpine charm, recently updated to exceed the expectations of discerning travelers."

#### Banned Phrases/Terms
- "World-class" (overused)
- "Luxury" (unless truly ultra-luxury)
- Technical terms (SSR, framework names)
- "Cozy" (cliché for small spaces)
- "Don't miss out" (creates pressure)

#### Required Elements
- Mention of 4.98 rating or 88+ reviews
- Specific distance to ski lift (walk time or feet)
- Year of recent renovation (2024)
- Smart home features by name
- Square footage (650 sq ft)

### Accessibility Requirements

#### WCAG 2.1 Level AA Compliance

**Semantic HTML:**
- Use `<section>` for container with `id="about"`
- Use `<h2>` for section heading
- Use `<p>` for paragraphs
- Use `<ul>` or `<div>` for feature list (semantic choice based on content)

**Color Contrast:**
- Text on white background: Minimum 4.5:1 ratio
- Gray text (gray-700): Passes at 18px+
- Gray-600 for labels: Passes at 14px+
- Test all color combinations with WebAIM Contrast Checker

**Keyboard Navigation:**
- No interactive elements required in this section
- If hover states are added, ensure focus states match
- Skip-link should allow jumping to #about

**Screen Reader Support:**
- Add `aria-label` to section if needed: "Property details and features"
- Stat cards should be readable in logical order
- Checkmark icon can be decorative (`aria-hidden="true"`) since "✓" is visible

**Focus Management:**
- If stat cards become interactive, add visible focus ring
- Focus ring: 2px solid, offset 2px, color: #3B82F6 (blue-600)

### Mobile Optimization

#### Responsive Behavior

**< 640px (Mobile):**
- Stack all content vertically
- Stats grid: 2 columns (2x2 layout)
- Features grid: 1 column
- Font sizes reduced by 10-20%
- Padding reduced to 64px vertical, 16px horizontal
- Stat card padding: 20px (reduced from 24px)

**640px - 768px (Tablet):**
- Stats grid: 2 columns (2x2 layout)
- Features grid: 2 columns
- Moderate font sizes

**768px+ (Desktop):**
- Stats grid: 4 columns (1x4 layout)
- Features grid: 2 columns
- Full font sizes and spacing

#### Touch Targets
- Minimum touch target: 44x44px (even for non-interactive)
- Maintain sufficient spacing between elements
- Avoid placing clickable elements too close together

#### Performance
- No images required in this section (text-only)
- Ensure CSS transitions are GPU-accelerated
- Avoid layout shifts during load

### Technical Implementation

#### Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX (next-mdx-remote v5)
- **Component Library:** React 18

#### File Structure
```
components/
└── About.tsx          # Main component file

content/
└── property.md        # Content source (MDX)

types/
└── property.ts        # TypeScript interfaces (if needed)
```

#### Component Architecture

**About.tsx Structure:**
```typescript
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getMarkdownContent } from '@/lib/markdown'

interface PropertyStats {
  guests: number
  bedrooms: number
  bathrooms: number
  squareFeet: number
  rating: number
}

interface PropertyFeature {
  text: string
  highlighted?: boolean
}

export default async function About() {
  const content = await getMarkdownContent('property')
  
  // Extract stats from frontmatter
  const stats: PropertyStats = {
    guests: content.frontmatter.guests || 4,
    bedrooms: content.frontmatter.bedrooms || 1,
    bathrooms: content.frontmatter.bathrooms || 1,
    squareFeet: content.frontmatter.squareFeet || 650,
    rating: content.frontmatter.rating || 4.98
  }
  
  const features: PropertyFeature[] = content.frontmatter.features || []
  
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      {/* Implementation */}
    </section>
  )
}
```

#### MDX Frontmatter Schema

**property.md:**
```yaml
---
title: About This Property
guests: 4
bedrooms: 1
bathrooms: 1
squareFeet: 650
rating: 4.98
reviewCount: 88
features:
  - text: "Ski-in/ski-out access (0 min walk to lift)"
    highlighted: true
  - text: "Smart home controls (thermostat, lights, locks)"
  - text: "Recently renovated (2024)"
  - text: "High-speed WiFi (250+ Mbps)"
  - text: "Mountain view balcony"
  - text: "In-unit washer/dryer"
---

# Content goes here
```

#### Tailwind Configuration

**Ensure these utilities are available:**
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      spacing: {
        '16': '4rem',
        '20': '5rem',
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      }
    }
  }
}
```

### Testing Requirements

#### Functional Testing
- [ ] Section renders with correct ID (#about)
- [ ] All stat cards display correct values
- [ ] All features display with checkmarks
- [ ] Content loads from MDX properly
- [ ] Frontmatter values override defaults

#### Visual Regression Testing
- [ ] Desktop layout (1920x1080)
- [ ] Tablet layout (768x1024)
- [ ] Mobile layout (375x667)
- [ ] Font sizes render correctly at all breakpoints
- [ ] Spacing matches design specifications

#### Accessibility Testing
- [ ] Passes WAVE accessibility checker
- [ ] Keyboard navigation works correctly
- [ ] Screen reader announces content logically (NVDA/JAWS)
- [ ] Color contrast passes WCAG AA (4.5:1 minimum)
- [ ] Semantic HTML structure is correct

#### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)

#### Performance Testing
- [ ] No layout shift (CLS score < 0.1)
- [ ] Fast paint times (< 1s to visible content)
- [ ] Smooth transitions (60fps)

### Content Migration

#### From Current State
1. **Extract property details** from existing content
2. **Rewrite technical descriptions** into benefit-driven copy
3. **Remove technical jargon** (framework names, developer terms)
4. **Add emotional hooks** and sensory details
5. **Ensure factual accuracy** (verify all stats)

#### Content Review Checklist
- [ ] Grammar and spelling checked
- [ ] No developer/technical terms
- [ ] All numbers verified (guests, sqft, rating)
- [ ] Features accurately describe property
- [ ] Tone matches brand voice
- [ ] Call-to-action is subtle but present

### Deployment Considerations

#### Environment Variables
- None required for this component

#### Build Process
- Component should work in both development (`npm run dev`) and production (`npm run build`)
- MDX content should be compiled at build time (SSR)
- No client-side JavaScript required for rendering

#### Monitoring
- Track scroll depth to #about section
- Monitor time spent on About section
- A/B test different copy variations
- Track click-through to booking after viewing About

### Success Metrics

#### Primary KPIs
1. **Conversion Rate:** +15-20% increase in bookings from About section viewers
2. **Engagement:** Average time on section > 20 seconds
3. **Bounce Rate:** Decrease by 10%
4. **Mobile Conversions:** Match or exceed desktop conversion rates

#### Secondary Metrics
1. **Scroll Depth:** 90%+ of visitors view entire About section
2. **Page Load Time:** < 2 seconds to First Contentful Paint
3. **Accessibility Score:** 100/100 on Lighthouse
4. **User Feedback:** Positive sentiment in user testing

### Dependencies

#### External Dependencies
- next-mdx-remote: ^5.0.0
- react: ^18.0.0
- next: ^14.0.0
- tailwindcss: ^3.0.0

#### Internal Dependencies
- `/lib/markdown.ts` - For MDX processing
- `/content/property.md` - Content source
- Tailwind configuration

### Risks and Mitigations

#### Risk 1: Content Too Long
**Impact:** Users don't read full section  
**Mitigation:** Strict word count limits (150-200 words per paragraph)

#### Risk 2: Mobile Performance
**Impact:** Slow load on mobile devices  
**Mitigation:** No images in this section, optimize CSS

#### Risk 3: Outdated Stats
**Impact:** Incorrect information shown to users  
**Mitigation:** Stats managed in MDX frontmatter (easy to update)

#### Risk 4: Accessibility Issues
**Impact:** Some users cannot access content  
**Mitigation:** Follow WCAG 2.1 AA guidelines, test with screen readers

### Future Enhancements (Post-MVP)

1. **Dynamic Content:** Pull stats from booking API
2. **Localization:** Multi-language support
3. **Animation:** Subtle fade-in on scroll
4. **Interactive Elements:** Expandable feature details
5. **Personalization:** Show different content based on user segment
6. **Video:** Embedded property tour video

## Acceptance Criteria

### Definition of Done

This feature is considered complete when:

1. ✅ About section displays with correct layout (Option B)
2. ✅ All 4 stat cards render with correct values
3. ✅ All 6+ features display with green checkmarks
4. ✅ Content is loaded from MDX with frontmatter
5. ✅ Responsive design works on mobile, tablet, desktop
6. ✅ Accessibility requirements met (WCAG 2.1 AA)
7. ✅ All tests pass (functional, visual, accessibility)
8. ✅ Code reviewed and approved
9. ✅ Documentation updated
10. ✅ Deployed to production

### Code Quality Standards

- TypeScript with no `any` types
- All components have proper types/interfaces
- Tailwind classes follow utility-first methodology
- No inline styles
- Props validated with TypeScript
- Comments for complex logic only
- Follows existing project code style
- ESLint passes with no errors
- Prettier formatting applied

## Appendix

### Design Mockup Reference
See layout diagram in "Design Requirements" section above.

### Example Copy

**Opening Paragraph:**
> "Wake up to panoramic views of snow-capped peaks and step directly onto the slopes from your private entrance. This thoughtfully designed condo at 11 Emmons Road offers true ski-in/ski-out access—no shuttles, no walking, just pure mountain convenience. Inside, you'll find a perfect blend of modern comfort and alpine charm, recently updated in 2024 to exceed the expectations of discerning travelers."

**Closing Paragraph:**
> "With smart home controls at your fingertips and high-speed WiFi throughout, this mountain retreat seamlessly blends modern technology with natural beauty. Whether you're here for epic powder days or peaceful mountain evenings, you'll appreciate the attention to detail that makes this condo feel like home."

### Related Documentation
- Next.js 14 App Router: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- next-mdx-remote: https://github.com/hashicorp/next-mdx-remote
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

### Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-20 | Product Team | Initial requirements document |

---

**Document Status:** READY FOR DEVELOPMENT  
**Last Updated:** October 20, 2025  
**Next Review:** Upon epic completion