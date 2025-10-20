# TASK-003: Add Lightbox Open/Close Animations

## Task Description
Add smooth open and close animations to the gallery lightbox modal to create a premium, polished image viewing experience.

## Priority
MEDIUM

## Estimated Effort
2-3 hours

## Acceptance Criteria
- [ ] Lightbox opens with smooth fade + scale animation
- [ ] Lightbox closes with reverse animation
- [ ] Backdrop fades in/out smoothly
- [ ] Image scales from clicked card position (or center)
- [ ] Navigation arrows appear with fade animation
- [ ] Close button appears with fade animation
- [ ] Animation duration feels natural (300-400ms)
- [ ] No layout shift during open/close
- [ ] Reduced motion preferences respected
- [ ] ESC key still closes lightbox
- [ ] Click outside still closes lightbox

## Technical Details

### Current Lightbox Structure
In `/components/Gallery.tsx`:
- Conditional render based on `selectedImage !== null`
- Fixed positioned overlay (backdrop)
- Centered modal container
- Large image display
- Close button (×)
- Previous/Next navigation arrows
- Image counter (1/6, etc.)

### Animation Strategy
1. **Backdrop**: Fade opacity 0 → 1 on open, 1 → 0 on close
2. **Modal Container**: Scale 0.9 → 1 + fade on open, reverse on close
3. **Navigation Elements**: Fade in slightly delayed

### Animation Components Needed
- Use `AnimatePresence` from Framer Motion for exit animations
- Use motion.div for animated elements
- Use modal variants for coordinated animation

## Agent Prompt

You are tasked with implementing smooth open/close animations for the gallery lightbox modal.

**Context:**
- Gallery component at `/components/Gallery.tsx` already has 'use client'
- TASK-001 and TASK-002 completed (header and cards animate)
- Lightbox is conditionally rendered based on `selectedImage` state
- Need smooth transitions when opening and closing lightbox

**Current Lightbox Structure:**
Located in `/components/Gallery.tsx`, at the bottom:
```typescript
{selectedImage !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
    {/* Close button */}
    {/* Image */}
    {/* Navigation arrows */}
    {/* Counter */}
  </div>
)}
```

**Instructions:**

1. **Update imports in `/components/Gallery.tsx`:**
   ```typescript
   'use client'

   import { useState } from 'react'
   import Image from 'next/image'
   import { motion, AnimatePresence } from 'framer-motion'
   import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations/variants'
   import { useScrollAnimation } from '@/lib/animations/hooks'
   ```

2. **Create lightbox animation variants (add to component, before return):**
   ```typescript
   export default function Gallery() {
     const [selectedImage, setSelectedImage] = useState<number | null>(null)

     // Existing animation hooks...

     // Lightbox animation variants
     const backdropVariants = {
       hidden: { opacity: 0 },
       visible: { opacity: 1 },
       exit: { opacity: 0 },
     }

     const modalVariants = {
       hidden: { opacity: 0, scale: 0.9 },
       visible: {
         opacity: 1,
         scale: 1,
         transition: {
           duration: 0.3,
           ease: 'easeOut',
         },
       },
       exit: {
         opacity: 0,
         scale: 0.9,
         transition: {
           duration: 0.2,
           ease: 'easeIn',
         },
       },
     }

     const elementFadeVariants = {
       hidden: { opacity: 0 },
       visible: {
         opacity: 1,
         transition: { delay: 0.1, duration: 0.2 },
       },
       exit: { opacity: 0, transition: { duration: 0.1 } },
     }

     // ... rest of component
   ```

3. **Wrap lightbox in AnimatePresence:**

   Find the lightbox conditional render and wrap it:
   ```typescript
   <AnimatePresence>
     {selectedImage !== null && (
       <motion.div
         key="lightbox"
         initial="hidden"
         animate="visible"
         exit="exit"
         variants={backdropVariants}
         onClick={() => setSelectedImage(null)}
         className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
       >
         {/* Modal content */}
       </motion.div>
     )}
   </AnimatePresence>
   ```

4. **Animate the modal container:**

   Wrap the main content in a motion.div with modal variants:
   ```typescript
   <AnimatePresence>
     {selectedImage !== null && (
       <motion.div
         key="lightbox"
         initial="hidden"
         animate="visible"
         exit="exit"
         variants={backdropVariants}
         onClick={() => setSelectedImage(null)}
         className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
       >
         <motion.div
           variants={modalVariants}
           onClick={(e) => e.stopPropagation()}
           className="relative max-h-[90vh] max-w-[90vw]"
         >
           {/* Close button, image, navigation - all inside here */}
         </motion.div>
       </motion.div>
     )}
   </AnimatePresence>
   ```

5. **Animate close button:**

   Convert close button to motion.button:
   ```typescript
   <motion.button
     variants={elementFadeVariants}
     onClick={() => setSelectedImage(null)}
     className="absolute right-4 top-4 text-4xl text-white hover:text-gray-300"
     aria-label="Close gallery"
   >
     ×
   </motion.button>
   ```

6. **Animate navigation arrows:**

   Convert Previous button:
   ```typescript
   <motion.button
     variants={elementFadeVariants}
     onClick={(e) => {
       e.stopPropagation()
       handlePrevious()
     }}
     className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white hover:text-gray-300"
     aria-label="Previous image"
   >
     ‹
   </motion.button>
   ```

   Convert Next button:
   ```typescript
   <motion.button
     variants={elementFadeVariants}
     onClick={(e) => {
       e.stopPropagation()
       handleNext()
     }}
     className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white hover:text-gray-300"
     aria-label="Next image"
   >
     ›
   </motion.button>
   ```

7. **Animate image counter:**

   Convert counter paragraph:
   ```typescript
   <motion.p
     variants={elementFadeVariants}
     className="absolute bottom-4 left-1/2 -translate-x-1/2 text-lg text-white"
   >
     {selectedImage + 1} / {images.length}
   </motion.p>
   ```

8. **Key Implementation Details:**
   - `AnimatePresence` enables exit animations when component unmounts
   - Backdrop has `key="lightbox"` for AnimatePresence tracking
   - Backdrop click closes lightbox (existing behavior)
   - Modal content has `onClick={(e) => e.stopPropagation()` to prevent closing
   - Close button, arrows, counter all fade in with slight delay
   - All existing event handlers preserved

**Complete Lightbox Structure:**
```typescript
<AnimatePresence>
  {selectedImage !== null && (
    <motion.div
      key="lightbox"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    >
      <motion.div
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] max-w-[90vw]"
      >
        {/* Close button - motion.button with elementFadeVariants */}
        {/* Image - regular Image component (no animation needed) */}
        {/* Previous button - motion.button with elementFadeVariants */}
        {/* Next button - motion.button with elementFadeVariants */}
        {/* Counter - motion.p with elementFadeVariants */}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

**How Animation Works:**

**Opening:**
1. User clicks a gallery card
2. `setSelectedImage(index)` triggers render
3. AnimatePresence detects new element
4. Backdrop fades in (opacity 0 → 1) - 300ms
5. Modal scales up (0.9 → 1) and fades in - 300ms
6. Close button, arrows, counter fade in with 100ms delay - 200ms
7. Total entrance: 400ms

**Closing:**
1. User clicks backdrop, close button, or presses ESC
2. `setSelectedImage(null)` triggers exit
3. Close button, arrows, counter fade out - 100ms
4. Modal scales down (1 → 0.9) and fades out - 200ms
5. Backdrop fades out - 200ms
6. AnimatePresence removes element from DOM
7. Total exit: 200ms (faster than entrance)

**Accessibility:**
- Add reduced motion support:
  ```typescript
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const modalVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: 'easeOut',
      },
    },
    // ... exit state
  }
  ```

**Testing:**
1. Save the file
2. Run dev server: `npm run dev`
3. Visit http://localhost:3000
4. Scroll to gallery section
5. Click any gallery card
6. Observe opening animation:
   - Backdrop should fade in
   - Modal should scale up and fade in
   - Controls should fade in slightly after
7. Test navigation:
   - Click next/previous arrows
   - Image should change (no animation between images is fine)
8. Test closing:
   - Click close button - should animate out smoothly
   - Click backdrop - should animate out smoothly
   - Press ESC key - should animate out smoothly
9. Open and close several times - should be smooth each time
10. Check console for errors

**Testing Reduced Motion:**
1. Enable reduced motion in OS settings
2. Open lightbox
3. Should appear instantly (no scale, quick fade)
4. Close lightbox
5. Should disappear instantly

**Expected Result:**
- Smooth, premium feel when opening/closing lightbox
- Backdrop fades elegantly
- Modal appears with subtle scale effect
- Controls fade in after modal
- Exit animation is quick but not jarring
- All interactions maintained

**Success Criteria:**
- Lightbox opens smoothly with fade + scale
- Lightbox closes smoothly
- All controls animate appropriately
- No layout shift
- ESC key still works
- Click outside still works
- No TypeScript errors
- No console errors
- Reduced motion respected

**Common Issues to Avoid:**
- Don't forget AnimatePresence wrapper (required for exit animations)
- Don't forget `key` prop on animated element
- Don't remove stopPropagation from modal content
- Don't animate the Image component itself (can cause issues)
- Don't break existing keyboard handlers (ESC key)
- Make sure all onClick handlers are preserved

**Debugging Tips:**
- If exit animation doesn't work, check AnimatePresence wrapper
- If backdrop click doesn't close, check onClick handler
- If modal content closes when clicked, add stopPropagation
- If animations conflict, check variant timing
- If keyboard doesn't work, check for existing useEffect with keyboard listener

**Deliverables:**
- Updated `/components/Gallery.tsx` with animated lightbox
- Smooth open/close animations working
- All existing functionality maintained
- No errors in console or TypeScript

## Dependencies
- TASK-001: Animate gallery section header (completed)
- TASK-002: Implement staggered card animations (completed)
- US-001: Setup Animation Infrastructure (must be completed)

## Related Tasks
- TASK-001: Animate gallery section header
- TASK-002: Implement staggered card entrance animations
- US-002-TASK-004: Similar modal/overlay animation patterns

## References
- [Gallery Component](../../../../components/Gallery.tsx)
- [Framer Motion AnimatePresence](https://www.framer.com/motion/animate-presence/)
- [Framer Motion Exit Animations](https://www.framer.com/motion/animation/#exit-animations)
- [Modal Animation Patterns](https://www.framer.com/motion/examples/#modal)

**Created**: 2025-10-20
**Status**: Not Started
