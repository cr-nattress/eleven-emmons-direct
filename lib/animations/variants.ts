/**
 * Animation Variants
 *
 * Reusable Framer Motion animation variants for consistent
 * animations across the application.
 */

import { Variants } from 'framer-motion'
import {
  DURATION_NORMAL,
  EASING_EASE_OUT,
  EASING_EASE_IN,
  TRANSFORM_DISTANCE_MEDIUM,
  TRANSFORM_DISTANCE_LARGE,
  STAGGER_NORMAL,
} from './constants'

/**
 * Fade in animation variant
 * Animates opacity from 0 to 1
 *
 * @example
 * <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
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
 * Combines vertical movement from below with fade
 *
 * @example
 * <motion.div variants={slideUpVariants} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: TRANSFORM_DISTANCE_MEDIUM,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_OUT,
    },
  },
}

/**
 * Slide down animation variant
 * Combines vertical movement from above with fade
 *
 * @example
 * <motion.div variants={slideDownVariants} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const slideDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -TRANSFORM_DISTANCE_MEDIUM,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_OUT,
    },
  },
}

/**
 * Slide left animation variant
 * Combines horizontal movement from right with fade
 *
 * @example
 * <motion.div variants={slideLeftVariants} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const slideLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: TRANSFORM_DISTANCE_MEDIUM,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_OUT,
    },
  },
}

/**
 * Slide right animation variant
 * Combines horizontal movement from left with fade
 *
 * @example
 * <motion.div variants={slideRightVariants} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const slideRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -TRANSFORM_DISTANCE_MEDIUM,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_OUT,
    },
  },
}

/**
 * Scale in animation variant
 * Combines scale up with fade
 *
 * @example
 * <motion.div variants={scaleInVariants} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_OUT,
    },
  },
}

/**
 * Scale out animation variant (for exits)
 * Combines scale down with fade
 *
 * @example
 * <motion.div variants={scaleOutVariants} initial="visible" exit="hidden">
 *   Content
 * </motion.div>
 */
export const scaleOutVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_IN,
    },
  },
}

/**
 * Stagger container variant
 * Parent container for staggered children animations
 *
 * @example
 * <motion.ul variants={staggerContainerVariants} initial="hidden" animate="visible">
 *   <motion.li variants={staggerItemVariants}>Item 1</motion.li>
 *   <motion.li variants={staggerItemVariants}>Item 2</motion.li>
 * </motion.ul>
 */
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_NORMAL,
      delayChildren: 0,
    },
  },
}

/**
 * Stagger item variant
 * Individual items in a staggered list
 * Use with staggerContainerVariants on parent
 *
 * @example
 * <motion.ul variants={staggerContainerVariants} initial="hidden" animate="visible">
 *   <motion.li variants={staggerItemVariants}>Item 1</motion.li>
 *   <motion.li variants={staggerItemVariants}>Item 2</motion.li>
 * </motion.ul>
 */
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: TRANSFORM_DISTANCE_MEDIUM,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_OUT,
    },
  },
}

/**
 * Slide up large animation variant
 * More dramatic vertical movement for hero sections
 *
 * @example
 * <motion.div variants={slideUpLargeVariants} initial="hidden" animate="visible">
 *   Hero content
 * </motion.div>
 */
export const slideUpLargeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: TRANSFORM_DISTANCE_LARGE,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_OUT,
    },
  },
}

/**
 * Blur fade in variant
 * Combines blur effect with fade for modern look
 *
 * @example
 * <motion.div variants={blurFadeVariants} initial="hidden" animate="visible">
 *   Content
 * </motion.div>
 */
export const blurFadeVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION_NORMAL / 1000,
      ease: EASING_EASE_OUT,
    },
  },
}
