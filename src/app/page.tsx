import Background from '@/components/background'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { Category } from '@/components/category'
import { Subtitle } from '@/components/subtitle'

import { HeroSection } from '@/components/hero-section'

import Footer from '@/components/footer'
import Contact from '@/components/contact'
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
              <Category title={'Fabricantes de vidro plano'} />

              <Category title={'Processadores de vidro'} />

              <Category title="Fabricantes de máquinas e equipamentos para processamento de vidro" />

              <Category title="Fabricante de insumos para o processamento de vidros" />

              <Category title="Fabricante de ferragens e acessórios para vidro" />

              <Category title="Fabricantes de sistemas para envidraçamentos" />

              <Category title="Fabricante de selantes, gaxetas e adesivos (materiais para fixação e vedação)" />

              <Category title={'Vidraçaria'} />

              <Category
                title={'Projetos e obras que empregam vidros'}
                callAction="Indique um projeto"
              >
                {/* Os concorrentes desta categoria serão indicados pela organização
                do prêmio e, para concorrer, precisarão aceitar a indicação,
                enviando fotos e documentos que suportem a indicação. */}
              </Category>
              <Category
                title={'Arquiteto especificador de obras com vidro'}
                callAction="Indique um profissional"
              >
                {/* Os concorrentes desta categoria serão indicados pela organização
                do prêmio e, para concorrer, precisarão aceitar a indicação,
                enviando fotos e documentos que suportem a indicação. */}
              </Category>
            </div>
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
