# TASK-001: Animate Section Header

## Task Description

Add scroll-triggered entrance animation for the about section header.

## Priority

MEDIUM

## Estimated Effort

1 hour

## Acceptance Criteria

- [ ] About.tsx has 'use client' directive (add if missing)
- [ ] Section header animates on scroll
- [ ] Title and description have staggered timing
- [ ] Reduced motion preferences respected

## Agent Prompt

**Instructions:**

1. Add 'use client' if missing
2. Import animation utilities
3. Add scroll animation hook
4. Animate h2 and p with slideUpVariants
5. Use staggered delays (0ms, 150ms)

**Testing:**

- Scroll to about section
- Verify header animates smoothly
- Check console for errors

## Dependencies

- US-001: Setup Animation Infrastructure

## Related Tasks

- TASK-002: Animate prose content (next)

## References

- [About Component](../../../../components/About.tsx)

**Created**: 2025-10-20
**Status**: Not Started
