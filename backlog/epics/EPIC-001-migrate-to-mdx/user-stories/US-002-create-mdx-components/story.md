# US-002: Create MDX Component Mapping

**User Story ID:** US-002
**Epic:** EPIC-001 - Migrate to next-mdx-remote
**Status:** To Do
**Priority:** High
**Story Points:** 2
**Assignee:** TBD

## User Story

As a **content author**,
I want to **have custom React components available in my markdown content**,
So that **I can create rich, interactive content with reusable UI elements**.

## Acceptance Criteria

- [ ] `/components/mdx-components.tsx` file created
- [ ] Component mapping includes optimized Next.js Link component
- [ ] Component mapping includes optimized Next.js Image component
- [ ] At least one custom shortcode component created (e.g., Callout)
- [ ] TypeScript types properly defined
- [ ] Components styled to match site theme
- [ ] useMDXComponents hook exports component map

## Technical Notes

Create a component mapping file that:

- Overrides default HTML elements with Next.js optimized versions
- Provides custom shortcode components for content authors
- Maintains site styling and theme
- Uses TypeScript for type safety

## Definition of Done

- MDX components file exists and exports properly
- Can be imported by other components
- TypeScript compilation succeeds
- Components follow site styling conventions

## Tasks

- [ ] TASK-001: Create mdx-components.tsx file with base structure
- [ ] TASK-002: Add custom shortcode components
- [ ] TASK-003: Style components to match site theme
