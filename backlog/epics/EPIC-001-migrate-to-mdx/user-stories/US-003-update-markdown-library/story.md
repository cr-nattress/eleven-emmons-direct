# US-003: Update Markdown Library

**User Story ID:** US-003
**Epic:** EPIC-001 - Migrate to next-mdx-remote
**Status:** To Do
**Priority:** High
**Story Points:** 3
**Assignee:** TBD

## User Story

As a **developer**,
I want to **update the markdown library to use next-mdx-remote serialization**,
So that **content files are processed with MDX and all configured plugins**.

## Acceptance Criteria

- [ ] `/lib/markdown.ts` updated to use next-mdx-remote serialize function
- [ ] All remark and rehype plugins configured
- [ ] Returns MDXRemoteSerializeResult instead of HTML string
- [ ] Maintains frontmatter parsing with gray-matter
- [ ] Handles errors gracefully with fallback content
- [ ] TypeScript interfaces updated to reflect new return type
- [ ] Supports both .md and .mdx file extensions
- [ ] All existing functionality preserved

## Technical Notes

Key changes:
- Replace `marked` with `serialize` from next-mdx-remote
- Configure plugin pipeline (remark → rehype)
- Update return type from `contentHtml: string` to `mdxSource: MDXRemoteSerializeResult`
- Keep gray-matter for frontmatter parsing

## Definition of Done

- File compiles without TypeScript errors
- Export interfaces match new structure
- Can be imported by components
- Handles errors and edge cases
- Documentation comments updated

## Tasks

- [ ] TASK-001: Update imports and add plugin configuration
- [ ] TASK-002: Replace marked with serialize function
- [ ] TASK-003: Update TypeScript interfaces
- [ ] TASK-004: Test error handling and edge cases
