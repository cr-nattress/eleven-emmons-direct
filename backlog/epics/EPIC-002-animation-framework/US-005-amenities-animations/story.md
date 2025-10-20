# US-005: Implement Amenities Section Animations

## User Story
**As a** visitor evaluating the property
**I want** to see smooth, engaging animations when viewing the amenities
**So that** I understand the property features in an engaging, premium way

## Description
Implement entrance animations for the amenities section including the header, amenity cards with icons, and hover enhancements. The amenities section showcases property features and should feel premium and informative.

## Priority
**HIGH** - Amenities are key decision factor for bookings

## Estimated Effort
1 day (6-8 hours)

## Acceptance Criteria
- [ ] Amenities section header animates on scroll
- [ ] Amenity cards have staggered entrance animations
- [ ] Icons animate on scroll into view
- [ ] Card hover effects enhanced with smooth animations
- [ ] All animations respect reduced motion preferences
- [ ] No performance degradation with multiple cards
- [ ] Existing functionality maintained
- [ ] Animations feel informative and premium

## Technical Notes

### Current Amenities Structure
- Located in `/components/Amenities.tsx`
- Check if 'use client' directive exists (may need to add)
- Contains: section header, grid of amenity cards
- Each card has: icon, title, description
- Cards may have existing hover effects

### Animation Targets
1. **Section Header**: Title and description (scroll-triggered)
2. **Amenity Cards**: Grid of cards with stagger effect
3. **Icons**: Animate with or slightly before cards
4. **Hover Effects**: Enhanced scale/shadow on hover

### Animation Sequence
- Header animates when scrolled into view
- Cards stagger in (100-150ms apart)
- Icons can scale/bounce slightly on entrance
- Hover effects provide interactive feedback

## Dependencies
- US-001: Setup Animation Infrastructure (must be completed)

## Related Files
- `/components/Amenities.tsx` - Component to update
- `/lib/animations/variants.ts` - Animation variants
- `/lib/animations/hooks.ts` - Custom hooks
- `/components/animated/AnimatedCard.tsx` - May be useful

## Tasks
1. [TASK-001](./tasks/TASK-001.md) - Animate section header
2. [TASK-002](./tasks/TASK-002.md) - Implement amenity card stagger animations
3. [TASK-003](./tasks/TASK-003.md) - Add icon animations on scroll
4. [TASK-004](./tasks/TASK-004.md) - Add card hover enhancements

## Success Metrics
- Amenities section feels premium and informative
- Stagger effect draws eye across features
- Icons add visual interest
- Hover effects encourage exploration
- No jank or performance issues
- Lighthouse performance score maintained (95+)

## Business Impact
- Better feature communication
- Increased perceived value
- Higher conversion (visitors who engage with amenities book more)
- Professional appearance builds trust

## References
- [EPIC-002](../epic.md)
- [Current Amenities Component](../../../../components/Amenities.tsx)
- [Framer Motion Stagger](https://www.framer.com/motion/transition/##orchestration)

**Created**: 2025-10-20
**Status**: Not Started
**Assigned To**: Development Team
