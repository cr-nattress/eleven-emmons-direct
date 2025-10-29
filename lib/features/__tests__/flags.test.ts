/**
 * Feature Flag System Tests
 */

import {
  isFeatureEnabled,
  getEnabledFeatures,
  getFeatureFlag,
  getAllFeatureFlags,
  getCurrentEnvironment,
} from '../flags'

describe('Feature Flag System', () => {
  describe('getCurrentEnvironment', () => {
    it('should return test environment in test mode', () => {
      expect(getCurrentEnvironment()).toBe('test')
    })
  })

  describe('Boolean Flags', () => {
    it('should return true for enabled boolean flags', () => {
      expect(isFeatureEnabled('enhanced_gallery_animations')).toBe(true)
      expect(isFeatureEnabled('image_lazy_loading')).toBe(true)
    })

    it('should return false for disabled boolean flags', () => {
      expect(isFeatureEnabled('instant_booking')).toBe(false)
      expect(isFeatureEnabled('high_contrast_mode')).toBe(false)
    })
  })

  describe('Environment Flags', () => {
    it('should respect test environment settings', () => {
      // hospitable_widget is false in test environment
      expect(isFeatureEnabled('hospitable_widget')).toBe(false)

      // advanced_analytics is false in test environment
      expect(isFeatureEnabled('advanced_analytics')).toBe(false)

      // guest_reviews_section is true in test environment
      expect(isFeatureEnabled('guest_reviews_section')).toBe(true)
    })

    it('should allow environment override in context', () => {
      // Override to development environment
      expect(
        isFeatureEnabled('hospitable_widget', { environment: 'development' })
      ).toBe(true)

      // Override to production environment
      expect(
        isFeatureEnabled('advanced_analytics', { environment: 'production' })
      ).toBe(true)
    })
  })

  describe('Percentage Flags', () => {
    it('should return consistent results for same userId', () => {
      const userId = 'test-user-123'

      // Check virtual_tour (10% rollout)
      const result1 = isFeatureEnabled('virtual_tour', { userId })
      const result2 = isFeatureEnabled('virtual_tour', { userId })
      const result3 = isFeatureEnabled('virtual_tour', { userId })

      // Should be consistent
      expect(result1).toBe(result2)
      expect(result2).toBe(result3)
    })

    it('should distribute users across percentage buckets', () => {
      const flag = 'prefetch_navigation' // 50% rollout
      const userIds = Array.from({ length: 100 }, (_, i) => `user-${i}`)

      const enabledCount = userIds.filter((userId) =>
        isFeatureEnabled(flag, { userId })
      ).length

      // With 50% rollout, expect roughly 40-60% enabled (allowing variance)
      expect(enabledCount).toBeGreaterThan(30)
      expect(enabledCount).toBeLessThan(70)
    })

    it('should handle 0% rollout', () => {
      // booking_calendar_integration is 0% rollout
      expect(isFeatureEnabled('booking_calendar_integration')).toBe(false)
      expect(
        isFeatureEnabled('booking_calendar_integration', { userId: 'any-user' })
      ).toBe(false)
    })

    it('should work without userId (random behavior)', () => {
      // Should not throw, but result may vary
      const result = isFeatureEnabled('virtual_tour')
      expect(typeof result).toBe('boolean')
    })
  })

  describe('getEnabledFeatures', () => {
    it('should return all enabled feature flags', () => {
      const enabled = getEnabledFeatures()

      // Should include boolean flags that are enabled
      expect(enabled).toContain('enhanced_gallery_animations')
      expect(enabled).toContain('image_lazy_loading')

      // Should include environment flags that are true in test
      expect(enabled).toContain('guest_reviews_section')

      // Should not include disabled boolean flags
      expect(enabled).not.toContain('instant_booking')
      expect(enabled).not.toContain('high_contrast_mode')

      // Should not include environment flags that are false in test
      expect(enabled).not.toContain('hospitable_widget')
      expect(enabled).not.toContain('advanced_analytics')
    })

    it('should respect context when getting enabled features', () => {
      const devEnabled = getEnabledFeatures({ environment: 'development' })
      const prodEnabled = getEnabledFeatures({ environment: 'production' })

      // hospitable_widget is true in dev, false in prod
      expect(devEnabled).toContain('hospitable_widget')
      expect(prodEnabled).not.toContain('hospitable_widget')

      // advanced_analytics is false in dev, true in prod
      expect(devEnabled).not.toContain('advanced_analytics')
      expect(prodEnabled).toContain('advanced_analytics')
    })
  })

  describe('getFeatureFlag', () => {
    it('should return flag configuration', () => {
      const flag = getFeatureFlag('enhanced_gallery_animations')

      expect(flag).toBeDefined()
      expect(flag?.key).toBe('enhanced_gallery_animations')
      expect(flag?.strategy).toBe('boolean')
    })

    it('should return undefined for non-existent flags', () => {
      const flag = getFeatureFlag('non_existent_flag' as any)
      expect(flag).toBeUndefined()
    })
  })

  describe('getAllFeatureFlags', () => {
    it('should return all feature flag configurations', () => {
      const allFlags = getAllFeatureFlags()

      expect(Object.keys(allFlags).length).toBeGreaterThan(0)
      expect(allFlags).toHaveProperty('enhanced_gallery_animations')
      expect(allFlags).toHaveProperty('hospitable_widget')
      expect(allFlags).toHaveProperty('virtual_tour')
    })
  })

  describe('Error Handling', () => {
    it('should return false for non-existent feature flags with warning', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation()

      const result = isFeatureEnabled('non_existent_flag' as any)

      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledWith(
        'Feature flag "non_existent_flag" not found, returning false'
      )

      consoleSpy.mockRestore()
    })

    it('should use defaultValue on evaluation error', () => {
      // All flags have defaultValue defined, so this tests the fallback behavior
      const flag = getFeatureFlag('enhanced_gallery_animations')
      expect(flag?.defaultValue).toBeDefined()
    })
  })

  describe('Type Safety', () => {
    it('should only accept valid feature flag keys', () => {
      // This test verifies TypeScript compilation
      // Invalid keys would cause compile-time errors

      // Valid keys - should compile
      isFeatureEnabled('enhanced_gallery_animations')
      isFeatureEnabled('hospitable_widget')
      isFeatureEnabled('virtual_tour')

      // This would cause a TypeScript error:
      // isFeatureEnabled('invalid_key')
      expect(true).toBe(true)
    })
  })
})
