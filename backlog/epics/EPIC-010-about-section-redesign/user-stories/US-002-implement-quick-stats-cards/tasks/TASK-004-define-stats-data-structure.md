# TASK-004: Define Stats Data Structure and Hardcode Values

**Task ID:** TASK-004
**User Story:** US-002 - Implement Quick Stats Cards
**Epic:** EPIC-010 - About Section Redesign
**Status:** 📋 To Do
**Estimated Time:** 10 minutes
**Priority:** 🔴 Critical (High)

## Task Description

Define the stats data structure as a TypeScript array with hardcoded property statistics (guests, bedrooms, bathrooms, square feet, rating). This data will be used to render the stats cards grid.

---

## Agent Prompt

You are implementing the Quick Stats Cards for the About section.

**Goal**: Create a hardcoded stats array with property statistics that will be used to render stat cards in a grid layout.

**Context**: This is part of US-002 (Implement Quick Stats Cards). We're hardcoding values for now; US-004 will replace them with dynamic MDX frontmatter data. The stats need to be structured for easy mapping to card components.

**Instructions**:

1. **Open `components/About.tsx`**

2. **Add stats array inside the component function:**
   ```typescript
   const stats = [
     { value: '4', label: 'Guests' },
     { value: '1', label: 'Bedroom' },
     { value: '1', label: 'Bathroom' },
     { value: '650', label: 'Sq Ft' },
     { value: '4.98 ⭐', label: 'Guest Rating' },
   ]
   ```

3. **Verify the structure:**
   - Each stat has `value` and `label` properties
   - Rating includes star emoji (⭐)
   - All values are strings (for consistent rendering)

**Implementation Details**:

File: `components/About.tsx`

```typescript
export default function About() {
  const stats = [
    { value: '4', label: 'Guests' },
    { value: '1', label: 'Bedroom' },
    { value: '1', label: 'Bathroom' },
    { value: '650', label: 'Sq Ft' },
    { value: '4.98 ⭐', label: 'Guest Rating' },
  ]

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About This Property
        </h2>
        {/* Stats grid will be added in TASK-005 */}
      </div>
    </section>
  )
}
```

**Data Structure Notes**:

- **Guests**: Maximum occupancy (4 people)
- **Bedroom**: Singular form since it's 1 bedroom
- **Bathroom**: Singular form since it's 1 bathroom
- **Sq Ft**: Square footage (650)
- **Guest Rating**: Includes star emoji for visual interest (4.98 ⭐)

**TypeScript Interface (Optional)**:

If you want to add type safety:

```typescript
interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  // ...stats array
]
```

**Verification**:

1. Stats array is defined inside component function
2. Each stat has `value` and `label` properties
3. Rating includes star emoji (⭐)
4. TypeScript shows no errors
5. Component still compiles (run `npm run dev`)

**Expected Outcome**:

- ✅ Stats array defined with 5 stat objects
- ✅ Data structure ready for mapping to cards
- ✅ Rating includes star emoji
- ✅ No TypeScript errors
- ✅ Ready for grid implementation (TASK-005)

**Commit Message**:
```
feat(about): Add stats data structure for Quick Stats Cards

- Define stats array with property statistics
- Include guests, bedrooms, bathrooms, sqft, rating
- Add star emoji to rating value
- Prepare data for stats grid rendering
```

---

## Notes

- Hardcoded for now - will be replaced with MDX data in US-004
- Star emoji (⭐) adds visual interest to rating
- Values as strings for consistent rendering
- Order matters: displayed left-to-right on desktop
- Next task (TASK-005) will create the grid layout
