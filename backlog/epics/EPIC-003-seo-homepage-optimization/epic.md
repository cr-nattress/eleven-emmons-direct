# EPIC-003: SEO Homepage Optimization for "Ski In Ski Out Crested Butte"

**Status**: To Do  
**Priority**: High  
**Estimated Story Points**: 5  
**Target Completion**: Week 1

---

## Epic Overview

Transform the homepage to target the keyword "ski in ski out crested butte" by updating metadata, headings, and hero content to emphasize the property's primary advantage: being just 50 feet from the Red Lady Express ski lift.

## Business Value

- **SEO Impact**: Foundation for ranking #1 for "ski in ski out crested butte" (200-500 monthly searches)
- **Conversion**: Higher quality traffic from guests specifically seeking ski-in/ski-out
- **Revenue**: Premium guests who pay higher rates
- **Timeline**: Quick win with immediate ranking impact

## Current State

- Homepage title: "11 Emmons Road - Luxury Vacation Rental | Crested Butte, CO"
- Generic meta description not emphasizing ski-in/ski-out
- Hero section doesn't highlight proximity to lifts
- No specific focus on ski-in/ski-out advantage

## Target State

- Homepage optimized for "ski in ski out crested butte" keyword
- Meta tags emphasize 50-foot proximity to lifts
- Hero section prominently features ski-in/ski-out messaging
- Clear value proposition: "Book direct and save 15%"
- Trust signals visible: 4.98★ rating, 88 reviews

## User Stories

1. **[US-001: Update Homepage Metadata](./user-stories/US-001-update-homepage-metadata/story.md)** (2 points)
   - Update title tag for SEO keyword targeting
   - Rewrite meta description with ski-in/ski-out focus
   - Add Open Graph tags for social sharing

2. **[US-002: Optimize Hero Section](./user-stories/US-002-optimize-hero-section/story.md)** (3 points)
   - Update H1 heading to target keyword
   - Add "50 feet to lifts" messaging
   - Include trust signals (rating, reviews)
   - Optimize CTA button text

## Acceptance Criteria

- [ ] Homepage title includes "Ski In Ski Out Crested Butte"
- [ ] Meta description mentions "50 feet from lifts"
- [ ] H1 contains target keyword
- [ ] Hero section prominently displays ski-in/ski-out advantage
- [ ] Trust signals visible (4.98★, 88 reviews)
- [ ] CTA emphasizes direct booking savings
- [ ] All changes deployed to production
- [ ] Google Search Console shows new metadata indexed

## Success Metrics

- **Week 1**: Homepage appears in Google for "ski in ski out crested butte" (any position)
- **Week 4**: Ranking position improves by 10+ places
- **Month 1**: Click-through rate (CTR) from search increases by 20%

## Dependencies

- Access to `app/layout.tsx` and `app/page.tsx`
- Knowledge of Next.js metadata API
- Understanding of SEO best practices

## Risks

- **Low**: Changes are non-breaking, only affect metadata and content
- **Mitigation**: Test locally before deploying

## Technical Notes

- Files to modify:
  - `/app/layout.tsx` (metadata)
  - `/app/page.tsx` (hero section)
  - `/components/Hero.tsx` (if separate component)

## Related Epics

- EPIC-004: Schema Markup Implementation
- EPIC-005: Ski-In/Ski-Out Pillar Page
- EPIC-006: Image Optimization

---

**Created**: 2025-10-20  
**Epic Owner**: Development Team  
**Stakeholders**: SEO, Marketing, Property Owner
