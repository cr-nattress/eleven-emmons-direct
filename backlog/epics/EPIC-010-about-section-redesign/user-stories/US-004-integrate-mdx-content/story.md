# US-004: Integrate MDX Content System

**Story ID:** US-004
**Epic:** EPIC-010 - About Section Redesign
**Status:** 📋 To Do
**Priority:** 🔴 Critical (High)
**Story Points:** 3
**Estimated Time:** 1.5-2.5 hours

## User Story

**As a** content editor managing property information,
**I want** About section content to be sourced from MDX files with frontmatter,
**So that** I can easily update stats, features, and narrative copy without touching code.

## Acceptance Criteria

1. ✅ MDX file created at `content/property.md` with frontmatter schema
2. ✅ Frontmatter includes: guests, bedrooms, bathrooms, squareFeet, rating, features array
3. ✅ Opening and closing narrative paragraphs written in MDX content body
4. ✅ About component loads data from MDX using `next-mdx-remote`
5. ✅ Stats cards display values from frontmatter (replacing hardcoded values)
6. ✅ Features grid displays items from frontmatter features array
7. ✅ Narrative paragraphs render using `<MDXRemote>` component
8. ✅ TypeScript interfaces defined for frontmatter structure

## Technical Notes

### MDX File Structure

```markdown
---
title: 'About This Property'
guests: 4
bedrooms: 1
bathrooms: 1
squareFeet: 650
rating: 4.98
reviewCount: 88
features:
  - 'Ski-in/ski-out access (0 min walk to lift)'
  - 'Smart home controls (thermostat, lights, locks)'
  - 'Recently renovated (2024)'
  - 'High-speed WiFi (250+ Mbps)'
  - 'Mountain view balcony'
  - 'In-unit washer/dryer'
---

Wake up to panoramic views of snow-capped peaks and step directly onto the slopes from your private entrance. This thoughtfully designed condo at 11 Emmons Road offers true ski-in/ski-out access—no shuttles, no walking, just pure mountain convenience. Inside, you'll find a perfect blend of modern comfort and alpine charm, recently updated in 2024 to exceed the expectations of discerning travelers.

{/_ Stats and features inserted here by component _/}

With smart home controls at your fingertips and high-speed WiFi throughout, this mountain retreat seamlessly blends modern technology with natural beauty. Whether you're here for epic powder days or peaceful mountain evenings, you'll appreciate the attention to detail that makes this condo feel like home.
```

### TypeScript Interfaces

```typescript
// types/property.ts
export interface PropertyStats {
  guests: number
  bedrooms: number
  bathrooms: number
  squareFeet: number
  rating: number
  reviewCount?: number
}

export interface PropertyContent {
  frontmatter: PropertyStats & {
    title: string
    features: string[]
  }
  content: string
}
```

### Component Integration

```typescript
// components/About.tsx
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getMarkdownContent } from '@/lib/markdown'

export default async function About() {
  const content = await getMarkdownContent('property')

  const stats = [
    { value: content.frontmatter.guests.toString(), label: 'Guests' },
    { value: content.frontmatter.bedrooms.toString(), label: 'Bedroom' },
    { value: content.frontmatter.bathrooms.toString(), label: 'Bathroom' },
    { value: content.frontmatter.squareFeet.toString(), label: 'Sq Ft' },
    { value: `${content.frontmatter.rating} ⭐`, label: 'Guest Rating' },
  ]

  const features = content.frontmatter.features || []

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      {/* Opening narrative from MDX */}
      <MDXRemote source={content.content} />
      {/* Stats and features using frontmatter data */}
    </section>
  )
}
```

### Required Utilities

May need to create or verify:

- `/lib/markdown.ts` - MDX processing utility
- Ensure `next-mdx-remote` is installed and configured

## Definition of Done

- [ ] `content/property.md` file created with complete frontmatter
- [ ] TypeScript interfaces defined in `types/property.ts`
- [ ] About component successfully loads MDX content
- [ ] Stats cards display frontmatter values (not hardcoded)
- [ ] Features grid displays frontmatter features array
- [ ] Opening and closing narratives render correctly
- [ ] No TypeScript errors or type `any` usage
- [ ] MDX compiles without errors in both dev and build

## Dependencies

- **Requires:** US-001, US-002, US-003 (Component structure and UI)
- **Blocked by:** May require `lib/markdown.ts` utility creation
- **Blocks:** US-007 (Content migration depends on MDX structure)

## Tasks

1. **TASK-010:** Create content/property.md with frontmatter schema
2. **TASK-011:** Create TypeScript interfaces for property data
3. **TASK-012:** Update About component to load and display MDX content
4. **TASK-013:** Test MDX rendering and verify all data displays correctly

## Related Stories

- **Previous:** US-003 (Implement Key Features Grid)
- **Next:** US-005 (Implement responsive design)
- **Related:** US-007 (Content migration will update MDX copy)

## Notes

- Check if `lib/markdown.ts` exists; may need to create it
- Ensure `next-mdx-remote` v5 is in package.json
- MDX content should be server-rendered (no "use client")
- Frontmatter provides single source of truth for all About section data
- Future enhancement: validate frontmatter schema with Zod or similar
- Consider adding `updatedAt` field to frontmatter for tracking changes
