// types/location.ts

export interface StatItem {
  value: string
  label: string
  icon?: string
  highlight?: boolean
}

export interface ActivitySection {
  title: string
  icon: string
  preview: string
  stats?: StatItem[]
  features: string[]
}

export interface OverviewSection {
  title: string
  icon: string
  preview: string
  description?: string
  stats?: StatItem[]
  features?: string[]
}

export interface LocationFrontmatter {
  title: string
  subtitle: string
  tabs: Array<{
    id: string
    label: string
    icon: string
  }>
  townIntro?: OverviewSection
  gettingHere?: OverviewSection
  whatMakesSpecial?: OverviewSection
  essentialInfo?: OverviewSection
  winterResort?: ActivitySection
  nordicSkiing?: ActivitySection
  otherWinterActivities?: string[]
  mountainBiking?: ActivitySection
  hiking?: ActivitySection
  wildflowers?: ActivitySection
  otherSummerActivities?: string[]
  dining?: ActivitySection
  artsAndCulture?: ActivitySection
  gettingAround?: ActivitySection
  nearbyAttractions?: ActivitySection
}

export interface LocationContent {
  frontmatter: LocationFrontmatter
  content: string
}
