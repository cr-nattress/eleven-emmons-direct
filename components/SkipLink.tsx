'use client'

/**
 * Skip Link Component
 *
 * Provides a keyboard-accessible link that allows users to skip
 * repetitive navigation and jump directly to main content.
 *
 * WCAG 2.1 Level A - 2.4.1 Bypass Blocks
 */

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
    >
      Skip to main content
    </a>
  )
}
