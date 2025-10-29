# TASK-003: Update Open Graph Tags

**Status**: To Do  
**Priority**: Medium  
**Estimated Time**: 10 minutes

---

## Task Description

Update Open Graph (OG) and Twitter Card tags to ensure the property appears correctly when shared on social media platforms, emphasizing the ski-in/ski-out location.

## Agent Prompt

```
Update the Open Graph and Twitter Card metadata for better social media sharing.

Task:
1. Open file: app/layout.tsx
2. Locate the openGraph and twitter objects in metadata
3. Update title and description to match new SEO-optimized versions
4. Ensure image paths are correct
5. Verify URL is correct

Update these fields:
- openGraph.title: "Ski In Ski Out Crested Butte | 11 Emmons Road"
- openGraph.description: "True ski-in/ski-out luxury - 50 feet from lifts. 4.98★ rated. Book direct & save 15%."
- twitter.title: Same as openGraph
- twitter.description: Same as openGraph

Keep existing image and URL configuration.
```

## Implementation

Update in `app/layout.tsx`:

```typescript
openGraph: {
  title: 'Ski In Ski Out Crested Butte | 11 Emmons Road',
  description: 'True ski-in/ski-out luxury - 50 feet from lifts. 4.98★ rated. Book direct & save 15%.',
  url: 'https://11emmons.netlify.app',
  siteName: '11 Emmons Road',
  images: [
    {
      url: '/images/hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Ski-in/ski-out vacation rental at 11 Emmons Road, Crested Butte',
    },
  ],
  locale: 'en_US',
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: 'Ski In Ski Out Crested Butte | 11 Emmons Road',
  description: 'True ski-in/ski-out luxury - 50 feet from lifts. 4.98★ rated. Book direct & save 15%.',
  images: ['/images/hero.jpg'],
},
```

## Verification

Test with:

- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

**Estimated Effort**: 10 minutes
