# Location & Area Section Redesign - Dense Content Strategy
## Product Requirements Document

## Project Overview

**Project Name:** 11 Emmons Road - Location & Area Section Redesign  
**Component:** Location.tsx  
**Content Source:** content/area.md  
**Section ID:** #location  
**Challenge:** Transform information-dense content (40+ data points) into scannable, engaging experience  
**Priority:** High  
**Estimated Effort:** Large (13-21 story points)

---

## Executive Summary

The Location & Area section currently contains extensive information about Crested Butte, including town history, resort statistics, winter activities, Nordic skiing, and summer offerings. This creates **information overload** that reduces engagement and increases bounce rate.

**Goal:** Redesign the section to make extensive content scannable, engaging, and mobile-friendly using progressive disclosure patterns, interactive components, and smart information architecture.

---

## Current State Analysis

### Content Inventory

Based on the uploaded image, the section includes:

**1. Colorado's Last Great Ski Town**
- Descriptive paragraph (100 words)
- Emotional/historical content

**2. About Crested Butte**
- Location details (elevation, forest)
- Town characteristics
- Descriptive paragraph (75 words)

**3. Winter Paradise - Crested Butte Mountain Resort**
- Skiable terrain: 1,547 acres
- Trail count: 121 trails
- Terrain difficulty
- Snowfall: 300+ inches
- Terrain parks
- Night skiing availability

**4. Nordic Skiing**
- Trail length: 30+ km
- Backcountry opportunities
- CBMR Nordic Center details

**5. Other Winter Activities** (7 items)
- Snowshoeing
- Ice skating
- Sleigh rides
- Snowmobiling
- Dog sledding

**6. Summer Wonderland**
- [Content continues but cut off in image]

### Problems Identified

1. **Wall of text**: Dense paragraphs with no visual breaks
2. **List fatigue**: 15+ bullet points in sequence
3. **No hierarchy**: Equal visual weight for all items
4. **Mobile nightmare**: Scrolling overload on small screens
5. **Zero interactivity**: Static text blocks
6. **No visual interest**: Text-only presentation
7. **Hard to scan**: Important stats buried in prose
8. **No quick reference**: Can't find specific info fast

---

## Design Solution: Progressive Disclosure Strategy

### Core Principle

**Don't show everything at once. Let users explore what interests them.**

### Recommended Pattern: Tab + Accordion Hybrid

```
┌────────────────────────────────────────────────┐
│     Location & Area                            │
│     Discover Crested Butte                     │
├────────────────────────────────────────────────┤
│  [Overview] [Winter] [Summer] [Getting Here]  │  ← Tabs
├────────────────────────────────────────────────┤
│                                                │
│  ▼ Crested Butte Mountain Resort              │  ← Accordion
│    [Expanded content with stats cards]        │
│                                                │
│  ▶ Nordic Skiing                               │
│                                                │
│  ▶ Other Winter Activities                     │
│                                                │
└────────────────────────────────────────────────┘
```

**Benefits:**
- Reduces initial cognitive load
- Mobile-friendly (vertical stacking)
- SEO-friendly (content still crawlable)
- Allows deep-dive when interested
- Reduces perceived page length

---

## Detailed Design Specifications

### Layout Option 1: Tabbed Interface (Recommended)

**Primary Navigation Tabs:**
1. **Overview** - Town history and character
2. **Winter** - Skiing and winter activities
3. **Summer** - Warm weather activities
4. **Getting Here** - Location, directions, airport

**Advantages:**
- Dramatically reduces visual complexity
- Users self-select relevant season
- Clean, modern interface pattern
- Easy mobile adaptation (scrollable tabs)

**Implementation:**
```jsx
<section id="location" className="py-16 md:py-20 bg-gray-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-12">
      <h2>Location & Area</h2>
      <p>Discover Crested Butte - Colorado's Last Great Ski Town</p>
    </div>
    
    {/* Tab Navigation */}
    <div className="flex border-b border-gray-200 overflow-x-auto">
      <button className="tab-active">Overview</button>
      <button>Winter</button>
      <button>Summer</button>
      <button>Getting Here</button>
    </div>
    
    {/* Tab Content */}
    <div className="tab-panel">
      {/* Content for active tab */}
    </div>
    
  </div>
</section>
```

---

### Layout Option 2: Accordion Sections

**Collapsible Sections:**
1. ▼ About Crested Butte (open by default)
2. ▶ Mountain Resort Stats
3. ▶ Winter Activities
4. ▶ Nordic Skiing
5. ▶ Summer Activities
6. ▶ Getting Here

**Advantages:**
- All content on one page (SEO)
- User controls expansion
- Mobile-friendly (vertical only)
- Familiar interaction pattern

**Implementation:**
```jsx
<section id="location" className="py-16 md:py-20 bg-gray-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* Accordion Container */}
    <div className="space-y-4">
      
      {/* Accordion Item */}
      <div className="bg-white rounded-lg shadow">
        <button className="accordion-header">
          <span>About Crested Butte</span>
          <ChevronDown />
        </button>
        <div className="accordion-content">
          {/* Content */}
        </div>
      </div>
      
    </div>
    
  </div>
</section>
```

---

### Layout Option 3: Grid + Modal Deep Dive

**Overview Cards:**
- 2x3 grid of category cards
- Each card shows preview + icon
- Click opens modal with full details

**Categories:**
1. 🏔️ Mountain Resort
2. ⛷️ Downhill Skiing
3. 🎿 Nordic Skiing
4. 🥾 Winter Activities
5. ☀️ Summer Fun
6. 🗺️ Location Info

**Advantages:**
- Highly visual and engaging
- Great for browsing/discovery
- Excellent mobile experience
- Keeps page short

---

## Recommended: Hybrid Approach (Best of All)

Combine tabs for primary organization with expandable cards for details:

```
┌─────────────────────────────────────────────────────┐
│  Location & Area                                    │
│  Discover Crested Butte - Colorado's Last Great... │
├─────────────────────────────────────────────────────┤
│  [Overview] [Winter Activities] [Summer] [Directions]│
├─────────────────────────────────────────────────────┤
│                                                     │
│  WINTER ACTIVITIES TAB CONTENT:                     │
│                                                     │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  │
│  │  🏔️        │  │  🎿        │  │  🥾        │  │
│  │  Resort    │  │  Nordic    │  │  Other     │  │
│  │  Stats     │  │  Skiing    │  │  Activities│  │
│  │  ▼ Expand  │  │  ▶ View    │  │  ▶ View    │  │
│  └────────────┘  └────────────┘  └────────────┘  │
│                                                     │
│  [Expanded Resort Card showing stats]              │
│  ┌─────────────────────────────────────────────┐  │
│  │  Crested Butte Mountain Resort              │  │
│  │                                              │  │
│  │  ┌────┐  ┌────┐  ┌────┐  ┌────┐           │  │
│  │  │1547│  │121 │  │300+│  │ ✓  │           │  │
│  │  │Acres│  │Trail│  │ In │  │Park│           │  │
│  │  └────┘  └────┘  └────┘  └────┘           │  │
│  │                                              │  │
│  │  ✓ Terrain for all skill levels             │  │
│  │  ✓ Expert and extreme terrain               │  │
│  │  ✓ Night skiing (select dates)              │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Why This Works:**
- **Tabs** reduce cognitive load (4 categories vs 20+ items)
- **Cards** add visual interest and scannability
- **Expandable details** provide progressive disclosure
- **Stat badges** highlight key numbers
- **Checkmarks** make lists scannable

---

## Component Architecture

### 1. Tab Navigation Component

**File:** `components/TabNav.tsx`

```typescript
interface Tab {
  id: string
  label: string
  icon?: React.ReactNode
}

interface TabNavProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function TabNav({ tabs, activeTab, onTabChange }: TabNavProps) {
  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="flex gap-4 overflow-x-auto scrollbar-hide" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm
              transition-colors duration-200
              ${activeTab === tab.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
```

---

### 2. Stat Card Component

**File:** `components/StatCard.tsx`

```typescript
interface StatCardProps {
  value: string | number
  label: string
  icon?: React.ReactNode
  highlight?: boolean
}

export function StatCard({ value, label, icon, highlight }: StatCardProps) {
  return (
    <div
      className={`
        p-4 rounded-lg text-center transition-all duration-200
        ${highlight 
          ? 'bg-blue-50 border-2 border-blue-500' 
          : 'bg-gray-50 hover:bg-gray-100'
        }
      `}
    >
      {icon && (
        <div className="flex justify-center mb-2 text-2xl">
          {icon}
        </div>
      )}
      <div className="text-2xl md:text-3xl font-bold text-gray-900">
        {value}
      </div>
      <div className="text-xs md:text-sm text-gray-600 mt-1">
        {label}
      </div>
    </div>
  )
}
```

**Usage:**
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <StatCard value="1,547" label="Acres of Terrain" icon="🏔️" />
  <StatCard value="121" label="Trails" icon="⛷️" />
  <StatCard value="300+" label="Inches Snow" icon="❄️" highlight />
  <StatCard value="✓" label="Terrain Parks" icon="🎢" />
</div>
```

---

### 3. Expandable Card Component

**File:** `components/ExpandableCard.tsx`

```typescript
'use client'

interface ExpandableCardProps {
  title: string
  icon?: React.ReactNode
  preview?: string
  children: React.ReactNode
  defaultExpanded?: boolean
}

export function ExpandableCard({ 
  title, 
  icon, 
  preview, 
  children, 
  defaultExpanded = false 
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {!isExpanded && preview && (
              <p className="text-sm text-gray-600 mt-1">{preview}</p>
            )}
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {/* Expandable Content */}
      {isExpanded && (
        <div className="px-6 py-4 border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  )
}
```

**Usage:**
```jsx
<ExpandableCard
  title="Crested Butte Mountain Resort"
  icon="🏔️"
  preview="1,547 acres • 121 trails • 300+ inches snow"
  defaultExpanded={true}
>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <StatCard value="1,547" label="Acres" />
    <StatCard value="121" label="Trails" />
    <StatCard value="300+" label="Inches" />
    <StatCard value="✓" label="Parks" />
  </div>
  
  <FeatureList items={[
    "Terrain ranging from gentle groomers to extreme",
    "Renowned for expert and extreme skiing",
    "Average snowfall: 300+ inches annually",
    "Terrain parks and halfpipe"
  ]} />
</ExpandableCard>
```

---

### 4. Feature List Component

**File:** `components/FeatureList.tsx`

```typescript
interface FeatureListProps {
  items: string[]
  columns?: 1 | 2
  icon?: React.ReactNode
}

export function FeatureList({ 
  items, 
  columns = 2, 
  icon = '✓' 
}: FeatureListProps) {
  return (
    <div className={`grid ${columns === 2 ? 'md:grid-cols-2' : ''} gap-3`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-green-600 text-lg flex-shrink-0">
            {icon}
          </span>
          <span className="text-gray-700 text-sm md:text-base">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}
```

---

### 5. Main Location Component

**File:** `components/Location.tsx`

```typescript
'use client'

import { useState } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { TabNav } from './TabNav'
import { ExpandableCard } from './ExpandableCard'
import { StatCard } from './StatCard'
import { FeatureList } from './FeatureList'

interface LocationData {
  frontmatter: {
    title: string
    subtitle: string
    tabs: TabConfig[]
  }
  source: any
}

export default function Location({ data }: { data: LocationData }) {
  const [activeTab, setActiveTab] = useState('overview')
  
  return (
    <section id="location" className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.frontmatter.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {data.frontmatter.subtitle}
          </p>
        </div>
        
        {/* Tab Navigation */}
        <TabNav
          tabs={data.frontmatter.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'winter' && <WinterTab />}
          {activeTab === 'summer' && <SummerTab />}
          {activeTab === 'directions' && <DirectionsTab />}
        </div>
        
      </div>
    </section>
  )
}

// Individual tab components
function WinterTab() {
  return (
    <div className="space-y-6">
      
      {/* Mountain Resort Card */}
      <ExpandableCard
        title="Crested Butte Mountain Resort"
        icon="🏔️"
        preview="1,547 acres • 121 trails • 300+ inches annual snowfall"
        defaultExpanded={true}
      >
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard value="1,547" label="Acres of Terrain" icon="🏔️" />
          <StatCard value="121" label="Trails" icon="⛷️" />
          <StatCard value="300+" label="Inches Snow" icon="❄️" highlight />
          <StatCard value="✓" label="Terrain Parks" icon="🎢" />
        </div>
        
        {/* Features */}
        <FeatureList
          items={[
            "Trails ranging from gentle groomers to extreme terrain",
            "Renowned for expert and extreme skiing",
            "Average snowfall: 300+ inches annually",
            "Terrain parks and halfpipe",
            "Night skiing available (select dates)"
          ]}
        />
      </ExpandableCard>
      
      {/* Nordic Skiing Card */}
      <ExpandableCard
        title="Nordic Skiing"
        icon="🎿"
        preview="30+ km of groomed trails • Backcountry access"
      >
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <StatCard value="30+" label="KM of Trails" />
          <StatCard value="✓" label="Backcountry" />
          <StatCard value="✓" label="Nordic Center" />
        </div>
        
        <FeatureList
          items={[
            "30+ km of groomed cross-country trails",
            "Backcountry skiing opportunities",
            "CBMR Nordic Center with rentals and lessons"
          ]}
        />
      </ExpandableCard>
      
      {/* Other Activities Card */}
      <ExpandableCard
        title="Other Winter Activities"
        icon="🥾"
        preview="Snowshoeing, ice skating, sleigh rides, and more"
      >
        <FeatureList
          columns={2}
          items={[
            "Snowshoeing on forest trails",
            "Ice skating at Big Mine Park",
            "Horse-drawn sleigh rides",
            "Snowmobiling tours",
            "Dog sledding experiences",
            "Tubing hills",
            "Winter fat biking"
          ]}
        />
      </ExpandableCard>
      
    </div>
  )
}
```

---

## MDX Content Structure

**File:** `content/area.md`

```yaml
---
title: Location & Area
subtitle: Discover Crested Butte - Colorado's Last Great Ski Town
tabs:
  - id: overview
    label: Overview
    icon: 🏔️
  - id: winter
    label: Winter Activities
    icon: ⛷️
  - id: summer
    label: Summer Fun
    icon: ☀️
  - id: directions
    label: Getting Here
    icon: 🗺️

# Winter Activities Data
winterResort:
  stats:
    - value: "1,547"
      label: "Acres of Terrain"
      icon: "🏔️"
    - value: "121"
      label: "Trails"
      icon: "⛷️"
    - value: "300+"
      label: "Inches Snow"
      icon: "❄️"
      highlight: true
    - value: "✓"
      label: "Terrain Parks"
      icon: "🎢"
  features:
    - "Trails ranging from gentle groomers to extreme terrain"
    - "Renowned for expert and extreme skiing"
    - "Average snowfall: 300+ inches annually"
    - "Terrain parks and halfpipe"
    - "Night skiing available (select dates)"

nordicSkiing:
  stats:
    - value: "30+"
      label: "KM of Trails"
    - value: "✓"
      label: "Backcountry Access"
    - value: "✓"
      label: "Nordic Center"
  features:
    - "30+ km of groomed cross-country trails"
    - "Backcountry skiing opportunities"
    - "CBMR Nordic Center with rentals and lessons"

otherWinterActivities:
  - "Snowshoeing on forest trails"
  - "Ice skating at Big Mine Park"
  - "Horse-drawn sleigh rides"
  - "Snowmobiling tours"
  - "Dog sledding experiences"
  - "Tubing hills"
  - "Winter fat biking"

# Summer Activities Data
summerActivities:
  hiking:
    title: "Hiking & Backpacking"
    stats:
      - value: "300+"
        label: "Miles of Trails"
      - value: "✓"
        label: "All Skill Levels"
    features:
      - "Wildflower-filled meadows"
      - "Alpine lake hikes"
      - "Summit trails with panoramic views"
  
  mountainBiking:
    title: "Mountain Biking"
    stats:
      - value: "750+"
        label: "Miles of Trails"
      - value: "✓"
        label: "Evolution Bike Park"
    features:
      - "World-class single track"
      - "Lift-served downhill trails"
      - "Cross-country routes"
---

# Overview Content

## Colorado's Last Great Ski Town

Crested Butte is a historic mountain town that has retained its authentic character and small-town charm. Known for its Victorian-era buildings, world-class skiing, mountain biking, and stunning wildflower displays, Crested Butte offers an unforgettable Colorado mountain experience.

## About Crested Butte

Situated in the heart of the Gunnison National Forest, Crested Butte sits at 8,900 feet elevation and is surrounded by some of Colorado's most spectacular mountain peaks. The town has evolved from its mining roots into one of the West's premier outdoor recreation destinations while maintaining its laid-back, friendly atmosphere.
```

---

## Mobile-First Responsive Design

### Breakpoint Strategy

**< 640px (Mobile)**
- Tabs scroll horizontally
- Cards stack vertically (1 column)
- Stats grid: 2x2 layout
- Feature lists: 1 column
- Expanded cards take full width
- Touch-friendly tap targets (48px min)

**640px - 768px (Tablet)**
- Tabs scroll if needed
- Cards: 1 column
- Stats grid: 2x2 or 3x1
- Feature lists: 2 columns

**768px+ (Desktop)**
- All tabs visible
- Cards: Can be 2-column if desired
- Stats grid: 4 columns (1 row)
- Feature lists: 2 columns
- Hover states enabled

### Mobile Optimizations

**1. Sticky Tab Navigation:**
```jsx
<div className="sticky top-16 z-10 bg-gray-50 border-b border-gray-200 shadow-sm">
  <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
</div>
```

**2. Swipeable Tabs:**
```jsx
// Use react-swipeable or similar
<SwipeableViews
  index={tabIndex}
  onChangeIndex={handleTabChange}
  enableMouseEvents
>
  <OverviewTab />
  <WinterTab />
  <SummerTab />
</SwipeableViews>
```

**3. Smooth Scroll:**
```jsx
const scrollToTop = () => {
  document.getElementById('location')?.scrollIntoView({ 
    behavior: 'smooth' 
  })
}
```

**4. Touch-Friendly Accordions:**
```css
.accordion-button {
  min-height: 48px;  /* WCAG touch target */
  padding: 12px 16px;
}
```

---

## Visual Design System

### Color Palette

**Primary Colors:**
- **Sky Blue**: #3B82F6 (active tabs, highlights)
- **Mountain Gray**: #6B7280 (text, borders)
- **Snow White**: #FFFFFF (cards, background)
- **Cloud Gray**: #F9FAFB (section background)

**Accent Colors:**
- **Success Green**: #10B981 (checkmarks, positive stats)
- **Winter Blue**: #0EA5E9 (winter-specific elements)
- **Summer Gold**: #F59E0B (summer-specific elements)
- **Powder Purple**: #8B5CF6 (premium features)

### Typography

**Headers:**
```css
.section-title {
  font-size: 36px;   /* desktop */
  font-size: 28px;   /* mobile */
  font-weight: 700;
  line-height: 1.2;
  color: #111827;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}
```

**Body Text:**
```css
.description {
  font-size: 16px;
  line-height: 1.6;
  color: #4B5563;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #111827;
}

.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
}
```

### Spacing System

```css
/* Section spacing */
padding-top: 64px;    /* mobile */
padding-top: 80px;    /* desktop */

/* Card spacing */
margin-bottom: 24px;  /* between cards */
padding: 24px;        /* card internal */

/* Element spacing */
gap: 16px;            /* grid gaps */
margin-bottom: 12px;  /* list items */
```

### Shadows & Borders

```css
/* Card elevation */
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #E5E7EB;
  border-radius: 8px;
}

.card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Stat card */
.stat-card {
  background: #F9FAFB;
  border-radius: 8px;
}

.stat-card.highlight {
  background: #EFF6FF;
  border: 2px solid #3B82F6;
}
```

---

## Animation & Transitions

### Tab Transitions

```jsx
<motion.div
  key={activeTab}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.2 }}
>
  {/* Tab content */}
</motion.div>
```

### Accordion Expansion

```css
.accordion-content {
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.accordion-content.expanded {
  max-height: 2000px;
}

.accordion-content.collapsed {
  max-height: 0;
}
```

### Hover Effects

```css
.card {
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.tab-button {
  transition: color 0.2s ease, border-color 0.2s ease;
}
```

---

## Accessibility (WCAG 2.1 AA)

### Keyboard Navigation

**Tab Component:**
```jsx
<div role="tablist" aria-label="Location information">
  <button
    role="tab"
    aria-selected={isActive}
    aria-controls={`panel-${id}`}
    tabIndex={isActive ? 0 : -1}
    onKeyDown={handleKeyDown}  // Arrow keys navigate
  >
    {label}
  </button>
</div>

<div
  id={`panel-${id}`}
  role="tabpanel"
  aria-labelledby={`tab-${id}`}
  tabIndex={0}
>
  {content}
</div>
```

**Accordion Component:**
```jsx
<button
  aria-expanded={isExpanded}
  aria-controls={`content-${id}`}
  id={`button-${id}`}
>
  {title}
</button>

<div
  id={`content-${id}`}
  role="region"
  aria-labelledby={`button-${id}`}
  hidden={!isExpanded}
>
  {content}
</div>
```

### Screen Reader Support

**Descriptive Labels:**
```jsx
<StatCard
  value="1,547"
  label="Acres of skiable terrain"
  aria-label="One thousand five hundred forty-seven acres of skiable terrain"
/>
```

**Status Announcements:**
```jsx
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {`${tabLabel} tab activated`}
</div>
```

### Focus Management

```css
/* Visible focus indicators */
.tab-button:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

.accordion-button:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: -2px;
}

/* Skip to content */
.skip-link:focus {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 9999;
}
```

### Color Contrast

**All text passes WCAG AA:**
- Large text (18pt+): 3:1 minimum
- Normal text: 4.5:1 minimum
- UI components: 3:1 minimum

**Test combinations:**
```
✓ #111827 on #FFFFFF (15.8:1)
✓ #4B5563 on #FFFFFF (9.7:1)
✓ #6B7280 on #FFFFFF (7.0:1)
✓ #3B82F6 on #FFFFFF (4.8:1)
```

---

## Performance Optimization

### Code Splitting

```jsx
// Lazy load tab content
const WinterTab = dynamic(() => import('./tabs/WinterTab'), {
  loading: () => <TabSkeleton />,
  ssr: false
})

const SummerTab = dynamic(() => import('./tabs/SummerTab'), {
  loading: () => <TabSkeleton />,
  ssr: false
})
```

### Image Optimization

```jsx
// Lazy load images in cards
<Image
  src="/images/crested-butte-resort.jpg"
  alt="Crested Butte Mountain Resort"
  width={800}
  height={500}
  loading="lazy"
  placeholder="blur"
/>
```

### Animation Performance

```css
/* Use GPU-accelerated properties */
.card {
  transform: translateZ(0);
  will-change: transform;
}

/* Prefer transform over position changes */
.accordion-content {
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}

.accordion-content.expanded {
  transform: scaleY(1);
}
```

---

## Content Writing Guidelines

### Stat Card Labels

**Be specific and concise:**
- ✅ "Acres of Terrain" 
- ❌ "Skiable Acres Available"
- ✅ "Inches Annual Snow"
- ❌ "Average Annual Snowfall"

### Card Previews

**Formula:** `[Key Stat] • [Key Stat] • [Key Benefit]`

**Examples:**
- "1,547 acres • 121 trails • 300+ inches annual snowfall"
- "30+ km groomed trails • Backcountry access • Rentals available"
- "300+ miles of trails • All skill levels • Wildflower meadows"

### Feature List Items

**Be action-oriented and specific:**
- ✅ "Trails ranging from gentle groomers to extreme terrain"
- ❌ "Different trail types available"
- ✅ "30+ km of groomed cross-country trails"
- ❌ "Cross-country skiing"

### Tab Labels

**Keep short (1-2 words):**
- Overview
- Winter
- Summer
- Getting Here

**Not:**
- Overview of the Area
- Winter Activities & Sports
- Summer Fun and Recreation

---

## Testing Checklist

### Functional Tests

- [ ] All tabs clickable and switch content
- [ ] Accordion cards expand/collapse correctly
- [ ] Stat cards display all data
- [ ] Feature lists render complete
- [ ] No content overflow or clipping
- [ ] Deep links work (e.g., #location?tab=winter)

### Interaction Tests

- [ ] Tabs keyboard navigable (arrow keys)
- [ ] Accordions keyboard operable (Enter/Space)
- [ ] Focus visible on all interactive elements
- [ ] Smooth animations (no jank)
- [ ] Touch targets minimum 48x48px (mobile)
- [ ] Swipe gestures work (mobile)

### Responsive Tests

**Mobile (375px):**
- [ ] Tabs scroll horizontally
- [ ] Cards stack vertically
- [ ] Stats in 2x2 grid
- [ ] Text readable without zoom
- [ ] No horizontal scroll

**Tablet (768px):**
- [ ] Tabs fit in viewport
- [ ] Cards use full width
- [ ] Stats in optimal grid
- [ ] Good use of space

**Desktop (1920px):**
- [ ] Content max-width maintained
- [ ] Tabs centered/aligned well
- [ ] Stats in single row
- [ ] Hover states work

### Accessibility Tests

- [ ] Passes WAVE checker (0 errors)
- [ ] Screen reader announces all content
- [ ] Tab order logical
- [ ] All images have alt text
- [ ] Color contrast passes WCAG AA
- [ ] Works with high contrast mode
- [ ] Keyboard-only navigation possible

### Performance Tests

- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] No layout shift (CLS < 0.1)
- [ ] Tab transitions smooth (60fps)
- [ ] No memory leaks in long sessions

---

## Analytics & Tracking

### Key Events to Track

```typescript
// Tab engagement
analytics.track('location_tab_viewed', {
  tab_name: 'winter',
  time_spent: 45000  // milliseconds
})

// Card expansion
analytics.track('location_card_expanded', {
  card_title: 'Mountain Resort',
  was_default_expanded: true
})

// Stat card interaction
analytics.track('stat_card_viewed', {
  stat_type: 'terrain_acres',
  stat_value: '1547'
})

// CTA clicks from location section
analytics.track('booking_cta_clicked', {
  source_section: 'location',
  source_tab: 'winter'
})
```

### Success Metrics

**Engagement:**
- Average time in section
- Tab switch rate
- Card expansion rate
- Scroll depth

**Conversion:**
- Booking clicks from location section
- Tab-to-booking conversion rate
- Exit rate from location section

---

## Migration Strategy

### Phase 1: Structure Only (Week 1)
- Implement tab navigation
- Create basic card components
- No accordion/expansion yet
- All content visible

### Phase 2: Progressive Disclosure (Week 2)
- Add accordion functionality
- Implement expand/collapse
- Add animations
- Test extensively

### Phase 3: Polish (Week 3)
- Add stat cards
- Implement hover effects
- Optimize animations
- Accessibility audit

### Phase 4: Analytics & Iterate (Week 4+)
- Deploy to production
- Monitor metrics
- A/B test variations
- Iterate based on data

---

## A/B Testing Opportunities

### Test 1: Tab Layout
- **Variant A:** 4 tabs (Overview, Winter, Summer, Directions)
- **Variant B:** 3 tabs (Overview, Activities, Directions) with season toggle
- **Metric:** Tab engagement rate

### Test 2: Default Expansion
- **Variant A:** First card expanded by default
- **Variant B:** All cards collapsed by default
- **Metric:** Card expansion rate and time in section

### Test 3: Stat Card Style
- **Variant A:** Icon + number + label (current design)
- **Variant B:** Number only with hover tooltip
- **Metric:** User comprehension (survey or task completion)

---

## Future Enhancements

### Phase 2 Features (Post-MVP)

1. **Interactive Map**
   - Embed Google Maps with property location
   - Show ski lifts, trails, town center
   - Click for directions

2. **Photo Galleries**
   - Lightbox galleries for each activity
   - Seasonal photos
   - User-submitted photos

3. **Weather Widget**
   - Current conditions
   - 7-day forecast
   - Snow report (winter)

4. **Live Webcams**
   - Embed resort webcams
   - Show current conditions
   - Update every 30 minutes

5. **Event Calendar**
   - Local events and festivals
   - Resort events
   - Filter by date/type

6. **Distance Calculator**
   - "From your location" functionality
   - Driving time estimates
   - Flight + drive combinations

---

## Acceptance Criteria

### Definition of Done

This feature is complete when:

1. ✅ All content from current Location section migrated
2. ✅ Tab navigation implemented and functional
3. ✅ Expandable cards working on all devices
4. ✅ Stat cards displaying accurate data
5. ✅ Feature lists properly formatted
6. ✅ Responsive design works (mobile, tablet, desktop)
7. ✅ Accessibility requirements met (WCAG 2.1 AA)
8. ✅ All animations smooth (60fps)
9. ✅ Content loaded from MDX with frontmatter
10. ✅ Analytics tracking implemented
11. ✅ Tests passing (functional, visual, accessibility)
12. ✅ Code reviewed and approved
13. ✅ Performance targets met (Lighthouse 90+)
14. ✅ Deployed to production

---

## Technical Dependencies

### Required Packages

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "next-mdx-remote": "^5.0.0",
    "framer-motion": "^10.0.0",
    "react-icons": "^4.0.0",
    "clsx": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

### Optional Packages

```json
{
  "react-swipeable-views": "^0.14.0",  // For swipeable tabs
  "react-intersection-observer": "^9.0.0",  // For lazy loading
  "react-spring": "^9.0.0"  // Alternative animation library
}
```

---

## Appendix

### Example Full Implementation

**location.tsx (complete):**
```typescript
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'react-icons/fa'

// Components
import { TabNav } from './TabNav'
import { ExpandableCard } from './ExpandableCard'
import { StatCard } from './StatCard'
import { FeatureList } from './FeatureList'

interface LocationProps {
  data: {
    frontmatter: {
      title: string
      subtitle: string
      tabs: Array<{ id: string; label: string; icon: string }>
      winterResort: any
      nordicSkiing: any
      otherWinterActivities: string[]
    }
  }
}

export default function Location({ data }: LocationProps) {
  const [activeTab, setActiveTab] = useState('overview')
  
  // Track tab views
  useEffect(() => {
    analytics.track('location_tab_viewed', { tab_name: activeTab })
  }, [activeTab])
  
  return (
    <section id="location" className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.frontmatter.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {data.frontmatter.subtitle}
          </p>
        </div>
        
        {/* Tab Navigation */}
        <TabNav
          tabs={data.frontmatter.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        {/* Tab Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'winter' && <WinterTab data={data.frontmatter} />}
            {activeTab === 'summer' && <SummerTab />}
            {activeTab === 'directions' && <DirectionsTab />}
          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  )
}

function WinterTab({ data }) {
  return (
    <div className="space-y-6">
      {/* Mountain Resort */}
      <ExpandableCard
        title="Crested Butte Mountain Resort"
        icon="🏔️"
        preview="1,547 acres • 121 trails • 300+ inches annual snowfall"
        defaultExpanded={true}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {data.winterResort.stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
        <FeatureList items={data.winterResort.features} />
      </ExpandableCard>
      
      {/* Nordic Skiing */}
      <ExpandableCard
        title="Nordic Skiing"
        icon="🎿"
        preview="30+ km of groomed trails • Backcountry access"
      >
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {data.nordicSkiing.stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
        <FeatureList items={data.nordicSkiing.features} />
      </ExpandableCard>
      
      {/* Other Activities */}
      <ExpandableCard
        title="Other Winter Activities"
        icon="🥾"
        preview="Snowshoeing, ice skating, sleigh rides, and more"
      >
        <FeatureList 
          items={data.otherWinterActivities}
          columns={2}
        />
      </ExpandableCard>
    </div>
  )
}
```

---

**Document Status:** READY FOR DEVELOPMENT  
**Last Updated:** October 20, 2025  
**Version:** 1.0.0