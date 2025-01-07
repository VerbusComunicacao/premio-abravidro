import { fetchAPI } from "@/lib/wordpress";
import { Category } from "@/types/category";

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

    return categories as Category[]
 
} 