# TASK-002: Implement Title and Subtitle Animations

## Task Description

Add smooth entrance animations to the hero title, subtitle, and description text to create an engaging first impression.

## Priority

CRITICAL

## Estimated Effort

1-2 hours

## Acceptance Criteria

- [ ] Hero title animates on page load (fade + slide up)
- [ ] Subtitle animates with 200ms delay after title
- [ ] Description animates with 300ms delay after subtitle
- [ ] Animations feel smooth and natural (400-500ms duration)
- [ ] No layout shift during animations
- [ ] Reduced motion preferences respected
- [ ] TypeScript types maintained
- [ ] Component renders correctly with animations

## Technical Details

### Elements to Animate

1. **Title** (h1): "Your Mountain Escape Awaits"
   - Animation: fade + slide up from below
   - Delay: 0ms (first)
   - Duration: 500ms

2. **Subtitle** (p): Address text
   - Animation: fade + slide up from below
   - Delay: 200ms
   - Duration: 500ms

3. **Description** (p): "Book direct..." text
   - Animation: fade + slide up from below
   - Delay: 300ms
   - Duration: 500ms

### Animation Principles

- Use slideUpVariants from `/lib/animations/variants.ts`
- Stagger delays: 100-200ms between elements
- Keep transforms subtle: translateY of 20-30px
- Use opacity: 0 → 1 for fade effect

## Agent Prompt

You are tasked with implementing entrance animations for the hero title, subtitle, and description.

**Context:**

- Hero component has been refactored (TASK-001 complete)
- HeroContent.tsx is a client component with 'use client'
- Animation utilities are available from US-001
- This is the first animation visitors will see - critical for engagement

**Current Structure:**
In `/components/HeroContent.tsx`:

- Line with h1: Title
- First p tag: Subtitle (address)
- Second p tag: Description

**Instructions:**

1. **Update `/components/HeroContent.tsx`:**

2. **Import animation utilities:**

   ```typescript
   'use client'

   import Link from 'next/link'
   import { motion } from 'framer-motion'
   import { slideUpVariants } from '@/lib/animations/variants'
   ```

3. **Convert h1 to motion.h1:**

   ```typescript
   <motion.h1
     initial="hidden"
     animate="visible"
     variants={slideUpVariants}
     transition={{ delay: 0 }}
     className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
   >
     Your Mountain Escape Awaits
   </motion.h1>
   ```

4. **Convert subtitle p to motion.p:**

   ```typescript
   <motion.p
     initial="hidden"
     animate="visible"
     variants={slideUpVariants}
     transition={{ delay: 0.2 }}
     className="mb-8 text-xl text-gray-200 sm:text-2xl"
   >
     11 Emmons Road, Unit 324
     <br />
     Crested Butte, Colorado
   </motion.p>
   ```

5. **Convert description p to motion.p:**

   ```typescript
   <motion.p
     initial="hidden"
     animate="visible"
     variants={slideUpVariants}
     transition={{ delay: 0.3 }}
     className="mb-10 text-lg text-gray-300 sm:text-xl"
   >
     Book direct for the best rates and experience luxury in the heart of
     the Rockies
   </motion.p>
   ```

6. **Key Points:**
   - Change `<h1>` to `<motion.h1>`, `<p>` to `<motion.p>`
   - Add `initial="hidden"` to start with element hidden
   - Add `animate="visible"` to trigger animation
   - Use `variants={slideUpVariants}` for the animation definition
   - Use `transition={{ delay: X }}` to stagger animations
   - Keep all existing className props exactly the same
   - Keep all content exactly the same

7. **Animation Timing:**
   - Title: delay: 0 (first to animate)
   - Subtitle: delay: 0.2 (200ms after title)
   - Description: delay: 0.3 (300ms after title, 100ms after subtitle)

**Visual Effect:**

- Elements start invisible and slightly below their final position
- They fade in while sliding up to their final position
- Creates a smooth, cascading entrance effect
- Total animation sequence: 800ms (300ms delay + 500ms duration)

**Accessibility:**

- The slideUpVariants from our utilities already supports reduced motion
- Users with prefers-reduced-motion will see instant display (no animation)
- No additional code needed for accessibility

**Testing:**

1. Save the file
2. Refresh browser at http://localhost:3000
3. Observe the hero entrance animation:
   - Title should fade and slide up first
   - Subtitle should follow 200ms later
   - Description should follow 100ms after subtitle
4. Test in incognito/private window to see fresh page load
5. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R) to see animation again
6. Check browser console for errors
7. Verify no layout shift occurs

**Expected Result:**

- Smooth cascading entrance effect for hero text
- Natural timing that doesn't feel rushed or slow
- Professional, polished appearance
- No visual bugs or glitches

**Success Criteria:**

- All three text elements animate smoothly
- Stagger timing feels natural
- No layout shift
- No TypeScript errors
- No console errors
- Animation plays on page load

**Common Issues to Avoid:**

- Don't forget 'use client' directive (should already be there from TASK-001)
- Don't change classNames - keep styling identical
- Don't remove any content
- Don't add animations to buttons yet (that's TASK-003)

## Dependencies

- TASK-001: Refactor Hero Component (must be completed)
- US-001: Setup Animation Infrastructure (must be completed)

## Related Tasks

- TASK-003: Implement CTA button animations (next)
- TASK-004: Enhance scroll arrow animation

## References

- [Framer Motion Variants](https://www.framer.com/motion/animation/#variants)
- [slideUpVariants](../../../../lib/animations/variants.ts)
- [HeroContent Component](../../../../components/HeroContent.tsx)

**Created**: 2025-10-20
**Status**: Not Started
