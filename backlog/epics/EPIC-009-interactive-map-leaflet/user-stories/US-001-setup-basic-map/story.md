# US-001: Setup Leaflet and Create Basic Map

**Status**: To Do  
**Priority**: High  
**Story Points**: 2  
**Sprint**: Week 2

---

## User Story

**As a** potential guest viewing the location page  
**I want** to see an interactive map showing where the property is located  
**So that** I can understand the exact location and proximity to ski lifts

## Acceptance Criteria

- [ ] `react-leaflet` and `leaflet` packages installed
- [ ] TypeScript types installed (`@types/leaflet`)
- [ ] Leaflet CSS imported
- [ ] Map component created at `components/PropertyMap.tsx`
- [ ] Dynamic import wrapper created for SSR compatibility
- [ ] Basic map displays with OpenStreetMap tiles
- [ ] Property marker shows at correct coordinates
- [ ] Map is 400px height on desktop, responsive on mobile
- [ ] No console errors or warnings
- [ ] Component works in Next.js 14 App Router

## Technical Notes

- Use Next.js `dynamic()` to load map client-side only
- Leaflet requires 'use client' directive
- Copy marker icons to `/public/leaflet/` directory
- Configure Leaflet icon paths in component
- Use OpenStreetMap tile layer (free, no API key)

## Definition of Done

- [ ] Dependencies installed
- [ ] Component renders without errors
- [ ] Map displays at correct location
- [ ] Property marker visible
- [ ] Mobile-responsive
- [ ] Code committed and pushed
- [ ] Documentation updated

## Tasks

1. [TASK-001: Install Dependencies](./tasks/TASK-001-install-dependencies.md)
2. [TASK-002: Setup Marker Icons](./tasks/TASK-002-setup-marker-icons.md)
3. [TASK-003: Create Map Component](./tasks/TASK-003-create-map-component.md)
4. [TASK-004: Add to Location Page](./tasks/TASK-004-add-to-location-page.md)

---

**Created**: 2025-10-20  
**Assigned**: Development Team
