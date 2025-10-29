import { test, expect } from '@playwright/test'

test.describe('Homepage E2E Tests', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/')

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Check for main heading
    await expect(page.locator('h1')).toBeVisible()
  })

  test('should have functional navigation', async ({ page }) => {
    await page.goto('/')

    // Check that navigation links are present
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Amenities' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Gallery' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Location' })).toBeVisible()
  })

  test('should have accessible Book Now button', async ({ page }) => {
    await page.goto('/')

    const bookNowButton = page.getByRole('link', { name: 'Book Now' }).first()
    await expect(bookNowButton).toBeVisible()
    await expect(bookNowButton).toHaveAttribute('href', /airbnb\.com/)
  })

  test('should toggle mobile menu', async ({ page, isMobile }) => {
    // Only run on mobile viewports
    if (!isMobile) {
      test.skip()
      return
    }

    await page.goto('/')

    // Find and click the mobile menu button
    const menuButton = page.getByRole('button', { name: /open main menu/i })
    await expect(menuButton).toBeVisible()
    await menuButton.click()

    // Check that mobile menu items are visible
    // Note: These will be duplicates of the desktop nav
    const navLinks = page.getByRole('link', { name: 'Home' })
    await expect(navLinks.first()).toBeVisible()
  })

  test('should have valid contact information in footer', async ({ page }) => {
    await page.goto('/')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    // Check for email link
    const emailLink = page.getByRole('link', { name: /cnattress@gmail\.com/ })
    await expect(emailLink).toBeVisible()
    await expect(emailLink).toHaveAttribute('href', /^mailto:/)

    // Check for phone link
    const phoneLink = page.getByRole('link', { name: /\(570\) 690-1180/ })
    await expect(phoneLink).toBeVisible()
    await expect(phoneLink).toHaveAttribute('href', /^tel:/)
  })

  test('should have proper page title and meta', async ({ page }) => {
    await page.goto('/')

    // Check page title
    await expect(page).toHaveTitle(/11 Emmons Road/i)

    // Check for meta description
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /.+/)
  })

  test('should be responsive', async ({ page, viewport }) => {
    await page.goto('/')

    // Check that content is visible at current viewport
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()

    // Verify no horizontal scroll (content fits viewport)
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(bodyWidth).toBeLessThanOrEqual(viewport?.width || 1920)
  })
})
