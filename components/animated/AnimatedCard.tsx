'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import { slideUpVariants } from '@/lib/animations/variants'
import { ReactNode } from 'react'
import type { Variants } from 'framer-motion'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  customVariants?: Variants
  enableHover?: boolean
  threshold?: number
  delay?: number
}

/**
 * Animated wrapper for cards with entrance and hover effects
 *
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param customVariants - Custom Framer Motion variants
 * @param enableHover - Enable hover animation
 * @param threshold - Scroll trigger threshold
 * @param delay - Animation delay
 *
 * @example
 * <AnimatedCard enableHover className="bg-white p-6 rounded-lg shadow">
 *   <h3>Card Title</h3>
 *   <p>Card content...</p>
 * </AnimatedCard>
 */
export default function AnimatedCard({
  children,
  className = '',
  customVariants,
  enableHover = true,
  threshold = 0.1,
  delay = 0,
}: AnimatedCardProps) {
  const { ref, controls } = useScrollAnimation({ threshold, triggerOnce: true })

  const variants = customVariants || slideUpVariants

  const hoverAnimation = enableHover
    ? {
        scale: 1.02,
        y: -4,
        transition: { duration: 0.2 },
      }
    : {}

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={controls}
      variants={variants}
      whileHover={hoverAnimation}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
