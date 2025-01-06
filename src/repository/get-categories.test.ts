import { getCategories } from "@/repository/get-categories"

test('getCategories', async () => {
  console.log(process.env.NEXT_PUBLIC_WORDPRESS_URL)
  console.log('getCategories')
  const categories = await getCategories()
  expect(Array.isArray(categories)).toBe(true)
  expect(categories[0]).toEqual({
    title: expect.any(String),
    categoryFields: expect.any(Object),
  })
})
