# TASK-003: Animate Nearby Attractions Cards

## Task Description

Add staggered entrance animations to nearby attractions cards.

## Priority

MEDIUM

## Estimated Effort

2 hours

## Acceptance Criteria

- [ ] Attractions cards animate with stagger effect
- [ ] Each card fades and scales in
- [ ] Links and interactions maintained
- [ ] Reduced motion preferences respected

## Agent Prompt

**Instructions:**

1. Locate nearby attractions cards/grid in Location.tsx
2. Add scroll animation hook for attractions
3. Convert grid to motion.div with staggerContainerVariants
4. Convert each card to motion.div with staggerItemVariants
5. Use 100-150ms stagger delay

**Example:**

```typescript
const { ref: attractionsRef, controls: attractionsControls } = useScrollAnimation()

<motion.div
  ref={attractionsRef}
  initial="hidden"
  animate={attractionsControls}
  variants={staggerContainerVariants}
  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
>
  <motion.div
    variants={staggerItemVariants}
    className="rounded-lg bg-white p-4 shadow-lg"
  >
    {/* Attraction content */}
  </motion.div>
</motion.div>
```

**Testing:**

- Scroll to attractions section
- Verify staggered card entrance
- Test any links within cards
- Check console for errors

## Dependencies

- TASK-001: Animate section header

## Related Tasks

- TASK-001: Animate section header
- TASK-002: Add map container animation

## References

- [Location Component](../../../../components/Location.tsx)
- [Stagger Variants](../../../../lib/animations/variants.ts)

**Created**: 2025-10-20
**Status**: Not Started
