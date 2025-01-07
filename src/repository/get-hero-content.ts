import { fetchAPI } from "@/lib/wordpress"
import { HeroContent } from "@/types/hero-content"

export async function getHeroContent(): Promise<HeroContent> {
  const data = await fetchAPI(`
    query HeroContent {
      page(id: "hero", idType: URI) {
        title
        hero {
          subtitle
          paragraphs
        }
      }
    }
  `)

  const paragraphs = data?.page?.hero?.paragraphs
    .split("\r\n\r\n")
    .map((paragraph: string) => ({
      paragraph,
    }))

  return {
    title: data?.page?.title,
    subtitle: data?.page?.hero?.subtitle,
    paragraphs,
  }
}
