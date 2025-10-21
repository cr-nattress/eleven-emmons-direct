// types/amenities.ts

export interface StatItem {
  value: string
  label: string
  icon?: string
  highlight?: boolean
}

export interface AmenityHighlight {
  icon: string
  title: string
  description: string
}

export interface AmenitySection {
  title: string
  icon: string
  preview: string
  stats?: StatItem[]
  features?: string[]
  subsections?: {
    title: string
    features: string[]
  }[]
}

export interface AmenitiesFrontmatter {
  title: string
  subtitle?: string
  highlights: AmenityHighlight[]
  kitchenDining?: AmenitySection
  livingEntertainment?: AmenitySection
  internetWorkspace?: AmenitySection
  bedroomsSleep?: AmenitySection
  bathrooms?: AmenitySection
  laundry?: AmenitySection
  outdoorSpaces?: AmenitySection
  climateComfort?: AmenitySection
  safetySecurity?: AmenitySection
  familyFriendly?: AmenitySection
  buildingAmenities?: AmenitySection
  locationFeatures?: AmenitySection
  smartHome?: AmenitySection
  whatsProvided?: AmenitySection
  whatsNotIncluded?: AmenitySection
  longTermStays?: AmenitySection
  accessibilityConvenience?: AmenitySection
  additionalServices?: AmenitySection
  testimonials?: string[]
}

export interface AmenitiesContent {
  frontmatter: AmenitiesFrontmatter
  content: string
}
