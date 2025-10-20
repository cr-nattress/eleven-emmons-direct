# TASK-003: Create Custom Animation Hooks

## Task Description
Create custom React hooks that simplify the use of animations throughout the application, including scroll-triggered animations and reduced motion detection.

## Priority
CRITICAL

## Estimated Effort
1-2 hours

## Acceptance Criteria
- [ ] `/lib/animations/hooks.ts` created
- [ ] `useScrollAnimation` hook implemented for scroll-triggered animations
- [ ] `useReducedMotion` hook implemented for accessibility
- [ ] `useStaggerAnimation` hook implemented for staggered list animations
- [ ] All hooks are properly typed with TypeScript
- [ ] Hooks use Intersection Observer API efficiently
- [ ] Comprehensive JSDoc documentation added
- [ ] Hooks are tested and working

## Technical Details

### Required Hooks

1. **useReducedMotion()**
   - Detects user's motion preferences
   - Returns boolean: true if user prefers reduced motion
   - Uses `matchMedia` to check `prefers-reduced-motion`
   - Updates when preference changes

2. **useScrollAnimation(options)**
   - Returns animation controls for scroll-triggered animations
   - Uses Intersection Observer for performance
   - Accepts options: threshold, triggerOnce, rootMargin
   - Returns: { ref, controls, inView }

3. **useStaggerAnimation(itemCount, options)**
   - Manages staggered animations for lists
   - Returns array of refs for each item
   - Handles timing delays automatically
   - Options: staggerDelay, threshold, triggerOnce

## Agent Prompt

You are tasked with creating custom animation hooks for the Eleven Emmons vacation rental website.

**Context:**
- Framer Motion is installed (TASK-001 complete)
- Animation utilities and constants are created (TASK-002 complete)
- These hooks will simplify animation implementation across all components
- Must be performant and accessible

**Instructions:**

1. **Create `/lib/animations/hooks.ts`:**

2. **Implement `useReducedMotion()` hook:**
   ```typescript
   'use client'

   import { useEffect, useState } from 'react'

   /**
    * Hook to detect if user prefers reduced motion
    * Returns true if user has prefers-reduced-motion enabled
    *
    * @returns {boolean} True if reduced motion is preferred
    *
    * @example
    * const prefersReducedMotion = useReducedMotion()
    * const duration = prefersReducedMotion ? 0 : 0.5
    */
   export function useReducedMotion(): boolean {
     const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

     useEffect(() => {
       const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
       setPrefersReducedMotion(mediaQuery.matches)

       const handleChange = () => {
         setPrefersReducedMotion(mediaQuery.matches)
       }

       mediaQuery.addEventListener('change', handleChange)
       return () => mediaQuery.removeEventListener('change', handleChange)
     }, [])

     return prefersReducedMotion
   }
   ```

3. **Implement `useScrollAnimation()` hook:**
   ```typescript
   import { useEffect, useRef, useState } from 'react'
   import { useAnimation, AnimationControls } from 'framer-motion'

   interface UseScrollAnimationOptions {
     threshold?: number
     triggerOnce?: boolean
     rootMargin?: string
   }

   interface UseScrollAnimationReturn {
     ref: React.RefObject<HTMLElement>
     controls: AnimationControls
     inView: boolean
   }

   /**
    * Hook for scroll-triggered animations using Intersection Observer
    *
    * @param options - Configuration options
    * @param options.threshold - Percentage of element visible before triggering (0-1)
    * @param options.triggerOnce - Whether to trigger animation only once
    * @param options.rootMargin - Margin around viewport for early/late triggering
    *
    * @returns Object with ref, controls, and inView state
    *
    * @example
    * const { ref, controls } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    *
    * <motion.div
    *   ref={ref}
    *   initial="hidden"
    *   animate={controls}
    *   variants={fadeInVariants}
    * >
    *   Content
    * </motion.div>
    */
   export function useScrollAnimation(
     options: UseScrollAnimationOptions = {}
   ): UseScrollAnimationReturn {
     const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options

     const ref = useRef<HTMLElement>(null)
     const controls = useAnimation()
     const [inView, setInView] = useState(false)
     const [hasTriggered, setHasTriggered] = useState(false)

     useEffect(() => {
       const element = ref.current
       if (!element) return

       const observer = new IntersectionObserver(
         ([entry]) => {
           const isInView = entry.isIntersecting

           if (isInView && (!hasTriggered || !triggerOnce)) {
             setInView(true)
             controls.start('visible')
             if (triggerOnce) setHasTriggered(true)
           } else if (!isInView && !triggerOnce) {
             setInView(false)
             controls.start('hidden')
           }
         },
         { threshold, rootMargin }
       )

       observer.observe(element)

       return () => observer.disconnect()
     }, [controls, threshold, triggerOnce, rootMargin, hasTriggered])

     return { ref, controls, inView }
   }
   ```

4. **Implement `useStaggerAnimation()` hook:**
   ```typescript
   /**
    * Hook for staggered list animations
    * Creates multiple refs with automatic stagger delay
    *
    * @param itemCount - Number of items to animate
    * @param options - Configuration options
    *
    * @returns Array of refs and parent container ref
    *
    * @example
    * const { containerRef, itemRefs } = useStaggerAnimation(5, { staggerDelay: 0.1 })
    *
    * <motion.ul ref={containerRef} variants={staggerContainerVariants}>
    *   {items.map((item, i) => (
    *     <motion.li key={i} ref={itemRefs[i]} variants={staggerItemVariants}>
    *       {item}
    *     </motion.li>
    *   ))}
    * </motion.ul>
    */
   interface UseStaggerAnimationOptions {
     staggerDelay?: number
     threshold?: number
     triggerOnce?: boolean
   }

   export function useStaggerAnimation(
     itemCount: number,
     options: UseStaggerAnimationOptions = {}
   ) {
     const { staggerDelay = 0.1, threshold = 0.1, triggerOnce = true } = options

     const containerRef = useRef<HTMLElement>(null)
     const controls = useAnimation()

     useEffect(() => {
       const element = containerRef.current
       if (!element) return

       const observer = new IntersectionObserver(
         ([entry]) => {
           if (entry.isIntersecting) {
             controls.start('visible')
             if (triggerOnce) observer.disconnect()
           }
         },
         { threshold }
       )

       observer.observe(element)

       return () => observer.disconnect()
     }, [controls, threshold, triggerOnce])

     return { containerRef, controls, staggerDelay }
   }
   ```

5. **Add 'use client' directive:**
   - Add `'use client'` at the very top of the file
   - These hooks use browser APIs and must be client-side only

6. **TypeScript:**
   - Import all necessary types from 'react' and 'framer-motion'
   - Properly type all parameters and return values
   - Use interfaces for option objects

7. **Documentation:**
   - Add comprehensive JSDoc comments
   - Include usage examples for each hook
   - Explain parameters and return values
   - Note any performance considerations

**Performance Considerations:**
- Use Intersection Observer (native browser API) for scroll detection
- Disconnect observers when no longer needed
- Avoid re-creating observers unnecessarily
- Use useCallback for handler functions if needed

**Accessibility:**
- `useReducedMotion` should respect system preferences
- Hooks should work seamlessly with reduced motion
- No motion sickness triggers

**Success Criteria:**
- All three hooks implemented and exported
- No TypeScript errors
- Properly documented with JSDoc
- 'use client' directive at top of file
- Can be imported: `import { useScrollAnimation } from '@/lib/animations/hooks'`

**Testing:**
- Verify TypeScript compilation: `npm run build`
- Verify imports work
- Verify no linting errors: `npm run lint`
- Hooks will be tested in next task when creating wrapper components

## Dependencies
- TASK-001: Install Framer Motion (required)
- TASK-002: Create animation utilities (constants will be referenced)

## Related Tasks
- TASK-004: Create animated wrapper components (will use these hooks)
- All future animation tasks will leverage these hooks

## References
- [Framer Motion useAnimation](https://www.framer.com/motion/use-animation/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

**Created**: 2025-10-20
**Status**: Not Started
