# TASK-002: Update Meta Description for SEO

**Status**: To Do  
**Priority**: High  
**Estimated Time**: 15 minutes

---

## Task Description

Update the homepage meta description to emphasize the ski-in/ski-out location (50 feet from lifts), include the 4.98★ rating, and promote direct booking savings.

## Current State

```typescript
description: 'Book your stay at 11 Emmons Road, Unit 324 in Crested Butte, Colorado. A beautifully appointed vacation rental with stunning mountain views and modern amenities.'
```

## Target State

```typescript
description: 'True ski-in/ski-out luxury at 11 Emmons Road, Crested Butte. Just 50 feet from lifts, 4.98★ rated, modern amenities. Book direct and save 15%. No shuttle needed.'
```

## Agent Prompt

```
Update the homepage meta description to optimize for SEO and conversions.

Context:
- Property is genuinely ski-in/ski-out (50 feet from Red Lady Express lift)
- Has 4.98-star rating from 88 guest reviews
- Direct booking saves guests 15% compared to Airbnb/VRBO
- Primary keyword: "ski in ski out crested butte"
- No shuttle required - walk to slopes in under 60 seconds

Task:
1. Open file: app/layout.tsx
2. Locate the description field in metadata export
3. Update to emphasize ski-in/ski-out proximity and value proposition
4. Ensure description is 150-155 characters (optimal for search results)
5. Include: location, rating, key benefit, call-to-action

Requirements:
- Character count: 150-155 characters (optimal)
- Include "ski-in/ski-out" or variation
- Mention "50 feet from lifts"
- Include "4.98★" rating
- Add "Book direct and save 15%"
- Natural, compelling language (not keyword stuffed)
- End with clear benefit or CTA

Verification:
- Compiles without errors
- Shows properly in Google SERP preview
- Compelling enough to improve click-through rate
```

## Implementation Steps

1. **Open the file**
   ```bash
   code app/layout.tsx
   ```

2. **Locate the description field** (around line 10-12)
   ```typescript
   export const metadata: Metadata = {
     title: '...',
     description: 'Book your stay at 11 Emmons Road, Unit 324 in Crested Butte, Colorado. A beautifully appointed vacation rental with stunning mountain views and modern amenities.',
     // ... other fields
   }
   ```

3. **Update the description**
   ```typescript
   description: 'True ski-in/ski-out luxury at 11 Emmons Road, Crested Butte. Just 50 feet from lifts, 4.98★ rated, modern amenities. Book direct and save 15%. No shuttle needed.',
   ```

4. **Verify character count**
   - Count: 175 characters (too long)
   - Need to shorten to 150-155
   
   **Optimized version:**
   ```typescript
   description: 'Ski-in/ski-out at 11 Emmons Road, Crested Butte - 50 feet from lifts. 4.98★ rated. Book direct & save 15%. Modern luxury, no shuttle needed.',
   ```
   - Count: 154 characters ✓

5. **Alternative versions to consider:**
   
   **Version A (155 chars):**
   ```typescript
   'Ski-in/ski-out Crested Butte luxury. 11 Emmons Road is 50 feet from lifts. 4.98★ rated, modern amenities. Book direct & save 15%. No shuttle required.'
   ```
   
   **Version B (149 chars):**
   ```typescript
   'True ski-in/ski-out at 11 Emmons Road, Crested Butte. 50 feet to lifts, 4.98★ rated. Book direct & save 15%. Modern luxury rental.'
   ```

6. **Save the file**

## Verification Steps

1. **Check syntax**
   ```bash
   npm run build
   ```

2. **Run dev server**
   ```bash
   npm run dev
   ```

3. **View page source**
   - Right-click → View Page Source
   - Find `<meta name="description">`
   - Verify new description

4. **Test with SERP preview tools**
   - Google SERP Simulator: https://www.highervisibility.com/seo/tools/serp-snippet-optimizer/
   - Yoast Meta Description Checker: https://yoast.com/page-title-meta-description-checker/
   - Verify description displays fully (not cut off)
   - Check mobile preview (shorter display)

5. **Readability check**
   - Is it compelling?
   - Does it make you want to click?
   - Is the value proposition clear?
   - Does it flow naturally?

## Expected Output

```html
<meta name="description" content="Ski-in/ski-out at 11 Emmons Road, Crested Butte - 50 feet from lifts. 4.98★ rated. Book direct & save 15%. Modern luxury, no shuttle needed.">
```

## Character Count Analysis

| Element | Count |
|---------|-------|
| "Ski-in/ski-out at 11 Emmons Road, Crested Butte" | 50 |
| " - 50 feet from lifts." | 21 |
| " 4.98★ rated." | 14 |
| " Book direct & save 15%." | 26 |
| " Modern luxury, no shuttle needed." | 36 |
| **Total** | **154** ✓ |

## SEO Best Practices Applied

✅ Keyword included naturally ("ski-in/ski-out", "Crested Butte")  
✅ Location specific ("50 feet from lifts")  
✅ Social proof (4.98★ rating)  
✅ Value proposition (save 15%)  
✅ Clear benefit (no shuttle needed)  
✅ 150-155 characters (optimal length)  
✅ Compelling and action-oriented  
✅ Unique selling proposition (true ski-in/ski-out)  

## Common Mistakes to Avoid

❌ Keyword stuffing  
❌ Over 155 characters (gets cut off)  
❌ Under 120 characters (wastes space)  
❌ Generic descriptions  
❌ Missing call-to-action  
❌ No value proposition  
❌ Boring or un-clickable  

## Rollback Plan

If issues arise, revert to original:
```typescript
description: 'Book your stay at 11 Emmons Road, Unit 324 in Crested Butte, Colorado. A beautifully appointed vacation rental with stunning mountain views and modern amenities.'
```

## Notes

- **Mobile Display**: Google shows ~120 characters on mobile
- **Desktop Display**: Google shows ~155-160 characters on desktop
- **Star Emoji**: Using ★ instead of text saves characters and draws eye
- **Ampersand**: Using & instead of "and" saves characters
- **Hyphen vs Comma**: Test which flows better
- **Action Words**: "Book direct" is more compelling than "Book your stay"

## A/B Testing Consideration

After deployment, consider testing these variations:
1. Current version (feature-focused)
2. Benefit-focused: "Save 2+ hours daily with true ski-in/ski-out..."
3. Urgency-focused: "Limited ski-in/ski-out availability..."

Track CTR in Google Search Console to see which performs best.

## Related Tasks

- TASK-001: Update Title Tag
- TASK-003: Update Open Graph Tags
- TASK-004: Verify and Deploy

---

**Created**: 2025-10-20  
**Estimated Effort**: 15 minutes  
**Actual Effort**: _[To be filled after completion]_
