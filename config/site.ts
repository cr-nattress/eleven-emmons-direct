/**
 * Site Configuration
 *
 * Centralized configuration for site-wide settings including
 * contact information, property details, and booking URLs.
 *
 * This file serves as the single source of truth for all
 * site configuration. Update values here to change them
 * across the entire application.
 *
 * @example
 * import { siteConfig } from '@/config/site'
 *
 * <a href={`mailto:${siteConfig.contact.email}`}>
 *   {siteConfig.contact.email}
 * </a>
 */

export interface SiteConfig {
  name: string
  description: string
  url: string
  contact: {
    email: string
    phone: {
      display: string
      tel: string
    }
  }
  property: {
    address: {
      unit: string
      street: string
      city: string
      state: string
      zip: string
    }
  }
  booking: {
    airbnbUrl: string
  }
  social?: {
    facebook?: string
    instagram?: string
  }
}

export const siteConfig: SiteConfig = {
  name: '11 Emmons Road',
  description: 'Luxury Vacation Rental in Crested Butte, CO',
  url: 'https://11emmons.netlify.app',
  contact: {
    email: 'cnattress@gmail.com',
    phone: {
      display: '(570) 690-1180',
      tel: '+15706901180',
    },
  },
  property: {
    address: {
      unit: 'Unit 324',
      street: '11 Emmons Road',
      city: 'Crested Butte',
      state: 'CO',
      zip: '81224',
    },
  },
  booking: {
    airbnbUrl: 'https://airbnb.com/h/elevenemmons',
  },
}
