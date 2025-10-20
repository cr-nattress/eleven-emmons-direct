# TASK-002: Add Menu Items Stagger Animation

## Task Description
Add staggered entrance animations to mobile menu navigation items for a polished reveal effect.

## Priority
MEDIUM

## Estimated Effort
1-2 hours

## Acceptance Criteria
- [ ] Menu items stagger in sequentially
- [ ] Each item fades and slides in
- [ ] Timing feels natural (100ms between items)
- [ ] Links maintain functionality
- [ ] Reduced motion preferences respected

## Agent Prompt

You are tasked with adding stagger animations to mobile menu items.

**Context:**
- TASK-001 completed (menu slides in)
- Mobile menu has navigation links
- Items should stagger after menu enters

**Instructions:**

1. **Create menu items container variant:**
   ```typescript
   const menuItemsContainer = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.1,
         delayChildren: 0.2, // After menu slides in
       },
     },
   }

   const menuItem = {
     hidden: { opacity: 0, x: -20 },
     visible: {
       opacity: 1,
       x: 0,
       transition: { duration: 0.3 },
     },
   }
   ```

2. **Wrap menu items in motion container:**
   ```typescript
   <motion.nav
     variants={menuItemsContainer}
     initial="hidden"
     animate="visible"
     className="flex flex-col space-y-4 p-8"
   >
     <motion.a variants={menuItem} href="#home">Home</motion.a>
     <motion.a variants={menuItem} href="#gallery">Gallery</motion.a>
     <motion.a variants={menuItem} href="#amenities">Amenities</motion.a>
     <motion.a variants={menuItem} href="#booking">Book Now</motion.a>
   </motion.nav>
   ```

**Testing:**
1. Open mobile menu
2. Observe items stagger in after menu enters
3. Verify smooth animation
4. Test link clicks

**Success Criteria:**
- Items stagger in smoothly
- Natural timing
- Links work correctly

## Dependencies
- TASK-001: Implement menu slide-in animation

## Related Tasks
- TASK-003: Animate menu button icon (next)

## References
- [Header Component](../../../../components/Header.tsx)
- [Stagger Children](https://www.framer.com/motion/transition/##orchestration)

**Created**: 2025-10-20
**Status**: Not Started
