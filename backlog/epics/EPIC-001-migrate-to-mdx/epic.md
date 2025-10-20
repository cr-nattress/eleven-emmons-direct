# EPIC-001: Migrate from marked to next-mdx-remote

## Epic Overview

**Epic ID:** EPIC-001
**Title:** Migrate Content Rendering from marked to next-mdx-remote
**Status:** To Do
**Priority:** Medium
**Estimated Effort:** 4-6 hours
**Created:** 2025-10-20

## Business Value

Enable the ability to embed React components directly in markdown content files, providing:
- Interactive components in content (callouts, alerts, booking widgets)
- Better plugin ecosystem for enhanced content features
- GitHub Flavored Markdown support (tables, strikethrough, task lists)
- Auto-generated heading anchors and links
- Enhanced code syntax highlighting
- Future-proof content authoring capabilities

## Current State

The site currently uses:
- `marked` library for Markdown → HTML conversion
- Simple markdown parsing with frontmatter support
- Server-side rendering with gray-matter
- Content files in `/content/*.md`

## Target State

Upgrade to:
- `next-mdx-remote` for MDX serialization
- Support for React components in content
- Remark/Rehype plugin ecosystem
- Enhanced markdown features (GFM, auto-linking, syntax highlighting)
- Maintain same SSG architecture

## Technical Approach

1. Install next-mdx-remote and required plugins
2. Create MDX component mapping system
3. Update markdown library to use MDX serialization
4. Create client wrapper for MDXRemote
5. Update all components consuming content
6. Test and validate rendering
7. Remove old marked dependency

## User Stories

1. **US-001:** Install Dependencies
2. **US-002:** Create MDX Component Mapping
3. **US-003:** Update Markdown Library
4. **US-004:** Create Client Wrapper Component
5. **US-005:** Update About Component
6. **US-006:** Update Amenities Component
7. **US-007:** Update Location Component
8. **US-008:** Testing and Validation
9. **US-009:** Cleanup and Finalization

## Acceptance Criteria

- [ ] All dependencies installed successfully
- [ ] MDX component mapping created and working
- [ ] Markdown library updated to use next-mdx-remote
- [ ] Client wrapper component created
- [ ] All content-consuming components updated
- [ ] All pages render correctly with new system
- [ ] No console errors or warnings
- [ ] Styling preserved from previous implementation
- [ ] Old marked dependency removed
- [ ] Build and dev server work without issues

## Risks and Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Breaking changes in rendering | High | Medium | Test thoroughly before removing old code |
| Bundle size increase | Medium | High | Monitor bundle, use code splitting if needed |
| Plugin compatibility issues | Medium | Low | Use well-maintained, popular plugins |
| Styling breaks with new HTML structure | High | Medium | Review prose styles, add custom styles if needed |

## Dependencies

- Next.js 14.2+ (✓ Already installed)
- React 18+ (✓ Already installed)
- Node.js 18+ (✓ Already available)

## Rollback Plan

If issues arise:
1. Keep backup of original `lib/markdown.ts` file
2. Git commit before starting changes
3. Can revert to marked by reverting commits
4. All content files remain compatible (plain markdown)

## Success Metrics

- ✅ Zero errors in console
- ✅ Build time remains under 30 seconds
- ✅ All content renders correctly
- ✅ Can embed custom React components in content
- ✅ Enhanced features (GFM, anchors) working

## Related Documentation

- `/knowledge/content/cms-guidelines.md` - CMS strategy documentation
- [next-mdx-remote docs](https://github.com/hashicorp/next-mdx-remote)
- [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)
- [rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md)

## Notes

- Current implementation is working well, this is an enhancement
- No urgency, can be done when time permits
- Maintains backward compatibility with existing content
- Enables future content features and interactivity
