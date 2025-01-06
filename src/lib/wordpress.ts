import { Category } from "@/types/category"

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://localhost/wordpress'

export async function fetchAPI(query: string) {
  const res = await fetch(`${WP_URL}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  
  const json = await res.json()
  return json.data
}
