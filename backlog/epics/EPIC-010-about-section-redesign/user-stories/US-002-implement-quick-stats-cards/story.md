# US-002: Implement Quick Stats Cards Component

**Story ID:** US-002
**Epic:** EPIC-010 - About Section Redesign
**Status:** 📋 To Do
**Priority:** 🔴 Critical (High)
**Story Points:** 3
**Estimated Time:** 1.5-2 hours

## User Story

**As a** potential guest viewing the property,
**I want** to see key property statistics (bedrooms, bathrooms, sqft, rating) at a glance,
**So that** I can quickly determine if the property meets my needs.

## Acceptance Criteria

1. ✅ Quick Stats Cards grid displays with 4-5 stat cards
2. ✅ Grid is responsive: 2x2 on mobile, 1x4 (or 1x5) on desktop
3. ✅ Each card shows: large number + descriptive label
4. ✅ Cards have subtle hover effect (background color change)
5. ✅ Stats include: Guests, Bedrooms, Bathrooms, Square Feet, Rating
6. ✅ Rating card includes star emoji (⭐) or icon
7. ✅ Cards use proper Tailwind styling matching design specs
8. ✅ Stats are hardcoded for now (MDX integration in US-004)

## Technical Notes

### Stats to Display

1. **Guests:** 4 (max occupancy)
2. **Bedrooms:** 1
3. **Bathrooms:** 1
4. **Square Feet:** 650
5. **Rating:** 4.98 ⭐

### Component Structure

```typescript
// Inside About.tsx
const stats = [
  { value: '4', label: 'Guests' },
  { value: '1', label: 'Bedroom' },
  { value: '1', label: 'Bathroom' },
  { value: '650', label: 'Sq Ft' },
  { value: '4.98 ⭐', label: 'Guest Rating' },
]

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
    >
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {stat.value}
      </div>
      <div className="text-sm md:text-base text-gray-600">
        {stat.label}
      </div>
    </div>
  ))}
</div>
```

### Design Specifications

- **Grid Layout:** `grid grid-cols-2 md:grid-cols-4 gap-4`
- **Card Background:** `bg-gray-50` (#F9FAFB)
- **Card Hover:** `hover:bg-gray-100` (#F3F4F6)
- **Card Padding:** `p-6` (24px)
- **Border Radius:** `rounded-lg` (8px)
- **Transition:** `transition-colors` (smooth 200ms)
- **Number Size:** 32px mobile, 36-40px desktop
- **Number Color:** `text-gray-900` (#111827)
- **Label Size:** 14px mobile, 16px desktop
- **Label Color:** `text-gray-600` (#6B7280)

### Responsive Breakpoints

- **Mobile (<640px):** 2 columns, 2x3 grid (if 5 stats)
- **Tablet (640-768px):** 2 columns
- **Desktop (768px+):** 4 columns (or 5 if using 5 stats)

## Definition of Done

- [ ] Stats grid renders with all 4-5 stat cards
- [ ] Grid is responsive at all breakpoints
- [ ] Hover effects work smoothly
- [ ] Typography and spacing match design specs
- [ ] Component renders without layout shift
- [ ] Tested on mobile and desktop viewports
- [ ] Code reviewed for accessibility (proper semantic HTML)

## Dependencies

- **Requires:** US-001 (Component structure must exist)
- **Blocked by:** None
- **Blocks:** US-008 (Testing depends on this component)

## Tasks

1. **TASK-004:** Define stats data structure and hardcode values
2. **TASK-005:** Implement stats card grid with Tailwind
3. **TASK-006:** Add hover effects and test responsiveness

## Related Stories

- **Previous:** US-001 (Create component structure)
- **Next:** US-003 (Implement Key Features Grid)
- **Related:** US-004 (Will replace hardcoded stats with MDX data)

## Notes

- Initially hardcode stats; US-004 will make them dynamic via MDX
- Consider adding 5th stat if space allows: "Review Count: 88+"
- Ensure rating value includes star emoji for visual interest
- Keep cards non-interactive (no click handlers needed)
- Test with long labels to ensure no text overflow
