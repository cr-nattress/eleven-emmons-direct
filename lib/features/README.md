# Feature Flag System

A flexible feature flag system for controlling feature rollouts, A/B testing, and environment-specific configurations.

## Overview

The feature flag system supports three rollout strategies:

1. **Boolean** - Simple on/off flags
2. **Percentage** - Gradual rollout based on percentage (A/B testing)
3. **Environment** - Different values per environment (dev/staging/prod)

## Quick Start

### Checking a Feature Flag

```typescript
import { isFeatureEnabled } from '@/lib/features'

if (isFeatureEnabled('virtual_tour')) {
  // Feature is enabled
}
```

### Using in React Components

```tsx
import { useFeatureFlag } from '@/lib/features'

function MyComponent() {
  const enabled = useFeatureFlag('new_feature')

  return enabled ? <NewFeature /> : <OldFeature />
}
```

### Checking Multiple Flags

```tsx
import { useFeatureFlags } from '@/lib/features'

function Gallery() {
  const flags = useFeatureFlags([
    'enhanced_gallery_animations',
    'image_lazy_loading',
    'virtual_tour',
  ])

  return (
    <div>
      {flags.virtual_tour && <VirtualTourButton />}
      <ImageGallery
        animate={flags.enhanced_gallery_animations}
        lazy={flags.image_lazy_loading}
      />
    </div>
  )
}
```

## Adding a New Feature Flag

1. Open `lib/features/config.ts`
2. Add your flag to the `featureFlags` object:

```typescript
export const featureFlags: FeatureFlagConfig = {
  // ... existing flags

  my_new_feature: {
    key: 'my_new_feature',
    name: 'My New Feature',
    description: 'What this feature does',
    strategy: 'boolean', // or 'percentage' or 'environment'
    enabled: false,
    defaultValue: false,
  },
}
```

## Rollout Strategies

### Boolean Flags

Simple on/off toggle:

```typescript
my_feature: {
  key: 'my_feature',
  name: 'My Feature',
  description: 'A simple feature toggle',
  strategy: 'boolean',
  enabled: true,  // or false
  defaultValue: false,
}
```

### Percentage Flags

Gradual rollout to a percentage of users:

```typescript
my_feature: {
  key: 'my_feature',
  name: 'My Feature',
  description: 'Gradual rollout feature',
  strategy: 'percentage',
  percentage: 25,  // 25% of users will see this
  defaultValue: false,
}
```

**Important:** For consistent results with percentage flags, pass a `userId`:

```typescript
// Without userId - results may vary on each check
isFeatureEnabled('my_feature')

// With userId - same user always gets same result
isFeatureEnabled('my_feature', { userId: user.id })
```

### Environment Flags

Different values per environment:

```typescript
my_feature: {
  key: 'my_feature',
  name: 'My Feature',
  description: 'Environment-specific feature',
  strategy: 'environment',
  environments: {
    development: true,   // On in dev
    production: false,   // Off in prod
    test: false,         // Off in tests
  },
  defaultValue: false,
}
```

## API Reference

### Core Functions

#### `isFeatureEnabled(key, context?)`

Check if a feature flag is enabled.

```typescript
isFeatureEnabled('my_feature')
isFeatureEnabled('my_feature', { userId: 'user-123' })
isFeatureEnabled('my_feature', { environment: 'production' })
```

#### `getEnabledFeatures(context?)`

Get all enabled feature flags.

```typescript
const enabled = getEnabledFeatures()
// Returns: ['feature1', 'feature2', ...]
```

#### `getFeatureFlag(key)`

Get feature flag configuration.

```typescript
const flag = getFeatureFlag('my_feature')
// Returns: { key, name, description, strategy, ... }
```

### React Hooks

#### `useFeatureFlag(key, context?)`

Hook to check if a feature is enabled.

```tsx
function MyComponent() {
  const enabled = useFeatureFlag('my_feature')
  return <div>{enabled ? 'On' : 'Off'}</div>
}
```

#### `useFeatureFlags(keys, context?)`

Hook to check multiple features at once.

```tsx
function MyComponent() {
  const flags = useFeatureFlags(['feature1', 'feature2'])
  return <div>{JSON.stringify(flags)}</div>
}
```

#### `useEnabledFeatures(context?)`

Hook to get all enabled features.

```tsx
function DebugPanel() {
  const enabled = useEnabledFeatures()
  return (
    <ul>
      {enabled.map((key) => (
        <li key={key}>{key}</li>
      ))}
    </ul>
  )
}
```

## Current Feature Flags

### Booking & Integration

- **`hospitable_widget`** - Hospitable booking widget integration
  - Strategy: Environment
  - Enabled in: Development

- **`advanced_analytics`** - Advanced analytics tracking
  - Strategy: Environment
  - Enabled in: Production

### UI/UX Features

- **`enhanced_gallery_animations`** - Enhanced gallery animations
  - Strategy: Boolean
  - Enabled: Yes

- **`image_lazy_loading`** - Image lazy loading
  - Strategy: Boolean
  - Enabled: Yes

- **`prefetch_navigation`** - Prefetch on hover
  - Strategy: Percentage (50%)

- **`virtual_tour`** - 360° virtual tour
  - Strategy: Percentage (10%)

### Experimental

- **`booking_calendar_integration`** - Real-time availability calendar
  - Strategy: Percentage (0%)

- **`instant_booking`** - Instant booking without approval
  - Strategy: Boolean
  - Enabled: No

- **`guest_reviews_section`** - Guest reviews display
  - Strategy: Environment
  - Enabled in: Development, Test

- **`high_contrast_mode`** - High contrast accessibility mode
  - Strategy: Boolean
  - Enabled: No

## Best Practices

### 1. Start with Low Percentages

When using percentage rollout, start small (5-10%) and increase gradually:

```typescript
// Day 1: 5%
percentage: 5

// Day 3: 25%
percentage: 25

// Day 7: 50%
percentage: 50

// Day 14: 100%
strategy: 'boolean',
enabled: true
```

### 2. Use Environment Flags for Dev Testing

Enable features in development for testing before production:

```typescript
strategy: 'environment',
environments: {
  development: true,   // Test in dev
  production: false,   // Not ready for prod
  test: true,          // Include in tests
}
```

### 3. Always Set defaultValue

The `defaultValue` is used if evaluation fails:

```typescript
defaultValue: false // Safe default - feature off
```

### 4. Clean Up Old Flags

Remove feature flags once fully rolled out:

```typescript
// Before: Feature flag
if (isFeatureEnabled('my_feature')) {
  // New code
}

// After: Remove flag, keep new code
// New code (no flag needed)
```

### 5. Type Safety

The system provides full TypeScript support:

```typescript
// ✅ Valid - TypeScript knows all flags
isFeatureEnabled('enhanced_gallery_animations')

// ❌ Error - TypeScript catches invalid flags
isFeatureEnabled('invalid_flag') // Type error!
```

## Testing

Feature flags are fully tested:

```bash
npm test -- lib/features
```

Test coverage includes:

- Boolean flag evaluation
- Percentage-based rollout
- Environment-specific flags
- Consistent hashing for percentage flags
- React hooks behavior
- Error handling

## Migration Guide

### From Environment Variables

**Before:**

```typescript
const enabled = process.env.NEXT_PUBLIC_FEATURE_ENABLED === 'true'
```

**After:**

```typescript
const enabled = useFeatureFlag('feature_enabled')
```

### From Conditional Code

**Before:**

```typescript
if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  // Dev-only feature
}
```

**After:**

```typescript
// In config.ts
my_feature: {
  strategy: 'environment',
  environments: {
    development: true,
    production: false,
    test: false,
  }
}

// In component
if (useFeatureFlag('my_feature')) {
  // Dev-only feature
}
```

## Architecture

The feature flag system consists of:

```
lib/features/
├── index.ts          # Public API exports
├── types.ts          # TypeScript type definitions
├── config.ts         # Feature flag configuration
├── flags.ts          # Core evaluation logic
├── hooks.ts          # React hooks
├── README.md         # This file
└── __tests__/        # Test suite
    ├── flags.test.ts
    └── hooks.test.tsx
```

## Performance

- **Zero runtime overhead** for disabled flags
- **Memoized hooks** prevent unnecessary re-renders
- **Consistent hashing** for percentage flags (same user, same result)
- **Tree-shakable** exports for optimal bundle size

## Support

For questions or issues:

1. Check this README
2. Review the examples in `config.ts`
3. Look at existing usage in components
4. Create a GitHub issue with label `feature-flags`
