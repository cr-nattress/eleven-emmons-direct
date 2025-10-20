# TASK-003: Animate Menu Button Icon Rotation

## Task Description
Add rotation animation to the hamburger menu button icon, transforming it to an X when the menu is open.

## Priority
MEDIUM

## Estimated Effort
1-2 hours

## Acceptance Criteria
- [ ] Hamburger icon rotates/transforms when menu opens
- [ ] Icon becomes X or rotates to indicate close
- [ ] Animation is smooth and clear
- [ ] Icon returns to hamburger on close
- [ ] Reduced motion preferences respected

## Agent Prompt

You are tasked with animating the hamburger menu button icon.

**Context:**
- TASK-001 and TASK-002 completed
- Menu button toggles mobile menu
- Icon should transform to indicate state

**Instructions:**

1. **Option 1: Simple rotation of hamburger icon:**
   ```typescript
   <motion.button
     onClick={() => setIsMenuOpen(!isMenuOpen)}
     animate={{ rotate: isMenuOpen ? 90 : 0 }}
     transition={{ duration: 0.3 }}
     className="relative h-6 w-6"
     aria-label="Toggle menu"
   >
     {/* Hamburger SVG */}
   </motion.button>
   ```

2. **Option 2: Animated bars (hamburger to X):**
   ```typescript
   <button
     onClick={() => setIsMenuOpen(!isMenuOpen)}
     className="relative h-6 w-6"
     aria-label="Toggle menu"
   >
     <motion.span
       animate={{
         rotate: isMenuOpen ? 45 : 0,
         y: isMenuOpen ? 6 : 0,
       }}
       className="absolute left-0 top-0 h-0.5 w-full bg-gray-900"
     />
     <motion.span
       animate={{
         opacity: isMenuOpen ? 0 : 1,
       }}
       className="absolute left-0 top-2.5 h-0.5 w-full bg-gray-900"
     />
     <motion.span
       animate={{
         rotate: isMenuOpen ? -45 : 0,
         y: isMenuOpen ? -6 : 0,
       }}
       className="absolute left-0 top-5 h-0.5 w-full bg-gray-900"
     />
   </button>
   ```

3. **Option 3: Use existing icon library with animate prop:**
   - If using an icon library, wrap in motion component
   - Animate rotation or opacity based on isMenuOpen

**Testing:**
1. Click menu button
2. Observe icon transform to X (or rotate)
3. Close menu
4. Observe icon return to hamburger
5. Verify smooth animation

**Success Criteria:**
- Icon animates clearly
- State is obvious (open vs closed)
- Animation is smooth
- Button remains functional

## Dependencies
- TASK-001: Implement menu slide-in animation

## Related Tasks
- TASK-001: Implement menu slide-in animation
- TASK-002: Add menu items stagger animation

## References
- [Header Component](../../../../components/Header.tsx)
- [Hamburger to X Animation](https://www.framer.com/motion/examples/)
- [animate Prop](https://www.framer.com/motion/animation/)

**Created**: 2025-10-20
**Status**: Not Started
