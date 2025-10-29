# US-005: Implement CI/CD Pipeline with GitHub Actions

**Story ID:** US-005
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🔴 Critical
**Story Points:** 5
**Estimated Time:** 2-4 hours

## User Story

**As a** developer deploying code to production,
**I want** automated CI/CD pipelines that validate code quality before deployment,
**So that** bugs are caught early and deployments are confident and safe.

## Acceptance Criteria

1. ✅ GitHub Actions workflows created for CI/CD
2. ✅ Quality checks run on every commit (type-check, lint, format)
3. ✅ Tests run automatically in CI pipeline
4. ✅ Build verification before deployment
5. ✅ Dependency security scanning (npm audit, Snyk)
6. ✅ Branch protection rules require CI to pass
7. ✅ Dependabot configured for automatic dependency updates
8. ✅ All workflows passing on main branch

## Problem Statement

Currently, code is deployed without automated checks:

- Type errors can reach production
- Linting violations go unnoticed
- No test validation before merge
- Security vulnerabilities undetected
- Manual deployment is error-prone

This creates deployment risk and reduces development velocity.

## Solution

Create comprehensive GitHub Actions workflows:

### 1. Quality Workflow (.github/workflows/ci.yml)

```yaml
name: CI

on:
  push:
    branches: [master, main, develop]
  pull_request:
    branches: [master, main]

jobs:
  quality:
    name: Code Quality Checks
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.18.0'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run type checking
        run: npx tsc --noEmit

      - name: Run ESLint
        run: npm run lint

      - name: Check formatting
        run: npx prettier --check "**/*.{ts,tsx,js,jsx,json,md}"

  test:
    name: Test Suite
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.18.0'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm test -- --coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info

  build:
    name: Build Verification
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.18.0'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build application
        run: npm run build

  security:
    name: Security Audit
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.18.0'

      - name: Run npm audit
        run: npm audit --audit-level=moderate
```

### 2. Dependabot Configuration

```yaml
# .github/dependabot.yml (NEW FILE)
version: 2
updates:
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
    open-pull-requests-limit: 10
    reviewers:
      - 'cr-nattress'
    labels:
      - 'dependencies'
```

### 3. Update package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,json,md}\"",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "validate": "npm run type-check && npm run lint && npm run format:check && npm run test"
  }
}
```

## Technical Implementation

### Files to Create

1. **`.github/workflows/ci.yml`** - Continuous integration workflow
2. **`.github/dependabot.yml`** - Automated dependency updates

### Files to Update

1. **`package.json`** - Add validation scripts
2. **GitHub repository settings** - Configure branch protection

### Workflow Jobs

**Quality Job:**

- TypeScript type checking
- ESLint validation
- Prettier formatting check
- ~2 minutes runtime

**Test Job:**

- Run Jest tests
- Upload coverage to Codecov
- ~3 minutes runtime

**Build Job:**

- Verify production build succeeds
- Check for build errors
- ~4 minutes runtime

**Security Job:**

- npm audit for vulnerabilities
- Optional: Snyk integration
- ~1 minute runtime

## Definition of Done

- [ ] `.github/workflows/ci.yml` created and working
- [ ] `.github/dependabot.yml` configured
- [ ] All workflow jobs passing on main branch
- [ ] Branch protection rules enabled (require CI pass)
- [ ] package.json scripts updated
- [ ] README updated with CI badge
- [ ] First successful CI run completed
- [ ] Team notified of CI requirements

## Branch Protection Rules

Configure in GitHub repository settings:

- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Require CI workflow to pass
- ✅ Require code review (if team > 1 person)

## Benefits

1. **Quality Assurance** - Catch bugs before production
2. **Confidence** - Every merge is validated
3. **Documentation** - CI acts as executable documentation
4. **Velocity** - Faster feedback loop
5. **Security** - Automated vulnerability detection

## Dependencies

- **Requires:** US-001 (Test Suite) - Tests must exist to run
- **Enhances:** US-002, US-003, US-004 - Validates those improvements

## Related Stories

- **Blocked by:** US-001 (needs tests to run)
- **Enables:** Confident refactoring and deployment

## Monitoring & Alerts

- **GitHub Actions** - View runs in Actions tab
- **Status Badges** - Add to README for visibility
- **Email Notifications** - Configure for failures
- **Slack/Discord** - Optional integration for team alerts

## Future Enhancements

- Add Lighthouse CI for performance budgets
- Add visual regression testing (Percy, Chromatic)
- Add semantic-release for automated versioning
- Add preview deployments for PRs (Netlify does this)

## Notes

- Start simple, add complexity as needed
- Monitor CI runtime - optimize if >5 minutes
- Use caching to speed up workflows
- Parallel jobs save time vs sequential
