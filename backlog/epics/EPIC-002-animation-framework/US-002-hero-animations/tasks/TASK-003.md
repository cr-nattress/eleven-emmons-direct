# TASK-003: Implement CTA Button Animations

## Task Description
Add entrance and interactive animations to the two Call-to-Action buttons in the hero section.

## Priority
CRITICAL

## Estimated Effort
1 hour

## Acceptance Criteria
- [ ] Primary CTA button ("Book Your Stay") has entrance animation
- [ ] Secondary CTA button ("Learn More") has entrance animation
- [ ] Buttons animate with stagger delay (50-100ms apart)
- [ ] Entrance animations follow after text animations
- [ ] Interactive hover animations work smoothly
- [ ] Tap/click animations provide feedback
- [ ] Reduced motion preferences respected
- [ ] Buttons maintain existing styling and functionality

## Technical Details

### Buttons to Animate
1. **Primary CTA**: "Book Your Stay" button
   - Delay: 400ms (after description)
   - Animation: fade + slide up
   - Hover: scale up slightly
   - Tap: scale down slightly

2. **Secondary CTA**: "Learn More" button
   - Delay: 500ms (100ms after primary)
   - Animation: fade + slide up
   - Hover: scale up slightly
   - Tap: scale down slightly

### Animation Approach
Use motion.div wrapper around Link components to maintain Next.js Link functionality while adding animations.

## Agent Prompt

You are tasked with implementing entrance and interactive animations for the hero CTA buttons.

**Context:**
- HeroContent.tsx is a client component
- Title and subtitle animations are complete (TASK-002)
- These buttons are the conversion point - animations should draw attention
- Links must remain functional with Next.js Link component

**Current Structure:**
In `/components/HeroContent.tsx`:
- Buttons container div with flex layout
- Two Link components for buttons

**Instructions:**

1. **Update `/components/HeroContent.tsx`:**

2. **Import motion (should already be imported):**
   ```typescript
   import { motion } from 'framer-motion'
   import { slideUpVariants } from '@/lib/animations/variants'
   ```

3. **Wrap the buttons container in motion.div:**

   Find the current buttons container:
   ```typescript
   <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
   ```

   Wrap the entire buttons div in a parent motion.div with fade animation:
   ```typescript
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.4, duration: 0.5 }}
     className="flex flex-col items-center justify-center gap-4 sm:flex-row"
   >
     {/* Both button Links here */}
   </motion.div>
   ```

4. **Animate Primary Button:**

   Wrap the "Book Your Stay" Link in motion.div:
   ```typescript
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.4, duration: 0.5 }}
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
   >
     <Link
       href="#booking"
       className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
     >
       Book Your Stay
     </Link>
   </motion.div>
   ```

5. **Animate Secondary Button:**

   Wrap the "Learn More" Link in motion.div:
   ```typescript
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.5, duration: 0.5 }}
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
   >
     <Link
       href="#about"
       className="rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900"
     >
       Learn More
     </Link>
   </motion.div>
   ```

**Alternative Simpler Approach:**

If you prefer, you can use the AnimatedButton component from US-001:
```typescript
import AnimatedButton from '@/components/animated/AnimatedButton'

// Wrap the Link content with AnimatedButton
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.5 }}
>
  <Link href="#booking">
    <AnimatedButton className="...">
      Book Your Stay
    </AnimatedButton>
  </Link>
</motion.div>
```

However, the first approach is simpler and keeps the Link component intact.

**Key Points:**
- Wrap Link components, don't replace them (maintain Next.js routing)
- Use `whileHover` and `whileTap` for interactive feedback
- Primary button: 400ms delay
- Secondary button: 500ms delay (100ms after primary)
- Scale animations are subtle: 1.05 on hover, 0.95 on tap
- Keep all existing classNames and hrefs

**Animation Sequence Summary:**
- 0ms: Title starts
- 200ms: Subtitle starts
- 300ms: Description starts
- 400ms: Primary button starts
- 500ms: Secondary button starts
- Total sequence: 1000ms (1 second)

**Visual Effect:**
- Buttons fade in and slide up after text
- Slight stagger between buttons creates polish
- Hover makes buttons grow slightly (attention-grabbing)
- Tap provides tactile feedback
- Smooth, professional feel

**Accessibility:**
- Reduced motion users see instant buttons (no entrance animation)
- Interactive animations (hover/tap) are always subtle
- Links remain keyboard accessible
- Screen readers work normally

**Testing:**
1. Refresh browser at http://localhost:3000
2. Watch full hero entrance sequence
3. Verify buttons appear after text (400ms and 500ms)
4. Hover over each button - should scale up slightly
5. Click buttons - should scale down on tap then navigate
6. Test keyboard navigation (Tab key)
7. Verify buttons link to correct sections
8. Check console for errors

**Expected Result:**
- Smooth entrance for both buttons with subtle stagger
- Interactive hover effects feel responsive
- Tap feedback is satisfying
- Links work correctly
- Professional, polished appearance

**Success Criteria:**
- Both buttons animate on entrance
- Stagger timing feels natural (100ms between buttons)
- Interactive animations work smoothly
- Links maintain functionality
- No TypeScript errors
- No console errors

**Common Issues to Avoid:**
- Don't break the Link component - wrap it, don't replace it
- Keep href values intact
- Maintain all existing classNames
- Don't make scale animations too aggressive (keep subtle)
- Ensure buttons are clickable during and after animation

## Dependencies
- TASK-001: Refactor Hero Component (must be completed)
- TASK-002: Title and subtitle animations (should be completed for sequence)

## Related Tasks
- TASK-004: Enhance scroll arrow animation (next)

## References
- [Framer Motion Interactive Animations](https://www.framer.com/motion/gestures/)
- [whileHover](https://www.framer.com/motion/gestures/##whilehover)
- [whileTap](https://www.framer.com/motion/gestures/##whiletap)

**Created**: 2025-10-20
**Status**: Not Started
