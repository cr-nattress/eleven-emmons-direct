# TASK-004: Add Card Hover Enhancements

## Task Description
Enhance amenity card hover effects with smooth Framer Motion animations for better interactivity.

## Priority
LOW

## Estimated Effort
1 hour

## Acceptance Criteria
- [ ] Cards have smooth hover animations
- [ ] Hover effect uses scale and/or shadow
- [ ] Animation feels responsive and premium
- [ ] No jank or performance issues
- [ ] Reduced motion preferences respected

## Agent Prompt

You are tasked with adding hover animations to amenity cards.

**Context:**
- TASK-001, TASK-002, TASK-003 completed
- Cards already have entrance animations
- Need interactive hover feedback

**Instructions:**

1. **Add whileHover to card motion.div:**
   ```typescript
   <motion.div
     variants={staggerItemVariants}
     whileHover={{
       scale: 1.03,
       transition: { duration: 0.2 },
     }}
     className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
   >
     {/* Card content */}
   </motion.div>
   ```

2. **Alternative with shadow:**
   ```typescript
   <motion.div
     variants={staggerItemVariants}
     whileHover={{
       scale: 1.03,
       boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
     }}
     transition={{ duration: 0.2 }}
     className="rounded-lg bg-white p-6 shadow-lg"
   >
     {/* Card content */}
   </motion.div>
   ```

**Testing:**
1. Hover over amenity cards
2. Observe smooth scale/shadow transition
3. Verify no jank
4. Test on multiple cards

**Success Criteria:**
- Hover effects smooth and responsive
- No performance issues
- Feels premium

## Dependencies
- TASK-002: Implement amenity card stagger animations

## Related Tasks
- TASK-001: Animate section header
- TASK-002: Implement amenity card stagger animations
- TASK-003: Add icon animations

## References
- [Amenities Component](../../../../components/Amenities.tsx)
- [whileHover](https://www.framer.com/motion/gestures/##hover)

**Created**: 2025-10-20
**Status**: Not Started
