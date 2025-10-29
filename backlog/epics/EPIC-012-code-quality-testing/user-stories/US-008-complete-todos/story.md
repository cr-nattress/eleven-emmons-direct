# US-008: Complete TODOs and Production Polish

**Story ID:** US-008
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🟡 Medium
**Story Points:** 4
**Estimated Time:** 2-4 hours

## User Story

**As a** developer preparing for production launch,
**I want** all TODO comments resolved and features completed,
**So that** the codebase appears professional and all features are fully functional.

## Acceptance Criteria

1. ✅ Color scheme finalized (replace placeholder colors)
2. ✅ OG (Open Graph) image created and configured
3. ✅ Hospitable widget integration completed (or removed)
4. ✅ ESLint rule added to prevent new TODOs
5. ✅ All TODOs resolved or moved to issue tracker
6. ✅ Zero TODO comments in production code
7. ✅ Social sharing works correctly with proper OG image

## Problem Statement

Production code contains TODO comments for incomplete features:
- `tailwind.config.js:10` - Placeholder color scheme
- `components/BookingWidget.tsx:25` - Hospitable widget TODO
- `app/layout.tsx:29, 43` - Missing OG images

**Issues:**
- Looks unprofessional to reviewers/employers
- Unclear if features are intentionally incomplete
- Technical debt accumulates
- Missing OG images hurt social media sharing

## Solution

### 1. Finalize Color Scheme

```javascript
// tailwind.config.js (UPDATE)
module.exports = {
  content: [...],
  theme: {
    extend: {
      colors: {
        // ✅ Brand colors - Crested Butte mountain theme
        primary: {
          DEFAULT: '#0066cc',  // Mountain blue
          dark: '#004999',
          light: '#3399ff',
        },
        secondary: {
          DEFAULT: '#ff6600',  // Sunset orange
          dark: '#cc5200',
          light: '#ff9933',
        },
        accent: {
          snow: '#f0f9ff',
          forest: '#1a5f3d',
          granite: '#6b7280',
        },
      },
      // ...
    },
  },
}
```

### 2. Create OG Image

**Option A: Design Custom OG Image**
- Size: 1200×630px
- Content: Property photo + "11 Emmons Road" text
- Tool: Canva, Figma, or Photoshop
- Save as: `public/images/og-image.jpg`

**Option B: Use Existing Hero Image**
- Crop hero image to 1200×630
- Add text overlay with property name
- Optimize for file size

```typescript
// app/layout.tsx (UPDATE)
export const metadata: Metadata = {
  // ...
  openGraph: {
    images: [
      {
        url: '/images/og-image.jpg',  // ✅ Actual image
        width: 1200,
        height: 630,
        alt: '11 Emmons Road - Ski-in/ski-out vacation rental',
      },
    ],
  },
  twitter: {
    images: ['/images/og-image.jpg'],  // ✅ Actual image
  },
}
```

### 3. Complete or Remove Hospitable Widget

**Option A: Complete Integration**
```typescript
// components/BookingWidget.tsx (UPDATE)
// Implement actual Hospitable widget script
// See US documentation for full implementation
```

**Option B: Remove TODO, Keep Fallback**
```typescript
// components/BookingWidget.tsx (UPDATE)
// Remove TODO comment
// Document that Airbnb is primary booking method
// Hospitable widget is optional enhancement
```

### 4. Add ESLint Rule to Prevent TODOs

```json
// .eslintrc.json (UPDATE)
{
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-warning-comments": [
      "warn",
      {
        "terms": ["todo", "fixme", "hack"],
        "location": "anywhere"
      }
    ]
  }
}
```

### 5. Move Remaining TODOs to GitHub Issues

Create issues for any legitimate future work:
```markdown
# GitHub Issue Template
Title: [TODO] Complete Hospitable Widget Integration

Description:
Currently showing Airbnb fallback link.
Need to integrate Hospitable booking widget.

Acceptance Criteria:
- [ ] Widget script integrated
- [ ] Widget ID configured
- [ ] Testing completed
- [ ] Fallback still works

Priority: Low
Labels: enhancement, technical-debt
```

## Technical Implementation

### Files to Update

1. **`tailwind.config.js`** - Finalize color scheme
2. **`app/layout.tsx`** - Add OG image
3. **`components/BookingWidget.tsx`** - Resolve TODO
4. **`.eslintrc.json`** - Add no-warning-comments rule
5. **`public/images/og-image.jpg`** - Create OG image (NEW)

### Create OG Image Steps

1. Open Canva or Figma
2. Create 1200×630px canvas
3. Add property hero image as background
4. Add text overlay:
   - "11 Emmons Road"
   - "Crested Butte, CO"
   - "Ski-In/Ski-Out Luxury Rental"
5. Export as JPG (optimized, <200KB)
6. Save to `public/images/og-image.jpg`

### Verification Commands

```bash
# Search for TODOs
grep -r "TODO\|FIXME" --exclude-dir=node_modules --exclude-dir=backlog

# Should only find backlog scripts (acceptable)

# Run ESLint
npm run lint

# Should warn about any TODO comments
```

## Definition of Done

- [ ] Color scheme finalized in tailwind.config.js
- [ ] OG image created and added to public/images/
- [ ] OG image configured in app/layout.tsx
- [ ] Hospitable widget TODO resolved (completed or documented)
- [ ] ESLint rule prevents new TODOs
- [ ] Zero TODO comments in src code (grep verification)
- [ ] Social sharing tested (Facebook, Twitter)
- [ ] GitHub issues created for future work

## Testing Social Sharing

1. **Facebook Debugger:**
   - https://developers.facebook.com/tools/debug/
   - Enter site URL
   - Verify OG image appears

2. **Twitter Card Validator:**
   - https://cards-dev.twitter.com/validator
   - Enter site URL
   - Verify card displays correctly

3. **LinkedIn Post Inspector:**
   - https://www.linkedin.com/post-inspector/
   - Enter site URL
   - Verify preview looks good

## Benefits

1. **Professionalism** - Clean codebase ready for review
2. **Social Sharing** - Proper OG image improves engagement
3. **Branding** - Finalized color scheme creates consistency
4. **Maintainability** - Issue tracker instead of TODO comments
5. **Quality** - ESLint prevents new technical debt

## Dependencies

- Image editing tool (Canva, Figma, Photoshop)
- ESLint configured

## Related Stories

- **Related:** US-002 (Console Logs) - Similar code cleanup
- **Related:** US-005 (CI/CD) - ESLint rules enforced in CI

## Future Enhancements

- Create multiple OG images for different pages
- Add OG image variants for different social platforms
- Implement dynamic OG images with Next.js API routes
- Create design system documenting color usage

## Notes

- Backlog scripts can keep TODOs (they're dev tools)
- Move legitimate future work to GitHub Issues
- Test social sharing on multiple platforms
- OG image significantly improves social media CTR
