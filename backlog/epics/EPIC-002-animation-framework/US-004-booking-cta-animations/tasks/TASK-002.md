# TASK-002: Animate Contact Cards

## Task Description
Implement staggered entrance animations for the email and phone contact cards to create a smooth, sequential reveal effect.

## Priority
HIGH

## Estimated Effort
1-2 hours

## Acceptance Criteria
- [ ] Contact cards animate when scrolled into view
- [ ] Cards have staggered animation (150ms apart)
- [ ] Animation uses fade + slide up effect
- [ ] Icons animate with cards
- [ ] Links and mailto/tel functionality maintained
- [ ] Hover effects preserved
- [ ] Reduced motion preferences respected
- [ ] No layout shift during animation

## Technical Details

### Contact Cards Structure
In `/components/Booking.tsx`:
- Container div with two cards (email and phone)
- Each card has: icon, title, contact info, and link
- Cards likely have hover effects
- Email uses mailto: link
- Phone uses tel: link

### Animation Strategy
- Use stagger container/item pattern
- Cards fade in and slide up sequentially
- 150ms delay between cards
- Icons animate with their cards

## Agent Prompt

You are tasked with implementing staggered entrance animations for the contact cards.

**Context:**
- TASK-001 completed (booking widget animates)
- Contact cards section in `/components/Booking.tsx`
- Two cards: Email and Phone
- Need stagger effect similar to gallery cards

**Instructions:**

1. **Import stagger variants if not already imported:**
   ```typescript
   import { slideUpVariants, scaleInVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations/variants'
   ```

2. **Add scroll animation hook for contact cards:**
   ```typescript
   export default function Booking() {
     const { ref: headerRef, controls: headerControls } = useScrollAnimation()
     const { ref: widgetRef, controls: widgetControls } = useScrollAnimation()
     const { ref: cardsRef, controls: cardsControls } = useScrollAnimation()

     // ... rest of component
   }
   ```

3. **Find the contact cards container and convert to motion.div:**

   Look for the div containing the email and phone cards:
   ```typescript
   <motion.div
     ref={cardsRef}
     initial="hidden"
     animate={cardsControls}
     variants={staggerContainerVariants}
     className="grid gap-6 md:grid-cols-2"
   >
     {/* Contact cards inside */}
   </motion.div>
   ```

4. **Convert each contact card to motion.div:**

   Email card:
   ```typescript
   <motion.div
     variants={staggerItemVariants}
     className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-lg"
   >
     {/* Icon */}
     <div className="mb-4 flex justify-center">
       {/* Email icon */}
     </div>
     <h3 className="mb-2 text-xl font-semibold text-gray-900">Email Us</h3>
     <p className="mb-4 text-gray-600">reservations@example.com</p>
     <a
       href="mailto:reservations@example.com"
       className="text-primary hover:underline"
     >
       Send Email
     </a>
   </motion.div>
   ```

   Phone card:
   ```typescript
   <motion.div
     variants={staggerItemVariants}
     className="rounded-lg border-2 border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-lg"
   >
     {/* Icon */}
     <div className="mb-4 flex justify-center">
       {/* Phone icon */}
     </div>
     <h3 className="mb-2 text-xl font-semibold text-gray-900">Call Us</h3>
     <p className="mb-4 text-gray-600">(555) 123-4567</p>
     <a
       href="tel:+15551234567"
       className="text-primary hover:underline"
     >
       Call Now
     </a>
   </motion.div>
   ```

5. **Key Implementation Details:**
   - Container uses `staggerContainerVariants` with `staggerChildren: 0.1`
   - Each card uses `staggerItemVariants`
   - Email card animates first
   - Phone card follows 150ms later (100ms from stagger + natural timing)
   - Keep all existing classNames for styling and hover effects
   - Keep all mailto: and tel: links exactly as they are

**Animation Sequence:**
1. User scrolls to contact cards section
2. Container triggers animation
3. Email card fades in and slides up
4. 150ms later, phone card fades in and slides up
5. Total animation: ~550ms

**Testing:**
1. Save the file
2. Refresh browser
3. Scroll to booking section
4. Observe animation sequence:
   - Header animates first (from TASK-001)
   - Widget animates (from TASK-001)
   - Contact cards stagger in
5. Test interactions:
   - Hover over cards - should maintain hover shadow effect
   - Click "Send Email" - should open mail client
   - Click "Call Now" - should trigger phone action (on mobile)
6. Check console for errors

**Expected Result:**
- Smooth staggered entrance for contact cards
- Email card appears first, phone card follows
- Professional, polished appearance
- All functionality maintained

**Success Criteria:**
- Both cards animate with stagger effect
- Hover effects work
- Links work (mailto and tel)
- No layout shift
- No TypeScript errors
- No console errors

## Dependencies
- TASK-001: Animate booking widget (should be completed)
- US-001: Setup Animation Infrastructure (must be completed)

## Related Tasks
- TASK-001: Animate booking widget (previous)
- TASK-003: Add CTA button animations (next)

## References
- [Booking Component](../../../../components/Booking.tsx)
- [Stagger Variants](../../../../lib/animations/variants.ts)
- [useScrollAnimation Hook](../../../../lib/animations/hooks.ts)

**Created**: 2025-10-20
**Status**: Not Started
