/* eslint-disable no-console */
/**
 * Centralized Logging Utility
 *
 * Provides environment-aware logging that:
 * - Only logs to console in development
 * - Sends errors to Google Analytics in production
 * - Prevents information leakage and improves performance
 *
 * Note: Console statements are allowed in this file only as it's the logger implementation.
 *
 * @example
 * import { logger } from '@/lib/logger'
 *
 * logger.info('User action completed')
 * logger.warn('Potential issue detected')
 * logger.error('Error occurred:', error)
 */

const isDevelopment = () => process.env.NODE_ENV === 'development'

export const logger = {
  /**
   * Log informational messages (development only)
   * @param args - Message and optional data to log
   */
  info: (...args: unknown[]) => {
    if (isDevelopment()) {
      console.info('[INFO]', ...args)
    }
  },

  /**
   * Log warning messages (development only)
   * @param args - Warning message and optional data
   */
  warn: (...args: unknown[]) => {
    if (isDevelopment()) {
      console.warn('[WARN]', ...args)
    }
  },

  /**
   * Log error messages
   * - Development: Logs to console
   * - Production: Sends to Google Analytics as exception event
   * @param args - Error message and optional data
   */
  error: (...args: unknown[]) => {
    if (isDevelopment()) {
      console.error('[ERROR]', ...args)
    }

    // In production, send errors to analytics for tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: String(args[0]),
        fatal: false,
      })
    }
  },
}
