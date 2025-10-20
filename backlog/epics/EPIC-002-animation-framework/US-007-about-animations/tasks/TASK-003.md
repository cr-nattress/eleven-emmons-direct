# TASK-003: Add Feature Card Animations

## Task Description
Add staggered entrance animations to feature cards in the about section.

## Priority
MEDIUM

## Estimated Effort
2 hours

## Acceptance Criteria
- [ ] Feature cards animate with stagger effect
- [ ] Each card fades and scales in
- [ ] Timing feels natural
- [ ] Reduced motion preferences respected

## Agent Prompt

**Instructions:**

1. Locate feature cards grid in About.tsx
2. Add scroll animation hook for cards
3. Convert grid to motion.div with staggerContainerVariants
4. Convert each card to motion.div with staggerItemVariants
5. Use 100-150ms stagger delay

**Example:**
```typescript
const { ref: cardsRef, controls: cardsControls } = useScrollAnimation()

<motion.div
  ref={cardsRef}
  initial="hidden"
  animate={cardsControls}
  variants={staggerContainerVariants}
  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
>
  <motion.div variants={staggerItemVariants}>
    {/* Feature card */}
  </motion.div>
</motion.div>
```

**Testing:**
- Scroll to feature cards
- Verify staggered entrance
- Check console for errors

## Dependencies
- TASK-001: Animate section header

## Related Tasks
- TASK-004: Animate list items (next)

## References
- [About Component](../../../../components/About.tsx)
- [Stagger Variants](../../../../lib/animations/variants.ts)

**Created**: 2025-10-20
**Status**: Not Started
