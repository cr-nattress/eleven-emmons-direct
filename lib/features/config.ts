/**
 * Feature Flag Configuration
 *
 * Central configuration for all feature flags in the application.
 * Add new flags here and they'll be available throughout the app.
 */

import type { FeatureFlagConfig } from './types'

/**
 * Feature flag configuration
 *
 * Guidelines:
 * - Use 'boolean' strategy for simple on/off features
 * - Use 'percentage' strategy for gradual rollouts (A/B testing)
 * - Use 'environment' strategy for env-specific features
 * - Keep defaultValue as safe fallback (usually false for new features)
 */
export const featureFlags: FeatureFlagConfig = {
  // Booking & Integration Features
  hospitable_widget: {
    key: 'hospitable_widget',
    name: 'Hospitable Widget',
    description:
      'Enable Hospitable booking widget integration (requires NEXT_PUBLIC_HOSPITABLE_WIDGET_ID)',
    strategy: 'environment',
    environments: {
      development: true, // Always on in dev for testing
      production: false, // Off in production until configured
      test: false, // Off in tests
    },
    defaultValue: false,
  },

  advanced_analytics: {
    key: 'advanced_analytics',
    name: 'Advanced Analytics',
    description:
      'Enable advanced analytics tracking (page views, interactions, conversions)',
    strategy: 'environment',
    environments: {
      development: false, // Off in dev to avoid polluting analytics
      production: true, // On in production for real data
      test: false, // Off in tests
    },
    defaultValue: false,
  },

  // UI/UX Features
  enhanced_gallery_animations: {
    key: 'enhanced_gallery_animations',
    name: 'Enhanced Gallery Animations',
    description:
      'Enable enhanced animations in the gallery (stagger effects, transitions)',
    strategy: 'boolean',
    enabled: true, // Already implemented and stable
    defaultValue: true,
  },

  booking_calendar_integration: {
    key: 'booking_calendar_integration',
    name: 'Booking Calendar Integration',
    description:
      'Show real-time availability calendar in booking widget (requires API)',
    strategy: 'percentage',
    percentage: 0, // Not implemented yet, 0% rollout
    defaultValue: false,
  },

  instant_booking: {
    key: 'instant_booking',
    name: 'Instant Booking',
    description: 'Allow guests to book instantly without host approval',
    strategy: 'boolean',
    enabled: false, // Feature not ready yet
    defaultValue: false,
  },

  // Performance Features
  image_lazy_loading: {
    key: 'image_lazy_loading',
    name: 'Image Lazy Loading',
    description:
      'Enable lazy loading for gallery images (performance optimization)',
    strategy: 'boolean',
    enabled: true, // Already implemented in US-007
    defaultValue: true,
  },

  prefetch_navigation: {
    key: 'prefetch_navigation',
    name: 'Prefetch Navigation',
    description: 'Prefetch page resources on hover for faster navigation',
    strategy: 'percentage',
    percentage: 50, // Gradual rollout - 50% of users
    defaultValue: false,
  },

  // Experimental Features
  virtual_tour: {
    key: 'virtual_tour',
    name: 'Virtual Tour',
    description: '360° virtual tour of the property',
    strategy: 'percentage',
    percentage: 10, // Limited rollout - 10% of users
    defaultValue: false,
  },

  guest_reviews_section: {
    key: 'guest_reviews_section',
    name: 'Guest Reviews Section',
    description: 'Display guest reviews and ratings',
    strategy: 'environment',
    environments: {
      development: true, // On in dev for testing
      production: false, // Not ready for production
      test: true, // On in tests
    },
    defaultValue: false,
  },

  // Accessibility Features
  high_contrast_mode: {
    key: 'high_contrast_mode',
    name: 'High Contrast Mode',
    description: 'Enable high contrast mode for improved accessibility',
    strategy: 'boolean',
    enabled: false, // Not implemented yet
    defaultValue: false,
  },
}

/**
 * Get all feature flag keys
 */
export const featureFlagKeys = Object.keys(featureFlags) as Array<
  keyof typeof featureFlags
>

/**
 * Type-safe feature flag key
 */
export type FeatureFlagKey = keyof typeof featureFlags
