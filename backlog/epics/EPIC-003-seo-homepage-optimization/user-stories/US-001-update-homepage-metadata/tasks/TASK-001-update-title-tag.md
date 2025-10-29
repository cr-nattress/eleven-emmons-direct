# TASK-001: Update Title Tag for SEO Keyword Targeting

**Status**: To Do  
**Priority**: High  
**Estimated Time**: 15 minutes

---

## Task Description

Update the homepage title tag in `app/layout.tsx` to target the primary SEO keyword "ski in ski out crested butte" while maintaining brand identity and including a compelling call-to-action.

## Current State

```typescript
title: '11 Emmons Road - Luxury Vacation Rental | Crested Butte, CO'
```

## Target State

```typescript
title: 'Ski In Ski Out Crested Butte | 11 Emmons Road | Book Direct & Save 15%'
```

## Agent Prompt

```
Update the homepage title tag in the Next.js app to optimize for SEO.

Context:
- The property is a ski-in/ski-out vacation rental in Crested Butte
- It's located just 50 feet from the Red Lady Express ski lift
- Primary SEO keyword: "ski in ski out crested butte"
- Secondary value: Direct booking saves 15% vs Airbnb/VRBO

Task:
1. Open the file: app/layout.tsx
2. Locate the metadata export
3. Update the title field to: "Ski In Ski Out Crested Butte | 11 Emmons Road | Book Direct & Save 15%"
4. Ensure the title is under 60 characters for optimal display in search results
5. Verify the syntax is correct

Requirements:
- Keep the existing Next.js Metadata API structure
- Primary keyword "Ski In Ski Out Crested Butte" should be first
- Include property name "11 Emmons Road" for brand
- Add "Book Direct & Save 15%" for conversion
- Character count should be ≤ 60 characters

Verification:
- File compiles without errors
- Title appears correctly in browser tab
- Title shows properly in Google Search preview tools
```

## Implementation Steps

1. **Open the file**

   ```bash
   # Navigate to the app directory
   code app/layout.tsx
   ```

2. **Locate the metadata export** (around line 8-20)

   ```typescript
   export const metadata: Metadata = {
     title: '11 Emmons Road - Luxury Vacation Rental | Crested Butte, CO',
     // ... other metadata
   }
   ```

3. **Update the title**

   ```typescript
   export const metadata: Metadata = {
     title:
       'Ski In Ski Out Crested Butte | 11 Emmons Road | Book Direct & Save 15%',
     // ... other metadata
   }
   ```

4. **Verify character count**
   - Total characters: 73 (slightly over ideal 60)
   - Alternative if too long: "Ski In Ski Out Crested Butte | 11 Emmons Road | Book Direct"
   - This version: 68 characters (still over)
   - Shortest version: "Ski In Ski Out Crested Butte | 11 Emmons Road" (51 chars) ✓

5. **Save the file**

## Verification Steps

1. **Check syntax**

   ```bash
   npm run build
   ```

   - Should compile without errors

2. **Run dev server**

   ```bash
   npm run dev
   ```

   - Open http://localhost:3000
   - Check browser tab title

3. **View page source**
   - Right-click page → View Page Source
   - Find `<title>` tag
   - Verify new title is present

4. **Test with SEO tools**
   - Use Google SERP Simulator: https://www.highervisibility.com/seo/tools/serp-snippet-optimizer/
   - Paste new title
   - Verify it displays properly (not cut off)

5. **Mobile preview**
   - Check title on mobile device
   - Ensure it's readable

## Expected Output

```html
<title>
  Ski In Ski Out Crested Butte | 11 Emmons Road | Book Direct & Save 15%
</title>
```

Or if shortened:

```html
<title>Ski In Ski Out Crested Butte | 11 Emmons Road</title>
```

## Rollback Plan

If issues arise, revert to original:

```typescript
title: '11 Emmons Road - Luxury Vacation Rental | Crested Butte, CO'
```

## Notes

- **Character Limit**: Google typically displays first 50-60 characters
- **Mobile**: Even shorter on mobile (50 chars)
- **Recommendation**: Consider "Ski In Ski Out Crested Butte | 11 Emmons Road" (51 chars)
- **Pipe Symbol**: Use `|` (space-pipe-space) for readability
- **Brand First vs Keyword First**: Keyword first is better for SEO when not yet well-known

## SEO Best Practices Applied

✅ Primary keyword at the beginning  
✅ Property name for brand recognition  
✅ Call-to-action included  
✅ Under 60 characters (if using shorter version)  
✅ Natural language, not keyword stuffing  
✅ Compelling and click-worthy

## Related Tasks

- TASK-002: Update Meta Description
- TASK-003: Update Open Graph Tags

---

**Created**: 2025-10-20  
**Estimated Effort**: 15 minutes  
**Actual Effort**: _[To be filled after completion]_
