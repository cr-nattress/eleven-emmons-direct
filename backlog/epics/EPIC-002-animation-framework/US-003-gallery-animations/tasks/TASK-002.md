# TASK-002: Implement Staggered Card Entrance Animations

## Task Description
Add scroll-triggered staggered entrance animations to the gallery image cards to create a smooth, sequential reveal effect that draws attention across the gallery.

## Priority
HIGH

## Estimated Effort
2-3 hours

## Acceptance Criteria
- [ ] All 6 gallery cards animate when scrolled into view
- [ ] Cards animate with stagger effect (100ms delay between each)
- [ ] Animation uses fade + scale effect
- [ ] Existing hover effects maintained (scale-105 on hover)
- [ ] Animation triggers at appropriate scroll position
- [ ] Only animates once per page load
- [ ] No performance issues with 6 cards animating
- [ ] Reduced motion preferences respected
- [ ] Click functionality maintained (lightbox opens)

## Technical Details

### Gallery Card Structure
Current structure in `/components/Gallery.tsx`:
- 6 image cards in a grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- Each card is a clickable div with Image inside
- Cards already have hover effect: hover:scale-105
- onClick handler opens lightbox

### Animation Strategy
- Use `useScrollAnimation` hook for scroll trigger
- Use `staggerContainerVariants` and `staggerItemVariants` from variants
- Wrap grid in motion.div with container variants
- Convert each card div to motion.div with item variants
- Stagger timing: 100ms between cards

### Animation Variants Needed
```typescript
// These should exist in /lib/animations/variants.ts
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms between children
    },
  },
}

export const staggerItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}
```

## Agent Prompt

You are tasked with implementing staggered entrance animations for the gallery image cards.

**Context:**
- Gallery component at `/components/Gallery.tsx` already has 'use client'
- TASK-001 completed (header animations working)
- Gallery has 6 image cards in a grid layout
- Cards already have hover effects and click handlers
- Need to add entrance animations without breaking functionality

**Current Gallery Card Structure:**
In `/components/Gallery.tsx`:
- Grid container: `<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">`
- 6 cards, each structured like:
  ```typescript
  <div
    key={index}
    onClick={() => setSelectedImage(index)}
    className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
  >
    <Image ... />
  </div>
  ```

**Instructions:**

1. **First, verify/add stagger variants to `/lib/animations/variants.ts`:**

   Read the file and check if `staggerContainerVariants` and `staggerItemVariants` exist.

   If they don't exist, add them:
   ```typescript
   export const staggerContainerVariants: Variants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.1,
       },
     },
   }

   export const staggerItemVariants: Variants = {
     hidden: { opacity: 0, scale: 0.9 },
     visible: {
       opacity: 1,
       scale: 1,
       transition: {
         duration: 0.4,
         ease: EASING_EASE_OUT,
       },
     },
   }
   ```

2. **Update imports in `/components/Gallery.tsx`:**
   ```typescript
   'use client'

   import { useState } from 'react'
   import Image from 'next/image'
   import { motion } from 'framer-motion'
   import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations/variants'
   import { useScrollAnimation } from '@/lib/animations/hooks'
   ```

3. **Add scroll animation hook for cards (in addition to existing header hook):**
   ```typescript
   export default function Gallery() {
     const [selectedImage, setSelectedImage] = useState<number | null>(null)

     // Existing: Header animation
     const { ref: headerRef, controls: headerControls } = useScrollAnimation()

     // Add: Cards animation
     const { ref: cardsRef, controls: cardsControls } = useScrollAnimation()

     // ... rest of component
   ```

4. **Convert grid container to motion.div with stagger container variants:**

   Find the grid div and change it to:
   ```typescript
   <motion.div
     ref={cardsRef}
     initial="hidden"
     animate={cardsControls}
     variants={staggerContainerVariants}
     className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
   >
   ```

5. **Convert each card div to motion.div with item variants:**

   Change each card from `<div>` to `<motion.div>`:
   ```typescript
   <motion.div
     key={index}
     variants={staggerItemVariants}
     onClick={() => setSelectedImage(index)}
     className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
   >
     <Image
       src={image.src}
       alt={image.alt}
       width={600}
       height={400}
       className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
     />
   </motion.div>
   ```

6. **Key Implementation Details:**
   - Grid container has `ref` and controls the animation trigger
   - Container uses `staggerContainerVariants` to orchestrate children
   - Each card uses `staggerItemVariants` for individual animation
   - Cards don't need individual delays - stagger handled by container
   - Keep all existing classNames, especially hover effects
   - Keep onClick handlers exactly as they are
   - Don't touch the Image components

**How Stagger Animation Works:**
1. Grid container starts hidden (all cards hidden)
2. When scrolled into view, `cardsControls` triggers "visible" state
3. Container's `staggerChildren: 0.1` triggers children sequentially
4. First card animates immediately
5. Second card animates 100ms later
6. Third card 100ms after that, etc.
7. Each card fades in and scales from 0.9 to 1.0
8. Total sequence: 600ms (6 cards × 100ms)

**Hover Effects:**
- Existing hover effects remain: `hover:scale-105` on card
- Animation scale goes from 0.9 → 1.0 (entrance)
- Hover scale goes from 1.0 → 1.05 (interaction)
- These work together seamlessly

**Accessibility:**
- Stagger variants should respect reduced motion in variants.ts
- For reduced motion, cards should appear instantly
- Add this to variants if not present:
  ```typescript
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // In visible state:
  transition: prefersReducedMotion
    ? { duration: 0 }
    : { staggerChildren: 0.1 }
  ```

**Testing:**
1. Save all files
2. Run dev server: `npm run dev`
3. Visit http://localhost:3000
4. Scroll down to gallery section
5. Observe animations:
   - Header should animate first (from TASK-001)
   - Then cards should stagger in, one by one
   - Each card should fade in and scale up
   - Stagger should feel smooth and natural
6. Test interactions:
   - Hover over cards - should still scale to 1.05
   - Click cards - lightbox should open (existing functionality)
7. Scroll up and down - cards should NOT re-animate
8. Check console for errors
9. Check performance (should be smooth with 6 cards)

**Testing Reduced Motion:**
1. Enable reduced motion in OS settings
2. Refresh page and scroll to gallery
3. Cards should appear instantly (no animation)
4. Hover and click should still work

**Performance Considerations:**
- 6 cards animating is light load
- Each animation is GPU-accelerated (scale, opacity)
- Stagger prevents all 6 animating at exact same time
- Should maintain 60fps

**Expected Result:**
- Smooth cascading reveal of gallery cards
- Each card appears in sequence (100ms apart)
- Professional, polished appearance
- All interactions maintained
- No performance issues

**Success Criteria:**
- All 6 cards animate with stagger effect
- Stagger timing feels natural (not too fast or slow)
- Hover effects still work
- Click to open lightbox still works
- No layout shift during animation
- No TypeScript errors
- No console errors
- Smooth 60fps animation

**Common Issues to Avoid:**
- Don't remove existing hover classes (hover:scale-105)
- Don't break onClick handlers
- Don't change Image components
- Don't remove transition-transform classes
- Make sure stagger variants are exported from variants.ts
- Don't animate the lightbox yet (that's TASK-003)

**Debugging Tips:**
- If stagger doesn't work, check that container has variants prop
- If cards don't animate, check that items have variants prop
- If all animate at once, check staggerChildren value in container variant
- If hover breaks, verify className props are preserved

**Deliverables:**
- Updated `/lib/animations/variants.ts` with stagger variants (if needed)
- Updated `/components/Gallery.tsx` with animated cards
- Confirmation that stagger animation works smoothly
- All existing functionality maintained

## Dependencies
- TASK-001: Animate gallery section header (should be completed)
- US-001: Setup Animation Infrastructure (must be completed)

## Related Tasks
- TASK-001: Animate gallery section header (previous)
- TASK-003: Add lightbox open/close animations (next)
- US-002-TASK-003: Similar stagger pattern for buttons

## References
- [Gallery Component](../../../../components/Gallery.tsx)
- [Animation Variants](../../../../lib/animations/variants.ts)
- [useScrollAnimation Hook](../../../../lib/animations/hooks.ts)
- [Framer Motion Stagger](https://www.framer.com/motion/transition/##orchestration)
- [Framer Motion Variants](https://www.framer.com/motion/animation/#variants)

**Created**: 2025-10-20
**Status**: Not Started
