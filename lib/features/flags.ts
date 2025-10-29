/**
 * Feature Flag System - Core Evaluation Logic
 *
 * Provides functions to check if feature flags are enabled.
 * Supports multiple rollout strategies including gradual percentage-based rollout.
 */

import { featureFlags } from './config'
import type {
  Environment,
  EvaluationContext,
  FeatureFlag,
  BooleanFlag,
  PercentageFlag,
  EnvironmentFlag,
} from './types'
import type { FeatureFlagKey } from './config'

/**
 * Get current environment
 */
export function getCurrentEnvironment(): Environment {
  if (typeof process === 'undefined') {
    return 'production'
  }

  const nodeEnv = process.env.NODE_ENV

  if (nodeEnv === 'test') return 'test'
  if (nodeEnv === 'development') return 'development'
  return 'production'
}

/**
 * Generate a deterministic hash from a string
 * Used for consistent percentage-based rollout
 */
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

/**
 * Check if a user is in the rollout percentage
 * Uses consistent hashing to ensure same user always gets same result
 */
function isInPercentage(
  flagKey: string,
  percentage: number,
  userId?: string
): boolean {
  // If no userId, use a random approach (inconsistent but functional)
  if (!userId) {
    return Math.random() * 100 < percentage
  }

  // Combine flagKey and userId for deterministic hashing
  const hash = hashString(`${flagKey}:${userId}`)
  const bucket = hash % 100
  return bucket < percentage
}

/**
 * Evaluate a boolean feature flag
 */
function evaluateBooleanFlag(flag: BooleanFlag): boolean {
  return flag.enabled
}

/**
 * Evaluate a percentage feature flag
 */
function evaluatePercentageFlag(
  flag: PercentageFlag,
  context: EvaluationContext
): boolean {
  return isInPercentage(flag.key, flag.percentage, context.userId)
}

/**
 * Evaluate an environment feature flag
 */
function evaluateEnvironmentFlag(
  flag: EnvironmentFlag,
  context: EvaluationContext
): boolean {
  return flag.environments[context.environment]
}

/**
 * Evaluate a feature flag based on its strategy
 */
function evaluateFlag(flag: FeatureFlag, context: EvaluationContext): boolean {
  try {
    switch (flag.strategy) {
      case 'boolean':
        return evaluateBooleanFlag(flag as BooleanFlag)
      case 'percentage':
        return evaluatePercentageFlag(flag as PercentageFlag, context)
      case 'environment':
        return evaluateEnvironmentFlag(flag as EnvironmentFlag, context)
      default: {
        // This should never happen, but TypeScript exhaustiveness check requires it
        const _exhaustiveCheck: never = flag
        return (_exhaustiveCheck as FeatureFlag).defaultValue
      }
    }
  } catch {
    return flag.defaultValue
  }
}

/**
 * Check if a feature flag is enabled
 *
 * @param key - Feature flag key
 * @param context - Optional evaluation context (defaults to current environment)
 * @returns true if the feature is enabled
 *
 * @example
 * ```ts
 * // Simple check
 * if (isFeatureEnabled('hospitable_widget')) {
 *   // Show widget
 * }
 *
 * // With user context for consistent percentage rollout
 * if (isFeatureEnabled('virtual_tour', { userId: user.id })) {
 *   // Show virtual tour
 * }
 * ```
 */
export function isFeatureEnabled(
  key: FeatureFlagKey,
  context?: Partial<EvaluationContext>
): boolean {
  const flag = featureFlags[key]

  if (!flag) {
    console.warn(`Feature flag "${key}" not found, returning false`)
    return false
  }

  const fullContext: EvaluationContext = {
    environment: getCurrentEnvironment(),
    ...context,
  }

  return evaluateFlag(flag, fullContext)
}

/**
 * Get all enabled feature flags
 *
 * @param context - Optional evaluation context
 * @returns Array of enabled feature flag keys
 *
 * @example
 * ```ts
 * const enabledFlags = getEnabledFeatures()
 * console.log('Active features:', enabledFlags)
 * ```
 */
export function getEnabledFeatures(
  context?: Partial<EvaluationContext>
): FeatureFlagKey[] {
  return Object.keys(featureFlags).filter((key) =>
    isFeatureEnabled(key as FeatureFlagKey, context)
  ) as FeatureFlagKey[]
}

/**
 * Get feature flag configuration
 *
 * @param key - Feature flag key
 * @returns Feature flag configuration or undefined
 */
export function getFeatureFlag(key: FeatureFlagKey): FeatureFlag | undefined {
  return featureFlags[key]
}

/**
 * Get all feature flags
 */
export function getAllFeatureFlags(): Record<string, FeatureFlag> {
  return featureFlags
}
