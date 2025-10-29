# TASK-001: Animate Section Header

## Task Description

Add scroll-triggered entrance animation for the location section header.

## Priority

MEDIUM

## Estimated Effort

1 hour

## Acceptance Criteria

- [ ] Location.tsx has 'use client' directive (add if missing)
- [ ] Section header animates on scroll
- [ ] Title and description staggered
- [ ] Reduced motion preferences respected

## Agent Prompt

**Instructions:**

1. Add 'use client' if missing to Location.tsx
2. Import animation utilities (motion, slideUpVariants, useScrollAnimation)
3. Add scroll animation hook for header
4. Wrap h2 and p in motion.div with scroll trigger
5. Animate with slideUpVariants
6. Use staggered delays (0ms for h2, 150ms for p)

**Testing:**

- Scroll to location section
- Verify header animates smoothly
- Check console for errors

## Dependencies

- US-001: Setup Animation Infrastructure

## Related Tasks

- TASK-002: Add map container animation (next)

## References

- [Location Component](../../../../components/Location.tsx)

**Created**: 2025-10-20
**Status**: Not Started
