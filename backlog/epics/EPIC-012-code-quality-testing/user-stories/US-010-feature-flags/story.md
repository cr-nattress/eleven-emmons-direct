# US-010: Add Feature Flags System for Safe Deployments

**Story ID:** US-010
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🟢 Low
**Story Points:** 7
**Estimated Time:** 2-3 hours

## User Story

**As a** developer deploying new features,
**I want** a feature flag system to control feature rollouts,
**So that** I can deploy code safely, test in production, and quickly disable problematic features.

## Acceptance Criteria

1. ✅ Feature flag system implemented (`lib/features/flags.ts`)
2. ✅ All major features behind feature flags
3. ✅ Environment-aware flag configuration
4. ✅ React hooks for component-level feature checks
5. ✅ Gradual rollout support (percentage-based)
6. ✅ Components updated to use feature flags
7. ✅ Documentation for adding new feature flags

## Problem Statement

Features are deployed to 100% of users immediately:

- No ability to test in production with limited users
- Can't quickly disable features without redeployment
- No A/B testing capability
- No gradual rollout (10% → 50% → 100%)
- High risk with each deployment

## Solution

### 1. Create Feature Flag System

```typescript
// lib/features/flags.ts (NEW FILE)
export enum Feature {
  // Booking features
  HOSPITABLE_WIDGET = 'hospitable_widget',
  AIRBNB_DIRECT_LINK = 'airbnb_direct_link',

  // UI features
  GALLERY_LIGHTBOX = 'gallery_lightbox',
  ANIMATIONS = 'animations',
  INTERACTIVE_MAP = 'interactive_map',

  // Analytics
  GOOGLE_ANALYTICS = 'google_analytics',
  QR_CODE_TRACKING = 'qr_code_tracking',

  // Experimental
  NEW_HEADER_DESIGN = 'new_header_design',
}

interface FeatureConfig {
  enabled: boolean
  rolloutPercentage?: number // 0-100
  environments?: Array<'development' | 'production'>
}

const featureFlags: Record<Feature, FeatureConfig> = {
  [Feature.HOSPITABLE_WIDGET]: {
    enabled: !!process.env.NEXT_PUBLIC_HOSPITABLE_WIDGET_ID,
    environments: ['production'],
  },
  [Feature.AIRBNB_DIRECT_LINK]: {
    enabled: true,
  },
  [Feature.GALLERY_LIGHTBOX]: {
    enabled: true,
  },
  [Feature.ANIMATIONS]: {
    enabled: process.env.NEXT_PUBLIC_DISABLE_ANIMATIONS !== 'true',
  },
  [Feature.GOOGLE_ANALYTICS]: {
    enabled: !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    environments: ['production'],
  },
  [Feature.NEW_HEADER_DESIGN]: {
    enabled: false, // ✅ Future feature, disabled
    rolloutPercentage: 0,
  },
}

export function isFeatureEnabled(feature: Feature): boolean {
  const config = featureFlags[feature]

  if (!config) return false

  // Check environment restriction
  const env = process.env.NODE_ENV
  if (config.environments && !config.environments.includes(env)) {
    return false
  }

  // Check rollout percentage
  if (config.rolloutPercentage !== undefined) {
    const rolloutValue = Math.random() * 100
    if (rolloutValue > config.rolloutPercentage) {
      return false
    }
  }

  return config.enabled
}
```

### 2. Create React Hooks

```typescript
// lib/features/hooks.ts (NEW FILE)
'use client'

import { useMemo } from 'react'
import { Feature, isFeatureEnabled } from './flags'

export function useFeature(feature: Feature): boolean {
  return useMemo(() => isFeatureEnabled(feature), [feature])
}

export function useFeatureVariant<T>(
  feature: Feature,
  variants: { enabled: T; disabled: T }
): T {
  const enabled = useFeature(feature)
  return enabled ? variants.enabled : variants.disabled
}
```

### 3. Update Components

```typescript
// components/BookingWidget.tsx (UPDATE)
import { useFeature } from '@/lib/features/hooks'
import { Feature } from '@/lib/features/flags'

export default function BookingWidget() {
  const showHospitable = useFeature(Feature.HOSPITABLE_WIDGET)
  const showAirbnb = useFeature(Feature.AIRBNB_DIRECT_LINK)

  if (showHospitable) {
    return <HospitableWidget />
  }

  if (showAirbnb) {
    return <AirbnbLink />
  }

  return null
}
```

```typescript
// components/Gallery.tsx (UPDATE)
import { useFeature } from '@/lib/features/hooks'
import { Feature } from '@/lib/features/flags'

export default function Gallery() {
  const enableLightbox = useFeature(Feature.GALLERY_LIGHTBOX)

  const handleImageClick = (index: number) => {
    if (enableLightbox) {
      setSelectedImage(index)
    } else {
      window.open(images[index].src, '_blank')
    }
  }
}
```

### 4. Update Environment Variables

```bash
# .env.example (UPDATE)

# ---------------------------------------------
# Feature Flags
# ---------------------------------------------

# Disable animations (testing/debugging)
# NEXT_PUBLIC_DISABLE_ANIMATIONS=false

# Experimental features
# NEXT_PUBLIC_ENABLE_NEW_HEADER=false

# Rollout percentage (0-100)
# NEXT_PUBLIC_FEATURE_ROLLOUT=100
```

## Technical Implementation

### Files to Create

1. **`lib/features/flags.ts`** - Feature flag system
2. **`lib/features/hooks.ts`** - React hooks for features
3. **`lib/features/index.ts`** - Barrel export

### Files to Update

1. **`components/BookingWidget.tsx`** - Use feature flags
2. **`components/Gallery.tsx`** - Use feature flags
3. **`lib/analytics.tsx`** - Use feature flags
4. **`.env.example`** - Document feature flag env vars

### Feature Flag Pattern

```typescript
// 1. Define feature in enum
export enum Feature {
  MY_NEW_FEATURE = 'my_new_feature'
}

// 2. Configure in flags object
[Feature.MY_NEW_FEATURE]: {
  enabled: false,
  rolloutPercentage: 0,  // Gradually increase
}

// 3. Use in component
const enableFeature = useFeature(Feature.MY_NEW_FEATURE)

if (enableFeature) {
  return <NewFeature />
}
```

## Definition of Done

- [ ] `lib/features/flags.ts` created
- [ ] `lib/features/hooks.ts` created
- [ ] All major features behind flags
- [ ] Components updated to use flags
- [ ] Documentation added to README
- [ ] Example usage provided
- [ ] Environment variables documented
- [ ] Type-safe feature flag access

## Benefits

1. **Safety** - Deploy code disabled, enable gradually
2. **Testing** - Test in production with limited users
3. **A/B Testing** - Compare different implementations
4. **Rollback** - Disable features instantly without redeploy
5. **Experimentation** - Try features without full commitment

## Use Cases

### Gradual Rollout

```typescript
// Week 1: 10% of users
[Feature.NEW_HEADER]: { enabled: true, rolloutPercentage: 10 }

// Week 2: 50% of users (if no issues)
[Feature.NEW_HEADER]: { enabled: true, rolloutPercentage: 50 }

// Week 3: 100% of users
[Feature.NEW_HEADER]: { enabled: true, rolloutPercentage: 100 }

// Week 4: Remove flag (feature is default)
```

### Environment-Specific Features

```typescript
// Development only
[Feature.DEBUG_PANEL]: {
  enabled: true,
  environments: ['development']
}

// Production only
[Feature.ANALYTICS]: {
  enabled: true,
  environments: ['production']
}
```

### Kill Switch

```typescript
// Feature causing issues
[Feature.NEW_GALLERY]: {
  enabled: false,  // ✅ Disable immediately
}
// Redeploy → Feature disabled for all users
```

## Dependencies

- React 18.3+ (hooks)
- TypeScript 5.4+ (enums)

## Related Stories

- **Enables:** All future feature development
- **Related:** US-004 (Environment Variables) - Config pattern

## Future Enhancements

### Advanced Feature Flag Service

Integrate with LaunchDarkly or Flagsmith:

- Real-time flag updates (no redeploy)
- User targeting (by email, location, etc.)
- A/B test analytics
- Flag scheduling (enable at specific time)
- Team dashboards

### Example Integration

```typescript
// Future: LaunchDarkly integration
import { useFlags } from 'launchdarkly-react-client-sdk'

export function useFeature(feature: Feature): boolean {
  const flags = useFlags()
  return flags[feature]
}
```

## Resources

- [Feature Flag Best Practices](https://martinfowler.com/articles/feature-toggles.html)
- [LaunchDarkly](https://launchdarkly.com/)
- [Flagsmith](https://flagsmith.com/)

## Notes

- Start simple, add complexity as needed
- Document flag lifecycle (temporary vs permanent)
- Clean up old flags after full rollout
- Use descriptive flag names
- Track flag usage in analytics
