# US-003: Implement Gallery Animations

## User Story

**As a** visitor
**I want** to see smooth, engaging animations when viewing the photo gallery
**So that** I'm drawn to explore the property images and have a premium browsing experience

## Description

Implement entrance animations for the gallery section including the header, staggered card animations, and lightbox transitions. The gallery is a key engagement point where visitors evaluate the property, so animations should feel premium and encourage exploration.

## Priority

**CRITICAL** - Gallery is primary tool for property evaluation

## Estimated Effort

1 day (6-8 hours)

## Acceptance Criteria

- [ ] Gallery section header animates on scroll (title + description)
- [ ] Gallery cards have staggered entrance animations
- [ ] Cards maintain hover effects (already implemented)
- [ ] Lightbox opens with smooth fade/scale animation
- [ ] Lightbox closes smoothly
- [ ] All animations respect reduced motion preferences
- [ ] No performance degradation with 6 cards
- [ ] Existing functionality maintained (click to open, navigation)

## Technical Notes

### Current Gallery Structure

- Located in `/components/Gallery.tsx`
- **Already a client component** ('use client')
- Contains: section header (h2 + p), 6 image cards in grid, lightbox modal
- Cards already have hover:scale-105 effect
- Lightbox uses React state for open/close

### Animation Targets

1. **Section Header**: Title and description (scroll-triggered)
2. **Gallery Cards**: 6 cards with stagger effect (scroll-triggered)
3. **Lightbox Modal**: Fade + scale on open/close

### Animation Sequence

- Header animates when scrolled into view
- Cards stagger in 100ms apart after header
- Lightbox animates on state change

## Dependencies

- US-001: Setup Animation Infrastructure (must be completed)

## Related Files

- `/components/Gallery.tsx` - Gallery component to update
- `/lib/animations/variants.ts` - Animation variants
- `/lib/animations/hooks.ts` - Custom hooks

## Tasks

1. [TASK-001](./tasks/TASK-001.md) - Animate gallery section header
2. [TASK-002](./tasks/TASK-002.md) - Implement staggered card entrance animations
3. [TASK-003](./tasks/TASK-003.md) - Add lightbox open/close animations

## Success Metrics

- Gallery feels premium and engaging
- Stagger effect draws eye across cards
- Lightbox transitions feel smooth
- No jank or performance issues
- Lighthouse performance score maintained (95+)

## Business Impact

- Increased image viewing (more engagement)
- Better property evaluation
- Higher conversion (visitors who engage more book more)
- Professional appearance

## References

- [EPIC-002](../epic.md)
- [Current Gallery Component](../../../../components/Gallery.tsx)
- [Framer Motion Stagger](https://www.framer.com/motion/transition/##orchestration)

**Created**: 2025-10-20
**Status**: Not Started
**Assigned To**: Development Team
