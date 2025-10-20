# US-004: Create Client Wrapper Component

**User Story ID:** US-004
**Epic:** EPIC-001 - Migrate to next-mdx-remote
**Status:** To Do
**Priority:** High
**Story Points:** 1
**Assignee:** TBD

## User Story

As a **developer**,
I want to **create a client wrapper component for MDXRemote**,
So that **server components can render MDX content without client-side code**.

## Acceptance Criteria

- [ ] `/components/mdx-remote-client.tsx` file created
- [ ] Component marked as 'use client' directive
- [ ] Imports MDXRemote from next-mdx-remote
- [ ] Uses useMDXComponents hook for component mapping
- [ ] Accepts mdxSource prop of correct type
- [ ] TypeScript properly typed
- [ ] Can be imported by server components

## Technical Notes

In Next.js App Router, MDXRemote requires client-side rendering. This wrapper:
- Isolates client-side code
- Keeps parent components as server components
- Applies component mapping via useMDXComponents hook
- Provides clean API for rendering MDX

## Definition of Done

- Client component file created
- Properly typed with TypeScript
- Can be imported without errors
- Renders MDX content correctly

## Tasks

- [ ] TASK-001: Create mdx-remote-client.tsx file
