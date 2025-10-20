# TASK-001: Animate Booking Widget Entrance

## Task Description
Add 'use client' directive if needed and implement scroll-triggered entrance animation for the booking widget section header and platform links container.

## Priority
CRITICAL

## Estimated Effort
2-3 hours

## Acceptance Criteria
- [ ] Booking.tsx has 'use client' directive (add if missing)
- [ ] Section header (title + description) animates on scroll
- [ ] Booking widget container animates with fade + scale
- [ ] Platform links maintain existing functionality
- [ ] Animation triggers at appropriate scroll position
- [ ] Only animates once per page load
- [ ] Reduced motion preferences respected
- [ ] No layout shift during animation

## Technical Details

### Current Booking Structure
Located in `/components/Booking.tsx`:
- Section with id="booking"
- Section header (h2 + p)
- Booking widget with VRBO and Airbnb links
- Contact cards section
- May or may not have 'use client' directive

### Animation Strategy
1. Add 'use client' if missing
2. Animate section header (fade + slide up)
3. Animate widget container (fade + slight scale)
4. Use scroll triggers for all animations

## Agent Prompt

You are tasked with adding entrance animations to the booking widget section.

**Context:**
- Booking component at `/components/Booking.tsx`
- This is the primary conversion point - animations must feel premium
- Component may need 'use client' directive added
- Contains booking platform links (VRBO, Airbnb) and contact options

**Instructions:**

1. **Read `/components/Booking.tsx`:**
   - Check if 'use client' directive exists at the top
   - Understand the current structure
   - Locate section header and booking widget

2. **Add 'use client' if missing:**
   ```typescript
   'use client'

   import Link from 'next/link'
   // ... other imports
   ```

3. **Import animation utilities:**
   ```typescript
   'use client'

   import Link from 'next/link'
   import { motion } from 'framer-motion'
   import { slideUpVariants, scaleInVariants } from '@/lib/animations/variants'
   import { useScrollAnimation } from '@/lib/animations/hooks'
   ```

4. **Verify/Add scaleInVariants to `/lib/animations/variants.ts`:**

   Check if this exists, if not add:
   ```typescript
   export const scaleInVariants: Variants = {
     hidden: { opacity: 0, scale: 0.95 },
     visible: {
       opacity: 1,
       scale: 1,
       transition: {
         duration: 0.5,
         ease: EASING_EASE_OUT,
       },
     },
   }
   ```

5. **Add scroll animation hooks in component:**
   ```typescript
   export default function Booking() {
     const { ref: headerRef, controls: headerControls } = useScrollAnimation()
     const { ref: widgetRef, controls: widgetControls } = useScrollAnimation()

     return (
       // ... component JSX
     )
   }
   ```

6. **Animate section header:**

   Wrap the h2 and p in animated div:
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
       Book Your Stay
     </motion.h2>
     <motion.p
       variants={slideUpVariants}
       transition={{ delay: 0.15 }}
       className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600"
     >
       Choose your preferred booking platform or contact us directly
     </motion.p>
   </motion.div>
   ```

7. **Animate booking widget container:**

   Find the booking widget div (contains VRBO/Airbnb links) and convert:
   ```typescript
   <motion.div
     ref={widgetRef}
     initial="hidden"
     animate={widgetControls}
     variants={scaleInVariants}
     className="mb-16 rounded-lg bg-white p-8 shadow-xl"
   >
     {/* Existing booking platform links */}
   </motion.div>
   ```

8. **Key Implementation Details:**
   - Header animates with slide up effect (title then description)
   - Widget scales in slightly (0.95 → 1.0) with fade
   - Both animations scroll-triggered independently
   - Keep all existing links and functionality
   - Don't animate contact cards yet (that's TASK-002)

**Testing:**
1. Save files
2. Run dev server: `npm run dev`
3. Visit http://localhost:3000
4. Scroll to booking section
5. Observe animations:
   - Header should animate first (title, then description)
   - Widget should scale in and fade in
   - Animations should feel smooth and professional
6. Verify all links still work (VRBO, Airbnb)
7. Check console for errors

**Expected Result:**
- Smooth entrance for booking section
- Professional, trustworthy feel
- Clear visual hierarchy
- All functionality maintained

**Success Criteria:**
- 'use client' directive present
- Header animates on scroll
- Widget animates on scroll
- No TypeScript errors
- No console errors
- All links working

## Dependencies
- US-001: Setup Animation Infrastructure (must be completed)

## Related Tasks
- TASK-002: Animate contact cards (next)
- TASK-003: Add CTA button animations

## References
- [Booking Component](../../../../components/Booking.tsx)
- [Animation Variants](../../../../lib/animations/variants.ts)
- [useScrollAnimation Hook](../../../../lib/animations/hooks.ts)

**Created**: 2025-10-20
**Status**: Not Started
