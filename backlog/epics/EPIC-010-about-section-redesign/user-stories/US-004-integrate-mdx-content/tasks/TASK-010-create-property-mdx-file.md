# TASK-010: Create content/property.md with Frontmatter Schema

**Task ID:** TASK-010
**User Story:** US-004 - Integrate MDX Content System
**Epic:** EPIC-010 - About Section Redesign
**Status:** 📋 To Do
**Estimated Time:** 20-25 minutes
**Priority:** 🔴 Critical (High)

## Task Description

Create the MDX content file at `content/property.md` with a complete frontmatter schema (stats, features) and placeholder narrative content. This establishes the content source of truth for the About section.

---

## Agent Prompt

You are setting up the MDX content system for the About section.

**Goal**: Create `content/property.md` with frontmatter schema containing property stats, features array, and placeholder narrative paragraphs.

**Context**: This is part of US-004 (Integrate MDX Content System). The MDX file will become the single source of truth for all About section content, making it easy for content editors to update without touching code.

**Instructions**:

1. **Create the content directory (if it doesn't exist):**
   ```bash
   mkdir -p content
   ```

2. **Create `content/property.md` with this structure:**
   ```markdown
   ---
   title: "About This Property"
   guests: 4
   bedrooms: 1
   bathrooms: 1
   squareFeet: 650
   rating: 4.98
   reviewCount: 88
   features:
     - "Ski-in/ski-out access (0 min walk to lift)"
     - "Smart home controls (thermostat, lights, locks)"
     - "Recently renovated (2024)"
     - "High-speed WiFi (250+ Mbps)"
     - "Mountain view balcony"
     - "In-unit washer/dryer"
   ---

   Wake up to panoramic views of snow-capped peaks and step directly onto the slopes from your private entrance. This thoughtfully designed condo at 11 Emmons Road offers true ski-in/ski-out access—no shuttles, no walking, just pure mountain convenience. Inside, you'll find a perfect blend of modern comfort and alpine charm, recently updated in 2024 to exceed the expectations of discerning travelers.

   {/* Stats and features will be inserted here by the component */}

   With smart home controls at your fingertips and high-speed WiFi throughout, this mountain retreat seamlessly blends modern technology with natural beauty. Whether you're here for epic powder days or peaceful mountain evenings, you'll appreciate the attention to detail that makes this condo feel like home.
   ```

3. **Verify the file:**
   - Check YAML frontmatter syntax (correct indentation)
   - Ensure features array is properly formatted
   - Verify content is well-structured

**Implementation Details**:

**Frontmatter Schema:**

- `title` (string): Section title for reference
- `guests` (number): Maximum occupancy
- `bedrooms` (number): Number of bedrooms
- `bathrooms` (number): Number of bathrooms
- `squareFeet` (number): Property square footage
- `rating` (number): Guest rating (out of 5)
- `reviewCount` (number): Total number of reviews
- `features` (array of strings): Property features/amenities

**Content Structure:**

1. **Frontmatter** (YAML between `---`)
2. **Opening Paragraph** (150-200 words, emotional hook)
3. **Component Placeholder** (MDX comment)
4. **Closing Paragraph** (100-150 words, call-to-action)

**Verification**:

1. File exists at `content/property.md`
2. Frontmatter is valid YAML (correct indentation, no syntax errors)
3. All required fields present: guests, bedrooms, bathrooms, squareFeet, rating, features
4. Features array has 6 items
5. Opening and closing paragraphs are present
6. File follows MDX syntax (can include comments like `{/* comment */}`)

**Expected Outcome**:

- ✅ `content/property.md` file created
- ✅ Frontmatter includes all required property stats
- ✅ Features array has 6 required amenities
- ✅ Opening narrative paragraph included
- ✅ Closing narrative paragraph included
- ✅ Valid YAML and MDX syntax
- ✅ Ready for component integration (TASK-011, TASK-012)

**Commit Message**:
```
feat(content): Add property.md with MDX frontmatter schema

- Create content/property.md file
- Add frontmatter with property stats and features
- Include opening and closing narrative paragraphs
- Establish single source of truth for About section content
```

---

## Notes

- Frontmatter provides single source of truth for all About section data
- Content can be updated by non-developers (content editors)
- YAML indentation matters - use spaces, not tabs
- Features array order determines display order in component
- MDX allows JSX comments: `{/* comment */}`
- Next tasks will create TypeScript interfaces and component integration
- Content will be refined in US-007 (Content Migration)
