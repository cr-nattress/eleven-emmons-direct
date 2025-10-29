/**
 * Feature Flag Hooks Tests
 */

import { renderHook } from '@testing-library/react'
import { useFeatureFlag, useFeatureFlags, useEnabledFeatures } from '../hooks'
import type { Environment } from '../types'

describe('Feature Flag Hooks', () => {
  describe('useFeatureFlag', () => {
    it('should return true for enabled flags', () => {
      const { result } = renderHook(() =>
        useFeatureFlag('enhanced_gallery_animations')
      )
      expect(result.current).toBe(true)
    })

    it('should return false for disabled flags', () => {
      const { result } = renderHook(() => useFeatureFlag('instant_booking'))
      expect(result.current).toBe(false)
    })

    it('should respect environment context', () => {
      const { result: devResult } = renderHook(() =>
        useFeatureFlag('hospitable_widget', { environment: 'development' })
      )
      expect(devResult.current).toBe(true)

      const { result: prodResult } = renderHook(() =>
        useFeatureFlag('hospitable_widget', { environment: 'production' })
      )
      expect(prodResult.current).toBe(false)
    })

    it('should be consistent with userId for percentage flags', () => {
      const userId = 'test-user-456'

      const { result: result1 } = renderHook(() =>
        useFeatureFlag('virtual_tour', { userId })
      )
      const { result: result2 } = renderHook(() =>
        useFeatureFlag('virtual_tour', { userId })
      )

      expect(result1.current).toBe(result2.current)
    })
  })

  describe('useFeatureFlags', () => {
    it('should return object with all requested flags', () => {
      const { result } = renderHook(() =>
        useFeatureFlags([
          'enhanced_gallery_animations',
          'instant_booking',
          'image_lazy_loading',
        ])
      )

      expect(result.current).toEqual({
        enhanced_gallery_animations: true,
        instant_booking: false,
        image_lazy_loading: true,
      })
    })

    it('should handle empty array', () => {
      const { result } = renderHook(() => useFeatureFlags([]))
      expect(result.current).toEqual({})
    })

    it('should respect context for multiple flags', () => {
      const { result } = renderHook(() =>
        useFeatureFlags(['hospitable_widget', 'advanced_analytics'], {
          environment: 'production',
        })
      )

      expect(result.current).toEqual({
        hospitable_widget: false,
        advanced_analytics: true,
      })
    })
  })

  describe('useEnabledFeatures', () => {
    it('should return array of enabled feature keys', () => {
      const { result } = renderHook(() => useEnabledFeatures())

      expect(Array.isArray(result.current)).toBe(true)
      expect(result.current).toContain('enhanced_gallery_animations')
      expect(result.current).toContain('image_lazy_loading')
      expect(result.current).not.toContain('instant_booking')
    })

    it('should respect environment context', () => {
      const { result: devResult } = renderHook(() =>
        useEnabledFeatures({ environment: 'development' })
      )
      const { result: prodResult } = renderHook(() =>
        useEnabledFeatures({ environment: 'production' })
      )

      // hospitable_widget is enabled in dev but not prod
      expect(devResult.current).toContain('hospitable_widget')
      expect(prodResult.current).not.toContain('hospitable_widget')

      // advanced_analytics is enabled in prod but not dev
      expect(devResult.current).not.toContain('advanced_analytics')
      expect(prodResult.current).toContain('advanced_analytics')
    })
  })

  describe('Hook Memoization', () => {
    it('should memoize results when inputs do not change', () => {
      const { result, rerender } = renderHook(() =>
        useFeatureFlag('enhanced_gallery_animations')
      )

      const firstResult = result.current
      rerender()
      const secondResult = result.current

      // Should return same reference due to memoization
      expect(firstResult).toBe(secondResult)
    })

    it('should update when context changes', () => {
      const { result, rerender } = renderHook(
        ({ env }: { env: Environment }) =>
          useFeatureFlag('hospitable_widget', { environment: env }),
        { initialProps: { env: 'development' as Environment } }
      )

      expect(result.current).toBe(true)

      rerender({ env: 'production' as Environment })
      expect(result.current).toBe(false)
    })
  })
})
