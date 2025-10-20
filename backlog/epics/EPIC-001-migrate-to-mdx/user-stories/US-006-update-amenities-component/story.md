# US-006: Update Amenities Component

**User Story ID:** US-006
**Epic:** EPIC-001 - Migrate to next-mdx-remote
**Status:** To Do
**Priority:** High
**Story Points:** 1
**Assignee:** TBD

## User Story

As a **site visitor**,
I want to **see the Amenities section rendered with MDX**,
So that **I can view detailed amenity information with proper formatting**.

## Acceptance Criteria

- [ ] Amenities component updated to use MDXClient
- [ ] dangerouslySetInnerHTML removed
- [ ] MDX content renders correctly
- [ ] All styling preserved
- [ ] Amenity icons grid still displays
- [ ] No console errors
- [ ] TypeScript compilation succeeds

## Technical Notes

Same pattern as About component - replace dangerouslySetInnerHTML with MDXClient.

## Definition of Done

- Component updated and saved
- No TypeScript errors
- Content renders correctly
- Icon grid displays below content
- No visual regressions

## Tasks

- [ ] TASK-001: Update Amenities.tsx component
