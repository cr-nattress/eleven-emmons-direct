# US-004: Implement Booking CTA Animations

## User Story

**As a** visitor interested in booking
**I want** to see smooth, attention-grabbing animations on the booking section
**So that** I'm encouraged to take action and the booking process feels premium

## Description

Implement entrance animations for the booking section including the widget, contact cards, and CTA button. This is the most critical conversion point on the site, so animations should feel premium, trustworthy, and encourage action without being distracting.

## Priority

**CRITICAL** - Booking section is primary conversion point

## Estimated Effort

1 day (6-8 hours)

## Acceptance Criteria

- [ ] Booking section header animates on scroll (title + description)
- [ ] Booking widget container animates smoothly
- [ ] Contact cards (email + phone) have staggered entrance
- [ ] Primary CTA button has subtle entrance animation
- [ ] All animations respect reduced motion preferences
- [ ] No performance degradation
- [ ] Existing functionality maintained (links, buttons)
- [ ] Animations feel trustworthy and professional

## Technical Notes

### Current Booking Structure

- Located in `/components/Booking.tsx`
- Check if 'use client' directive exists (may need to add)
- Contains: section header, booking widget (VRBO/Airbnb links), contact cards
- Primary CTA: "Book Your Stay" button
- Contact options: Email and Phone cards

### Animation Targets

1. **Section Header**: Title and description (scroll-triggered)
2. **Booking Widget**: Container with booking platform links
3. **Contact Cards**: Email and phone cards with stagger
4. **CTA Button**: Primary call-to-action

### Animation Sequence

- Header animates when scrolled into view
- Widget fades in and scales slightly
- Contact cards stagger in (150ms apart)
- CTA button appears last with subtle emphasis

## Dependencies

- US-001: Setup Animation Infrastructure (must be completed)

## Related Files

- `/components/Booking.tsx` - Component to update
- `/lib/animations/variants.ts` - Animation variants
- `/lib/animations/hooks.ts` - Custom hooks
- `/components/animated/AnimatedButton.tsx` - May be useful for CTA

## Tasks

1. [TASK-001](./tasks/TASK-001.md) - Animate booking widget entrance
2. [TASK-002](./tasks/TASK-002.md) - Animate contact cards
3. [TASK-003](./tasks/TASK-003.md) - Add CTA button animations

## Success Metrics

- Booking section feels premium and trustworthy
- Animations draw attention without being distracting
- Clear visual hierarchy (what to look at first)
- No jank or performance issues
- Increased engagement with booking CTAs

## Business Impact

- Higher conversion rate (smooth animations increase trust)
- Clear call-to-action
- Professional appearance increases booking confidence
- Reduced bounce rate at conversion point

## References

- [EPIC-002](../epic.md)
- [Current Booking Component](../../../../components/Booking.tsx)
- [Framer Motion Best Practices](https://www.framer.com/motion/guide-best-practices/)

**Created**: 2025-10-20
**Status**: Not Started
**Assigned To**: Development Team
