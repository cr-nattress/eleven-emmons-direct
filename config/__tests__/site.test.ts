import { siteConfig } from '../site'

describe('Site Configuration', () => {
  it('exports siteConfig object', () => {
    expect(siteConfig).toBeDefined()
  })

  describe('Basic Information', () => {
    it('has site name', () => {
      expect(siteConfig.name).toBe('11 Emmons Road')
    })

    it('has site description', () => {
      expect(siteConfig.description).toContain('Luxury')
      expect(siteConfig.description).toContain('Crested Butte')
    })

    it('has site URL', () => {
      expect(siteConfig.url).toMatch(/^https?:\/\//)
    })
  })

  describe('Contact Information', () => {
    it('has valid email', () => {
      expect(siteConfig.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    })

    it('has phone display format', () => {
      expect(siteConfig.contact.phone.display).toMatch(/\(\d{3}\) \d{3}-\d{4}/)
    })

    it('has phone tel format', () => {
      expect(siteConfig.contact.phone.tel).toMatch(/^\+1\d{10}$/)
    })
  })

  describe('Property Information', () => {
    it('has complete address', () => {
      expect(siteConfig.property.address.unit).toBeTruthy()
      expect(siteConfig.property.address.street).toBeTruthy()
      expect(siteConfig.property.address.city).toBe('Crested Butte')
      expect(siteConfig.property.address.state).toBe('CO')
      expect(siteConfig.property.address.zip).toBeTruthy()
    })
  })

  describe('Booking Information', () => {
    it('has Airbnb URL', () => {
      expect(siteConfig.booking.airbnbUrl).toMatch(/^https?:\/\//)
      expect(siteConfig.booking.airbnbUrl).toContain('airbnb.com')
    })
  })
})
