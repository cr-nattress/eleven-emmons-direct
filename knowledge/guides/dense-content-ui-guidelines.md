# Dense Content UI/UX Guidelines

**A Pattern Library for Long Lists, Grouped Content, and Information-Heavy Sections**

---

## Document Overview

**Purpose:** Provide reusable UI/UX patterns for displaying dense, information-heavy content in a scannable, mobile-friendly, and engaging manner.

**Applies To:**

- Sections with 15+ list items
- Multiple grouped lists (categories, subcategories)
- Stat-heavy content (metrics, numbers, data points)
- Multi-topic sections (e.g., activities, amenities, area information)
- Content that creates "walls of text" or "list fatigue"

**Tech Stack:**

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- MDX (content management)

**Version:** 1.0.0
**Last Updated:** October 20, 2025

---

## Core Design Principles

### 1. Progressive Disclosure

**Don't show everything at once. Let users explore what interests them.**

- Users should see overview first, details on demand
- Reduce initial cognitive load
- Maintain SEO (content still crawlable)
- Enable deep-dive when interested

### 2. Scannability Over Completeness

**Make it easy to find information, not just display it.**

- Use visual hierarchy (headings, spacing, cards)
- Highlight key metrics with stat cards
- Break text into digestible chunks
- Use icons and checkmarks for quick scanning

### 3. Mobile-First Responsiveness

**Design for the smallest screen first.**

- Vertical stacking on mobile
- Horizontal scrolling for tabs (when needed)
- Touch-friendly targets (48x48px minimum)
- Optimize for thumb reach zones

### 4. Accessibility as Standard

**WCAG 2.1 AA compliance is non-negotiable.**

- Semantic HTML
- Keyboard navigation
- Screen reader support
- Color contrast ratios (4.5:1 minimum)
- Focus management

---

## Pattern Library

## Pattern 1: Tab-Based Organization

### When to Use

- Content has **3-6 distinct categories**
- Users typically only need one category at a time
- Categories are mutually exclusive (Winter vs Summer, Indoor vs Outdoor)
- Want to dramatically reduce initial visual complexity

### Advantages

- ✅ Reduces cognitive load (users choose relevant category)
- ✅ Clean, modern interface
- ✅ Easy mobile adaptation (scrollable tabs)
- ✅ Hides irrelevant content

### Disadvantages

- ❌ Content in inactive tabs not immediately visible
- ❌ Requires extra interaction to explore
- ❌ May not be ideal if users need to compare across tabs

### Component Structure

```typescript
// components/TabNav.tsx
'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  icon?: string | React.ReactNode
  badge?: string | number
}

interface TabNavProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
  variant?: 'underline' | 'pills'
}

export function TabNav({
  tabs,
  activeTab,
  onTabChange,
  variant = 'underline'
}: TabNavProps) {
  return (
    <div className={`
      ${variant === 'underline' ? 'border-b border-gray-200' : ''}
      mb-8
    `}>
      <nav
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        aria-label="Content tabs"
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            className={`
              whitespace-nowrap py-4 px-3 font-medium text-sm
              transition-colors duration-200
              ${variant === 'underline'
                ? `border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`
                : `rounded-lg px-4 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`
              }
            `}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
            {tab.badge && (
              <span className="ml-2 px-2 py-0.5 bg-gray-200 text-gray-700 rounded-full text-xs">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}

// Usage in parent component
export default function ContentSection() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'winter', label: 'Winter', icon: '❄️', badge: '12' },
    { id: 'summer', label: 'Summer', icon: '☀️', badge: '15' },
  ]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TabNav
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Tab panels */}
        <div role="tabpanel" id={`panel-${activeTab}`}>
          {activeTab === 'overview' && <OverviewContent />}
          {activeTab === 'winter' && <WinterContent />}
          {activeTab === 'summer' && <SummerContent />}
        </div>
      </div>
    </section>
  )
}
```

### Animation (with Framer Motion)

```typescript
import { motion, AnimatePresence } from 'framer-motion'

// Inside parent component
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
    role="tabpanel"
    id={`panel-${activeTab}`}
  >
    {/* Tab content */}
  </motion.div>
</AnimatePresence>
```

### Responsive Considerations

```css
/* Mobile: Scrollable tabs */
@media (max-width: 640px) {
  .tab-nav {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .tab-nav::-webkit-scrollbar {
    display: none;
  }
}
```

---

## Pattern 2: Accordion/Expandable Cards

### When to Use

- Content has **4-10 distinct sections**
- Users may want to view multiple sections simultaneously
- Need all content on same page for SEO
- Sections can be understood independently

### Advantages

- ✅ All content on one page (SEO-friendly)
- ✅ User controls expansion (progressive disclosure)
- ✅ Mobile-friendly (vertical stacking)
- ✅ Familiar interaction pattern

### Disadvantages

- ❌ Can still feel long on mobile (many accordions)
- ❌ Requires clicking to see content
- ❌ May not reduce perceived length as much as tabs

### Component Structure

```typescript
// components/ExpandableCard.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ExpandableCardProps {
  title: string
  icon?: string | React.ReactNode
  preview?: string
  children: React.ReactNode
  defaultExpanded?: boolean
  variant?: 'bordered' | 'shadow' | 'minimal'
}

export function ExpandableCard({
  title,
  icon,
  preview,
  children,
  defaultExpanded = false,
  variant = 'bordered'
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const baseClasses = 'rounded-lg overflow-hidden transition-all duration-200'
  const variantClasses = {
    bordered: 'border border-gray-200',
    shadow: 'shadow-sm hover:shadow-md',
    minimal: 'border-b border-gray-100 last:border-b-0'
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} bg-white`}>
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
        aria-expanded={isExpanded}
        aria-controls={`content-${title.replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center gap-3 flex-1">
          {icon && <span className="text-2xl flex-shrink-0">{icon}</span>}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900">
              {title}
            </h3>
            {!isExpanded && preview && (
              <p className="text-sm text-gray-600 mt-1 truncate">
                {preview}
              </p>
            )}
          </div>
        </div>

        {/* Chevron Icon */}
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-3 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            id={`content-${title.replace(/\s+/g, '-')}`}
          >
            <div className="px-6 py-4 border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Usage
<div className="space-y-4">
  <ExpandableCard
    title="Mountain Resort Stats"
    icon="🏔️"
    preview="1,547 acres • 121 trails • 300+ inches snow"
    defaultExpanded={true}
  >
    <StatGrid stats={resortStats} />
    <FeatureList items={resortFeatures} />
  </ExpandableCard>

  <ExpandableCard
    title="Nordic Skiing"
    icon="🎿"
    preview="30+ km of groomed trails"
  >
    <p>Content here...</p>
  </ExpandableCard>
</div>
```

### Accessibility Enhancements

```typescript
// Add keyboard support
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }
}

// In button:
<button
  onClick={() => setIsExpanded(!isExpanded)}
  onKeyDown={handleKeyDown}
  aria-expanded={isExpanded}
  aria-controls={`content-${id}`}
>
```

---

## Pattern 3: Stat Cards Grid

### When to Use

- Content includes **4-12 key metrics/numbers**
- Numbers are more important than text descriptions
- Want to create visual hierarchy
- Users need to scan/compare values quickly

### Advantages

- ✅ Makes numbers scannable
- ✅ Creates visual interest
- ✅ Highlights key data points
- ✅ Responsive grid layout

### Component Structure

```typescript
// components/StatCard.tsx

interface StatCardProps {
  value: string | number
  label: string
  icon?: string | React.ReactNode
  highlight?: boolean
  description?: string
  size?: 'sm' | 'md' | 'lg'
}

export function StatCard({
  value,
  label,
  icon,
  highlight = false,
  description,
  size = 'md'
}: StatCardProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const valueSizes = {
    sm: 'text-2xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl'
  }

  return (
    <div
      className={`
        ${sizeClasses[size]}
        rounded-lg text-center transition-all duration-200
        ${highlight
          ? 'bg-blue-50 border-2 border-blue-500'
          : 'bg-gray-50 hover:bg-gray-100'
        }
      `}
    >
      {icon && (
        <div className="flex justify-center mb-2 text-2xl" aria-hidden="true">
          {icon}
        </div>
      )}

      <div className={`${valueSizes[size]} font-bold text-gray-900`}>
        {value}
      </div>

      <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium">
        {label}
      </div>

      {description && (
        <p className="text-xs text-gray-500 mt-2">
          {description}
        </p>
      )}
    </div>
  )
}

// Usage with responsive grid
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <StatCard
    value="1,547"
    label="Acres of Terrain"
    icon="🏔️"
  />
  <StatCard
    value="121"
    label="Trails"
    icon="⛷️"
  />
  <StatCard
    value="300+"
    label="Inches Snow"
    icon="❄️"
    highlight
    description="Annual average"
  />
  <StatCard
    value="✓"
    label="Terrain Parks"
    icon="🎢"
  />
</div>
```

### Grid Responsive Patterns

```typescript
// Common grid configurations

// 4 items: 2x2 mobile → 4 cols desktop
className = 'grid grid-cols-2 md:grid-cols-4 gap-4'

// 5 items: 2x3 mobile → 5 cols desktop
className = 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'

// 6 items: 2x3 mobile → 3x2 tablet → 6 cols desktop
className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'

// 3 items: 1 col mobile → 3 cols desktop
className = 'grid grid-cols-1 md:grid-cols-3 gap-4'
```

---

## Pattern 4: Feature Lists with Checkmarks

### When to Use

- Content is **bulleted list of 6+ items**
- All items have equal importance
- Items are short phrases (not paragraphs)
- Want scannable, glanceable format

### Advantages

- ✅ Highly scannable
- ✅ Visual consistency
- ✅ Easy to add/remove items
- ✅ Works well in 2-column layout

### Component Structure

```typescript
// components/FeatureList.tsx

interface FeatureListProps {
  items: string[]
  columns?: 1 | 2
  icon?: string | React.ReactNode
  iconColor?: string
  itemClassName?: string
}

export function FeatureList({
  items,
  columns = 2,
  icon = '✓',
  iconColor = 'text-green-600',
  itemClassName = ''
}: FeatureListProps) {
  return (
    <div className={`
      grid gap-3
      ${columns === 2 ? 'sm:grid-cols-2' : ''}
    `}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-start gap-3 ${itemClassName}`}
        >
          <span
            className={`${iconColor} text-xl flex-shrink-0 mt-0.5`}
            aria-hidden="true"
          >
            {icon}
          </span>
          <span className="text-gray-700 text-base md:text-lg">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}

// Usage
<FeatureList
  items={[
    "Ski-in/ski-out access (0 min walk to lift)",
    "Smart home controls (thermostat, lights, locks)",
    "Recently renovated (2024)",
    "High-speed WiFi (250+ Mbps)",
    "Mountain view balcony",
    "In-unit washer/dryer"
  ]}
  columns={2}
  icon="✓"
  iconColor="text-green-600"
/>

// Variant with custom icons per item
interface FeatureItem {
  text: string
  icon?: string
  iconColor?: string
}

export function FeatureListWithIcons({ items }: { items: FeatureItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <span
            className={`${item.iconColor || 'text-blue-600'} text-xl flex-shrink-0`}
            aria-hidden="true"
          >
            {item.icon || '✓'}
          </span>
          <span className="text-gray-700 text-base md:text-lg">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )
}
```

---

## Pattern 5: Hybrid (Tabs + Accordions)

### When to Use

- Content has **both** high-level categories AND sub-categories
- Example: Tabs for Winter/Summer, Accordions within each for Resort/Nordic/Activities
- Most complex content organization needs
- Want maximum flexibility

### Advantages

- ✅ Best of both worlds
- ✅ Handles very complex content
- ✅ Maximum organization
- ✅ Users can drill down progressively

### Disadvantages

- ❌ Most complex to implement
- ❌ Requires more user interactions
- ❌ May be overkill for simple content

### Implementation Pattern

```typescript
// Parent component with tabs
export default function HybridSection() {
  const [activeTab, setActiveTab] = useState('winter')

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Tab Navigation */}
        <TabNav
          tabs={[
            { id: 'winter', label: 'Winter', icon: '❄️' },
            { id: 'summer', label: 'Summer', icon: '☀️' },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Tab Content with Accordions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {activeTab === 'winter' && <WinterAccordions />}
            {activeTab === 'summer' && <SummerAccordions />}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

// Child component with accordions
function WinterAccordions() {
  return (
    <div className="space-y-4">
      <ExpandableCard
        title="Mountain Resort"
        icon="🏔️"
        preview="1,547 acres • 121 trails"
        defaultExpanded={true}
      >
        <StatGrid stats={resortStats} />
        <FeatureList items={resortFeatures} />
      </ExpandableCard>

      <ExpandableCard
        title="Nordic Skiing"
        icon="🎿"
        preview="30+ km trails"
      >
        <StatGrid stats={nordicStats} />
        <FeatureList items={nordicFeatures} />
      </ExpandableCard>
    </div>
  )
}
```

---

## Decision Matrix: Which Pattern to Use?

| Criteria                | Tabs        | Accordions  | Hybrid  | Stat Cards Only | Feature List Only |
| ----------------------- | ----------- | ----------- | ------- | --------------- | ----------------- |
| **3-6 main categories** | ✅ Best     | ❌          | ✅ Good | ❌              | ❌                |
| **7+ categories**       | ❌          | ✅ Best     | ✅ Good | ❌              | ❌                |
| **Stat-heavy content**  | ✅          | ✅          | ✅      | ✅ Best         | ❌                |
| **Long text lists**     | ✅          | ✅          | ✅      | ❌              | ✅ Best           |
| **SEO critical**        | ⚠️ Moderate | ✅ Best     | ✅ Good | ✅              | ✅                |
| **Simple content**      | ❌ Overkill | ❌ Overkill | ❌      | ✅              | ✅                |
| **Complex hierarchy**   | ⚠️          | ⚠️          | ✅ Best | ❌              | ❌                |
| **Mobile-first**        | ✅          | ✅ Best     | ✅      | ✅              | ✅                |

---

## Responsive Design Patterns

### Breakpoint Strategy

```typescript
// Tailwind breakpoints used
const breakpoints = {
  sm: '640px', // Small tablets
  md: '768px', // Tablets
  lg: '1024px', // Desktops
  xl: '1280px', // Large desktops
  '2xl': '1536px', // Extra large screens
}
```

### Mobile (<640px)

```typescript
// Tabs: Horizontal scroll
className = 'overflow-x-auto scrollbar-hide'

// Stats: 2x2 grid
className = 'grid grid-cols-2 gap-4'

// Features: 1 column
className = 'grid grid-cols-1 gap-3'

// Cards: Full width, vertical stack
className = 'w-full space-y-4'

// Text: Smaller sizes
className = 'text-sm md:text-base'
```

### Tablet (640-1024px)

```typescript
// Tabs: May need scroll if 5+
className = 'flex gap-4 overflow-x-auto'

// Stats: 2x2 or 3x1
className = 'grid grid-cols-2 md:grid-cols-3 gap-4'

// Features: 2 columns
className = 'grid sm:grid-cols-2 gap-3'

// Cards: Full width or 2-col
className = 'grid sm:grid-cols-2 gap-4'
```

### Desktop (1024px+)

```typescript
// Tabs: All visible
className = 'flex gap-6'

// Stats: 4-5 in single row
className = 'grid lg:grid-cols-4 gap-4'

// Features: 2 columns
className = 'grid lg:grid-cols-2 gap-4'

// Cards: 2-3 columns possible
className = 'grid lg:grid-cols-3 gap-6'
```

---

## Animation Guidelines

### Page Transitions (Framer Motion)

```typescript
// Tab content transitions
const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

<motion.div
  variants={tabVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  transition={{ duration: 0.2 }}
>
```

### Accordion Expansion

```typescript
// Smooth height animation
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
>
```

### Hover Effects (CSS)

```css
/* Card hover */
.card {
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Button hover */
.button {
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}
```

### Performance Considerations

```typescript
// Use GPU-accelerated properties
className="transform-gpu transition-transform"

// Limit animations on mobile
const shouldAnimate = useMediaQuery('(min-width: 768px)')

{shouldAnimate && (
  <motion.div animate={...} />
)}
```

---

## Accessibility Checklist

### Semantic HTML

- [ ] Use `<section>` for major content areas
- [ ] Use `<h2>`, `<h3>` for headings (proper hierarchy)
- [ ] Use `<button>` for interactive elements (not `<div>`)
- [ ] Use `<nav>` for tab navigation with `role="tablist"`
- [ ] Use proper ARIA roles (`role="tab"`, `role="tabpanel"`, etc.)

### Keyboard Navigation

- [ ] Tab key navigates through interactive elements
- [ ] Enter/Space activates buttons and accordions
- [ ] Arrow keys navigate between tabs
- [ ] Escape closes expanded accordions (optional)
- [ ] Focus visible on all interactive elements

### Screen Reader Support

- [ ] Descriptive `aria-label` on all buttons
- [ ] `aria-expanded` on accordion buttons
- [ ] `aria-selected` on active tab
- [ ] `aria-controls` linking buttons to content
- [ ] `aria-hidden="true"` on decorative icons
- [ ] Status announcements with `aria-live` (when tab changes)

### Color Contrast

- [ ] Body text: 4.5:1 minimum (WCAG AA)
- [ ] Large text (18pt+): 3:1 minimum
- [ ] UI components: 3:1 minimum
- [ ] Test with WebAIM Contrast Checker

### Focus Management

```css
/* Always show focus indicators */
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Remove default outline, add custom */
*:focus {
  outline: none;
}

*:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
```

---

## Content Writing Guidelines

### Stat Card Labels

**Keep concise (1-3 words):**

- ✅ "Acres of Terrain"
- ❌ "Total Skiable Acres Available"

**Be specific:**

- ✅ "Inches Annual Snow"
- ❌ "Snow"

### Feature List Items

**Be action-oriented:**

- ✅ "Trails ranging from beginner to expert"
- ❌ "Various trail difficulties"

**Include specifics:**

- ✅ "30+ km of groomed cross-country trails"
- ❌ "Cross-country skiing available"

### Accordion Previews

**Formula:** `[Stat] • [Stat] • [Benefit]`

**Examples:**

- "1,547 acres • 121 trails • All skill levels"
- "30+ km trails • Backcountry access • Rentals available"

### Tab Labels

**Keep ultra-short (1-2 words):**

- ✅ "Overview", "Winter", "Summer"
- ❌ "Overview of Area", "Winter Activities & Sports"

---

## MDX Content Structure

### Frontmatter Schema

```yaml
---
title: 'Section Title'
subtitle: 'Brief description'

# Tab configuration (if using tabs)
tabs:
  - id: overview
    label: Overview
    icon: 📋
  - id: details
    label: Details
    icon: 📊

# Stat data
stats:
  - value: '1,547'
    label: 'Acres'
    icon: '🏔️'
    highlight: false
  - value: '121'
    label: 'Trails'
    icon: '⛷️'
    highlight: true

# Feature lists
features:
  - 'Feature one with specific details'
  - 'Feature two with specific details'
  - 'Feature three with specific details'

# Grouped content (for accordions)
categories:
  - title: 'Category One'
    icon: '🏔️'
    preview: 'Quick summary'
    stats:
      - value: '100'
        label: 'Count'
    features:
      - 'Feature A'
      - 'Feature B'
---
# Main content here
```

### Loading MDX Data

```typescript
// lib/content.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getContentData(slug: string) {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data,
    source: content,
  }
}
```

---

## Testing Checklist

### Functional Tests

- [ ] Tabs switch content correctly
- [ ] Accordions expand/collapse
- [ ] Stat cards display all values
- [ ] Feature lists render completely
- [ ] Deep links work (e.g., `#section?tab=winter`)
- [ ] No content overflow or clipping

### Responsive Tests

**Mobile (375px, 414px):**

- [ ] Tabs scroll horizontally
- [ ] Cards stack vertically
- [ ] Stats in 2-column grid
- [ ] Text readable without zoom
- [ ] No horizontal scroll

**Tablet (768px, 1024px):**

- [ ] Tabs fit viewport or scroll smoothly
- [ ] Optimal stat card grid
- [ ] Good use of space

**Desktop (1440px, 1920px):**

- [ ] Content max-width maintained
- [ ] Hover states work
- [ ] Stats in single row

### Accessibility Tests

- [ ] WAVE: 0 errors
- [ ] Screen reader: All content announced
- [ ] Keyboard-only: All features accessible
- [ ] Color contrast: All pass WCAG AA
- [ ] Focus indicators: Visible on all elements

### Performance Tests

- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Smooth 60fps animations
- [ ] No memory leaks

---

## Implementation Checklist

When implementing these patterns:

### Phase 1: Planning

- [ ] Audit current content (count items, identify groups)
- [ ] Choose appropriate pattern(s)
- [ ] Sketch mobile and desktop layouts
- [ ] Define MDX frontmatter schema
- [ ] Review with stakeholders

### Phase 2: Components

- [ ] Create base components (TabNav, ExpandableCard, etc.)
- [ ] Add TypeScript interfaces
- [ ] Implement responsive classes
- [ ] Add animations
- [ ] Test accessibility

### Phase 3: Content

- [ ] Migrate content to MDX
- [ ] Structure frontmatter
- [ ] Write preview summaries
- [ ] Optimize copy for scannability

### Phase 4: Testing

- [ ] Functional testing
- [ ] Responsive testing
- [ ] Accessibility audit
- [ ] Performance testing
- [ ] Browser compatibility

### Phase 5: Deploy & Monitor

- [ ] Deploy to production
- [ ] Monitor analytics
- [ ] Track engagement metrics
- [ ] Iterate based on data

---

## Common Pitfalls to Avoid

### 1. Too Many Tabs

❌ **Bad:** 8+ tabs (overwhelming choice)
✅ **Good:** 3-5 tabs (clear categories)

### 2. Nested Accordions

❌ **Bad:** Accordions inside accordions
✅ **Good:** Use hybrid pattern (tabs + accordions)

### 3. Tiny Touch Targets

❌ **Bad:** 24x24px buttons on mobile
✅ **Good:** 48x48px minimum (WCAG)

### 4. Hidden Important Content

❌ **Bad:** Key information in collapsed accordion
✅ **Good:** Expand first/important section by default

### 5. No Loading States

❌ **Bad:** Blank screen while loading
✅ **Good:** Skeleton screens or spinners

### 6. Breaking Keyboard Navigation

❌ **Bad:** Tab traps, missing focus indicators
✅ **Good:** Logical tab order, visible focus

### 7. Over-Animation

❌ **Bad:** Every element animates constantly
✅ **Good:** Subtle transitions on user interactions

---

## Version History

- **v1.0.0** (Oct 20, 2025) - Initial release

---

## Related Documentation

- [EPIC-010: About Section Redesign](/backlog/epics/EPIC-010-about-section-redesign/)
- [feedback-03.md: Location Section Strategy](/knowledge/feedback/feedback-03.md)
- [Next.js 14 App Router Docs](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Document Status:** READY FOR USE
**Maintainer:** Development Team
**Last Review:** October 20, 2025
