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
              <Category
                title={'Fabricantes de vidro plano'}
                link="https://docs.google.com/forms/d/e/1FAIpQLSdyFkpVUploo2yz06sqarKoj-FfL3xiIMCEjCzxutLXK-czJw/viewform?usp=sf_link"
              />

              <Category
                title={'Processadores de vidro'}
                link="https://docs.google.com/forms/d/e/1FAIpQLSdW5ezvddFZJaNecGido2Wq86QI2u29u8oFzdQiL6Gxy3uouQ/viewform?usp=sf_link"
              />

              <Category
                title="Fabricantes de máquinas e equipamentos para processamento de vidro"
                link="https://docs.google.com/forms/d/e/1FAIpQLSetrdoD747Ztqu41NeXDhriZShvtam05OG3sFPhyOu9WQx7sg/viewform?usp=sf_link"
              />

              <Category
                title="Fabricante de insumos para o processamento de vidros"
                link="https://docs.google.com/forms/d/e/1FAIpQLSfq5loK_zUDKHkp7GJspsh-_piH093-VMtI6RzeQYAU9tOKbg/viewform?usp=sf_link"
              />

              <Category
                title="Fabricante de ferragens e acessórios para vidro"
                link=" https://docs.google.com/forms/d/e/1FAIpQLSeiiXV6HKHWr8BYhs6HnvteHMNgwS7b3J-gsz6yQUW5HcVDhw/viewform?usp=sf_link"
              />

              <Category
                title="Fabricantes de sistemas para envidraçamentos"
                link="https://docs.google.com/forms/d/e/1FAIpQLSe3CTeMPXn-kHPTFW9dqig_WYOL2lslVXqdc-tE9zUcAFcOhg/viewform?usp=sf_link"
              />

              <Category
                title="Fabricantes de selantes, gaxetas, adesivos e materiais de vedação"
                link="https://docs.google.com/forms/d/e/1FAIpQLSczfxrACoyMI4u0d8ZvOz1rvfGvOPLnLwAb605GAGY1bbf0yQ/viewform?usp=sf_link"
              />

              <Category
                title={'Vidraçaria'}
                link="https://docs.google.com/forms/d/e/1FAIpQLSdvcSr736BPPzDAeYl83pTADfy7R0wSLo50mN3v-ybECypBFg/viewform?usp=sf_link"
              />

              <Category
                link="https://docs.google.com/forms/d/e/1FAIpQLSeNVD1MWlN_D0MBKcoUYoDALFv6G9-EIcjxyo2cHufnxIy66w/viewform?usp=sf_link"
                title={'Projetos e obras que empregam vidros'}
                callAction="Indique um projeto"
              >
                Os concorrentes desta categoria serão indicados pela organização
                do prêmio e, para concorrer, precisarão aceitar a indicação,
                enviando fotos e documentos que suportem a indicação.
              </Category>
              <Category
                link="https://docs.google.com/forms/d/e/1FAIpQLSes4VByNuKh81nAGhxW-Le1T2t-xZVNrbRk6W_rWFwl6sOWdw/viewform?usp=sf_link"
                title={'Arquiteto especificador de obras com vidro'}
                callAction="Indique um profissional"
              >
                Os concorrentes desta categoria serão indicados pela organização
                do prêmio e, para concorrer, precisarão aceitar a indicação,
                enviando fotos e documentos que suportem a indicação.
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
