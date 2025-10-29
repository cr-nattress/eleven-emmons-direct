# US-005: Update About Component

**User Story ID:** US-005
**Epic:** EPIC-001 - Migrate to next-mdx-remote
**Status:** To Do
**Priority:** High
**Story Points:** 1
**Assignee:** TBD

## User Story

As a **site visitor**,
I want to **see the About section rendered with MDX**,
So that **I can view enhanced content with proper formatting**.

## Acceptance Criteria

- [ ] About component updated to use MDXClient
- [ ] dangerouslySetInnerHTML removed
- [ ] MDX content renders correctly
- [ ] All styling preserved
- [ ] No console errors
- [ ] TypeScript compilation succeeds
- [ ] Content displays as expected

## Technical Notes

Replace:

```tsx
<div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
```

With:

```tsx
<MDXClient mdxSource={content.mdxSource} />
```

## Definition of Done

- Component updated and saved
- No TypeScript errors
- Content renders correctly
- Styling matches previous version
- No console warnings

## Tasks

- [ ] TASK-001: Update About.tsx component
