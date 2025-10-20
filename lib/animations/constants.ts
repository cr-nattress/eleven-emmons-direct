/**
 * Animation Constants
 *
 * Centralized animation timing, easing, and configuration values
 * for consistent animations across the entire application.
 */

/**
 * Animation duration constants in milliseconds
 *
 * - FAST: Quick interactions (300ms)
 * - NORMAL: Standard animations (500ms)
 * - SLOW: Dramatic or complex animations (700ms)
 */
export const DURATION_FAST = 300
export const DURATION_NORMAL = 500
export const DURATION_SLOW = 700

/**
 * Easing curves for natural motion
 *
 * Uses cubic-bezier values compatible with Framer Motion
 * - EASE_OUT: Best for entrances (decelerates at end)
 * - EASE_IN: Best for exits (accelerates at end)
 * - EASE_IN_OUT: Smooth acceleration and deceleration
 */
export const EASING_EASE_OUT = [0.0, 0.0, 0.2, 1] as const
export const EASING_EASE_IN = [0.4, 0.0, 1, 1] as const
export const EASING_EASE_IN_OUT = [0.4, 0.0, 0.2, 1] as const

/**
 * Stagger delay constants in milliseconds
 *
 * Used for sequential animations of list items
 * - FAST: Rapid succession (50ms)
 * - NORMAL: Standard stagger (100ms)
 * - SLOW: Deliberate pacing (150ms)
 */
export const STAGGER_FAST = 0.05
export const STAGGER_NORMAL = 0.1
export const STAGGER_SLOW = 0.15

/**
 * Viewport intersection thresholds (0-1)
 *
 * Determines how much of element must be visible before triggering
 * - LOW: Trigger early (10% visible)
 * - MEDIUM: Trigger at quarter visible (25%)
 * - HIGH: Trigger when half visible (50%)
 */
export const VIEWPORT_THRESHOLD_LOW = 0.1
export const VIEWPORT_THRESHOLD_MEDIUM = 0.25
export const VIEWPORT_THRESHOLD_HIGH = 0.5

/**
 * Transform distance constants in pixels
 *
 * Used for slide animations
 * - SMALL: Subtle movement (10px)
 * - MEDIUM: Standard movement (20px)
 * - LARGE: Dramatic movement (40px)
 */
export const TRANSFORM_DISTANCE_SMALL = 10
export const TRANSFORM_DISTANCE_MEDIUM = 20
export const TRANSFORM_DISTANCE_LARGE = 40

/**
 * Detects if user prefers reduced motion
 * Returns true if prefers-reduced-motion is enabled
 *
 * @returns {boolean} True if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Returns animation config with reduced motion support
 * If user prefers reduced motion, returns instant transition (duration: 0)
 * Otherwise returns the provided duration
 *
 * @param duration - Animation duration in seconds
 * @returns Animation configuration object
 *
 * @example
 * const config = getReducedMotionConfig(0.5)
 * // Returns { duration: 0.5 } normally
 * // Returns { duration: 0 } if reduced motion preferred
 */
export function getReducedMotionConfig(duration: number = 0.5) {
  return {
    duration: prefersReducedMotion() ? 0 : duration,
  }
}

/**
 * Default animation configuration
 *
 * Standard settings used across most animations
 */
export const DEFAULT_ANIMATION_CONFIG = {
  duration: DURATION_NORMAL / 1000, // Convert to seconds
  ease: EASING_EASE_OUT,
}

/**
 * Default viewport configuration for scroll-triggered animations
 *
 * Standard settings for Intersection Observer
 */
export const DEFAULT_VIEWPORT_CONFIG = {
  once: true, // Trigger animation only once
  margin: '0px 0px -10% 0px', // Trigger slightly before element fully visible
  amount: VIEWPORT_THRESHOLD_LOW, // Trigger at 10% visibility
}
