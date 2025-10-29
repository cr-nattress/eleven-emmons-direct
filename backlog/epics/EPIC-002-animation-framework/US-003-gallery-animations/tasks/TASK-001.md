# TASK-001: Animate Gallery Section Header

## Task Description

Add scroll-triggered entrance animations to the gallery section header (title and description) to create an engaging introduction to the property images.

## Priority

HIGH

## Estimated Effort

1-2 hours

## Acceptance Criteria

- [ ] Gallery section title animates when scrolled into view
- [ ] Description text animates with 150ms delay after title
- [ ] Animations use fade + slide up effect
- [ ] Animation triggers at appropriate scroll position (80% visibility)
- [ ] Only animates once (not on every scroll)
- [ ] Reduced motion preferences respected
- [ ] No layout shift during animations
- [ ] TypeScript types maintained

## Technical Details

### Elements to Animate

1. **Section Title** (h2): "Photo Gallery"
   - Animation: fade + slide up from below
   - Delay: 0ms (first)
   - Duration: 500ms
   - Trigger: When scrolled into view

2. **Section Description** (p): Description text
   - Animation: fade + slide up from below
   - Delay: 150ms after title
   - Duration: 500ms
   - Trigger: Same as title (staggered)

### Animation Strategy

- Use `useScrollAnimation` hook from `/lib/animations/hooks.ts`
- Use `slideUpVariants` from `/lib/animations/variants.ts`
- Wrap elements in motion components
- Use `ref` and `controls` for scroll-triggered animation

## Agent Prompt

You are tasked with implementing scroll-triggered entrance animations for the Gallery section header.

**Context:**

- Gallery component is at `/components/Gallery.tsx`
- Component already has 'use client' directive
- Animation infrastructure is ready (US-001 completed)
- Gallery is critical for property evaluation - needs premium feel

**Current Gallery Structure:**
Located in `/components/Gallery.tsx`:

- Section wrapper with id="gallery"
- Container div
- Section header with h2 + p (lines to animate)
- Grid of 6 image cards (will animate in TASK-002)
- Lightbox modal

**Instructions:**

1. **Read `/components/Gallery.tsx`:**
   - Locate the section header (h2 and p elements)
   - Understand current structure

2. **Import animation utilities at top of file:**

   ```typescript
   'use client'

   import { useState } from 'react'
   import Image from 'next/image'
   import { motion } from 'framer-motion'
   import { slideUpVariants } from '@/lib/animations/variants'
   import { useScrollAnimation } from '@/lib/animations/hooks'
   ```

3. **Add scroll animation hook in component:**

   ```typescript
   export default function Gallery() {
     const [selectedImage, setSelectedImage] = useState<number | null>(null)

     // Add scroll animation for header
     const { ref: headerRef, controls: headerControls } = useScrollAnimation()

     // ... rest of component
   ```

4. **Wrap section header in animated div:**
   Find the section header (h2 and p) and wrap them:

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
       Photo Gallery
     </motion.h2>
     <motion.p
       variants={slideUpVariants}
       transition={{ delay: 0.15 }}
       className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600"
     >
       Explore our beautifully appointed mountain retreat
     </motion.p>
   </motion.div>
   ```

5. **Key Implementation Details:**
   - The wrapper `motion.div` has the `ref` and controls the animation trigger
   - Individual elements (h2, p) use `variants` for the actual animation
   - Stagger delay: title at 0ms, description at 150ms
   - Keep all existing className props exactly the same
   - `useScrollAnimation` defaults to triggering at 80% visibility
   - Animation only plays once (controlled by the hook)

**How It Works:**

1. Component renders with header hidden (initial="hidden")
2. `useScrollAnimation` hook watches the ref element
3. When scrolled into view (80% visible), controls trigger "visible" state
4. Title animates first (delay: 0)
5. Description follows 150ms later (delay: 0.15)
6. Both fade in while sliding up

**Accessibility:**

- The `slideUpVariants` automatically respects `prefers-reduced-motion`
- Users who prefer reduced motion see instant display
- No additional accessibility code needed

**Testing:**

1. Save the file
2. Run dev server: `npm run dev`
3. Visit http://localhost:3000
4. Scroll down to the gallery section
5. Observe the header animation:
   - Title should fade and slide up first
   - Description should follow 150ms later
   - Animation should feel smooth and natural
6. Scroll up and back down - animation should NOT repeat
7. Check browser console for errors
8. Verify TypeScript compilation: no errors

**Testing Reduced Motion:**

1. Enable reduced motion in OS settings:
   - macOS: System Preferences → Accessibility → Display → Reduce motion
   - Windows: Settings → Ease of Access → Display → Show animations
2. Refresh page and scroll to gallery
3. Header should appear instantly without animation

**Expected Result:**

- Smooth entrance effect when gallery section enters viewport
- Title appears first, then description
- Professional, polished appearance
- No visual bugs or layout shift
- Animation plays once per page load

**Success Criteria:**

- Gallery header animates on scroll into view
- Stagger timing feels natural (150ms between elements)
- No layout shift during animation
- No TypeScript errors
- No console errors
- Animation only plays once
- Reduced motion respected

**Common Issues to Avoid:**

- Don't remove the 'use client' directive (already present)
- Don't change any classNames - keep styling identical
- Don't animate the gallery cards yet (that's TASK-002)
- Don't animate the lightbox yet (that's TASK-003)
- Make sure to import all utilities from correct paths

**Deliverables:**

- Updated `/components/Gallery.tsx` with animated header
- Confirmation that animation works on scroll
- No errors in console or TypeScript

## Dependencies

- US-001: Setup Animation Infrastructure (must be completed)
- Gallery.tsx already has 'use client' directive

## Related Tasks

- TASK-002: Implement staggered card entrance animations (next)
- TASK-003: Add lightbox open/close animations
- US-002-TASK-002: Similar scroll animation pattern

## References

- [Gallery Component](../../../../components/Gallery.tsx)
- [useScrollAnimation Hook](../../../../lib/animations/hooks.ts)
- [slideUpVariants](../../../../lib/animations/variants.ts)
- [Framer Motion Animation Controls](https://www.framer.com/motion/animation/#animationcontrols)

**Created**: 2025-10-20
**Status**: Not Started
