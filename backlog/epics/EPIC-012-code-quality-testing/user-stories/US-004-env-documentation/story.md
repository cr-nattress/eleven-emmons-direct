# US-004: Create Environment Variable Documentation

**Story ID:** US-004
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🔴 High
**Story Points:** 1
**Estimated Time:** 30 minutes

## User Story

**As a** new developer setting up the project,
**I want** clear documentation of required environment variables,
**So that** I can quickly configure my development environment without guessing.

## Acceptance Criteria

1. ✅ `.env.example` file created with all required variables
2. ✅ Each variable documented with description and format
3. ✅ README.md updated with environment setup instructions
4. ✅ Optional vs required variables clearly marked
5. ✅ Links to credential sources (GA, Hospitable)
6. ✅ Environment validation helper created (`lib/env.ts`)
7. ✅ Warning messages in dev console for missing variables

## Problem Statement

The project uses environment variables but provides no documentation:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics
- `NEXT_PUBLIC_HOSPITABLE_WIDGET_ID` - Booking widget

**Issues:**

- New developers don't know what variables are needed
- No example format provided
- Silent failures when variables missing
- No validation or helpful error messages

## Solution

### 1. Create .env.example

```bash
# .env.example (NEW FILE)

# ==============================================
# 11 Emmons Road - Environment Configuration
# ==============================================
# Copy this file to .env.local and fill in actual values
# Never commit .env.local to version control

# ---------------------------------------------
# Analytics & Tracking
# ---------------------------------------------

# Google Analytics 4 Measurement ID
# Get this from: https://analytics.google.com/
# Format: G-XXXXXXXXXX
# Required: No (analytics disabled if not set)
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# ---------------------------------------------
# Booking Integration
# ---------------------------------------------

# Hospitable Booking Widget ID
# Get this from your Hospitable dashboard
# Format: alphanumeric string
# Required: No (shows Airbnb link fallback if not set)
NEXT_PUBLIC_HOSPITABLE_WIDGET_ID=

# ---------------------------------------------
# Development (optional)
# ---------------------------------------------

# Disable animations in development for faster iteration
# Options: true | false
# Default: false
# NEXT_PUBLIC_DISABLE_ANIMATIONS=false
```

### 2. Create lib/env.ts

```typescript
// lib/env.ts (NEW FILE)
/**
 * Environment variable validation and type-safe access
 */

interface EnvironmentVariables {
  GA_MEASUREMENT_ID?: string
  HOSPITABLE_WIDGET_ID?: string
  DISABLE_ANIMATIONS?: boolean
}

function getEnv(): EnvironmentVariables {
  return {
    GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    HOSPITABLE_WIDGET_ID: process.env.NEXT_PUBLIC_HOSPITABLE_WIDGET_ID,
    DISABLE_ANIMATIONS: process.env.NEXT_PUBLIC_DISABLE_ANIMATIONS === 'true',
  }
}

export const env = getEnv()

// Development warnings for missing optional variables
if (process.env.NODE_ENV === 'development') {
  if (!env.GA_MEASUREMENT_ID) {
    console.warn(
      '⚠️  NEXT_PUBLIC_GA_MEASUREMENT_ID is not set.\n' +
        '   Analytics will be disabled.\n' +
        '   See .env.example for setup instructions.'
    )
  }

  if (!env.HOSPITABLE_WIDGET_ID) {
    console.warn(
      '⚠️  NEXT_PUBLIC_HOSPITABLE_WIDGET_ID is not set.\n' +
        '   Booking widget will show Airbnb link fallback.\n' +
        '   See .env.example for setup instructions.'
    )
  }
}
```

### 3. Update README.md

````markdown
## Environment Variables

This project uses environment variables for configuration.

### Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
````

2. Fill in the required values:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Your Google Analytics 4 tracking ID
   - `NEXT_PUBLIC_HOSPITABLE_WIDGET_ID` - Your Hospitable booking widget ID

3. (Optional) Get your credentials:
   - **Google Analytics**: [Create a GA4 property](https://analytics.google.com/)
   - **Hospitable**: [Get your widget ID](https://hospitable.com/dashboard)

**Note:** The site will work without these variables, but analytics and booking features will use fallbacks.

### Available Variables

| Variable                           | Required | Description                       |
| ---------------------------------- | -------- | --------------------------------- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`    | No       | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_HOSPITABLE_WIDGET_ID` | No       | Hospitable booking widget ID      |
| `NEXT_PUBLIC_DISABLE_ANIMATIONS`   | No       | Disable animations (dev only)     |

````

### 4. Update Components to Use lib/env.ts

```typescript
// lib/analytics.tsx (UPDATE)
import { env } from '@/lib/env'

export function Analytics() {
  const measurementId = env.GA_MEASUREMENT_ID

  if (!measurementId) {
    return null
  }
  // ...
}
````

## Technical Implementation

### Files to Create

1. **`.env.example`** - Example environment file
2. **`lib/env.ts`** - Type-safe env access with validation

### Files to Update

1. **`README.md`** - Add environment setup section
2. **`lib/analytics.tsx`** - Use `env` helper
3. **`components/BookingWidget.tsx`** - Use `env` helper

### Verification Steps

1. Delete local `.env.local` file
2. Run `npm run dev`
3. Verify warning messages appear in console
4. Copy `.env.example` to `.env.local`
5. Fill in test values
6. Verify warnings disappear

## Definition of Done

- [ ] `.env.example` created with comprehensive documentation
- [ ] `lib/env.ts` created with type-safe access
- [ ] README.md updated with setup instructions
- [ ] Components updated to use `env` helper
- [ ] Warning messages display in development
- [ ] No warnings when variables are set
- [ ] All variables clearly documented

## Benefits

1. **Onboarding** - New developers can set up in minutes
2. **Documentation** - Single source of truth for env vars
3. **Type Safety** - Centralized, typed access to env
4. **Developer Experience** - Helpful warnings for missing vars
5. **Best Practice** - Industry standard pattern

## Dependencies

- None (pure documentation)

## Related Stories

- **Enables:** US-001 (Testing) - Tests need env setup
- **Related:** US-005 (CI/CD) - CI needs env configuration

## Future Enhancements

- Use Zod or t3-env for runtime validation
- Add environment-specific configs (.env.development, .env.production)
- Create setup script (`npm run setup`) to automate
- Add CI check to ensure .env.example stays up to date

## Notes

- **Quick Win** - 30 minutes, high developer experience impact
- Keep `.env` files in `.gitignore`
- Document optional vs required clearly
- Provide helpful links to get credentials
