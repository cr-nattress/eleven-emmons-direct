# US-006: Add React Error Boundaries for Graceful Error Handling

**Story ID:** US-006
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🟡 Medium
**Story Points:** 3
**Estimated Time:** 1-2 hours

## User Story

**As a** user browsing the website,
**I want** errors in one section to not crash the entire page,
**So that** I can still access other content and complete my booking.

## Acceptance Criteria

1. ✅ `ErrorBoundary` component created with fallback UI
2. ✅ Critical sections wrapped with error boundaries (Gallery, Booking, Location)
3. ✅ Custom fallbacks for high-priority sections (BookingWidget)
4. ✅ Error tracking integrated with Google Analytics
5. ✅ "Try Again" recovery mechanism implemented
6. ✅ Development mode shows detailed error information
7. ✅ Production mode shows user-friendly messages

## Problem Statement

Currently, any React error crashes the entire application:

- Gallery error → entire site broken
- Booking widget error → lost conversion opportunity
- No error tracking or visibility into failures
- Users see blank white screen with no recourse

## Solution

Implement React Error Boundaries with graceful fallbacks:

### 1. Create ErrorBoundary Component

```typescript
// components/ErrorBoundary.tsx (NEW FILE)
'use client'

import { Component, ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  section?: string
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Track error in analytics
    trackEvent(
      'error',
      'ErrorBoundary',
      `${this.props.section || 'Unknown'}: ${error.message}`
    )

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-8 text-center">
          <svg className="mx-auto h-12 w-12 text-red-400" /* ... */>...</svg>
          <h3 className="mt-4 text-lg font-semibold text-gray-900">
            Something went wrong
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            We're having trouble loading this section.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-6 rounded-md bg-red-600 px-4 py-2 text-white"
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
```

### 2. Wrap Critical Sections

```typescript
// app/page.tsx (UPDATE)
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary section="Header">
        <Header />
      </ErrorBoundary>

      <ErrorBoundary section="Gallery">
        <Gallery />
      </ErrorBoundary>

      {/* Critical section with custom fallback */}
      <ErrorBoundary
        section="BookingWidget"
        fallback={
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2>Book Your Stay</h2>
              <p>Our booking system is temporarily unavailable.</p>
              <a href="https://airbnb.com/h/elevenemmons">
                Book on Airbnb
              </a>
            </div>
          </section>
        }
      >
        <BookingWidget />
      </ErrorBoundary>
    </main>
  )
}
```

## Technical Implementation

### Files to Create

1. **`components/ErrorBoundary.tsx`** - Reusable error boundary component
2. **`components/SuspenseErrorBoundary.tsx`** - Combined Suspense + Error Boundary

### Files to Update

1. **`app/page.tsx`** - Wrap sections with boundaries
2. **`lib/analytics.tsx`** - Ensure trackEvent supports error events

### Error Tracking

Integrate with Google Analytics:

```typescript
trackEvent('error', 'ErrorBoundary', `${section}: ${error.message}`)
```

View in GA:

- Events → Error category
- Track frequency by section
- Monitor which components fail most

## Definition of Done

- [ ] `ErrorBoundary` component created
- [ ] All critical sections wrapped
- [ ] Custom fallback for BookingWidget
- [ ] Error tracking working in GA
- [ ] "Try Again" button recovers from errors
- [ ] Development shows detailed errors
- [ ] Production shows user-friendly messages
- [ ] Documentation added to README

## Testing Strategy

**Manual Testing:**

1. Add intentional error to Gallery component
2. Verify only Gallery section shows error
3. Verify rest of page still works
4. Test "Try Again" button recovery

**Example Test Error:**

```typescript
// Add temporarily to Gallery.tsx
useEffect(() => {
  throw new Error('Test error boundary')
}, [])
```

## Benefits

1. **User Experience** - Partial failures don't crash site
2. **Conversions** - Booking still works if gallery fails
3. **Visibility** - Errors tracked in analytics
4. **Recovery** - Users can retry without refresh
5. **Debugging** - Easier to identify problematic components

## Dependencies

- React 18.3+ (Error Boundary API)
- Google Analytics integration

## Related Stories

- **Related:** US-002 (Logging) - Complements error logging
- **Related:** US-005 (CI/CD) - Tests validate error handling

## Future Enhancements

- Integrate with Sentry for better error tracking
- Add retry logic with exponential backoff
- Create different error UIs based on error type
- Add error report button for users
- Implement development-only error details overlay

## Notes

- Don't wrap every component - only critical sections
- Keep error boundaries at strategic points
- Provide actionable fallback UI
- Always track errors for visibility
