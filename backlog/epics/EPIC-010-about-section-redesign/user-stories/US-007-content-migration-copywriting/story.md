# US-007: Content Migration and Copywriting

**Story ID:** US-007
**Epic:** EPIC-010 - About Section Redesign
**Status:** 📋 To Do
**Priority:** 🟡 Medium
**Story Points:** 2
**Estimated Time:** 1-2 hours

## User Story

**As a** content editor,
**I want** polished, benefit-driven copy for the About section,
**So that** potential guests feel emotionally connected to the property and motivated to book.

## Acceptance Criteria

1. ✅ Opening narrative (150-200 words) written with emotional hooks
2. ✅ Closing narrative (100-150 words) written with subtle call-to-action
3. ✅ All content follows voice and tone guidelines (warm, confident, professional)
4. ✅ Content uses second-person POV ("you'll find", "you'll enjoy")
5. ✅ Banned phrases avoided ("world-class", "luxury", "cozy", "don't miss out")
6. ✅ Required elements included: 4.98 rating, ski access, 2024 renovation, smart home features
7. ✅ Grammar and spelling checked
8. ✅ Content updated in `content/property.md` MDX file

## Technical Notes

### Opening Paragraph Requirements

**Structure:**

1. Sensory/emotional hook (1 sentence)
2. Unique value proposition (1 sentence)
3. Location/convenience benefit (1 sentence)

**Example Opening:**

> "Wake up to panoramic views of snow-capped peaks and step directly onto the slopes from your private entrance. This thoughtfully designed condo at 11 Emmons Road offers true ski-in/ski-out access—no shuttles, no walking, just pure mountain convenience. Inside, you'll find a perfect blend of modern comfort and alpine charm, recently updated in 2024 to exceed the expectations of discerning travelers."

**Required Elements to Include:**

- Mention of 4.98 rating or 88+ reviews
- Specific ski lift access (0 min walk)
- Year of recent renovation (2024)
- Smart home features by name
- Square footage (650 sq ft)

### Closing Paragraph Requirements

**Structure:**

1. Convenience/technology benefits (1 sentence)
2. Emotional resonance (1 sentence)
3. Subtle call-to-action or booking confidence statement

**Example Closing:**

> "With smart home controls at your fingertips and high-speed WiFi throughout, this mountain retreat seamlessly blends modern technology with natural beauty. Whether you're here for epic powder days or peaceful mountain evenings, you'll appreciate the attention to detail that makes this condo feel like home."

### Content Guidelines

**Voice & Tone:**

- **Voice:** Warm, confident, professional
- **Tone:** Inviting but not overly sales-y
- **POV:** Second person ("you'll find", "you'll enjoy")

**Sentence Length:**

- Mix of short (8-12 words) and medium (15-20 words)
- Avoid very long sentences (25+ words)

**Paragraph Length:**

- 3-4 sentences maximum per paragraph

**Banned Phrases:**

- ❌ "World-class" (overused)
- ❌ "Luxury" (unless truly ultra-luxury)
- ❌ Technical terms (SSR, framework names, developer jargon)
- ❌ "Cozy" (cliché for small spaces)
- ❌ "Don't miss out" (creates pressure)

**Preferred Language:**

- ✅ Benefit-driven ("you'll enjoy", "you'll appreciate")
- ✅ Specific details (numbers, measurements, facts)
- ✅ Sensory language (views, warmth, ambiance)
- ✅ Action-oriented (wake up, step onto, enjoy)

## Definition of Done

- [ ] Opening paragraph written (150-200 words)
- [ ] Closing paragraph written (100-150 words)
- [ ] Content follows all voice and tone guidelines
- [ ] All required elements included (rating, ski access, renovation year, etc.)
- [ ] No banned phrases used
- [ ] Grammar and spelling checked (Grammarly or similar)
- [ ] Content updated in `content/property.md`
- [ ] Peer review completed (another team member reads and approves)

## Dependencies

- **Requires:** US-004 (MDX structure must exist)
- **Blocked by:** None
- **Blocks:** US-008 (QA includes content review)

## Tasks

1. **TASK-022:** Write opening narrative with emotional hooks and required elements
2. **TASK-023:** Write closing narrative with call-to-action
3. **TASK-024:** Review content against guidelines and update MDX file

## Related Stories

- **Previous:** US-006 (Ensure accessibility compliance)
- **Next:** US-008 (Testing and quality assurance)
- **Related:** US-004 (Content lives in MDX file created in this story)

## Notes

- Start with the example copy provided in requirements doc
- Can modify example copy or write from scratch
- Ensure copy accurately reflects property (don't make up features)
- Verify all stats are correct (guests, sqft, rating, etc.)
- Consider A/B testing different copy variations post-launch
- Bold key phrases using `<strong>` tags in MDX: `<strong>ski-in/ski-out</strong>`
- Test how copy reads on mobile (shorter lines, ensure scannability)

## Content Review Checklist

- [ ] Emotional hook in opening sentence
- [ ] Unique value proposition stated clearly
- [ ] Location/convenience mentioned
- [ ] Smart home features named specifically
- [ ] 2024 renovation year mentioned
- [ ] 4.98 rating or review count mentioned
- [ ] Ski access specifics (0 min walk)
- [ ] Square footage mentioned (650 sq ft)
- [ ] Second-person POV used throughout
- [ ] No banned phrases present
- [ ] Subtle call-to-action in closing
- [ ] Warm, inviting tone maintained
- [ ] Professional (not overly sales-y)

## Example Content Variations

**Opening Variation 1 (Example from docs):**

> "Wake up to panoramic views of snow-capped peaks and step directly onto the slopes from your private entrance. This thoughtfully designed condo at 11 Emmons Road offers true ski-in/ski-out access—no shuttles, no walking, just pure mountain convenience. Inside, you'll find a perfect blend of modern comfort and alpine charm, recently updated in 2024 to exceed the expectations of discerning travelers."

**Opening Variation 2 (Alternative):**

> "Imagine waking up to fresh powder and being on the slopes in seconds—not minutes, seconds. This 650-square-foot mountain retreat at 11 Emmons Road delivers genuine ski-in/ski-out access with zero walking required. Freshly renovated in 2024 and rated 4.98 by 88+ guests, this smart home-enabled condo blends modern technology with Crested Butte's natural beauty."

**Choose the variation that best matches brand voice.**
