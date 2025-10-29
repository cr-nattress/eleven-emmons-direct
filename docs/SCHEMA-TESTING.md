# Schema Markup Testing Guide

## Overview

The site includes three types of Schema.org structured data (JSON-LD) to enhance SEO and enable rich snippets in Google search results.

## Implemented Schemas

### 1. VacationRental Schema
- **Type**: `VacationRental`
- **Purpose**: Describe the property with all details
- **Features**:
  - Property details (beds, baths, sq ft, occupancy)
  - AggregateRating (4.98★, 88 reviews)
  - Address and geographic coordinates
  - LocationFeatureSpecification for ski-in/ski-out
  - Amenities (WiFi, smart home, washer/dryer, etc.)
  - Check-in/check-out times

### 2. FAQPage Schema
- **Type**: `FAQPage`
- **Purpose**: Answer common questions about ski-in/ski-out
- **Questions Covered**:
  - Is it truly ski-in/ski-out?
  - Distance to Red Lady Express lift
  - Guest rating information
  - Guest capacity
  - Direct booking benefits
  - Property amenities

### 3. LocalBusiness Schema
- **Type**: `LodgingBusiness`
- **Purpose**: Local SEO and business information
- **Features**:
  - Business contact info (phone, email)
  - Address and coordinates
  - Rating and reviews
  - Price range
  - Operating hours

## How to Test

### 1. Google Rich Results Test

**URL**: https://search.google.com/test/rich-results

**Steps**:
1. Go to the Rich Results Test tool
2. Enter the URL: `https://11emmons.netlify.app`
3. Click "Test URL"
4. Verify all schemas are detected and valid
5. Check for 0 errors

**Expected Results**:
- ✓ VacationRental schema detected
- ✓ FAQPage schema detected
- ✓ LodgingBusiness schema detected
- ✓ AggregateRating detected (4.98★)
- ✓ No errors or warnings

### 2. Schema Markup Validator

**URL**: https://validator.schema.org/

**Steps**:
1. Go to the Schema Markup Validator
2. Select "Fetch URL" tab
3. Enter: `https://11emmons.netlify.app`
4. Click "Run Test"
5. Verify all schemas are valid

### 3. Google Search Console

**After Deployment**:
1. Go to Google Search Console
2. Navigate to "Enhancements" > "Vacation Rentals"
3. Wait 2-4 weeks for indexing
4. Verify no errors
5. Check "Rich Results" report

### 4. Local Testing

**View Schema in Browser**:
1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. View page source (Ctrl+U or Cmd+U)
4. Search for `application/ld+json`
5. Verify JSON-LD scripts are present

**Validate JSON**:
```bash
node scripts/validate-schema.js
```

## Expected Rich Snippet Results

### In Google Search Results (2-4 weeks after deployment):

**Before Schema**:
```
11 Emmons Road - Luxury Vacation Rental | Crested Butte, CO
Book your stay at 11 Emmons Road in Crested Butte...
```

**After Schema**:
```
Ski In Ski Out Crested Butte | 11 Emmons | Save 15%
⭐⭐⭐⭐⭐ 4.98 (88) · Vacation rental
True ski-in/ski-out rental just 50 feet from Red Lady Express...
```

## Troubleshooting

### Schema Not Detected
- **Issue**: Google can't find the schema
- **Solution**:
  - Verify `<StructuredData />` is in `app/layout.tsx`
  - Check browser source code for `<script type="application/ld+json">`
  - Ensure production build includes the component

### Rating Stars Not Showing
- **Issue**: Stars don't appear in search results
- **Solution**:
  - Wait 2-4 weeks for Google to process
  - Verify rating is valid (4.98, range 1-5)
  - Ensure ratingCount is present (88)
  - Check Search Console for errors

### FAQ Not Appearing
- **Issue**: FAQ rich results not showing
- **Solution**:
  - Verify FAQPage schema is valid
  - Ensure questions and answers are present
  - Wait for Google to index (can take 2-4 weeks)

## Monitoring

### Key Metrics to Track:
1. **Rich Snippet Eligibility**: Check Search Console
2. **Click-Through Rate (CTR)**: Before vs After (expect +20-30%)
3. **Impressions**: Track in Search Console
4. **Average Position**: Monitor ranking improvements

### Regular Checks:
- **Weekly**: Check Search Console for errors
- **Monthly**: Re-test with Rich Results Test tool
- **Quarterly**: Update schema if property details change

## Updating Schema

If property details change, update `components/StructuredData.tsx`:

```typescript
// Example: Update rating
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: '4.99', // NEW RATING
  ratingCount: '95',   // NEW COUNT
}
```

After updates:
1. Run `npm run type-check`
2. Run `npm run build`
3. Test with Rich Results Test tool
4. Deploy to production
5. Submit to Google Search Console for re-indexing

## Additional Resources

- [Schema.org VacationRental](https://schema.org/VacationRental)
- [Schema.org FAQPage](https://schema.org/FAQPage)
- [Schema.org LodgingBusiness](https://schema.org/LodgingBusiness)
- [Google Rich Results Guide](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Search Console](https://search.google.com/search-console)

---

**Last Updated**: 2025-10-29
**Schema Version**: 1.0
