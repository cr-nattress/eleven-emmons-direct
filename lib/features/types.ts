/**
 * Feature Flag System - Type Definitions
 *
 * Supports multiple rollout strategies:
 * - Boolean: Simple on/off flags
 * - Percentage: Gradual rollout based on percentage
 * - Environment: Different values per environment
 */

/**
 * Rollout strategy types
 */
export type RolloutStrategy = 'boolean' | 'percentage' | 'environment'

/**
 * Environment types
 */
export type Environment = 'development' | 'production' | 'test'

/**
 * Base feature flag interface
 */
export interface BaseFeatureFlag {
  /** Unique identifier for the flag */
  key: string
  /** Human-readable name */
  name: string
  /** Description of what this flag controls */
  description: string
  /** Rollout strategy to use */
  strategy: RolloutStrategy
  /** Default value if evaluation fails */
  defaultValue: boolean
}

/**
 * Boolean feature flag - simple on/off
 */
export interface BooleanFlag extends BaseFeatureFlag {
  strategy: 'boolean'
  /** Whether the feature is enabled */
  enabled: boolean
}

/**
 * Percentage feature flag - gradual rollout
 */
export interface PercentageFlag extends BaseFeatureFlag {
  strategy: 'percentage'
  /** Percentage of users who should see this feature (0-100) */
  percentage: number
}

/**
 * Environment feature flag - different per environment
 */
export interface EnvironmentFlag extends BaseFeatureFlag {
  strategy: 'environment'
  /** Values for each environment */
  environments: {
    development: boolean
    production: boolean
    test: boolean
  }
}

/**
 * Union type of all feature flag types
 */
export type FeatureFlag = BooleanFlag | PercentageFlag | EnvironmentFlag

/**
 * Feature flag configuration map
 */
export type FeatureFlagConfig = Record<string, FeatureFlag>

/**
 * Evaluation context for feature flags
 */
export interface EvaluationContext {
  /** Current environment */
  environment: Environment
  /** User identifier for consistent percentage-based rollout (optional) */
  userId?: string
  /** Custom attributes for advanced targeting (optional) */
  attributes?: Record<string, unknown>
}
