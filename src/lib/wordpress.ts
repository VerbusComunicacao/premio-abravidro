import { Category, HeroContent } from '@/types/wordpress'

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://localhost/wordpress'

async function fetchAPI(query: string) {
  const res = await fetch(`${WP_URL}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  
  const json = await res.json()
  return json.data
}

export async function getHeroContent(): Promise<HeroContent> {
  const data = await fetchAPI(`
    query HeroContent {
      page(id: "hero", idType: URI) {
        title
        content
      }
    }
  `)
  return data?.page
}

export async function getCategories(): Promise<Category[]> {
  const data = await fetchAPI(`
    query Categories {
      categorias (first: 10) {
        edges {
          node {
            title
            categoryFields {
              callToAction
              description
              link
            }
          }
        }
      }
    }
  `)


  const categories = data?.categorias?.edges.map((edge: any) => edge.node)

  console.log('categories', categories)

  return categories as Category[]
} 