'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  enableScale?: boolean
  enablePulse?: boolean
}

/**
 * Animated wrapper for buttons with interactive hover and tap animations
 *
 * @param children - Button content
 * @param className - Additional CSS classes
 * @param onClick - Click handler
 * @param disabled - Disabled state
 * @param type - Button type
 * @param enableScale - Enable scale animation on hover/tap
 * @param enablePulse - Enable pulse animation
 *
 * @example
 * <AnimatedButton
 *   onClick={handleClick}
 *   className="bg-blue-600 text-white px-6 py-3 rounded"
 *   enableScale
 * >
 *   Book Now
 * </AnimatedButton>
 */
export default function AnimatedButton({
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  enableScale = true,
  enablePulse = false,
}: AnimatedButtonProps) {
  const scaleAnimation = enableScale
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      }
    : {}

  const pulseAnimation = enablePulse
    ? {
        animate: {
          scale: [1, 1.02, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        },
      }
    : {}

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...scaleAnimation}
      {...pulseAnimation}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  )
}
