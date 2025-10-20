# TASK-001: Animate Section Header

## Task Description
Add 'use client' directive if needed and implement scroll-triggered entrance animation for the amenities section header.

## Priority
HIGH

## Estimated Effort
1 hour

## Acceptance Criteria
- [ ] Amenities.tsx has 'use client' directive (add if missing)
- [ ] Section header (title + description) animates on scroll
- [ ] Animation uses fade + slide up effect
- [ ] Title and description have staggered timing
- [ ] Animation triggers at appropriate scroll position
- [ ] Only animates once per page load
- [ ] Reduced motion preferences respected
- [ ] No layout shift during animation

## Technical Details

### Current Structure
Located in `/components/Amenities.tsx`:
- Section with id="amenities"
- Section header (h2 + p)
- Grid of amenity cards
- May or may not have 'use client' directive

### Animation Strategy
- Add 'use client' if missing
- Animate h2 with slide up effect
- Animate p with slight delay (150ms)
- Use scroll trigger

## Agent Prompt

You are tasked with adding entrance animations to the amenities section header.

**Context:**
- Amenities component at `/components/Amenities.tsx`
- Component may need 'use client' directive added
- Header should animate before cards (which come in later tasks)

**Instructions:**

1. **Read `/components/Amenities.tsx`:**
   - Check if 'use client' directive exists
   - Locate section header

2. **Add 'use client' if missing:**
   ```typescript
   'use client'

   import { motion } from 'framer-motion'
   import { slideUpVariants } from '@/lib/animations/variants'
   import { useScrollAnimation } from '@/lib/animations/hooks'
   ```

3. **Add scroll animation hook:**
   ```typescript
   export default function Amenities() {
     const { ref: headerRef, controls: headerControls } = useScrollAnimation()

     return (
       // ... JSX
     )
   }
   ```

4. **Animate section header:**
   ```typescript
   <motion.div
     ref={headerRef}
     initial="hidden"
     animate={headerControls}
   >
     <motion.h2
       variants={slideUpVariants}
       transition={{ delay: 0 }}
       className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl"
     >
       Amenities & Features
     </motion.h2>
     <motion.p
       variants={slideUpVariants}
       transition={{ delay: 0.15 }}
       className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600"
     >
       Everything you need for a comfortable mountain getaway
     </motion.p>
   </motion.div>
   ```

**Testing:**
1. Save the file
2. Run dev server and navigate to amenities section
3. Observe header animation on scroll
4. Verify title appears first, then description
5. Check console for errors

**Success Criteria:**
- Header animates smoothly on scroll
- No TypeScript or console errors
- No layout shift

## Dependencies
- US-001: Setup Animation Infrastructure

## Related Tasks
- TASK-002: Implement amenity card stagger animations (next)
- TASK-003: Add icon animations
- TASK-004: Add card hover enhancements

## References
- [Amenities Component](../../../../components/Amenities.tsx)
- [slideUpVariants](../../../../lib/animations/variants.ts)

**Created**: 2025-10-20
**Status**: Not Started
