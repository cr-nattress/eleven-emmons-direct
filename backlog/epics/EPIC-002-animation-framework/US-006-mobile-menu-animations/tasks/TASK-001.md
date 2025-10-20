# TASK-001: Implement Menu Slide-In Animation

## Task Description
Add smooth slide-in and slide-out animations to the mobile navigation menu with backdrop fade effect.

## Priority
HIGH

## Estimated Effort
2-3 hours

## Acceptance Criteria
- [ ] Menu slides in from right side when opened
- [ ] Menu slides out when closed
- [ ] Backdrop fades in/out smoothly
- [ ] AnimatePresence used for exit animations
- [ ] Menu functionality maintained
- [ ] Reduced motion preferences respected

## Agent Prompt

You are tasked with implementing slide-in/out animations for the mobile menu.

**Context:**
- Header component at `/components/Header.tsx`
- May need 'use client' directive
- Mobile menu toggled by state (isMenuOpen or similar)

**Instructions:**

1. **Read `/components/Header.tsx`:**
   - Check for 'use client' directive
   - Locate mobile menu state
   - Find mobile menu JSX

2. **Add 'use client' and imports if needed:**
   ```typescript
   'use client'

   import { useState } from 'react'
   import { motion, AnimatePresence } from 'framer-motion'
   ```

3. **Create menu animation variants:**
   ```typescript
   const menuVariants = {
     hidden: { x: '100%' },
     visible: {
       x: 0,
       transition: {
         type: 'spring',
         stiffness: 300,
         damping: 30,
       },
     },
     exit: {
       x: '100%',
       transition: {
         type: 'spring',
         stiffness: 300,
         damping: 30,
       },
     },
   }

   const backdropVariants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1 },
     exit: { opacity: 0 },
   }
   ```

4. **Wrap mobile menu in AnimatePresence:**
   ```typescript
   <AnimatePresence>
     {isMenuOpen && (
       <>
         {/* Backdrop */}
         <motion.div
           key="backdrop"
           initial="hidden"
           animate="visible"
           exit="exit"
           variants={backdropVariants}
           onClick={() => setIsMenuOpen(false)}
           className="fixed inset-0 z-40 bg-black bg-opacity-50"
         />

         {/* Menu */}
         <motion.div
           key="menu"
           initial="hidden"
           animate="visible"
           exit="exit"
           variants={menuVariants}
           className="fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-xl"
         >
           {/* Menu content */}
         </motion.div>
       </>
     )}
   </AnimatePresence>
   ```

**Testing:**
1. Open mobile menu on mobile viewport
2. Observe smooth slide-in from right
3. Close menu - observe slide-out
4. Test backdrop click to close
5. Verify no jank on mobile device

**Success Criteria:**
- Smooth slide-in/out animation
- Backdrop fades properly
- Menu functions correctly

## Dependencies
- US-001: Setup Animation Infrastructure

## Related Tasks
- TASK-002: Add menu items stagger animation (next)
- TASK-003: Animate menu button icon

## References
- [Header Component](../../../../components/Header.tsx)
- [AnimatePresence](https://www.framer.com/motion/animate-presence/)

**Created**: 2025-10-20
**Status**: Not Started
