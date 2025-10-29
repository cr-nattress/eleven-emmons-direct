/* eslint-disable no-console */
/**
 * Environment Variable Validation and Type-Safe Access
 *
 * Provides centralized, type-safe access to environment variables
 * with development-time validation and helpful warning messages.
 *
 * Note: Console warnings are allowed in this file for development feedback.
 *
 * @example
 * import { env } from '@/lib/env'
 *
 * if (env.GA_MEASUREMENT_ID) {
 *   // Initialize analytics
 * }
 */

interface EnvironmentVariables {
  GA_MEASUREMENT_ID?: string
  HOSPITABLE_WIDGET_ID?: string
  DISABLE_ANIMATIONS?: boolean
}

function getEnv(): EnvironmentVariables {
  return {
    GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    HOSPITABLE_WIDGET_ID: process.env.NEXT_PUBLIC_HOSPITABLE_WIDGET_ID,
    DISABLE_ANIMATIONS: process.env.NEXT_PUBLIC_DISABLE_ANIMATIONS === 'true',
  }
}

export const env = getEnv()

// Development warnings for missing optional variables
if (process.env.NODE_ENV === 'development') {
  if (!env.GA_MEASUREMENT_ID) {
    console.warn(
      '⚠️  NEXT_PUBLIC_GA_MEASUREMENT_ID is not set.\n' +
        '   Analytics will be disabled.\n' +
        '   See .env.example for setup instructions.'
    )
  }

  if (!env.HOSPITABLE_WIDGET_ID) {
    console.warn(
      '⚠️  NEXT_PUBLIC_HOSPITABLE_WIDGET_ID is not set.\n' +
        '   Booking widget will show Airbnb link fallback.\n' +
        '   See .env.example for setup instructions.'
    )
  }
}
