# US-001: Install Dependencies

**User Story ID:** US-001
**Epic:** EPIC-001 - Migrate to next-mdx-remote
**Status:** To Do
**Priority:** High
**Story Points:** 1
**Assignee:** TBD

## User Story

As a **developer**,
I want to **install next-mdx-remote and required remark/rehype plugins**,
So that **I have all the necessary dependencies to implement MDX rendering**.

## Acceptance Criteria

- [ ] next-mdx-remote package installed
- [ ] remark-gfm plugin installed
- [ ] rehype-slug plugin installed
- [ ] rehype-autolink-headings plugin installed
- [ ] rehype-pretty-code and shiki installed (optional)
- [ ] All packages appear in package.json dependencies
- [ ] npm install completes without errors
- [ ] No version conflicts or peer dependency warnings

## Technical Notes

Install these packages:

```bash
npm install next-mdx-remote remark-gfm rehype-slug rehype-autolink-headings
npm install rehype-pretty-code shiki
```

## Definition of Done

- All packages successfully installed
- package.json updated with new dependencies
- package-lock.json regenerated
- No installation errors or warnings
- Dev server can still start successfully

## Tasks

- [ ] TASK-001: Install core MDX packages
- [ ] TASK-002: Install remark plugins
- [ ] TASK-003: Install rehype plugins
- [ ] TASK-004: Verify installation and compatibility
