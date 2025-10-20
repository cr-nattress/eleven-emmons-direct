# EPIC-002: Animation Framework - Quick Reference

## Overview
Implement Framer Motion animations across the entire site to improve user engagement by 30-45% and increase booking conversions by 15-25%.

## Status: 🔴 Not Started

## Progress: 0/10 User Stories Complete

| User Story | Status | Priority | Effort | Impact |
|------------|--------|----------|--------|--------|
| US-001: Setup Infrastructure | ⬜ Not Started | CRITICAL | 1 day | Foundation |
| US-002: Hero Animations | ⬜ Not Started | CRITICAL | 1 day | High |
| US-003: Gallery Animations | ⬜ Not Started | CRITICAL | 1 day | High |
| US-004: Booking CTA Animations | ⬜ Not Started | CRITICAL | 1 day | Critical |
| US-005: Amenities Animations | ⬜ Not Started | HIGH | 2 days | High |
| US-006: Mobile Menu Animations | ⬜ Not Started | HIGH | 1 day | High |
| US-007: About Section Animations | ⬜ Not Started | HIGH | 2 days | Medium |
| US-008: Location Animations | ⬜ Not Started | MEDIUM | 1 day | Medium |
| US-009: Header/Footer Animations | ⬜ Not Started | MEDIUM | 1 day | Low |
| US-010: Testing & Optimization | ⬜ Not Started | HIGH | 2 days | Critical |

## Quick Stats
- **Total Tasks**: 35 tasks across 10 user stories
- **Estimated Time**: 15 days (3 weeks)
- **Expected ROI**: +20% booking conversions, +35% engagement
- **Tech Stack**: Framer Motion + Intersection Observer API

## Critical Path (Week 1)
1. ✅ Install Framer Motion
2. ✅ Create animation utilities
3. ✅ Hero section entrance animations
4. ✅ Gallery card animations
5. ✅ Booking CTA animations

## Next Actions
1. Run: `npm install framer-motion`
2. Create `/lib/animations/` directory
3. Start with US-001 tasks

## Key Files to Create/Modify

### New Files (9)
- `/lib/animations/variants.ts`
- `/lib/animations/hooks.ts`
- `/lib/animations/constants.ts`
- `/components/animated/AnimatedSection.tsx`
- `/components/animated/AnimatedCard.tsx`
- `/components/animated/AnimatedButton.tsx`
- `/components/animated/AnimatedHero.tsx`
- `/components/animated/AnimatedGallery.tsx`
- `/components/animated/AnimatedMenu.tsx`

### Files to Modify (8)
- `/components/Hero.tsx`
- `/components/Gallery.tsx`
- `/components/BookingWidget.tsx`
- `/components/Amenities.tsx`
- `/components/Header.tsx`
- `/components/About.tsx`
- `/components/Location.tsx`
- `/components/Footer.tsx`

## Animation Inventory

### Component Animation Count
- Hero: 6 animations (title, subtitle, buttons, scroll arrow)
- Gallery: 7 animations (6 cards + lightbox)
- Booking: 4 animations (widget, 2 contact cards, CTA)
- Amenities: 9 animations (8 cards + title)
- Mobile Menu: 3 animations (menu slide, items stagger, button rotate)
- About: 5 animations (title, prose, 2 cards, list items)
- Location: 6 animations (map, 2 cards, list items)
- Header/Footer: 4 animations (nav links, footer sections)

**Total**: 44 individual animations

## Success Criteria Checklist

### Must Have ✓
- [ ] Framer Motion installed
- [ ] Animation utilities created
- [ ] Hero entrance animations working
- [ ] Booking CTA animations implemented
- [ ] Gallery animations functional
- [ ] Mobile menu animates smoothly
- [ ] Reduced motion support added
- [ ] Lighthouse score > 90

### Performance Targets
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] No layout shift from animations
- [ ] 60 FPS on animations
- [ ] Works on iOS and Android

## Risk Mitigation

| Risk | Status | Mitigation |
|------|--------|------------|
| Performance degradation | ⚠️ Monitor | Test after each phase |
| Server/Client boundaries | ⚠️ Monitor | Use composition pattern |
| Accessibility issues | ⚠️ Monitor | Respect prefers-reduced-motion |
| Mobile lag | ⚠️ Monitor | Test on real devices |

## Resources

- [Epic Details](./epic.md)
- [Feedback Analysis](../../../knowledge/feedback/feedback-01.md)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Research](../../../knowledge/feedback/index.md)

## Notes
- Focus on conversion-driven animations first
- Keep animations subtle (300-600ms)
- Mobile-first approach
- Maintain 95+ Lighthouse score

**Last Updated**: 2025-10-20
**Owner**: Development Team
**Sprint**: Sprint 2 (Weeks 1-3)
