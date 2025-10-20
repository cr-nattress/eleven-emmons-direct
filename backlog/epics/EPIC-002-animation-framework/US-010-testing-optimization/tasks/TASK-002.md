# TASK-002: Test Reduced Motion Support

## Task Description
Comprehensively test that all animations respect the `prefers-reduced-motion` setting and provide appropriate fallbacks for users who prefer reduced motion.

## Priority
CRITICAL

## Estimated Effort
2-3 hours

## Acceptance Criteria
- [ ] All animations tested with reduced motion enabled
- [ ] Content appears instantly (no motion) with reduced motion
- [ ] No broken layouts with reduced motion
- [ ] All functionality maintained with reduced motion
- [ ] Test documented with screenshots/video
- [ ] Any issues fixed or documented
- [ ] WCAG 2.1 compliance verified

## Technical Details

### What to Test
All animated components from US-001 through US-009:
- Hero section (title, subtitle, description, buttons, scroll arrow)
- Gallery (header, cards, lightbox)
- Booking (header, widget, contact cards, CTA)
- Amenities (header, cards, icons, hover)
- Mobile menu (slide-in, items, icon)
- About (header, prose, cards, lists)
- Location (header, map, attractions)
- Header & Footer (entrance, nav links, sections)

### Reduced Motion Expectations
With `prefers-reduced-motion: reduce`:
- NO scale, translate, rotate animations
- Instant opacity changes (or very quick <100ms)
- Instant state transitions
- Content appears immediately when scrolled into view
- Hover effects may be simplified or removed
- Modal/menu transitions instant

### WCAG 2.1 Compliance
- Success Criterion 2.3.3 Animation from Interactions (Level AAA)
- Motion should be disableable
- Essential motion excluded (but we have no essential motion)

## Agent Prompt

You are tasked with testing all animations with reduced motion enabled.

**Context:**
- All animations implemented (US-001 through US-009)
- Must respect `prefers-reduced-motion: reduce`
- Animation variants should handle this automatically
- Need to verify implementation is correct

**Instructions:**

1. **Enable Reduced Motion in OS:**

   **macOS:**
   - System Preferences → Accessibility → Display
   - Check "Reduce motion"

   **Windows:**
   - Settings → Ease of Access → Display
   - Turn ON "Show animations in Windows"
   - (Or turn OFF if setting is inverted)

   **Linux:**
   - Varies by desktop environment
   - GNOME: Settings → Accessibility → Seeing → Reduce Animation

   **Alternative: Browser DevTools:**
   - Chrome/Edge: DevTools → Command Palette (Cmd+Shift+P) → "Emulate CSS prefers-reduced-motion: reduce"
   - Firefox: DevTools → Settings → Enable "Emulate CSS media feature prefers-reduced-motion: reduce"

2. **Create Test Document:**

   Create `/docs/reduced-motion-test.md`:
   ```markdown
   # Reduced Motion Testing Report

   Date: [DATE]
   Tester: [NAME]
   Browser: [BROWSER VERSION]
   OS: [OS VERSION]

   ## Test Setup
   - [ ] Reduced motion enabled in OS
   - [ ] Verified in browser (test animation still works on other sites)
   - [ ] Dev server running

   ## Component Testing

   ### US-002: Hero Section
   - [ ] Title appears instantly (no slide up animation)
   - [ ] Subtitle appears instantly
   - [ ] Description appears instantly
   - [ ] Buttons appear instantly
   - [ ] Scroll arrow appears instantly (no bounce)
   - [ ] All content visible and readable
   - [ ] No broken layout
   - **Result**: PASS / FAIL
   - **Issues**: [if any]

   ### US-003: Gallery Section
   - [ ] Header appears instantly when scrolled into view
   - [ ] Gallery cards appear instantly (no stagger)
   - [ ] Lightbox opens instantly (no fade/scale)
   - [ ] Lightbox closes instantly
   - [ ] All images load correctly
   - **Result**: PASS / FAIL
   - **Issues**: [if any]

   ### US-004: Booking Section
   - [ ] Header appears instantly
   - [ ] Widget appears instantly (no scale)
   - [ ] Contact cards appear instantly (no stagger)
   - [ ] CTA button appears instantly
   - [ ] All links work
   - **Result**: PASS / FAIL
   - **Issues**: [if any]

   ### US-005: Amenities Section
   - [ ] Header appears instantly
   - [ ] Amenity cards appear instantly (no stagger)
   - [ ] Icons appear instantly (no scale/bounce)
   - [ ] Hover effects simplified or instant
   - **Result**: PASS / FAIL
   - **Issues**: [if any]

   ### US-006: Mobile Menu
   - [ ] Menu appears instantly (no slide-in)
   - [ ] Backdrop appears instantly
   - [ ] Menu items appear instantly (no stagger)
   - [ ] Hamburger icon state changes instantly
   - [ ] Menu functions correctly
   - **Result**: PASS / FAIL
   - **Issues**: [if any]

   ### US-007: About Section
   - [ ] Header appears instantly
   - [ ] Prose content appears instantly
   - [ ] Feature cards appear instantly
   - [ ] List items appear instantly
   - **Result**: PASS / FAIL
   - **Issues**: [if any]

   ### US-008: Location Section
   - [ ] Header appears instantly
   - [ ] Map container appears instantly
   - [ ] Attractions cards appear instantly
   - [ ] Map is interactive
   - **Result**: PASS / FAIL
   - **Issues**: [if any]

   ### US-009: Header & Footer
   - [ ] Header appears instantly on page load
   - [ ] Nav links appear instantly
   - [ ] Footer sections appear instantly when scrolled into view
   - **Result**: PASS / FAIL
   - **Issues**: [if any]

   ## Overall Assessment

   ### Summary
   - Components tested: [X] / [Total]
   - Components passing: [X]
   - Components failing: [X]
   - Critical issues: [X]
   - Minor issues: [X]

   ### Issues Found
   [List each issue with:]
   - Component: [Name]
   - Issue: [Description]
   - Severity: Critical / Major / Minor
   - Fix needed: [Yes/No]
   - Fix description: [What needs to be done]

   ### Recommendations
   [List recommendations for fixes]

   ## Code Review

   ### Variants Check
   Verified animation variants in `/lib/animations/variants.ts`:
   - [ ] fadeInVariants respects reduced motion
   - [ ] slideUpVariants respects reduced motion
   - [ ] scaleInVariants respects reduced motion
   - [ ] staggerContainerVariants respects reduced motion
   - [ ] staggerItemVariants respects reduced motion

   ### Hook Check
   Verified useScrollAnimation hook:
   - [ ] Respects reduced motion setting
   - [ ] Content appears when in viewport

   ## Compliance
   - [ ] WCAG 2.1 Success Criterion 2.3.3 (Level AAA) - Met
   - [ ] All motion can be disabled - Confirmed
   - [ ] No essential motion - Confirmed

   ## Conclusion
   [PASS / NEEDS FIXES]

   [If PASS: All animations properly respect reduced motion. Site is accessible to users with motion sensitivity.]

   [If NEEDS FIXES: List critical fixes needed before approval.]
   ```

3. **Test Each Component Systematically:**

   For each section:
   1. Scroll to section (or load page)
   2. Observe: Does content appear instantly?
   3. Check: Is layout correct?
   4. Test: Do interactions work?
   5. Document: Note any issues

4. **Verify Variant Implementation:**

   Check `/lib/animations/variants.ts`:
   ```typescript
   // Variants should check for reduced motion like this:
   const prefersReducedMotion =
     typeof window !== 'undefined' &&
     window.matchMedia('(prefers-reduced-motion: reduce)').matches

   export const slideUpVariants: Variants = {
     hidden: {
       opacity: 0,
       y: prefersReducedMotion ? 0 : 30,
     },
     visible: {
       opacity: 1,
       y: 0,
       transition: {
         duration: prefersReducedMotion ? 0 : 0.5,
         ease: EASING_EASE_OUT,
       },
     },
   }
   ```

   If variants don't check for reduced motion, that's an issue to fix.

5. **Test useScrollAnimation Hook:**

   Verify the hook in `/lib/animations/hooks.ts` respects reduced motion:
   ```typescript
   // Hook should trigger "visible" state immediately with reduced motion
   // Or variants should handle instant display
   ```

6. **Common Issues to Look For:**

   ❌ **Bad - Animation still plays:**
   - User sees fade, scale, or translate
   - Duration feels long
   - Motion is noticeable

   ❌ **Bad - Content doesn't appear:**
   - Content stuck in "hidden" state
   - Elements missing
   - Broken layout

   ❌ **Bad - Delayed appearance:**
   - Content appears after delay (even without animation)
   - Should be instant

   ✅ **Good - Instant display:**
   - Content appears immediately when in viewport
   - No motion detected
   - Layout perfect
   - Fully functional

7. **Fix Common Issues:**

   **Issue: Animations still playing**
   Fix in variants:
   ```typescript
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

   // In transition:
   transition: {
     duration: prefersReducedMotion ? 0 : 0.5,
     // ...
   }
   ```

   **Issue: Content not appearing**
   - Check initial/animate states
   - Verify controls are triggering
   - Check for CSS issues

**Alternative Testing Method (Browser Only):**

If you can't change OS settings:
1. Use browser DevTools emulation
2. OR temporarily add this to global CSS:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

**Deliverables:**
1. Complete `/docs/reduced-motion-test.md` with all results
2. Screenshots or video of reduced motion behavior (optional but helpful)
3. List of issues found (if any)
4. Fixes implemented or documented for implementation
5. Final verdict: PASS or FAIL

**Success Criteria:**
- All components tested
- All components respect reduced motion
- Content appears instantly with reduced motion enabled
- No broken layouts
- All functionality maintained
- WCAG 2.1 compliance confirmed
- Test report completed

## Dependencies
- US-001 through US-009: All animations implemented

## Related Tasks
- TASK-001: Run Lighthouse performance audit (parallel)
- TASK-003: Test on mobile devices (parallel)
- TASK-004: Fix any performance issues found (if issues found)

## References
- [WCAG 2.1 - Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)
- [prefers-reduced-motion MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Reduced Motion Testing](https://web.dev/prefers-reduced-motion/)
- [Framer Motion Reduced Motion](https://www.framer.com/motion/guide-accessibility/)

**Created**: 2025-10-20
**Status**: Not Started
