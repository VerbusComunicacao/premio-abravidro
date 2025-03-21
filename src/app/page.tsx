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
              <Category
                title={'Fabricantes de vidro plano'}
                link="https://docs.google.com/forms/d/e/1FAIpQLSelDt1rNJBTrWGK1gKazI5Hm5-K2PvZ5nXUy-28AuGZVGacqA/viewform?usp=header"
              />

              <Category
                title={'Processadores de vidro'}
                link="https://docs.google.com/forms/d/e/1FAIpQLSfqkq_cYapRfsME3MWMlrUYIpCs_a6j38nmuMnSd-zdX4Cu1A/viewform?usp=header"
              />

              <Category
                title="Fabricante de máquinas e equipamentos de pré-processamento e laminação de vidros"
                link="https://docs.google.com/forms/d/e/1FAIpQLSfqkq_cYapRfsME3MWMlrUYIpCs_a6j38nmuMnSd-zdX4Cu1A/viewform?usp=headerhttps://docs.google.com/forms/d/e/1FAIpQLSeDKyJQNwB5pHizIqGmy4w0hMmGGMAo5LZmQD7eb_sydsM5Mg/viewform?usp=header"
              />

              <Category
                title="Fabricantes de fornos de têmperas"
                link="https://docs.google.com/forms/d/e/1FAIpQLSeDKyJQNwB5pHizIqGmy4w0hMmGGMAo5LZmQD7eb_sydsM5Mg/viewform?usp=headerhttps://docs.google.com/forms/d/e/1FAIpQLSfMjDYhdLBbVTkOONJXc7K4QCFBU5DReWoxV1kcjtKWnkWELg/viewform?usp=header"
              />

              <Category
                title="Fabricantes de rebolos e brocas"
                link="https://docs.google.com/forms/d/e/1FAIpQLSfRIwu0RR42xmMOS18CJP_mJIlIF1U2V9n2SlVs5GxdhKwkNw/viewform?usp=header"
              />

              <Category
                title="Fabricante de insumos para o processamento de vidros (exceto rebolos e brocas)"
                link="https://docs.google.com/forms/d/e/1FAIpQLSe-GAFNTs5QaKe5_eExqdRrrOR0DYI85U4BwQng19hHxjEWvw/viewform?usp=header"
              />

              <Category
                title="Fabricante de ferragens e acessórios para vidro"
                link="https://docs.google.com/forms/d/e/1FAIpQLSe9XZpLNtdSZHBF2GhQCfClG-X6BvRs4KGJ6AWPmdi1IEDwhA/viewform?usp=header"
              />

              <Category
                title="Fabricantes de sistemas de guarda-corpos de vidro"
                link="https://docs.google.com/forms/d/e/1FAIpQLSc7tLAwrRmemlI93LaTCYZvuu4ayb3fpeKzAaNXzy0S6SGJMQ/viewform?usp=header"
              />

              <Category
                title="Fabricantes de sistemas de envidraçamento de sacadas"
                link="https://docs.google.com/forms/d/e/1FAIpQLSeJTEmhwLFL0lmQOT7wOLqvMrAeW5SKXomH91rht1G9yuTKtQ/viewform?usp=header"
              />

              <Category
                title="Fabricante de kits de boxes de vidro para banheiro"
                link="https://docs.google.com/forms/d/e/1FAIpQLSfha8BpLP401daGcMMejwyH48K3DIN-VPT9V7K4yLhN6cs2xQ/viewform?usp=header"
              />

              <Category
                title="Fabricantes de sistemas de portas de vidro"
                link="https://docs.google.com/forms/d/e/1FAIpQLScohI2jWAzre4sXuaB5Q6g7-OXw-8CkNZcC5NKpBMAAMiavAA/viewform?usp=header"
              />

              <Category
                title="Desenvolvedores de softwares para o mercado vidreiro"
                link="https://docs.google.com/forms/d/e/1FAIpQLSeiy7you-JXUGGlFNeszVDbM75QQglUuEqamDo5E181u0mtlg/viewform?usp=header"
              />

              <Category
                title="Vidraçarias"
                link="https://docs.google.com/forms/d/e/1FAIpQLSekF3X0aVgTNXP6wpKrx8nfDq0wKlcuFQbDeCNih1y89GHzhg/viewform?usp=header"
              />

              <Category
                title="Projetos que empregam vidros"
                callAction="Inscreva ou indique"
                link="https://docs.google.com/forms/d/e/1FAIpQLSdRIm571Ol9CrSb73_z5u8zcNaXmBGjzu7h763OlO0Q43U_Kw/viewform?usp=header"
              >
                {/* Os concorrentes desta categoria serão indicados pela organização
                do prêmio e, para concorrer, precisarão aceitar a indicação,
                enviando fotos e documentos que suportem a indicação. */}
              </Category>
            </div>
          </div>
          <div className="mt-10">
            <Link
              className="bg-background p-5 rounded-lg font-bold"
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
