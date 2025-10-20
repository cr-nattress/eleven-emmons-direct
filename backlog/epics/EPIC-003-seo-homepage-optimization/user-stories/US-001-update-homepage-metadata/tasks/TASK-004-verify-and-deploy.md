# TASK-004: Verify and Deploy Metadata Changes

**Status**: To Do  
**Priority**: High  
**Estimated Time**: 20 minutes

---

## Task Description

Verify all metadata changes are correct, deploy to production, and submit to Google Search Console for re-indexing.

## Agent Prompt

```
Verify and deploy the homepage metadata changes.

Steps:
1. Run local build to check for errors
2. Test metadata in browser
3. Verify with SEO tools
4. Deploy to production
5. Verify production deployment
6. Submit URL to Google Search Console for indexing

Report any issues found and confirm successful deployment.
```

## Verification Checklist

- [ ] `npm run build` completes without errors
- [ ] Local dev server shows new title in browser tab
- [ ] Page source shows new meta tags
- [ ] SERP preview tools show proper display
- [ ] Social media preview tools work
- [ ] Production deployment successful
- [ ] Production site shows new metadata
- [ ] Submitted to Google Search Console

## Commands

```bash
# Build and test locally
npm run build
npm run dev

# Deploy (adjust based on your deployment method)
git add app/layout.tsx
git commit -m "SEO: Update homepage metadata for ski-in/ski-out keyword targeting"
git push origin main

# If using Vercel/Netlify, deployment is automatic
# Otherwise, run your deployment command
```

## Google Search Console Submission

1. Go to: https://search.google.com/search-console
2. Select your property
3. Go to URL Inspection
4. Enter: https://11emmons.netlify.app
5. Click "Request Indexing"

---

**Estimated Effort**: 20 minutes
