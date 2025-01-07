import { getCategories } from "@/repository/get-categories"

test("getCategories", async () => {
  const categories = await getCategories()
  expect(Array.isArray(categories)).toBe(true)
  expect(categories[0]).toEqual({
    title: expect.any(String),
    categoryFields: expect.any(Object),
  })
})
