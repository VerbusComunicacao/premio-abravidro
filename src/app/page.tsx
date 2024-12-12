import Background from '@/components/background'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { Category } from '@/components/category'
import { Subtitle } from '@/components/subtitle'

import { HeroSection } from '@/components/hero-section'

import Footer from '@/components/footer'
import { getHeroContent, getCategories } from '@/lib/wordpress'
import Link from 'next/link'

export default async function Home() {
  const heroContent = await getHeroContent()
  const categories = await getCategories()

  return (
    <main className="flex min-h-screen flex-col" id="inicio">
      <Background />
      <Header />
      <Container>
        <HeroSection content={heroContent} />
      </Container>
      <div id="categorias" className="bg-white/80 py-10 mt-10">
        <Container>
          <div>
            <Subtitle>Categorias</Subtitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mt-5 content-start">
              {categories.map((category) => (
                <Category 
                  key={category.title}
                  title={category.title}
                  callAction={category.categoryFields.callToAction}
                  link={category.categoryFields.link}
                >
                  {category.categoryFields.description}
                </Category>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Link
              className="bg-background p-5 rounded-lg font-bold"
              href={'/vencedores'}
            >
              Conheça os vencedores!
            </Link>
          </div>
        </Container>
      </div>
      <div className="py-10 flex flex-col justify-center bg-blue-950">
        <Container>
          <Footer />
        </Container>
      </div>
    </main>
  )
}
