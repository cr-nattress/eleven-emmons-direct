'use client'

/**
 * Feature Flag Hooks
 *
 * React hooks for checking feature flags in components.
 * All hooks are client-side only.
 */

import { useMemo } from 'react'
import { isFeatureEnabled, getEnabledFeatures } from './flags'
import type { EvaluationContext } from './types'
import type { FeatureFlagKey } from './config'

/**
 * Hook to check if a feature flag is enabled
 *
 * @param key - Feature flag key
 * @param context - Optional evaluation context
 * @returns true if the feature is enabled
 *
 * @example
 * ```tsx
 * function BookingWidget() {
 *   const showHospitableWidget = useFeatureFlag('hospitable_widget')
 *
 *   if (showHospitableWidget) {
 *     return <HospitableWidget />
 *   }
 *
 *   return <FallbackBookingUI />
 * }
 * ```
 */
export function useFeatureFlag(
  key: FeatureFlagKey,
  context?: Partial<EvaluationContext>
): boolean {
  return useMemo(
    () => isFeatureEnabled(key, context),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, context?.environment, context?.userId]
  )
}

/**
 * Hook to check multiple feature flags at once
 *
 * @param keys - Array of feature flag keys
 * @param context - Optional evaluation context
 * @returns Object mapping flag keys to boolean values
 *
 * @example
 * ```tsx
 * function Gallery() {
 *   const flags = useFeatureFlags([
 *     'enhanced_gallery_animations',
 *     'virtual_tour',
 *     'image_lazy_loading'
 *   ])
 *
 *   return (
 *     <div>
 *       {flags.virtual_tour && <VirtualTourButton />}
 *       <ImageGallery
 *         animate={flags.enhanced_gallery_animations}
 *         lazy={flags.image_lazy_loading}
 *       />
 *     </div>
 *   )
 * }
 * ```
 */
export function useFeatureFlags(
  keys: FeatureFlagKey[],
  context?: Partial<EvaluationContext>
): Record<FeatureFlagKey, boolean> {
  return useMemo(() => {
    const result: Record<string, boolean> = {}
    keys.forEach((key) => {
      result[key] = isFeatureEnabled(key, context)
    })
    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys, context?.environment, context?.userId])
}

/**
 * Hook to get all enabled feature flags
 *
 * @param context - Optional evaluation context
 * @returns Array of enabled feature flag keys
 *
 * @example
 * ```tsx
 * function DebugPanel() {
 *   const enabledFeatures = useEnabledFeatures()
 *
 *   return (
 *     <div>
 *       <h3>Enabled Features:</h3>
 *       <ul>
 *         {enabledFeatures.map(key => (
 *           <li key={key}>{key}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   )
 * }
 * ```
 */
export function useEnabledFeatures(
  context?: Partial<EvaluationContext>
): FeatureFlagKey[] {
  return useMemo(
    () => getEnabledFeatures(context),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [context?.environment, context?.userId]
  )
}
