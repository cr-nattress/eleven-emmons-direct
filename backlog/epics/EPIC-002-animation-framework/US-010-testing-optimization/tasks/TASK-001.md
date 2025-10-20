# TASK-001: Run Lighthouse Performance Audit

## Task Description
Run comprehensive Lighthouse performance audits on desktop and mobile, document results, and identify any animation-related performance issues.

## Priority
CRITICAL

## Estimated Effort
2-3 hours

## Acceptance Criteria
- [ ] Lighthouse audit run on desktop
- [ ] Lighthouse audit run on mobile
- [ ] Performance scores documented
- [ ] Desktop score: 95+ (green)
- [ ] Mobile score: 90+ (green/yellow acceptable)
- [ ] Core Web Vitals all passing
- [ ] Any issues documented with recommendations
- [ ] Animation-specific metrics noted

## Technical Details

### Lighthouse Categories to Check
1. **Performance** (primary focus)
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Total Blocking Time (TBT)
   - Cumulative Layout Shift (CLS)
   - Speed Index

2. **Accessibility** (verify reduced motion)
3. **Best Practices**
4. **SEO**

### Key Metrics to Monitor
- CLS (Cumulative Layout Shift): Should be <0.1
  - Animations should NOT cause layout shift
  - Initial state should reserve space
- TBT (Total Blocking Time): Should be minimal
  - Framer Motion should not block main thread
- JavaScript bundle size impact

## Agent Prompt

You are tasked with running Lighthouse performance audits and documenting the results.

**Context:**
- All animations have been implemented (US-001 through US-009)
- Need to verify animations don't negatively impact performance
- Target: 95+ desktop, 90+ mobile
- Core Web Vitals must pass

**Instructions:**

1. **Run Lighthouse Audit (Desktop):**
   - Open Chrome DevTools
   - Navigate to Lighthouse tab
   - Select: Performance, Accessibility, Best Practices, SEO
   - Device: Desktop
   - Run audit on http://localhost:3000
   - Save report as JSON or HTML

   Alternatively, use CLI:
   ```bash
   npm install -g lighthouse
   lighthouse http://localhost:3000 --output html --output-path ./lighthouse-desktop.html --preset=desktop
   ```

2. **Run Lighthouse Audit (Mobile):**
   - Same as above but select Mobile device
   - Or CLI:
   ```bash
   lighthouse http://localhost:3000 --output html --output-path ./lighthouse-mobile.html
   ```

3. **Document Results:**

   Create a file: `/docs/performance-audit.md` with:
   ```markdown
   # Animation Framework Performance Audit

   Date: [DATE]
   Commit: [GIT COMMIT HASH]

   ## Desktop Results
   - Performance: [SCORE] / 100
   - Accessibility: [SCORE] / 100
   - Best Practices: [SCORE] / 100
   - SEO: [SCORE] / 100

   ### Core Web Vitals (Desktop)
   - First Contentful Paint: [TIME]
   - Largest Contentful Paint: [TIME]
   - Total Blocking Time: [TIME]
   - Cumulative Layout Shift: [SCORE]
   - Speed Index: [TIME]

   ## Mobile Results
   - Performance: [SCORE] / 100
   - Accessibility: [SCORE] / 100
   - Best Practices: [SCORE] / 100
   - SEO: [SCORE] / 100

   ### Core Web Vitals (Mobile)
   - First Contentful Paint: [TIME]
   - Largest Contentful Paint: [TIME]
   - Total Blocking Time: [TIME]
   - Cumulative Layout Shift: [SCORE]
   - Speed Index: [TIME]

   ## Animation-Specific Findings

   ### JavaScript Bundle Size
   - Total JS: [SIZE] KB
   - Framer Motion: ~[SIZE] KB (estimated)
   - Impact: [ACCEPTABLE/NEEDS OPTIMIZATION]

   ### Animation Performance
   - Frame rate during animations: [60fps / issues noted]
   - Layout shift from animations: [NONE / issues noted]
   - Time to Interactive impact: [NONE / issues noted]

   ## Issues Identified
   [List any issues found, especially:]
   - Layout shift (CLS) from animations
   - JavaScript blocking time
   - Slow animation frames
   - Bundle size concerns

   ## Recommendations
   [List recommendations for TASK-004 if needed:]
   - Optimize X animation
   - Reduce motion complexity on Y component
   - Lazy load Z animations
   - Consider code splitting for animations

   ## Conclusion
   [PASS / NEEDS OPTIMIZATION]
   ```

4. **Analyze Results:**
   - Check if CLS score increased (bad sign - animations causing layout shift)
   - Check TBT - should not significantly increase
   - Check bundle size - Framer Motion adds ~50KB gzipped (acceptable)
   - Look for animation-specific warnings in opportunities/diagnostics

5. **Specific Checks:**

   **Cumulative Layout Shift (CLS):**
   - Animations should NOT cause layout shift
   - Check that initial="hidden" states don't reserve different space
   - Verify opacity/scale animations don't shift layout
   - If CLS > 0.1, identify which animations cause it

   **Total Blocking Time (TBT):**
   - Should be <300ms
   - Framer Motion is optimized but check for issues
   - Look for long tasks during animation

   **JavaScript Bundle Size:**
   - Check Network tab for bundle size
   - Framer Motion core: ~50KB gzipped (acceptable)
   - If bundle is significantly larger, may need optimization

**Testing Methodology:**

1. **Baseline Test (Without Animations):**
   - Checkout previous commit before animations
   - Run Lighthouse
   - Document scores
   - This shows impact of animations

2. **Current Test (With Animations):**
   - Checkout current commit with all animations
   - Run Lighthouse
   - Document scores
   - Compare to baseline

3. **Compare Results:**
   - Performance delta: [BEFORE] → [AFTER]
   - Acceptable impact: -5 points or less
   - Unacceptable: -10 points or more (needs optimization)

**Common Animation Performance Issues:**

1. **Layout Shift:**
   - Cause: Initial state doesn't reserve space
   - Fix: Use `position: relative` or reserve space
   - Example: Image animations need height/width

2. **Long Tasks:**
   - Cause: Too many animations at once
   - Fix: Reduce concurrent animations, use stagger

3. **Bundle Size:**
   - Cause: Entire Framer Motion library imported
   - Fix: Already optimized with tree-shaking

**Expected Results:**

✅ **Good Performance:**
- Desktop: 95-100
- Mobile: 90-100
- CLS: <0.1
- TBT: <300ms
- Bundle increase: ~50KB gzipped

⚠️ **Needs Investigation:**
- Desktop: 90-94
- Mobile: 85-89
- CLS: 0.1-0.25
- TBT: 300-600ms

❌ **Needs Optimization (proceed to TASK-004):**
- Desktop: <90
- Mobile: <85
- CLS: >0.25
- TBT: >600ms

**Deliverables:**
1. Lighthouse HTML reports (desktop and mobile)
2. `/docs/performance-audit.md` with detailed findings
3. Comparison to baseline (if available)
4. List of issues for TASK-004 (if any)
5. Recommendation: PASS or proceed to optimization

**Success Criteria:**
- Audit completed and documented
- Performance scores meet targets (95+ desktop, 90+ mobile)
- CLS < 0.1 (no layout shift from animations)
- No critical performance issues identified
- If issues found, clearly documented for TASK-004

## Dependencies
- US-001 through US-009: All animations implemented

## Related Tasks
- TASK-002: Test reduced motion support (parallel)
- TASK-003: Test on mobile devices (parallel)
- TASK-004: Fix any performance issues found (dependent)

## References
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Core Web Vitals](https://web.dev/vitals/)
- [Measuring CLS](https://web.dev/cls/)
- [Optimize Cumulative Layout Shift](https://web.dev/optimize-cls/)

**Created**: 2025-10-20
**Status**: Not Started
