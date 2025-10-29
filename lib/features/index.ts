/**
 * Feature Flag System
 *
 * A flexible feature flag system supporting:
 * - Boolean flags (simple on/off)
 * - Percentage-based gradual rollout
 * - Environment-specific flags
 *
 * @example
 * ```ts
 * // Check a feature flag
 * import { isFeatureEnabled } from '@/lib/features'
 *
 * if (isFeatureEnabled('virtual_tour')) {
 *   // Show virtual tour
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Use in React components
 * import { useFeatureFlag } from '@/lib/features'
 *
 * function MyComponent() {
 *   const enabled = useFeatureFlag('new_feature')
 *   return enabled ? <NewFeature /> : <OldFeature />
 * }
 * ```
 */

// Core functionality
export {
  isFeatureEnabled,
  getEnabledFeatures,
  getFeatureFlag,
  getAllFeatureFlags,
  getCurrentEnvironment,
} from './flags'

// React hooks
export { useFeatureFlag, useFeatureFlags, useEnabledFeatures } from './hooks'

// Configuration
export { featureFlags, featureFlagKeys } from './config'
export type { FeatureFlagKey } from './config'

// Types
export type {
  FeatureFlag,
  BooleanFlag,
  PercentageFlag,
  EnvironmentFlag,
  FeatureFlagConfig,
  EvaluationContext,
  Environment,
  RolloutStrategy,
} from './types'
