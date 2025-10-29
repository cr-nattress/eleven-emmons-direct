# US-003: Extract Hardcoded Contact Information to Configuration

**Story ID:** US-003
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🔴 High
**Story Points:** 2
**Estimated Time:** 1 hour

## User Story

**As a** developer maintaining the site,
**I want** contact information centralized in a configuration file,
**So that** updates are easy, consistent, and the codebase can be reused for other properties.

## Acceptance Criteria

1. ✅ `config/site.ts` created with TypeScript interfaces
2. ✅ All contact info (email, phone) moved to config
3. ✅ Property address centralized in config
4. ✅ Booking URLs (Airbnb) in config
5. ✅ Components updated to import from config
6. ✅ Zero hardcoded contact info in components
7. ✅ Type-safe access to configuration values

## Problem Statement

Personal contact information is hardcoded in multiple locations:

- `components/BookingWidget.tsx:119, 150` - Email and phone
- `components/Footer.tsx:118, 126` - Email and phone (duplicated)
- `components/Header.tsx:19` - Airbnb URL

**Issues:**

- Changing email requires updating 4+ locations
- Easy to miss instances during updates
- Can't reuse codebase for other properties
- Personal info exposed in git history

## Solution

Create centralized site configuration with TypeScript types:

### 1. Create config/site.ts

```typescript
// config/site.ts (NEW FILE)
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
```

### 2. Update Components

**components/BookingWidget.tsx:**

```typescript
import { siteConfig } from '@/config/site'

// Email link
<a href={`mailto:${siteConfig.contact.email}`}>
  {siteConfig.contact.email}
</a>

// Phone link
<a href={`tel:${siteConfig.contact.phone.tel}`}>
  {siteConfig.contact.phone.display}
</a>
```

**components/Footer.tsx:**

```typescript
import { siteConfig } from '@/config/site'

// Contact info
<a href={`mailto:${siteConfig.contact.email}`}>
  {siteConfig.contact.email}
</a>

// Address
<p>
  {siteConfig.property.address.unit}<br />
  {siteConfig.property.address.street}<br />
  {siteConfig.property.address.city}, {siteConfig.property.address.state} {siteConfig.property.address.zip}
</p>
```

**components/Header.tsx:**

```typescript
import { siteConfig } from '@/config/site'

const navigation = [
  // ...
  { name: 'Book Now', href: siteConfig.booking.airbnbUrl, external: true },
]
```

## Technical Implementation

### Files to Create

1. **`config/site.ts`** - Centralized configuration

### Files to Update

1. **`components/BookingWidget.tsx`** - Import and use config
2. **`components/Footer.tsx`** - Import and use config
3. **`components/Header.tsx`** - Use config for Airbnb URL
4. **`tsconfig.json`** - Add path alias for `@/config/*` (if needed)

### Verification Commands

```bash
# Search for hardcoded email
grep -r "cnattress@gmail.com" --exclude-dir=node_modules

# Search for hardcoded phone
grep -r "570.*690.*1180" --exclude-dir=node_modules

# Search for hardcoded Airbnb URL
grep -r "airbnb.com/h/elevenemmons" --exclude-dir=node_modules
```

Should only find matches in `config/site.ts`.

## Definition of Done

- [ ] `config/site.ts` created with full TypeScript types
- [ ] All components updated to use config
- [ ] Zero instances of hardcoded contact info (verified via grep)
- [ ] All contact links work correctly
- [ ] TypeScript compilation successful
- [ ] No TypeScript errors
- [ ] Documentation updated in README

## Benefits

1. **Maintainability** - Single source of truth for contact info
2. **Reusability** - Easy to adapt codebase for other properties
3. **Type Safety** - TypeScript ensures correct config usage
4. **Flexibility** - Easy to add social media links, etc.
5. **Testing** - Can mock config in tests

## Dependencies

- TypeScript 5.4+
- Next.js path aliases (`@/config/*`)

## Related Stories

- **Related:** US-004 (Environment Variables) - Some config may move to env vars
- **Related:** US-010 (Feature Flags) - Config pattern extends to features

## Future Enhancements

- Move sensitive data to environment variables
- Add multiple environment configs (staging, production)
- Add Zod validation for runtime safety
- Create config for analytics IDs and third-party services

## Notes

- **Quick Win** - High impact, low effort
- Keep config values in code (not env vars) for now
- Consider moving email/phone to env vars in future for security
- Provides foundation for multi-property support
