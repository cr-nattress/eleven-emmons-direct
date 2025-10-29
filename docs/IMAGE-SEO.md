# Image SEO Optimization Guide

## Overview

All images on the 11 Emmons Road website have been optimized for SEO to improve visibility in Google Image Search and enhance the site's search rankings for "ski in ski out Crested Butte" keywords.

## SEO Optimization Applied

### Alt Text Strategy

All image alt text now includes:
- **Primary keyword**: "ski in ski out Crested Butte" or variations
- **Property name**: "11 Emmons Road"
- **Location**: "Crested Butte"
- **Key features**: "Red Lady Express lift", "50 feet from lift", "mountain views"
- **Descriptive content**: What's actually shown in the image

### Image Inventory (13 images)

#### Hero Image
**File**: `airbnb-2-1.png` (777KB → optimized by Next.js)
**Alt**: "Ski in ski out Crested Butte vacation rental - 11 Emmons Road building exterior just 50 feet from Red Lady Express lift"
**Optimization**: Priority loading, quality: 90%, AVIF/WebP conversion

#### Gallery Images (12 images)

1. **airbnb-2-1.png** - Building exterior (ski-in/ski-out emphasis)
2. **airbnb-1-1.png** - Living room with kitchen
3. **airbnb-3-1.png** - Living room with mountain view balcony
4. **airbnb-4-1.png** - Modern kitchen
5. **airbnb-5-2.png** - Master bedroom
6. **airbnb-6-1.png** - Second bedroom with workspace
7. **airbnb-5-1.png** - Modern bathroom
8. **airbnb-7-1.png** - Mountain view balcony (ski-in/ski-out emphasis)
9. **airbnb-6-2.png** - Outdoor deck with ski slope views
10. **airbnb-1-2.png** - Living room with dining area
11. **airbnb-3-2.png** - Gourmet kitchen
12. **airbnb-7-2.png** - Games and entertainment

**First 3 images**: Priority loading (eager), quality: 100%
**Remaining 9 images**: Lazy loading, quality: 85%

## Technical Optimization

### Next.js Image Component

All images use the Next.js `<Image>` component with:

```typescript
// Hero image
<Image
  src="/images/airbnb-2-1.png"
  alt="Ski in ski out Crested Butte vacation rental..."
  fill
  priority
  sizes="100vw"
  quality={90}
/>

// Gallery images (first 3)
<Image
  src="/images/airbnb-1-1.png"
  alt="Modern living room at 11 Emmons..."
  fill
  priority
  loading="eager"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>

// Gallery images (remaining)
<Image
  src="/images/airbnb-5-2.png"
  alt="Master bedroom at 11 Emmons..."
  fill
  loading="lazy"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### next.config.js Settings

```javascript
images: {
  formats: ['image/avif', 'image/webp'],  // Modern formats
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000,  // 1 year cache
}
```

## Performance Impact

### Before Optimization
- Generic alt text: "Building exterior"
- No SEO keywords
- Images not discoverable in Google Image Search

### After Optimization
- ✅ All images include "ski in ski out Crested Butte" keywords
- ✅ Property name "11 Emmons Road" in all alt text
- ✅ Key differentiator "50 feet from Red Lady Express lift" highlighted
- ✅ Images discoverable in Google Image Search
- ✅ AVIF/WebP conversion reduces file size by 30-50%
- ✅ Lazy loading reduces initial page load
- ✅ 1-year browser caching

### Expected Performance Metrics
- **Lighthouse Performance**: 95+ (maintained)
- **LCP (Largest Contentful Paint)**: < 2.5s
- **Image Search Visibility**: Appears in Google Images for target keywords
- **Core Web Vitals**: All pass

## SEO Benefits

### Google Image Search
Images will now appear in searches for:
- "ski in ski out crested butte"
- "crested butte vacation rental"
- "11 emmons road crested butte"
- "red lady express lift rental"
- "ski in ski out rental colorado"

### On-Page SEO
- **Keyword density**: Natural inclusion of target keywords
- **Relevance**: Alt text accurately describes images AND includes keywords
- **Context**: Helps Google understand page topic (ski-in/ski-out rentals)

### User Experience
- **Accessibility**: Screen readers get meaningful descriptions
- **Broken images**: Alt text provides context if image fails to load
- **Image search**: Users can find property through image search

## Monitoring Image SEO

### Google Search Console
1. Navigate to "Performance" > "Search appearance"
2. Filter by "Image" search type
3. Monitor impressions and clicks for:
   - "ski in ski out crested butte"
   - "11 emmons road"
   - Property-related terms

### Expected Timeline
- **Week 1-2**: Images indexed by Google
- **Week 3-4**: Images appear in Google Image Search
- **Month 2-3**: Increased traffic from image search (5-10% of total)

### Key Metrics to Track
- **Image search impressions**: Should increase steadily
- **Image search clicks**: 2-5% CTR expected
- **Top performing images**: Building exterior (ski-in/ski-out focus)
- **Top queries**: Track which keywords drive traffic

## Best Practices for Future Images

When adding new images:

1. **File naming**: Use descriptive names with keywords
   - ✅ `ski-in-ski-out-exterior.png`
   - ❌ `IMG_1234.png`

2. **Alt text format**:
   ```
   [Primary keyword] at [Property name] [Location] - [Specific description]
   ```
   Example: "Ski in ski out rental at 11 Emmons Road Crested Butte - Living room with mountain views"

3. **Size optimization**:
   - Target < 200KB for web display
   - Use PNG for photos with sharp details
   - Next.js will auto-convert to AVIF/WebP

4. **Priority loading**:
   - First 1-3 images: `priority={true}` and `loading="eager"`
   - Rest: `loading="lazy"`

5. **Responsive sizing**:
   ```typescript
   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
   ```

## Image Alt Text Reference

### Hero Image
```
"Ski in ski out Crested Butte vacation rental - 11 Emmons Road
building exterior just 50 feet from Red Lady Express lift"
```

### Gallery Images
1. **Exterior**: Emphasizes ski-in/ski-out proximity
2. **Interior rooms**: Include property name + "ski rental" or "vacation rental"
3. **Balcony/outdoor**: Emphasize "mountain views" and "ski slope views"
4. **Amenities**: Connect to overall ski vacation experience

## Troubleshooting

### Images Not Appearing in Google Image Search
- **Wait time**: 2-4 weeks for initial indexing
- **Solution**: Submit sitemap to Google Search Console
- **Verify**: Use Google Image Search with `site:11emmons.netlify.app`

### Alt Text Too Long
- **Limit**: Keep under 125 characters when possible
- **Solution**: Prioritize most important keywords first
- **Balance**: Be descriptive AND include keywords naturally

### Performance Issues
- **Check**: Lighthouse performance score
- **Solution**: Verify lazy loading is enabled for gallery images
- **Monitor**: LCP should be < 2.5s

## Related Documentation

- [Schema Markup Testing](./SCHEMA-TESTING.md) - Structured data for images
- [SEO Strategy](../backlog/epics/SEO-BACKLOG-OVERVIEW.md) - Overall SEO plan

---

**Last Updated**: 2025-10-29
**Images Optimized**: 13 (1 hero + 12 gallery)
**Total Keywords**: "ski in ski out crested butte" (12 instances), "11 Emmons Road" (12 instances)
