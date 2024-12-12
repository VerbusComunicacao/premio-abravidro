export interface HeroContent {
  title: string
  content: string
}

export interface Category {
  title: string
  categoryFields: {
    description?: string
    callToAction?: string
    link?: string
  }
} 