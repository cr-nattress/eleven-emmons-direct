# EPIC-010: About Section Redesign

**Epic ID:** EPIC-010
**Title:** Redesign About Section for Improved UX and Conversion
**Status:** 📋 Ready for Development
**Priority:** 🔴 Critical (High)
**Estimated Story Points:** 21
**Target Completion:** Week 1-2
**Last Updated:** October 20, 2025

## Business Value

### ROI Projection
- **Conversion Rate Increase:** +15-20% increase in bookings from About section viewers
- **Bounce Rate Reduction:** -10% decrease in bounce rate
- **Mobile Conversion Parity:** Match or exceed desktop conversion rates
- **User Engagement:** Average time on section > 20 seconds
- **Accessibility Score:** 100/100 on Lighthouse

### Why This Matters
The About section is a critical decision point for potential guests. Currently, the section suffers from information overload, poor hierarchy, and weak trust signals. By redesigning this section with a clean, scannable layout and emotional storytelling, we can significantly increase booking confidence and conversion rates.

**Target Users:**
- **Weekend Warriors** (28-45 years): Need quick, scannable info on ski access and amenities
- **Family Planners** (35-55 years): Need clear information on safety, space, and reviews

## Current State vs Target State

### Current State
- ❌ Information overload with technical documentation mixed with property marketing
- ❌ Poor visual hierarchy with equal weight given to all content
- ❌ Lack of emotional connection (feature-focused, not benefit-driven)
- ❌ Weak trust signals (ratings and reviews buried in content)
- ❌ Mobile unfriendly with large text blocks
- ❌ Inconsistent formatting and visual structure

### Target State
- ✅ Clean single-column layout with feature cards
- ✅ Emotional opening narrative (150-200 words)
- ✅ Prominent Quick Stats Cards (4 stats in grid)
- ✅ Key Features Grid with green checkmarks (6+ features)
- ✅ Closing narrative with subtle call-to-action
- ✅ Fully responsive (mobile-first design)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ MDX-driven content for easy updates

## Technical Approach

### Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX (next-mdx-remote v5)
- **Component Library:** React 18

### Component Architecture
```
components/About.tsx
  ├── Section Container (#about)
  ├── Section Heading (h2)
  ├── Opening Narrative (MDX)
  ├── Quick Stats Cards (Grid 2x2 mobile, 1x4 desktop)
  │   ├── Guests Card
  │   ├── Bedrooms Card
  │   ├── Bathrooms Card
  │   ├── Square Feet Card
  │   └── Rating Card
  ├── Key Features Grid (1 col mobile, 2 col desktop)
  │   └── Feature Items (6+ with checkmarks)
  └── Closing Narrative (MDX)
```

### File Structure
```
components/
└── About.tsx          # Main component

content/
└── property.md        # MDX content source

types/
└── property.ts        # TypeScript interfaces
```

### Design System
- **Colors:** Gray scale (gray-50 to gray-900), green-600 for checkmarks
- **Typography:** 36-40px headings, 18px body (desktop), responsive scaling
- **Spacing:** 80px section padding (desktop), 64px (mobile)
- **Breakpoints:** Mobile (<640px), Tablet (640-768px), Desktop (768px+)

## User Stories

### 🏗️ Foundation & Structure
1. **US-001:** Create About component structure and section container (2 points)
2. **US-004:** Integrate MDX content system (3 points)

### 🎨 Visual Components
3. **US-002:** Implement Quick Stats Cards component (3 points)
4. **US-003:** Implement Key Features Grid component (2 points)

### 📱 Responsive & Accessible
5. **US-005:** Implement responsive design (3 points)
6. **US-006:** Ensure accessibility compliance (3 points)

### ✍️ Content & Testing
7. **US-007:** Content migration and copywriting (2 points)
8. **US-008:** Testing and quality assurance (3 points)

**Total Story Points:** 21

## Acceptance Criteria

This epic is considered complete when:

1. ✅ About section displays with correct single-column layout (Option B)
2. ✅ All 4-5 stat cards render with correct values from MDX frontmatter
3. ✅ All 6+ features display with green checkmarks in 2-column grid
4. ✅ Content is loaded from MDX with proper frontmatter structure
5. ✅ Responsive design works correctly on mobile, tablet, and desktop
6. ✅ Accessibility requirements met (WCAG 2.1 AA compliance)
7. ✅ All tests pass (functional, visual, accessibility, cross-browser)
8. ✅ Opening and closing narratives follow content guidelines
9. ✅ Code reviewed and approved (TypeScript, no `any` types)
10. ✅ Documentation updated and deployed to production

## Risks and Mitigations

### Risk 1: Content Too Long
**Impact:** Medium - Users don't read full section, reducing engagement
**Probability:** Medium
**Mitigation:**
- Enforce strict word count limits (150-200 words opening, 100-150 closing)
- Use scannable format with bold key phrases
- Test scroll depth metrics

### Risk 2: Mobile Performance
**Impact:** High - Slow load on mobile devices affects 60% of Weekend Warrior users
**Probability:** Low
**Mitigation:**
- No images in this section (text-only)
- Optimize CSS with Tailwind purge
- Use GPU-accelerated transitions only
- Test on real devices

### Risk 3: Outdated Stats
**Impact:** High - Incorrect information damages trust and credibility
**Probability:** Medium
**Mitigation:**
- Stats managed in MDX frontmatter (single source of truth)
- Document update process
- Add validation to ensure stats are current
- Future: Pull stats from booking API

### Risk 4: Accessibility Issues
**Impact:** High - Some users cannot access content, potential legal issues
**Probability:** Low
**Mitigation:**
- Follow WCAG 2.1 AA guidelines from the start
- Test with screen readers (NVDA/JAWS)
- Use semantic HTML
- Verify color contrast ratios (4.5:1 minimum)
- Conduct accessibility audit before launch

## Success Metrics

### Primary KPIs
1. **Conversion Rate:** +15-20% increase in bookings from About section viewers
2. **Engagement Time:** Average time on section > 20 seconds
3. **Bounce Rate:** Decrease by 10%
4. **Mobile Conversions:** Match or exceed desktop conversion rates

### Secondary Metrics
1. **Scroll Depth:** 90%+ of visitors view entire About section
2. **Page Load Time:** < 2 seconds to First Contentful Paint
3. **Accessibility Score:** 100/100 on Lighthouse
4. **User Feedback:** Positive sentiment in user testing (4.5+/5.0)

### How to Measure
- Google Analytics: Track scroll depth, time on section
- Hotjar: Heatmaps and session recordings
- Lighthouse: Performance and accessibility audits
- A/B Testing: Compare old vs new About section performance

## Dependencies

### External Dependencies
- next-mdx-remote: ^5.0.0 (MDX processing)
- react: ^18.0.0
- next: ^14.0.0
- tailwindcss: ^3.0.0

### Internal Dependencies
- `/lib/markdown.ts` - For MDX processing (may need to be created)
- `/content/property.md` - Content source file
- Tailwind configuration (verify utilities available)

### Blocking Dependencies
- None - Can start immediately

## Future Enhancements (Post-MVP)

1. **Dynamic Content:** Pull stats (rating, review count) from booking API in real-time
2. **Localization:** Multi-language support (Spanish, German for international guests)
3. **Animation:** Subtle fade-in on scroll for better engagement
4. **Interactive Elements:** Expandable feature details with tooltips
5. **Personalization:** Show different content based on user segment (families vs solo travelers)
6. **Video Integration:** Embedded property tour video
7. **Social Proof:** Display recent guest reviews inline

## Related Documentation

- Requirements Document: `knowledge/feedback/feedback-02.md`
- Next.js 14 App Router: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- next-mdx-remote Guide: https://github.com/hashicorp/next-mdx-remote
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

## Notes

- **Priority Rationale:** High priority due to direct impact on booking conversions
- **Content Guidelines:** Avoid phrases like "world-class," "luxury," "cozy," "don't miss out"
- **Writing Style:** Warm, confident, professional; second-person POV
- **Testing Strategy:** Mobile-first approach, test on real devices
- **Code Quality:** TypeScript with no `any` types, follow project ESLint/Prettier rules

---

**Epic Status:** READY FOR DEVELOPMENT
**Next Steps:** Begin with US-001 (Create component structure)
**Estimated Timeline:** 2-3 days for full epic completion
