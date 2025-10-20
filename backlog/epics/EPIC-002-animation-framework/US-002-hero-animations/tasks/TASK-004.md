# TASK-004: Enhance Scroll Arrow Animation

## Task Description
Enhance the existing scroll arrow animation by adding a fade-in entrance and improving the visual draw to encourage scrolling.

## Priority
HIGH

## Estimated Effort
30 minutes

## Acceptance Criteria
- [ ] Scroll indicator fades in after buttons (600ms delay)
- [ ] Maintains existing bounce animation
- [ ] Arrow provides clear visual cue to scroll
- [ ] Animation feels smooth and natural
- [ ] Reduced motion preferences respected
- [ ] Link functionality maintained

## Technical Details

### Current State
- Scroll indicator at bottom of hero
- Has `animate-bounce` Tailwind class
- Contains "Scroll to explore" text and arrow SVG
- Links to #about section

### Enhancement
- Add fade-in entrance animation (delay: 600ms)
- Keep existing bounce animation
- Optionally enhance bounce with Framer Motion for more control

### Animation Timing
- Delay: 600ms (after buttons complete)
- Duration: 500ms
- Effect: opacity 0 → 1

## Agent Prompt

You are tasked with enhancing the scroll arrow animation in the hero section.

**Context:**
- Hero animations are nearly complete (TASK-001, TASK-002, TASK-003)
- Scroll arrow currently has Tailwind `animate-bounce` class
- Need to add entrance animation to complete the hero sequence
- Arrow is in the main Hero.tsx component, not HeroContent.tsx

**Current Structure:**
In `/components/Hero.tsx`:
- Lines 52-70: Scroll indicator div
- Contains Link with "Scroll to explore" text and arrow SVG
- Currently has `animate-bounce` class on SVG

**Instructions:**

1. **Convert Hero to Client Component (if not already):**

   Since the scroll indicator is in the main Hero.tsx (not HeroContent.tsx), you need to either:
   - **Option A**: Convert Hero.tsx to client component
   - **Option B**: Extract scroll indicator to a separate client component

   **Recommended: Option A (Simpler)**

2. **Update `/components/Hero.tsx`:**

3. **Add 'use client' directive if not present:**
   ```typescript
   'use client'

   import Image from 'next/image'
   import Link from 'next/link'
   import { motion } from 'framer-motion'
   import HeroContent from './HeroContent'
   ```

4. **Find the scroll indicator div (around line 52):**
   Current code:
   ```typescript
   <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
     <Link
       href="#about"
       className="flex flex-col items-center text-white opacity-75 transition-opacity hover:opacity-100"
     >
       <span className="mb-2 text-sm">Scroll to explore</span>
       <svg
         className="h-6 w-6 animate-bounce"
         fill="none"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
       </svg>
     </Link>
   </div>
   ```

5. **Convert to motion.div with fade-in:**
   ```typescript
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.6, duration: 0.5 }}
     className="absolute bottom-8 left-1/2 -translate-x-1/2"
   >
     <Link
       href="#about"
       className="flex flex-col items-center text-white opacity-75 transition-opacity hover:opacity-100"
     >
       <span className="mb-2 text-sm">Scroll to explore</span>
       <svg
         className="h-6 w-6 animate-bounce"
         fill="none"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
       </svg>
     </Link>
   </motion.div>
   ```

6. **Keep Tailwind animate-bounce:**
   - The SVG already has `animate-bounce` class
   - This works perfectly with Framer Motion
   - Framer Motion handles the fade-in, Tailwind handles the bounce
   - No conflict between the two

**Alternative: Enhanced Bounce with Framer Motion:**

If you want to replace Tailwind bounce with Framer Motion (optional):
```typescript
<motion.svg
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="h-6 w-6"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
</motion.svg>
```

But the Tailwind animate-bounce is fine - stick with simpler approach.

**Key Points:**
- Change wrapping `<div>` to `<motion.div>`
- Add `initial={{ opacity: 0 }}`
- Add `animate={{ opacity: 1 }}`
- Add `transition={{ delay: 0.6, duration: 0.5 }}`
- Keep all existing classNames
- Keep Link functionality intact
- Keep SVG bounce animation

**Complete Hero Animation Sequence:**
- 0ms: Title fades in
- 200ms: Subtitle fades in
- 300ms: Description fades in
- 400ms: Primary button fades in
- 500ms: Secondary button fades in
- 600ms: Scroll arrow fades in
- **Total**: 1.1 seconds from page load to full hero reveal

**Visual Effect:**
- Scroll indicator appears last in the sequence
- Draws attention downward after user sees the content
- Bounce animation provides continuous visual cue
- Creates natural flow: read content → see scroll arrow → scroll down

**Accessibility:**
- Reduced motion users see instant scroll indicator
- Link remains keyboard accessible
- Arrow provides clear affordance to scroll
- Text label supports screen readers

**Testing:**
1. Refresh browser at http://localhost:3000
2. Watch complete hero entrance sequence
3. Verify scroll indicator fades in last (after ~600ms)
4. Verify bounce animation continues after fade-in
5. Click scroll indicator - should jump to #about section
6. Test keyboard navigation
7. Check console for errors

**Expected Result:**
- Scroll indicator fades in smoothly at end of sequence
- Bounce animation works correctly
- Link navigates to about section
- Professional, complete hero animation

**Success Criteria:**
- Scroll indicator animates on entrance
- Appears last in the sequence (600ms delay)
- Bounce animation maintained
- Link functionality works
- No TypeScript errors
- No console errors

**Common Issues to Avoid:**
- Don't remove the animate-bounce class
- Keep Link component functional
- Maintain positioning classNames (absolute, bottom-8, etc.)
- Don't make delay too long (600ms is right after buttons)

## Dependencies
- TASK-001: Refactor Hero Component (must be completed)
- Recommended: TASK-002 and TASK-003 completed for full sequence

## Related Tasks
- Completes US-002: Hero Section Animations
- US-003: Gallery Animations (next user story)

## References
- [Framer Motion Animations](https://www.framer.com/motion/animation/)
- [Combining Framer Motion with CSS](https://www.framer.com/motion/guide-upgrade/)
- [Current Hero Component](../../../../components/Hero.tsx)

**Created**: 2025-10-20
**Status**: Not Started
