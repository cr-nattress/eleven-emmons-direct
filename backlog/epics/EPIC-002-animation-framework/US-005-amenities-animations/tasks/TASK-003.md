# TASK-003: Add Icon Animations on Scroll

## Task Description
Add subtle entrance animations to the amenity icons to add visual interest and polish.

## Priority
MEDIUM

## Estimated Effort
1-2 hours

## Acceptance Criteria
- [ ] Icons animate when cards enter viewport
- [ ] Animation is subtle (scale or bounce)
- [ ] Icons don't distract from content
- [ ] Animation timing coordinated with cards
- [ ] Reduced motion preferences respected

## Agent Prompt

You are tasked with adding subtle icon animations to amenity cards.

**Context:**
- TASK-001 and TASK-002 completed
- Each amenity card has an icon
- Icons should enhance cards without being distracting

**Instructions:**

1. **Create icon animation variant:**
   ```typescript
   const iconVariants = {
     hidden: { opacity: 0, scale: 0.8 },
     visible: {
       opacity: 1,
       scale: 1,
       transition: {
         delay: 0.1,
         duration: 0.3,
         ease: 'easeOut',
       },
     },
   }
   ```

2. **Wrap icons in motion.div:**
   ```typescript
   <motion.div variants={iconVariants} className="mb-4">
     {/* Icon SVG or component */}
   </motion.div>
   ```

3. **Alternatively, add subtle bounce:**
   ```typescript
   const iconVariants = {
     hidden: { opacity: 0, y: -10 },
     visible: {
       opacity: 1,
       y: 0,
       transition: {
         delay: 0.1,
         duration: 0.4,
         type: 'spring',
         stiffness: 300,
         damping: 20,
       },
     },
   }
   ```

**Testing:**
1. Scroll to amenities section
2. Observe icons animate with cards
3. Verify subtle, not distracting
4. Check console for errors

**Success Criteria:**
- Icons animate subtly
- Enhances cards without distraction
- No performance issues

## Dependencies
- TASK-002: Implement amenity card stagger animations

## Related Tasks
- TASK-004: Add card hover enhancements (next)

## References
- [Amenities Component](../../../../components/Amenities.tsx)
- [Spring Animations](https://www.framer.com/motion/transition/##spring)

**Created**: 2025-10-20
**Status**: Not Started
