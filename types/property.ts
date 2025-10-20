// types/property.ts

export interface PropertyStats {
  guests: number
  bedrooms: number
  bathrooms: number
  squareFeet: number
  rating: number
  reviewCount?: number
}

export interface PropertyFrontmatter extends PropertyStats {
  title: string
  features: string[]
  opening?: string
  closing?: string
}

export interface PropertyContent {
  frontmatter: PropertyFrontmatter
  content: string
}
