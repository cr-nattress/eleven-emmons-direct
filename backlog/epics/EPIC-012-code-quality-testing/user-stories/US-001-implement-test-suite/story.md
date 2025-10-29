# US-001: Implement Comprehensive Test Suite

**Story ID:** US-001
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🔴 Critical
**Story Points:** 8
**Estimated Time:** 1-2 days

## User Story

**As a** developer maintaining the codebase,
**I want** a comprehensive test suite with Jest and React Testing Library,
**So that** we can confidently refactor code, prevent regressions, and ensure component behavior is validated.

## Acceptance Criteria

1. ✅ Jest and React Testing Library installed and configured
2. ✅ Test coverage reaches minimum 70% across components, lib, and app directories
3. ✅ Unit tests for critical components (Header, Gallery, About, BookingWidget)
4. ✅ Integration tests for MDX content loading
5. ✅ Tests for animation hooks and utility functions
6. ✅ Test coverage reporting configured with thresholds
7. ✅ All tests pass in CI/CD pipeline
8. ✅ Test scripts added to package.json (test, test:watch, test:coverage)

## Problem Statement

The project currently has **0% test coverage** with no testing infrastructure. This creates significant risk:
- Refactoring can introduce bugs without detection
- Component behavior isn't validated
- MDX content processing errors go unnoticed
- Animation logic can't be verified
- Deployment confidence is low

Without tests, every code change is potentially breaking.

## Solution

Install and configure a complete testing stack:

**Testing Libraries:**
```bash
npm install --save-dev \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  jest \
  jest-environment-jsdom \
  @playwright/test
```

**Configuration Files:**
- `jest.config.js` - Jest configuration with coverage thresholds
- `jest.setup.js` - Test setup file
- `.github/workflows/test.yml` - CI test automation

**Test Coverage:**
- `components/__tests__/` - Component tests
- `lib/__tests__/` - Utility function tests
- `app/__tests__/` - Page tests

## Technical Implementation

### 1. Install Dependencies

```bash
npm install --save-dev \
  @testing-library/react@^14.0.0 \
  @testing-library/jest-dom@^6.1.0 \
  @testing-library/user-event@^14.5.0 \
  jest@^29.7.0 \
  jest-environment-jsdom@^29.7.0 \
  @playwright/test@^1.40.0
```

### 2. Create jest.config.js

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/__tests__/**',
  ],
  coverageThresholds: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
```

### 3. Create jest.setup.js

```javascript
import '@testing-library/jest-dom'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    button: 'button',
    a: 'a',
    section: 'section',
  },
  AnimatePresence: ({ children }) => children,
  useAnimation: () => ({
    start: jest.fn(),
  }),
}))
```

### 4. Example Component Test

```typescript
// components/__tests__/Header.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '@/components/Header'

describe('Header Component', () => {
  it('renders navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Amenities')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('toggles mobile menu when button clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', {
      name: /open main menu/i
    })

    await user.click(menuButton)

    // Verify menu opened (mobile nav items visible)
    const mobileNavItems = screen.getAllByText('Home')
    expect(mobileNavItems.length).toBeGreaterThan(1)
  })

  it('has proper ARIA attributes', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()

    const menuButton = screen.getByRole('button')
    expect(menuButton).toHaveAttribute('aria-expanded')
  })
})
```

### 5. Update package.json

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test"
  }
}
```

## Test Coverage Strategy

### Priority 1: Critical Components (Week 1)
- **Header.test.tsx** - Navigation, mobile menu, ARIA
- **Gallery.test.tsx** - Image display, lightbox, keyboard nav
- **BookingWidget.test.tsx** - Widget rendering, fallback
- **About.test.tsx** - Stats display, features grid

### Priority 2: Utility Functions (Week 1)
- **lib/markdown.test.ts** - MDX parsing, error handling
- **lib/animations/hooks.test.ts** - Animation hooks
- **lib/analytics.test.tsx** - Event tracking (mocked)

### Priority 3: Integration Tests (Week 2)
- **app/page.test.tsx** - Full page rendering
- **MDX content loading** - Test markdown file parsing
- **Error scenarios** - Test fallback behavior

### Priority 4: E2E Tests (Week 2)
- **Navigation flow** - Click through all sections
- **Booking flow** - Test booking widget interaction
- **Mobile experience** - Test responsive behavior

## Definition of Done

- [ ] Jest and React Testing Library installed
- [ ] jest.config.js and jest.setup.js created
- [ ] Minimum 70% code coverage achieved
- [ ] All critical components have tests
- [ ] All tests pass locally (`npm test`)
- [ ] Coverage report generated (`npm run test:coverage`)
- [ ] Tests run in CI/CD pipeline
- [ ] Test documentation added to README.md
- [ ] No TypeScript errors in test files
- [ ] Mock setup for external dependencies (framer-motion, analytics)

## Dependencies

- Next.js 14 App Router
- TypeScript 5.4+
- React 18.3+
- Node.js 20.18.0+

## Testing Best Practices

1. **AAA Pattern** - Arrange, Act, Assert
2. **Descriptive Names** - Tests should read like documentation
3. **One Assertion** - Test one thing per test (when possible)
4. **Mock External Deps** - Mock framer-motion, analytics, etc.
5. **Test Behavior** - Not implementation details
6. **Fast Execution** - Tests should run in <5 seconds

## Related Stories

- **Blocks:** US-005 (CI/CD Pipeline) - Needs tests to run in CI
- **Related:** US-009 (Accessibility) - Tests validate ARIA attributes

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Next.js Applications](https://nextjs.org/docs/app/building-your-application/testing/jest)

## Notes

- Start with high-value tests (critical user paths)
- Use snapshot testing sparingly - prefer explicit assertions
- Mock framer-motion to avoid timing issues
- Test accessibility attributes as part of component tests
- Coverage thresholds will enforce ongoing test discipline
