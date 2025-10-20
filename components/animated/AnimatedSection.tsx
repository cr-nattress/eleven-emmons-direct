'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/lib/animations/hooks'
import { fadeInVariants, slideUpVariants, slideDownVariants } from '@/lib/animations/variants'
import { ReactNode } from 'react'
import type { Variants } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  variant?: 'fadeIn' | 'slideUp' | 'slideDown'
  customVariants?: Variants
  threshold?: number
  delay?: number
}

/**
 * Animated wrapper for sections with scroll-triggered entrance animations
 *
 * @param children - Content to animate
 * @param className - Additional CSS classes
 * @param variant - Preset animation variant
 * @param customVariants - Custom Framer Motion variants
 * @param threshold - Scroll trigger threshold (0-1)
 * @param delay - Delay before animation starts (seconds)
 *
 * @example
 * <AnimatedSection variant="slideUp" className="py-20">
 *   <h2>Section Title</h2>
 *   <p>Section content...</p>
 * </AnimatedSection>
 */
export default function AnimatedSection({
  children,
  className = '',
  variant = 'fadeIn',
  customVariants,
  threshold = 0.1,
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation({ threshold, triggerOnce: true })

  // Select variant based on prop
  let selectedVariants = fadeInVariants
  if (variant === 'slideUp') selectedVariants = slideUpVariants
  if (variant === 'slideDown') selectedVariants = slideDownVariants
  if (customVariants) selectedVariants = customVariants

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={controls}
      variants={selectedVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
