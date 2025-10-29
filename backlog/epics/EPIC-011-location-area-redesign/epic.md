# EPIC-011: Location & Area Section Redesign

**Epic ID:** EPIC-011
**Status:** 🚧 In Progress
**Priority:** 🔴 High
**Total Story Points:** 24
**Estimated Time:** 13-20 hours

## Overview

Transform the Location & Area section from a dense wall of text into an engaging, scannable experience using progressive disclosure patterns (tabs + expandable cards).

## Problem Statement

The current Location section contains 80+ data points across 12 major sections, creating information overload that reduces engagement and increases bounce rate. Users cannot quickly find relevant information about winter vs summer activities, dining, or area attractions.

## Solution

Implement a **Hybrid Tab + Accordion** interface:

- 4 primary tabs: Overview, Winter, Summer, Area Info
- Expandable cards within each tab for progressive disclosure
- Stat badges for key numbers (acres, trails, miles)
- Feature lists with green checkmarks
- Mobile-first responsive design

## Goals

1. **Reduce cognitive load** - Progressive disclosure via tabs/cards
2. **Improve scannability** - Stat badges highlight key numbers
3. **Mobile-friendly** - Vertical stacking, swipeable tabs
4. **Maintain SEO** - All content remains crawlable
5. **Increase engagement** - Interactive, discoverable interface

## User Stories

1. **US-001:** Create tab navigation system (3 pts)
2. **US-002:** Create expandable card component (2 pts)
3. **US-003:** Implement Winter tab with cards (3 pts)
4. **US-004:** Implement Summer tab with cards (3 pts)
5. **US-005:** Implement Info tab with cards (2 pts)
6. **US-006:** Content migration to structured frontmatter (2 pts)
7. **US-007:** Responsive design implementation (3 pts)
8. **US-008:** Accessibility compliance (WCAG 2.1 AA) (3 pts)
9. **US-009:** Testing and QA (3 pts)

## Success Metrics

**Engagement:**

- Average time in section
- Tab switch rate
- Card expansion rate
- Scroll depth

**Conversion:**

- Booking clicks from location section
- Exit rate improvement

**Performance:**

- FCP < 1.5s
- LCP < 2.5s
- CLS < 0.1

## Technical Approach

**New Components:**

- `LocationTabs.tsx` - Tab navigation (client component)
- `ExpandableCard.tsx` - Collapsible cards (client component)
- `StatBadge.tsx` - Stat display (server component)
- Tab panels: `OverviewTab.tsx`, `WinterTab.tsx`, `SummerTab.tsx`, `InfoTab.tsx`

**Reused Components:**

- `FeatureList.tsx` from About section

**Content Structure:**

- Structured frontmatter in `content/area.md`
- Dynamic content loading via MDX
- Server-side rendering with client-side interactivity

## Design Principles

1. **Mobile-first** - Design for smallest screens first
2. **Progressive disclosure** - Don't show everything at once
3. **Consistent patterns** - Reuse successful patterns from About section
4. **Accessibility** - WCAG 2.1 AA compliance
5. **Performance** - Keep bundle size minimal

## Dependencies

- ✅ Next.js 14 App Router
- ✅ MDX content system (established in EPIC-010)
- ✅ Framer Motion for animations
- ✅ Tailwind CSS for styling
- ✅ TypeScript for type safety

## References

- `knowledge/feedback/feedback-03.md` - Complete PRD
- `knowledge/guides/dense-content-ui-guidelines.md` - UI patterns reference
- EPIC-010 - About section redesign (similar patterns)
