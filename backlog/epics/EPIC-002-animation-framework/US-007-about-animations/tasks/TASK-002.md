# TASK-002: Animate Prose Content

## Task Description

Add scroll-triggered fade-in animation to the about section prose/paragraph content.

## Priority

MEDIUM

## Estimated Effort

1 hour

## Acceptance Criteria

- [ ] Prose content animates on scroll
- [ ] Uses simple fade-in effect
- [ ] Text remains readable
- [ ] No layout shift

## Agent Prompt

**Instructions:**

1. Locate prose/paragraph sections in About.tsx
2. Add scroll animation hook for prose
3. Wrap prose in motion.div with fadeInVariants
4. Use delayed entrance (after header)

**Example:**

```typescript
const { ref: proseRef, controls: proseControls } = useScrollAnimation()

<motion.div
  ref={proseRef}
  initial="hidden"
  animate={proseControls}
  variants={fadeInVariants}
  className="prose lg:prose-xl"
>
  <p>Prose content...</p>
</motion.div>
```

**Testing:**

- Scroll to about section
- Verify prose fades in after header
- Ensure readability maintained

## Dependencies

- TASK-001: Animate section header

## Related Tasks

- TASK-003: Add feature card animations (next)

## References

- [About Component](../../../../components/About.tsx)
- [fadeInVariants](../../../../lib/animations/variants.ts)

**Created**: 2025-10-20
**Status**: Not Started
