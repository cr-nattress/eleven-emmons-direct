# US-002: Remove Console Logs and Implement Logging System

**Story ID:** US-002
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🔴 High
**Story Points:** 2
**Estimated Time:** < 1 hour

## User Story

**As a** developer concerned with production code quality,
**I want** to remove all console.log statements and implement a proper logging system,
**So that** we prevent information leakage, improve performance, and have environment-aware logging.

## Acceptance Criteria

1. ✅ All console.log/error statements removed from production code
2. ✅ Centralized logging utility created (`lib/logger.ts`)
3. ✅ Logging only active in development environment
4. ✅ Error tracking integrated with Google Analytics
5. ✅ ESLint rule added to prevent new console statements
6. ✅ No console output in production build
7. ✅ Backlog scripts exempt from console restrictions (development tools)

## Problem Statement

Console statements currently exist in production code:

- `components/BookingWidget.tsx:31` - Logs environment variable
- `lib/markdown.ts:36, 57` - Logs file read errors
- `backlog/scripts/*.js` - Development scripts (acceptable)

**Risks:**

- **Security:** Can leak environment variables or sensitive data
- **Performance:** Console operations have runtime overhead
- **Professionalism:** Users seeing errors in console
- **Debugging:** Hard to filter real issues from noise

## Solution

### 1. Create Centralized Logger

```typescript
// lib/logger.ts (NEW FILE)
const isDevelopment = process.env.NODE_ENV === 'development'

export const logger = {
  info: (...args: unknown[]) => {
    if (isDevelopment) console.info('[INFO]', ...args)
  },
  warn: (...args: unknown[]) => {
    if (isDevelopment) console.warn('[WARN]', ...args)
  },
  error: (...args: unknown[]) => {
    if (isDevelopment) {
      console.error('[ERROR]', ...args)
    }
    // In production, send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: String(args[0]),
        fatal: false,
      })
    }
  },
}
```

### 2. Update Components

**components/BookingWidget.tsx:**

```typescript
// BEFORE
console.log('Hospitable Widget ID:', widgetId)

// AFTER
import { logger } from '@/lib/logger'
logger.info('Hospitable Widget ID configured')
```

**lib/markdown.ts:**

```typescript
// BEFORE
console.error(`Error reading markdown file: ${slug}.md`, error)

// AFTER
import { logger } from '@/lib/logger'
logger.error('Error reading markdown file:', slug, error)
```

### 3. Add ESLint Rule

```json
// .eslintrc.json
{
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  }
}
```

## Technical Implementation

### Files to Update

1. **Create `lib/logger.ts`** - New logging utility
2. **Update `components/BookingWidget.tsx`** - Replace console.log
3. **Update `lib/markdown.ts`** - Replace console.error (2 instances)
4. **Update `.eslintrc.json`** - Add no-console rule
5. **Keep `backlog/scripts/*.js`** - These are dev tools (okay)

### Verification Steps

1. Search for console statements:
   ```bash
   grep -r "console\." --exclude-dir=node_modules --exclude-dir=backlog
   ```
2. Should only find usage in logger.ts

3. Run ESLint:
   ```bash
   npm run lint
   ```
4. Should warn about any new console usage

5. Build for production:
   ```bash
   npm run build
   ```
6. Check browser console - should be clean

## Definition of Done

- [ ] `lib/logger.ts` created with environment-aware logging
- [ ] All console.log/error replaced with logger calls
- [ ] ESLint rule configured to prevent new console statements
- [ ] `npm run lint` passes without console warnings
- [ ] Production build has no console output
- [ ] Error tracking integrated with Google Analytics
- [ ] Documentation added to README about logging

## Dependencies

- None (quick win, no external dependencies)

## Related Stories

- **Enables:** US-001 (Testing) - Clean logging improves test output
- **Related:** US-005 (CI/CD) - Linting rules enforced in pipeline

## Resources

- [ESLint no-console rule](https://eslint.org/docs/latest/rules/no-console)
- [Google Analytics Exception Tracking](https://developers.google.com/analytics/devguides/collection/gtagjs/exceptions)

## Notes

- **Quick Win** - Can be completed in < 1 hour
- Keep backlog scripts unchanged (they're development tools)
- Logger provides foundation for future structured logging
- Consider Sentry integration in future for better error tracking
