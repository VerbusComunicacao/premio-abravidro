import { getHeroContent } from "./get-hero-content"

test("getHeroContent", async () => {
  const heroContent = await getHeroContent()
  console.log(heroContent)
  expect(heroContent).toEqual({
    title: expect.any(String),
    subtitle: expect.any(String),
    paragraphs: [
      {
        paragraph: expect.any(String),
      },
    ],
  })
})
