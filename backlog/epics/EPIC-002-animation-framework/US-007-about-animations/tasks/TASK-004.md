# TASK-004: Animate List Items

## Task Description

Add staggered entrance animations to list items in the about section.

## Priority

LOW

## Estimated Effort

1-2 hours

## Acceptance Criteria

- [ ] List items animate sequentially
- [ ] Each item fades and slides in
- [ ] Timing feels natural
- [ ] Lists remain readable

## Agent Prompt

**Instructions:**

1. Locate list elements (ul/ol) in About.tsx
2. Add scroll animation hook for lists
3. Convert ul/ol to motion.ul/motion.ol with staggerContainerVariants
4. Convert each li to motion.li with staggerItemVariants
5. Use subtle animation (fade + slight slide)

**Example:**

```typescript
const { ref: listRef, controls: listControls } = useScrollAnimation()

<motion.ul
  ref={listRef}
  initial="hidden"
  animate={listControls}
  variants={staggerContainerVariants}
  className="space-y-2"
>
  <motion.li variants={staggerItemVariants}>Item 1</motion.li>
  <motion.li variants={staggerItemVariants}>Item 2</motion.li>
  <motion.li variants={staggerItemVariants}>Item 3</motion.li>
</motion.ul>
```

**Testing:**

- Scroll to lists
- Verify sequential animation
- Ensure readability

## Dependencies

- TASK-001: Animate section header

## Related Tasks

- TASK-003: Add feature card animations

## References

- [About Component](../../../../components/About.tsx)
- [Stagger Variants](../../../../lib/animations/variants.ts)

**Created**: 2025-10-20
**Status**: Not Started
