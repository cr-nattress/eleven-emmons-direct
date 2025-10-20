# US-002: Implement Hero Section Animations

## User Story
**As a** visitor
**I want** to see smooth, engaging entrance animations in the hero section
**So that** I'm immediately drawn into the premium experience of the property

## Description
Implement entrance animations for the hero section to create an immediate positive impression. The hero is the first thing visitors see, so animations here are critical for engagement. This includes title reveal, subtitle fade, call-to-action button animations, and enhancing the existing scroll arrow animation.

## Priority
**CRITICAL** - Hero is first impression, directly impacts bounce rate and engagement

## Estimated Effort
1 day (6-8 hours)

## Acceptance Criteria
- [ ] Hero title has smooth entrance animation (fade + slide)
- [ ] Hero subtitle animates after title with slight delay
- [ ] CTA buttons have staggered entrance animations
- [ ] Scroll arrow animation enhanced (already has bounce, add fade-in)
- [ ] All animations respect reduced motion preferences
- [ ] Animations feel natural and not too slow (300-500ms)
- [ ] No layout shift during animations
- [ ] Hero section uses client component only for animated parts
- [ ] Performance: No degradation to Lighthouse score

## Technical Notes

### Current Hero Structure
- Located in `/components/Hero.tsx`
- Currently server component
- Contains: title, subtitle, 2 CTA buttons, scroll arrow
- Scroll arrow already has Tailwind bounce animation

### Implementation Approach
- Wrap Hero in client component OR
- Convert necessary parts to client components
- Use AnimatedSection wrapper for container
- Use individual motion elements for title/subtitle/buttons
- Enhance scroll arrow animation

### Animation Sequence
1. Title: Fade + slide up (0ms delay)
2. Subtitle: Fade + slide up (200ms delay)
3. Primary CTA: Fade + slide up (400ms delay)
4. Secondary CTA: Fade + slide up (500ms delay)
5. Scroll arrow: Fade in (600ms delay) + keep bounce

### Performance Considerations
- Use CSS transforms only (translateY, opacity)
- Avoid animating expensive properties
- Use will-change sparingly
- Test on mobile devices

## Dependencies
- US-001: Setup Animation Infrastructure (must be completed)

## Related Files
- `/components/Hero.tsx` - Main hero component to update
- `/components/animated/AnimatedSection.tsx` - May use as wrapper
- `/lib/animations/variants.ts` - Animation variants
- `/lib/animations/hooks.ts` - Custom hooks

## Tasks
1. [TASK-001](./tasks/TASK-001.md) - Refactor Hero component for animations
2. [TASK-002](./tasks/TASK-002.md) - Implement title and subtitle animations
3. [TASK-003](./tasks/TASK-003.md) - Implement CTA button animations
4. [TASK-004](./tasks/TASK-004.md) - Enhance scroll arrow animation

## Success Metrics
- Hero animations feel smooth and premium
- Entrance sequence is natural and well-timed
- No jarring or distracting motion
- Lighthouse performance score maintained (95+)
- Reduced motion respected

## Business Impact
- Reduced bounce rate (visitors engaged immediately)
- Improved perceived quality of property
- Increased time on page
- Higher conversion to booking CTA clicks

## References
- [EPIC-002](../epic.md)
- [Framer Motion Animation](https://www.framer.com/motion/animation/)
- [Current Hero Component](../../../../components/Hero.tsx)

**Created**: 2025-10-20
**Status**: Not Started
**Assigned To**: Development Team
