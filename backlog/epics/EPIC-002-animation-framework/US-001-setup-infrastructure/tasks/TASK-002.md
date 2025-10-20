# TASK-002: Create Animation Utilities and Constants

## Task Description
Create the foundational animation utilities and constants that will be used across the entire application.

## Priority
CRITICAL

## Estimated Effort
2-3 hours

## Acceptance Criteria
- [ ] `/lib/animations/` directory created
- [ ] `/lib/animations/variants.ts` created with reusable animation variants
- [ ] `/lib/animations/constants.ts` created with timing and easing values
- [ ] All files are properly typed with TypeScript
- [ ] Variants include: fadeIn, slideUp, slideDown, slideLeft, slideRight, scale, stagger
- [ ] Constants include: durations, easing curves, delays, thresholds
- [ ] Support for `prefers-reduced-motion` built in
- [ ] Code is well-documented with JSDoc comments

## Technical Details

### File Structure
```
/lib
  /animations
    - variants.ts      # Reusable animation variants for Framer Motion
    - constants.ts     # Timing, easing, and configuration constants
```

### Required Variants
1. **fadeIn** - Basic opacity fade
2. **slideUp** - Slide from bottom with fade
3. **slideDown** - Slide from top with fade
4. **slideLeft** - Slide from right with fade
5. **slideRight** - Slide from left with fade
6. **scaleIn** - Scale up with fade
7. **staggerContainer** - Container for staggered children
8. **staggerItem** - Individual items in stagger sequence

### Required Constants
- Animation durations (fast: 300ms, normal: 500ms, slow: 700ms)
- Easing curves (easeOut, easeIn, easeInOut)
- Stagger delays (50ms, 100ms, 150ms)
- Viewport thresholds (0.1, 0.2, 0.3)
- Default animation config

## Agent Prompt

You are tasked with creating the animation utilities and constants for the Eleven Emmons vacation rental website.

**Context:**
- Framer Motion has been installed (TASK-001 completed)
- This is a Next.js 14 project with TypeScript
- These utilities will be used across ALL components that need animations
- Must support accessibility (prefers-reduced-motion)

**Instructions:**

1. **Create Directory Structure:**
   ```bash
   mkdir -p lib/animations
   ```

2. **Create `/lib/animations/constants.ts`:**
   - Define animation duration constants (DURATION_FAST, DURATION_NORMAL, DURATION_SLOW)
   - Define easing constants (EASING_EASE_OUT, EASING_EASE_IN, EASING_EASE_IN_OUT)
   - Define stagger delay constants (STAGGER_FAST, STAGGER_NORMAL, STAGGER_SLOW)
   - Define viewport thresholds (VIEWPORT_THRESHOLD_LOW, etc.)
   - Create a function `getReducedMotionConfig()` that returns { duration: 0 } if user prefers reduced motion
   - Export all constants and utilities
   - Add JSDoc comments explaining each constant

   Example structure:
   ```typescript
   /**
    * Animation duration constants in milliseconds
    */
   export const DURATION_FAST = 300
   export const DURATION_NORMAL = 500
   export const DURATION_SLOW = 700

   /**
    * Easing curves for natural motion
    */
   export const EASING_EASE_OUT = [0.0, 0.0, 0.2, 1]
   // ... etc
   ```

3. **Create `/lib/animations/variants.ts`:**
   - Import constants from './constants'
   - Import type `Variants` from 'framer-motion'
   - Create variant objects for each animation type:
     - `fadeInVariants`: hidden and visible states
     - `slideUpVariants`: hidden (below) and visible states
     - `slideDownVariants`: hidden (above) and visible states
     - `slideLeftVariants`: hidden (right) and visible states
     - `slideRightVariants`: hidden (left) and visible states
     - `scaleInVariants`: hidden (small) and visible states
     - `staggerContainerVariants`: container for staggered animations
     - `staggerItemVariants`: individual stagger items

   - Each variant should use constants for duration and easing
   - Use appropriate transform properties (translateY, translateX, scale, opacity)
   - Add JSDoc comments explaining each variant

   Example structure:
   ```typescript
   import { Variants } from 'framer-motion'
   import { DURATION_NORMAL, EASING_EASE_OUT } from './constants'

   /**
    * Fade in animation variant
    * Animates opacity from 0 to 1
    */
   export const fadeInVariants: Variants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         duration: DURATION_NORMAL / 1000, // Convert to seconds
         ease: EASING_EASE_OUT,
       },
     },
   }

   /**
    * Slide up animation variant
    * Combines vertical movement with fade
    */
   export const slideUpVariants: Variants = {
     hidden: { opacity: 0, y: 20 },
     visible: {
       opacity: 1,
       y: 0,
       transition: {
         duration: DURATION_NORMAL / 1000,
         ease: EASING_EASE_OUT,
       },
     },
   }
   // ... etc for all variants
   ```

4. **TypeScript Best Practices:**
   - Use proper typing for all exports
   - Import `Variants` type from framer-motion
   - Ensure all values are strongly typed
   - Use const assertions where appropriate

5. **Documentation:**
   - Add JSDoc comments to all exports
   - Include usage examples in comments
   - Explain animation principles (duration, easing, etc.)

**Animation Principles to Follow:**
- Duration: 300-600ms feels natural (avoid too slow or too fast)
- Easing: Use easeOut for entrances, easeIn for exits
- Distance: Keep translateY/translateX values subtle (20-40px)
- Scale: Small scale changes (0.95-1.0) for subtle effects
- Stagger: 50-100ms between items works well

**Accessibility:**
- The `getReducedMotionConfig()` utility should check `window.matchMedia('(prefers-reduced-motion: reduce)')`
- Return instant transitions (duration: 0) if user prefers reduced motion
- This will be used in later tasks when implementing components

**Success Criteria:**
- Both files created with no TypeScript errors
- All variants use the constants defined
- Variants cover all common animation patterns needed
- Code is clean, typed, and well-documented
- Files can be imported and used in components

**Testing:**
- Verify TypeScript compilation succeeds: `npm run build` or check editor
- Verify imports work: `import { fadeInVariants } from '@/lib/animations/variants'`
- Verify no linting errors: `npm run lint`

## Dependencies
- TASK-001: Install Framer Motion (must be completed first)

## Related Tasks
- TASK-003: Create custom animation hooks (uses these utilities)
- TASK-004: Create animated wrapper components (uses these variants)
- All future animation implementation tasks will use these utilities

## References
- [Framer Motion Variants](https://www.framer.com/motion/animation/##variants)
- [Framer Motion Transitions](https://www.framer.com/motion/transition/)
- [Animation Principles](../../../knowledge/feedback/feedback-01.md#L27-36)

**Created**: 2025-10-20
**Status**: Not Started
