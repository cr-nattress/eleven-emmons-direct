# US-001: Update Homepage Metadata for SEO

**Status**: To Do  
**Priority**: High  
**Story Points**: 2  
**Sprint**: Week 1

---

## User Story

**As a** potential guest searching for ski-in/ski-out rentals in Crested Butte  
**I want** the website to appear in search results with relevant, compelling information  
**So that** I can quickly identify this property as a true ski-in/ski-out option

## Acceptance Criteria

- [ ] Title tag updated to: "Ski In Ski Out Crested Butte | 11 Emmons Road | Book Direct & Save 15%"
- [ ] Meta description updated to emphasize 50-foot proximity to lifts
- [ ] Meta description includes: ski-in/ski-out, 4.98★ rating, direct booking savings
- [ ] Character limits respected: Title ≤ 60 chars, Description ≤ 155 chars
- [ ] Open Graph tags updated for social media sharing
- [ ] Twitter card tags included
- [ ] Changes deployed and visible in page source
- [ ] Google Search Console shows updated metadata within 48 hours

## Technical Notes

- Modify `/app/layout.tsx`
- Use Next.js 14 `Metadata` API
- Keep existing metadata structure, update values only
- Ensure keywords flow naturally (no keyword stuffing)

## Definition of Done

- [ ] Code changes committed and pushed
- [ ] Deployed to production
- [ ] Verified in browser source code
- [ ] Submitted to Google Search Console for re-indexing
- [ ] Screenshot taken showing new metadata in search results preview

## Tasks

1. [TASK-001: Update Title Tag](./tasks/TASK-001-update-title-tag.md)
2. [TASK-002: Update Meta Description](./tasks/TASK-002-update-meta-description.md)
3. [TASK-003: Update Open Graph Tags](./tasks/TASK-003-update-open-graph-tags.md)
4. [TASK-004: Verify and Deploy](./tasks/TASK-004-verify-and-deploy.md)

---

**Created**: 2025-10-20  
**Assigned**: Development Team
