# EPIC-009: Interactive Map Implementation (Leaflet + OpenStreetMap)

**Status**: To Do  
**Priority**: Medium  
**Estimated Story Points**: 5  
**Target Completion**: Week 2

---

## Epic Overview

Implement an interactive map using React-Leaflet and OpenStreetMap to visually demonstrate the property's ski-in/ski-out location, showing the proximity (50 feet) to the Red Lady Express ski lift with custom markers and distance visualization.

## Business Value

- **Visual Proof**: Show rather than tell - prove the "50 feet to lifts" claim
- **SEO Enhancement**: Support keyword "ski in ski out crested butte" with visual evidence
- **Conversion**: Visitors who see the map have higher booking intent
- **Trust Building**: Transparency about exact location builds credibility
- **Free Solution**: $0 cost with no usage limits or API keys

## Current State

- No interactive map on website
- Location information is text-only
- No visual proof of ski-in/ski-out proximity
- Missing opportunity to showcase location advantage

## Target State

- Interactive map on location page and/or pillar page
- Property marker with "11 Emmons Road" label
- Ski lift marker with "Red Lady Express" label
- Visual distance indicator (circle or line)
- Mobile-responsive and fast-loading
- Popups with property details and booking CTA
- Custom styling to match brand

## User Stories

1. **[US-001: Setup Leaflet and Create Basic Map](./user-stories/US-001-setup-basic-map/story.md)** (2 points)
   - Install dependencies
   - Create map component
   - Display basic map with property marker

2. **[US-002: Add Custom Markers and Distance Visualization](./user-stories/US-002-custom-markers/story.md)** (2 points)
   - Add ski lift marker
   - Add distance line/circle
   - Create custom popups with CTAs

3. **[US-003: Polish and Deploy](./user-stories/US-003-polish-deploy/story.md)** (1 point)
   - Mobile optimization
   - Performance tuning
   - Deploy to production

## Acceptance Criteria

- [ ] React-Leaflet installed and configured for Next.js 14
- [ ] Map displays on location/pillar page
- [ ] Property marker visible with custom icon (optional)
- [ ] Ski lift marker visible
- [ ] Distance visualization (line or circle) showing ~50 feet
- [ ] Popups work with property info and booking CTA
- [ ] Mobile-responsive (works on all screen sizes)
- [ ] Fast loading (< 2 seconds)
- [ ] No console errors
- [ ] Deployed to production

## Success Metrics

- Map loads in < 2 seconds
- 90%+ of location page visitors view the map
- Increased time on location page by 30%
- Supports SEO claim of "50 feet to lifts"
- Zero cost for hosting/API usage

## Dependencies

- Next.js 14 App Router
- React 18
- Tailwind CSS
- Property location coordinates
- Ski lift location coordinates

## Risks

**Risk 1: Leaflet SSR Issues in Next.js**  
**Impact**: Component may not render properly  
**Mitigation**: Use dynamic imports with `ssr: false`

**Risk 2: Marker Icons Not Loading**  
**Impact**: Default markers won't display  
**Mitigation**: Copy marker images to public folder, configure paths

**Risk 3: Mobile Performance**  
**Impact**: Slow on mobile devices  
**Mitigation**: Disable scroll wheel zoom, optimize tile loading

## Technical Notes

- Leaflet must be loaded client-side only (use `dynamic()`)
- Marker images need to be in `/public/leaflet/` directory
- Component should be wrapped with `'use client'` directive
- Map tiles come from OpenStreetMap (no API key needed)
- Use Tailwind for responsive sizing

## Related Epics

- EPIC-005: Ski-In/Ski-Out Pillar Page (map goes here)
- EPIC-003: Homepage Optimization (may add small map)
- EPIC-006: Image Optimization (custom marker icons)

---

**Created**: 2025-10-20  
**Epic Owner**: Development Team  
**Stakeholders**: SEO, Marketing, Property Owner
