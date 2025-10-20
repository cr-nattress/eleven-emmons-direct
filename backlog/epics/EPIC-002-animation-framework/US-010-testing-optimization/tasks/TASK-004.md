# TASK-004: Fix Any Performance Issues Found

## Task Description
Address and fix any performance issues, accessibility problems, or animation bugs identified in TASK-001, TASK-002, and TASK-003.

## Priority
CRITICAL

## Estimated Effort
Varies (2-8 hours depending on issues found)

## Acceptance Criteria
- [ ] All critical issues from testing tasks addressed
- [ ] Lighthouse performance scores meet targets (95+ desktop, 90+ mobile)
- [ ] Reduced motion support working correctly
- [ ] Mobile performance smooth (50+ fps)
- [ ] CLS < 0.1 (no layout shift)
- [ ] All fixes tested and verified
- [ ] Re-run audits to confirm fixes
- [ ] Documentation updated

## Technical Details

### Common Issues and Fixes

This task is issue-driven. The specific work depends on findings from TASK-001, TASK-002, and TASK-003.

### Issue Categories
1. **Performance Issues** (from TASK-001)
   - High CLS (layout shift)
   - High TBT (blocking time)
   - Poor Lighthouse scores
   - Large bundle size

2. **Accessibility Issues** (from TASK-002)
   - Animations playing with reduced motion
   - Content not appearing with reduced motion
   - Broken layouts with reduced motion

3. **Mobile Issues** (from TASK-003)
   - Low frame rate (jank)
   - Stuttering animations
   - Touch interaction problems
   - Hover state issues

## Agent Prompt

You are tasked with fixing animation performance and accessibility issues.

**Context:**
- TASK-001, TASK-002, TASK-003 completed
- Issues documented in test reports
- Need to address all critical and major issues
- Re-test after fixes

**Instructions:**

1. **Review Test Reports:**
   - Read `/docs/performance-audit.md` (from TASK-001)
   - Read `/docs/reduced-motion-test.md` (from TASK-002)
   - Read `/docs/mobile-testing-report.md` (from TASK-003)
   - Compile list of all issues

2. **Prioritize Issues:**

   **Priority 1 - Critical (Must Fix):**
   - Lighthouse Performance < 90 (desktop or mobile)
   - CLS > 0.25
   - Animations playing with reduced motion enabled
   - Content not appearing with reduced motion
   - Mobile FPS < 40
   - Broken functionality

   **Priority 2 - Major (Should Fix):**
   - Lighthouse Performance 90-94
   - CLS 0.1-0.25
   - Mobile FPS 40-50
   - Noticeable jank
   - Hover issues on mobile

   **Priority 3 - Minor (Nice to Fix):**
   - Small performance improvements
   - Polish issues
   - Edge cases

3. **Common Fixes:**

### Fix 1: Cumulative Layout Shift (CLS) Issues

**Problem:** Animations causing layout shift
**Diagnosis:** CLS > 0.1 in Lighthouse

**Solution A: Reserve Space for Animations**
```typescript
// BAD - No space reserved
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
>
  Content
</motion.div>

// GOOD - Space reserved
<motion.div
  initial={{ opacity: 0, y: 0 }} // No y offset
  animate={{ opacity: 1, y: 0 }}
  style={{ minHeight: '200px' }} // Reserve space
>
  Content
</motion.div>
```

**Solution B: Use Transform Instead of Margin/Padding**
```typescript
// BAD - Changing layout properties
<motion.div
  initial={{ marginTop: 30 }}
  animate={{ marginTop: 0 }}
>

// GOOD - Use transform
<motion.div
  initial={{ opacity: 0, transform: 'translateY(30px)' }}
  animate={{ opacity: 1, transform: 'translateY(0px)' }}
>
```

**Solution C: Ensure Images Have Dimensions**
```typescript
<Image
  src="/image.jpg"
  alt="Description"
  width={600}  // Explicit dimensions
  height={400}
  className="..."
/>
```

### Fix 2: Reduced Motion Not Working

**Problem:** Animations still playing with prefers-reduced-motion
**Diagnosis:** TASK-002 test failures

**Solution A: Fix Variants**
```typescript
// Add to /lib/animations/variants.ts
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: prefersReducedMotion ? 0 : 30, // No y movement with reduced motion
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.5, // Instant with reduced motion
      ease: EASING_EASE_OUT,
    },
  },
}

// Apply to all variants: fadeInVariants, scaleInVariants, staggerContainerVariants, etc.
```

**Solution B: Use Framer Motion's Built-in Support**
```typescript
// In motion components
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: 'easeOut',
  }}
  // Framer Motion automatically respects reduced motion in transitions
/>
```

**Solution C: CSS-based Fallback**
```css
/* In global.css */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Fix 3: Mobile Performance (Jank)

**Problem:** Low frame rate, stuttering on mobile
**Diagnosis:** FPS < 50 in TASK-003

**Solution A: Use GPU Acceleration**
```typescript
// Add will-change for GPU acceleration
<motion.div
  style={{ willChange: 'transform' }}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
>
```

**Solution B: Reduce Concurrent Animations**
```typescript
// BAD - All cards animate simultaneously
<div>
  {cards.map((card, i) => (
    <motion.div initial="hidden" animate="visible" variants={cardVariants} />
  ))}
</div>

// GOOD - Stagger with reasonable delay
<motion.div variants={containerVariants}> {/* staggerChildren: 0.1 */}
  {cards.map((card, i) => (
    <motion.div variants={itemVariants} />
  ))}
</motion.div>
```

**Solution C: Simplify Complex Animations**
```typescript
// BAD - Complex multi-property animation
<motion.div
  animate={{
    x: 100,
    y: 50,
    scale: 1.5,
    rotate: 45,
    borderRadius: '50%',
    backgroundColor: '#ff0000',
  }}
>

// GOOD - Simple, GPU-accelerated properties only
<motion.div
  animate={{
    opacity: 1,
    scale: 1.05,
  }}
>
```

**Solution D: Lazy Load Below-Fold Animations**
```typescript
// Don't load animation library for elements below fold initially
// Use dynamic imports if needed
```

### Fix 4: Total Blocking Time (TBT) Issues

**Problem:** High TBT score in Lighthouse
**Diagnosis:** TBT > 300ms

**Solution A: Reduce Stagger Counts**
```typescript
// If you have many items, reduce stagger
const itemCount = items.length
const staggerDelay = itemCount > 10 ? 0.05 : 0.1 // Faster for many items
```

**Solution B: Use IntersectionObserver Wisely**
```typescript
// In useScrollAnimation hook, adjust threshold
export function useScrollAnimation(threshold = 0.8) { // Changed from 0.8 to 0.5
  // Triggers earlier, spreads out animations
}
```

### Fix 5: Hover Issues on Mobile

**Problem:** Hover states stuck or not working on mobile
**Diagnosis:** Touch triggers hover, stays active

**Solution: Use Hover Media Query**
```typescript
// In component
<motion.div
  whileHover={{ scale: 1.05 }} // This works but...
  className="..."
>

// Better: Use CSS for hover only on devices that support it
// In Tailwind or CSS:
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: scale(1.05);
  }
}

// Or disable whileHover on touch devices
const isTouchDevice = typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0)

<motion.div
  whileHover={isTouchDevice ? undefined : { scale: 1.05 }}
>
```

### Fix 6: Bundle Size Issues

**Problem:** JavaScript bundle too large
**Diagnosis:** Significant increase in bundle size

**Solution A: Verify Tree Shaking**
```typescript
// Good - Named imports (tree-shakeable)
import { motion, AnimatePresence } from 'framer-motion'

// Bad - Default import (not tree-shakeable)
import FramerMotion from 'framer-motion'
```

**Solution B: Lazy Load Animations**
```typescript
// For components not immediately visible
const AnimatedGallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <GalleryFallback />,
})
```

**Solution C: Code Splitting**
```typescript
// Split animation utilities if very large
// Most utilities are small, unlikely to need this
```

4. **Testing Process:**

   After each fix:
   1. **Test locally**: Verify fix works
   2. **Re-run relevant test**:
      - Fixed CLS? Re-run Lighthouse (TASK-001)
      - Fixed reduced motion? Re-test with reduced motion (TASK-002)
      - Fixed mobile jank? Re-test on mobile (TASK-003)
   3. **Document fix**: Note what was changed
   4. **Commit changes**: Clear commit message

5. **Create Fix Report:**

   Create `/docs/performance-fixes.md`:
   ```markdown
   # Animation Performance Fixes

   Date: [DATE]
   Fixed by: [NAME]

   ## Issues Addressed

   ### Issue 1: [Issue Name]
   - **Source**: TASK-00X
   - **Severity**: Critical / Major / Minor
   - **Description**: [What was wrong]
   - **Fix Applied**: [What was done]
   - **Files Changed**:
     - [File path 1]
     - [File path 2]
   - **Testing**: [How it was verified]
   - **Result**: FIXED / PARTIALLY FIXED / NOT FIXED

   ### Issue 2: [Issue Name]
   [Same structure]

   ## Performance Impact

   ### Before Fixes
   - Lighthouse Performance (Desktop): [SCORE]
   - Lighthouse Performance (Mobile): [SCORE]
   - CLS: [SCORE]
   - TBT: [TIME]
   - Mobile FPS: [FPS]

   ### After Fixes
   - Lighthouse Performance (Desktop): [SCORE] (Δ +[CHANGE])
   - Lighthouse Performance (Mobile): [SCORE] (Δ +[CHANGE])
   - CLS: [SCORE] (Δ [CHANGE])
   - TBT: [TIME] (Δ [CHANGE])
   - Mobile FPS: [FPS] (Δ +[CHANGE])

   ## Verification

   ### Re-run TASK-001 (Lighthouse)
   - [ ] Desktop score ≥ 95
   - [ ] Mobile score ≥ 90
   - [ ] CLS < 0.1
   - Result: PASS / FAIL

   ### Re-run TASK-002 (Reduced Motion)
   - [ ] All components respect reduced motion
   - [ ] No animations play with reduced motion enabled
   - Result: PASS / FAIL

   ### Re-run TASK-003 (Mobile)
   - [ ] FPS ≥ 50 on all animations
   - [ ] No noticeable jank
   - Result: PASS / FAIL

   ## Remaining Issues

   [List any issues not fixed, with justification]
   - Issue: [Description]
   - Reason not fixed: [Why]
   - Impact: [Severity]
   - Plan: [Fix later / Accept as-is / Other]

   ## Conclusion

   [READY FOR PRODUCTION / NEEDS MORE WORK]

   [Summary of overall state after fixes]
   ```

6. **Final Verification:**

   Before marking task complete:
   - [ ] All critical issues fixed
   - [ ] All major issues fixed (or documented why not)
   - [ ] Lighthouse scores meet targets
   - [ ] Reduced motion works correctly
   - [ ] Mobile performance acceptable
   - [ ] All fixes tested and verified
   - [ ] Documentation complete

**Common Scenarios:**

**Scenario A: No Issues Found**
- Great! Document in `/docs/performance-fixes.md` that no fixes were needed
- Include final scores for reference
- Task complete

**Scenario B: Minor Issues Only**
- Fix what makes sense
- Document any accepted trade-offs
- Verify fixes
- Task complete

**Scenario C: Major Issues**
- Fix all critical issues first
- Then address major issues
- Re-test thoroughly
- May require additional time
- Document all changes

**Scenario D: Architectural Issues**
- If fundamental animation approach is flawed
- May need to revisit earlier user stories
- Consult with team
- Plan refactoring if needed

**Deliverables:**
1. All critical and major issues fixed
2. `/docs/performance-fixes.md` documenting all fixes
3. Updated test reports showing improved scores
4. Verified Lighthouse scores meet targets
5. Verified reduced motion works
6. Verified mobile performance acceptable
7. Code changes committed with clear messages

**Success Criteria:**
- Lighthouse Performance: 95+ (desktop), 90+ (mobile)
- CLS: < 0.1
- All animations respect reduced motion
- Mobile FPS: 50+ (60 ideal)
- No critical issues remaining
- All fixes tested and verified
- Documentation complete

## Dependencies
- TASK-001: Run Lighthouse performance audit (must be completed)
- TASK-002: Test reduced motion support (must be completed)
- TASK-003: Test on mobile devices (must be completed)

## Related Tasks
- TASK-001: Run Lighthouse performance audit
- TASK-002: Test reduced motion support
- TASK-003: Test on mobile devices

## References
- [Web Vitals](https://web.dev/vitals/)
- [Optimize CLS](https://web.dev/optimize-cls/)
- [Fix Layout Shift](https://web.dev/layout-shift/)
- [Reduced Motion](https://web.dev/prefers-reduced-motion/)
- [Mobile Performance](https://web.dev/mobile-performance/)
- [Framer Motion Performance](https://www.framer.com/motion/guide-performance/)

**Created**: 2025-10-20
**Status**: Not Started
