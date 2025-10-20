'use client'

/**
 * Animation Hooks
 *
 * Custom React hooks for simplified animation implementation
 * throughout the application.
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import { useAnimation } from 'framer-motion'

/**
 * Hook to check if component is mounted (client-side only)
 * Prevents hydration errors by ensuring animations only run after mount
 *
 * @returns {boolean} True if component is mounted on client
 *
 * @example
 * const mounted = useMounted()
 * if (!mounted) return <div>Loading...</div>
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

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

/**
 * Options for useScrollAnimation hook
 */
export interface UseScrollAnimationOptions {
  /** Percentage of element visible before triggering (0-1) */
  threshold?: number
  /** Whether to trigger animation only once */
  triggerOnce?: boolean
  /** Margin around viewport for early/late triggering */
  rootMargin?: string
}

/**
 * Return value from useScrollAnimation hook
 */
export interface UseScrollAnimationReturn {
  /** Ref to attach to the element to observe */
  ref: React.RefObject<HTMLElement>
  /** Animation controls to use with motion components */
  controls: ReturnType<typeof useAnimation>
  /** Whether element is currently in view */
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

/**
 * Options for useStaggerAnimation hook
 */
export interface UseStaggerAnimationOptions {
  /** Delay between each item animation (seconds) */
  staggerDelay?: number
  /** Scroll trigger threshold (0-1) */
  threshold?: number
  /** Whether to trigger animation only once */
  triggerOnce?: boolean
}

/**
 * Return value from useStaggerAnimation hook
 */
export interface UseStaggerAnimationReturn {
  /** Ref to attach to the container element */
  containerRef: React.RefObject<HTMLElement>
  /** Animation controls for the container */
  controls: ReturnType<typeof useAnimation>
  /** Stagger delay value to use in variants */
  staggerDelay: number
}

/**
 * Hook for staggered list animations
 * Creates animation controls with automatic stagger delay
 *
 * @param options - Configuration options
 * @param options.staggerDelay - Delay between each item (seconds)
 * @param options.threshold - Scroll trigger threshold (0-1)
 * @param options.triggerOnce - Whether to trigger only once
 *
 * @returns Object with containerRef, controls, and staggerDelay
 *
 * @example
 * const { containerRef, controls, staggerDelay } = useStaggerAnimation({ staggerDelay: 0.1 })
 *
 * <motion.ul
 *   ref={containerRef}
 *   initial="hidden"
 *   animate={controls}
 *   variants={staggerContainerVariants}
 * >
 *   {items.map((item, i) => (
 *     <motion.li key={i} variants={staggerItemVariants}>
 *       {item}
 *     </motion.li>
 *   ))}
 * </motion.ul>
 */
export function useStaggerAnimation(
  options: UseStaggerAnimationOptions = {}
): UseStaggerAnimationReturn {
  const { staggerDelay = 0.1, threshold = 0.1, triggerOnce = true } = options

  const containerRef = useRef<HTMLElement>(null)
  const controls = useAnimation()
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasTriggered || !triggerOnce)) {
          controls.start('visible')
          if (triggerOnce) {
            setHasTriggered(true)
            observer.disconnect()
          }
        } else if (!entry.isIntersecting && !triggerOnce) {
          controls.start('hidden')
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [controls, threshold, triggerOnce, hasTriggered])

  return { containerRef, controls, staggerDelay }
}

/**
 * Hook for element entrance on mount
 * Automatically starts animation when component mounts
 *
 * @param delay - Optional delay before animation starts (seconds)
 * @returns Animation controls
 *
 * @example
 * const controls = useEntranceAnimation(0.2)
 *
 * <motion.div
 *   initial="hidden"
 *   animate={controls}
 *   variants={fadeInVariants}
 * >
 *   Content
 * </motion.div>
 */
export function useEntranceAnimation(delay: number = 0): ReturnType<typeof useAnimation> {
  const controls = useAnimation()

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start('visible')
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [controls, delay])

  return controls
}

/**
 * Hook for sequential animations
 * Manages a sequence of animation steps
 *
 * @param sequence - Array of animation variants to play in order
 * @param stepDelay - Delay between each step (seconds)
 * @returns Current step index and controls
 *
 * @example
 * const { currentStep, controls } = useSequenceAnimation(['step1', 'step2', 'step3'], 0.5)
 */
export function useSequenceAnimation(
  sequence: string[],
  stepDelay: number = 0.5
) {
  const [currentStep, setCurrentStep] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (currentStep < sequence.length) {
      const timer = setTimeout(() => {
        controls.start(sequence[currentStep])
        setCurrentStep((prev) => prev + 1)
      }, currentStep === 0 ? 0 : stepDelay * 1000)

      return () => clearTimeout(timer)
    }
  }, [currentStep, sequence, stepDelay, controls])

  const reset = useCallback(() => {
    setCurrentStep(0)
    controls.start(sequence[0])
  }, [controls, sequence])

  return { currentStep, controls, reset }
}
