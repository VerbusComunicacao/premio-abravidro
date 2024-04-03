import Background from '@/components/background'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { Category } from '@/components/category'
import { Subtitle } from '@/components/subtitle'

import { HeroSection } from '@/components/hero-section'
import { Regulamento } from '@/components/regulamento'

import Footer from '@/components/footer'
import Contact from '@/components/contact'

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
              <Category title={'Fabricante de vidro plano'}>
                Inclui fabricantes e <i>float</i>, espelho, vidros de controle
                solar, etc.
              </Category>

              <Category title={'Processador'}>
                Prêmio por região: Norte, Nordeste, Centro-Oeste, Sudeste, Sul.
              </Category>

              <Category
                title={
                  'Fabricante de máquinas e equipamentos para processamento de vidro'
                }
              >
                Inclui lavadoras, lapidadoras, máquinas de corte, fornos de
                têmpera, etc.
              </Category>

              <Category
                title={'Fabricante de insumos para o processamento de vidros'}
              >
                Inclui rebolos, brocas, <i>interlayers</i>.
              </Category>

              <Category
                title={'Fabricante de ferragens e acessórios para vidro'}
              />

              <Category
                title={'Fabricante de ferragens e acessórios para vidro'}
              >
                Inclui kits de boxe de banheiro, envidraçamento de sacada,
                guarda-corpos e perfis de alumínio.
              </Category>

              <Category title={'Selantes, gaxetas e adesivos'}>
                Materiais para fixação e vedação.
              </Category>

              <Category title={'Vidraçaria'}>
                Prêmio por região: Norte, Nordeste, Centro-Oeste, Sudeste, Sul.
              </Category>

              <Category title={'Projeto/Obra'}>
                Residencial ou Comercial.
              </Category>

              <Category title={'Arquiteto especificador de obras com vidro'}>
                Residencial ou Comercial.
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
