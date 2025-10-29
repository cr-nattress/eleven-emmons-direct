# TASK-002: Implement Amenity Card Stagger Animations

## Task Description

Add scroll-triggered staggered entrance animations to the amenity cards to create a smooth, sequential reveal effect.

## Priority

HIGH

## Estimated Effort

2-3 hours

## Acceptance Criteria

- [ ] All amenity cards animate when scrolled into view
- [ ] Cards have staggered animation (100-150ms apart)
- [ ] Animation uses fade + scale effect
- [ ] Icons animate with cards
- [ ] Existing styling maintained
- [ ] No performance issues
- [ ] Reduced motion preferences respected

## Agent Prompt

You are tasked with implementing staggered entrance animations for amenity cards.

**Context:**

- TASK-001 completed (header animates)
- Amenities component has multiple cards in a grid
- Each card has icon, title, description

**Instructions:**

1. **Import stagger variants:**

   ```typescript
   import {
     slideUpVariants,
     staggerContainerVariants,
     staggerItemVariants,
   } from '@/lib/animations/variants'
   ```

2. **Add scroll animation hook for cards:**

   ```typescript
   const { ref: headerRef, controls: headerControls } = useScrollAnimation()
   const { ref: cardsRef, controls: cardsControls } = useScrollAnimation()
   ```

3. **Convert grid container to motion.div:**

   ```typescript
   <motion.div
     ref={cardsRef}
     initial="hidden"
     animate={cardsControls}
     variants={staggerContainerVariants}
     className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
   >
     {/* Cards */}
   </motion.div>
   ```

4. **Convert each card to motion.div:**
   ```typescript
   <motion.div
     variants={staggerItemVariants}
     className="rounded-lg bg-white p-6 shadow-lg"
   >
     {/* Icon, title, description */}
   </motion.div>
   ```

**Testing:**

1. Scroll to amenities section
2. Observe staggered card entrance
3. Verify smooth animation
4. Check console for errors

**Success Criteria:**

- Cards animate with stagger effect
- Smooth 60fps animation
- No TypeScript or console errors

## Dependencies

- TASK-001: Animate section header

## Related Tasks

- TASK-003: Add icon animations (next)
- TASK-004: Add card hover enhancements

## References

- [Amenities Component](../../../../components/Amenities.tsx)
- [Stagger Variants](../../../../lib/animations/variants.ts)

**Created**: 2025-10-20
**Status**: Not Started
