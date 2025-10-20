# EPIC-006: Image Optimization for SEO

**Status**: To Do  
**Priority**: High  
**Estimated Story Points**: 3  
**Target Completion**: Week 1

---

## Epic Overview

Optimize key property images focusing on ski-in/ski-out proximity, convert to WebP format, add SEO-friendly alt text, and ensure fast loading for Core Web Vitals.

## Business Value

- **SEO**: Images rank in Google Image Search
- **Performance**: Faster load times improve rankings
- **Conversion**: Better visuals increase bookings
- **Core Web Vitals**: Improves overall site performance score

## Current State

- Images may not be optimized for web
- Alt text may be generic or missing
- No specific focus on ski-in/ski-out proximity photos
- Potential performance issues from large image files

## Target State

- 10 priority images optimized (100-200KB each)
- All images converted to WebP format
- Alt text includes "ski in ski out crested butte" keywords
- Images show: building exterior, path to lifts, proximity, balcony views
- Lazy loading implemented
- Next.js Image component used throughout

## User Stories

1. **[US-001: Select and Optimize Priority Images](./user-stories/US-001-select-optimize/story.md)** (2 points)
2. **[US-002: Add SEO Alt Text](./user-stories/US-002-add-alt-text/story.md)** (1 point)

## Acceptance Criteria

- [ ] 10 images optimized and converted to WebP
- [ ] Each image < 200KB
- [ ] All images have descriptive alt text with keywords
- [ ] Images deployed to `/public/images/`
- [ ] Next.js Image component used
- [ ] Lazy loading enabled
- [ ] Images load in < 2 seconds

## Success Metrics

- Lighthouse performance score: 95+
- LCP (Largest Contentful Paint): < 2.5s
- Images appear in Google Image Search

---

**Created**: 2025-10-20
