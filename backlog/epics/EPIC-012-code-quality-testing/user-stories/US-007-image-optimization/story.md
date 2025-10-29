# US-007: Optimize Image Loading and Performance

**Story ID:** US-007
**Epic:** EPIC-012 - Code Quality, Testing & Production Readiness
**Status:** 📋 To Do
**Priority:** 🟡 Medium
**Story Points:** 5
**Estimated Time:** 1-2 hours

## User Story

**As a** user on a mobile device,
**I want** images to load quickly without using unnecessary data,
**So that** I can browse the property quickly and save on mobile data costs.

## Acceptance Criteria

1. ✅ Hero image loads with `priority` flag
2. ✅ Gallery images use lazy loading (first 3 eager, rest lazy)
3. ✅ Blur placeholders added for better perceived performance
4. ✅ WebP/AVIF formats served automatically
5. ✅ Lighthouse LCP score < 2.0s (from ~3.5s)
6. ✅ Initial page weight < 2MB (from 3.6MB)
7. ✅ Core Web Vitals pass all metrics

## Problem Statement

All 12 gallery images load immediately, even though they're below the fold:
- **Current:** 12 images × 300KB = 3.6MB loaded immediately
- **Impact:** LCP ~3.5s on slow connections
- **Mobile:** 3.6MB on 3G takes 20+ seconds
- **Waste:** Users never scroll to see all images

## Solution

Implement progressive image loading strategy:

### 1. Prioritize Hero Image

```typescript
// components/Hero.tsx (UPDATE)
<Image
  src="/images/airbnb-2-1.png"
  alt="11 Emmons Road Vacation Rental"
  fill
  className="object-cover"
  priority  // ✅ Load immediately
  quality={90}
  sizes="100vw"
/>
```

### 2. Lazy Load Gallery Images

```typescript
// components/Gallery.tsx (UPDATE)
const images = [
  {
    src: '/images/airbnb-2-1.png',
    alt: '...',
    priority: true,  // ✅ First 3 images
  },
  {
    src: '/images/airbnb-1-1.png',
    alt: '...',
    priority: true,
  },
  {
    src: '/images/airbnb-3-1.png',
    alt: '...',
    priority: true,
  },
  {
    src: '/images/airbnb-4-1.png',
    alt: '...',
    priority: false,  // ✅ Lazy load rest
  },
  // ... remaining images
]

// Render with conditional loading
<Image
  src={image.src}
  alt={image.alt}
  fill
  loading={image.priority ? 'eager' : 'lazy'}
  quality={85}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### 3. Update next.config.js

```javascript
// next.config.js (UPDATE)
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60 * 60 * 24 * 365,  // ✅ Cache 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'standalone',
}
```

## Technical Implementation

### Performance Targets

**Before:**
- LCP: 3.5s
- Page Weight: 3.6MB
- Images Loaded: 12

**After:**
- LCP: < 2.0s (43% improvement)
- Page Weight: < 2MB (45% reduction)
- Images Loaded: 6 initially, 6 on scroll

### Files to Update

1. **`components/Hero.tsx`** - Add `priority` to hero image
2. **`components/Gallery.tsx`** - Implement lazy loading
3. **`next.config.js`** - Optimize image config

### Image Loading Strategy

| Image | Loading | Priority | When Loaded |
|-------|---------|----------|-------------|
| Hero | eager | high | Immediately |
| Gallery 1-3 | eager | high | Immediately |
| Gallery 4-12 | lazy | low | When in viewport |

## Definition of Done

- [ ] Hero image has `priority` flag
- [ ] Gallery images 1-3 load eagerly
- [ ] Gallery images 4-12 lazy load
- [ ] next.config.js optimized
- [ ] Lighthouse LCP < 2.0s
- [ ] Initial page weight < 2MB
- [ ] Core Web Vitals all passing
- [ ] WebP/AVIF served (verify in Network tab)

## Testing & Verification

### Local Testing

```bash
# Build production
npm run build
npm start

# Open DevTools → Network
# Throttle to "Slow 3G"
# Measure initial load
# Verify lazy images load on scroll
```

### Lighthouse Audit

```bash
# Run Lighthouse
npx @lhci/cli@0.12.x autorun

# Target Scores:
# - Performance: 95+
# - LCP: < 2.5s
# - FCP: < 1.5s
```

### Verification Checklist

- [ ] WebP format served (Network tab → Type)
- [ ] Only 6 images loaded initially
- [ ] Remaining images load on scroll
- [ ] No layout shift (CLS < 0.1)
- [ ] Images cached (304 on refresh)

## Benefits

1. **Performance** - 43% faster LCP
2. **Mobile** - 45% less data usage
3. **SEO** - Better Core Web Vitals ranking
4. **UX** - Faster perceived load time
5. **Cost** - Lower bandwidth costs

## Dependencies

- Next.js 14 Image component
- Image optimization built into Next.js

## Related Stories

- **Complements:** US-001 (Testing) - Add performance tests
- **Enhances:** US-005 (CI/CD) - Add Lighthouse checks

## Future Enhancements

- Use CDN (Cloudinary, Imgix) for automatic optimization
- Implement progressive image loading (blur → low-res → high-res)
- Add dominant color placeholders
- Generate responsive image variants
- Implement image carousel lazy loading

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web.dev Core Web Vitals](https://web.dev/vitals/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

## Notes

- Prioritize hero and first 3 gallery images only
- Use lower quality (85 vs 90) for gallery to save bytes
- Enable long cache TTL for production
- Monitor image format in Network tab (should be WebP/AVIF)
