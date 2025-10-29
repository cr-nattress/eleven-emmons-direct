# TASK-003: Add CTA Button Animations

## Task Description

Add entrance animation and hover enhancements to the primary "Book Your Stay" CTA button to draw attention and encourage clicks.

## Priority

CRITICAL

## Estimated Effort

1-2 hours

## Acceptance Criteria

- [ ] Primary CTA button animates on scroll
- [ ] Animation uses fade + subtle scale effect
- [ ] Button appears after other elements (stagger sequence)
- [ ] Hover state enhanced with smooth animation
- [ ] Click functionality maintained
- [ ] Animation feels premium and trustworthy
- [ ] Reduced motion preferences respected
- [ ] No layout shift during animation

## Technical Details

### CTA Button Location

In `/components/Booking.tsx`:

- Likely at bottom of section
- Primary call-to-action
- Links to booking platform or scrolls to booking widget
- May have existing hover styles

### Animation Strategy

1. Scroll-triggered entrance (fade + scale)
2. Enhanced hover animation (scale + shadow)
3. Optional: subtle pulse or glow effect (use sparingly)
4. Appears last in animation sequence

## Agent Prompt

You are tasked with adding entrance and interaction animations to the primary CTA button.

**Context:**

- TASK-001 and TASK-002 completed (widget and cards animate)
- CTA button is critical conversion element
- Should be last element to animate (draws final attention)
- Animation should feel premium but not distracting

**Instructions:**

1. **Locate the primary CTA button in `/components/Booking.tsx`:**
   - Look for main call-to-action button
   - Likely says "Book Your Stay" or similar
   - May be a Link or button element

2. **Add scroll animation hook for CTA:**

   ```typescript
   export default function Booking() {
     const { ref: headerRef, controls: headerControls } = useScrollAnimation()
     const { ref: widgetRef, controls: widgetControls } = useScrollAnimation()
     const { ref: cardsRef, controls: cardsControls } = useScrollAnimation()
     const { ref: ctaRef, controls: ctaControls } = useScrollAnimation()

     // ... rest of component
   }
   ```

3. **Create CTA-specific animation variant:**

   ```typescript
   export default function Booking() {
     // ... existing hooks

     // CTA animation variant
     const ctaVariants = {
       hidden: { opacity: 0, scale: 0.9 },
       visible: {
         opacity: 1,
         scale: 1,
         transition: {
           delay: 0.2, // Appears after other elements
           duration: 0.4,
           ease: 'easeOut',
         },
       },
     }

     return (
       // ... JSX
     )
   }
   ```

4. **Convert CTA button/link to motion component:**

   If it's a Link component:

   ```typescript
   <motion.div
     ref={ctaRef}
     initial="hidden"
     animate={ctaControls}
     variants={ctaVariants}
     className="text-center"
   >
     <Link
       href="#booking"
       className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-xl"
     >
       Book Your Stay
     </Link>
   </motion.div>
   ```

   Or if you want to animate the Link directly, use motion with custom component:

   ```typescript
   <motion.div
     ref={ctaRef}
     initial="hidden"
     animate={ctaControls}
     variants={ctaVariants}
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.98 }}
     className="text-center"
   >
     <Link
       href="#booking"
       className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-xl"
     >
       Book Your Stay
     </Link>
   </motion.div>
   ```

5. **Enhanced version with hover effects:**

   ```typescript
   <motion.div
     ref={ctaRef}
     initial="hidden"
     animate={ctaControls}
     variants={ctaVariants}
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.98 }}
     transition={{ type: 'spring', stiffness: 400, damping: 17 }}
     className="text-center"
   >
     <Link
       href="#booking"
       className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-2xl"
     >
       Book Your Stay
     </Link>
   </motion.div>
   ```

6. **Key Implementation Details:**
   - Wrapper div has entrance animation (fade + scale)
   - Optional: Add whileHover for interactive scale
   - Optional: Add whileTap for press feedback
   - Delay ensures CTA appears last in sequence
   - Keep all existing href and styling
   - Spring animation on hover feels premium

**Animation Sequence:**

1. Header animates (0ms)
2. Widget animates (when scrolled into view)
3. Contact cards stagger in (when scrolled into view)
4. CTA button animates last (200ms delay after trigger)
5. On hover: scales up to 1.05
6. On tap: scales down to 0.98 (tactile feedback)

**Alternative - Using AnimatedButton Component:**

If you prefer to use the existing AnimatedButton wrapper:

```typescript
import { AnimatedButton } from '@/components/animated/AnimatedButton'

<motion.div
  ref={ctaRef}
  initial="hidden"
  animate={ctaControls}
  variants={ctaVariants}
  className="text-center"
>
  <AnimatedButton
    href="#booking"
    variant="primary"
    size="large"
  >
    Book Your Stay
  </AnimatedButton>
</motion.div>
```

**Testing:**

1. Save the file
2. Refresh browser
3. Scroll to booking section
4. Observe full animation sequence:
   - Header animates
   - Widget scales in
   - Contact cards stagger in
   - CTA button appears last
5. Test interactions:
   - Hover over button - should scale up smoothly
   - Click button - should have tactile press effect
   - Button should navigate correctly
6. Test on mobile (tap feedback)
7. Check console for errors

**Testing Reduced Motion:**

1. Enable reduced motion in OS
2. CTA should appear instantly (no scale animation)
3. Hover/tap effects may be reduced or removed

**Expected Result:**

- CTA button appears last in sequence
- Draws final attention after other content
- Hover effect feels premium and responsive
- Clear visual feedback on interaction
- Professional, trustworthy appearance

**Success Criteria:**

- CTA animates on scroll
- Appears last in sequence
- Hover effects work smoothly
- Click/navigation works
- No layout shift
- No TypeScript errors
- No console errors

**Common Issues to Avoid:**

- Don't make delay too long (max 200-300ms)
- Don't make hover scale too large (1.05 max)
- Don't remove existing href or navigation
- Don't make animation too attention-grabbing (no pulse/glow unless very subtle)

**Optional Enhancements:**

Subtle glow effect on hover (use sparingly):

```typescript
<motion.div
  ref={ctaRef}
  initial="hidden"
  animate={ctaControls}
  variants={ctaVariants}
  whileHover={{
    scale: 1.05,
    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
  }}
  whileTap={{ scale: 0.98 }}
  className="inline-block rounded-lg"
>
  <Link
    href="#booking"
    className="block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary-dark"
  >
    Book Your Stay
  </Link>
</motion.div>
```

**Deliverables:**

- Updated `/components/Booking.tsx` with animated CTA
- Smooth entrance and hover animations
- All functionality maintained
- No errors

## Dependencies

- TASK-001: Animate booking widget (completed)
- TASK-002: Animate contact cards (completed)
- US-001: Setup Animation Infrastructure (must be completed)

## Related Tasks

- TASK-001: Animate booking widget
- TASK-002: Animate contact cards
- US-002-TASK-003: Similar button animation patterns

## References

- [Booking Component](../../../../components/Booking.tsx)
- [AnimatedButton Component](../../../../components/animated/AnimatedButton.tsx)
- [Framer Motion Gestures](https://www.framer.com/motion/gestures/)
- [whileHover/whileTap](https://www.framer.com/motion/gestures/##hover)

**Created**: 2025-10-20
**Status**: Not Started
