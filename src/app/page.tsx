import Background from '@/components/background'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { Category } from '@/components/category'
import { Subtitle } from '@/components/subtitle'

import { HeroSection } from '@/components/hero-section'

import Footer from '@/components/footer'
import Contact from '@/components/contact'
import Link from 'next/link'
import { Regulamento } from '@/components/regulamento'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" id="inicio">
      <Background />
      <Header />
      <Container>
        <HeroSection />
      </Container>
      <div id="categorias" className="bg-white/80 py-10 mt-10">
        <Container>
          <div className=" ">
            <Subtitle>Categorias</Subtitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mt-5 content-start">
              <Category title={'Fabricante de vidro plano'} />

              <Category title={'Processador de vidro'} />

              <Category title="Fabricante de máquinas e equipamentos de pré-processamento e laminação de vidros" />

              <Category title="Fabricante de fornos de têmpera" />

              <Category title="Fabricante de rebolos e brocas" />

              <Category title="Fabricante de insumos para o processamento de vidros (exceto rebolos e brocas)" />

              <Category title="Fabricante de ferragens e acessórios para vidro" />

              <Category title="Fabricante de sistemas de guarda-corpos de vidro" />

              <Category title="Fabricante de sistemas de envidraçamento de sacadas" />

              <Category title="Fabricante de kits de boxes de vidro para banheiro" />

              <Category title="Fabricante de sistemas de portas de vidro" />

              <Category title="Desenvolvedor de softwares para o mercado vidreiro" />

              <Category title="Vidraçaria" />

              <Category
                title="Projeto que emprega vidros"
                callAction="Inscreva um projeto"
              >
                {/* Os concorrentes desta categoria serão indicados pela organização
                do prêmio e, para concorrer, precisarão aceitar a indicação,
                enviando fotos e documentos que suportem a indicação. */}
              </Category>
            </div>
          </div>
          <div className="mt-10 flex justify-center md:justify-start">
            <Link
              className="bg-background p-5 rounded-lg font-bold block text-center w-full md:w-auto"
              href={'/vencedores'}
            >
              Conheça os vencedores da edição passada
            </Link>
          </div>
        </Container>

        <Container>
          <Regulamento />
        </Container>
        <Container>
          <Contact />
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
