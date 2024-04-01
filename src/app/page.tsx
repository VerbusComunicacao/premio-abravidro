import Background from '@/components/background'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import { Category } from '@/components/category'
import { Subtitle } from '@/components/subtitle'
import AbravidroImg from '../../public/abravidro.png'
import NMBImg from '../../public/NMB.png'
import Image from 'next/image'
import Link from 'next/link'
import { HeroSection } from '@/components/hero-section'
import { Regulamento } from '@/components/regulamento'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Background />
      <Header />
      <Container>
        <HeroSection />
      </Container>
      <div className="bg-white/80 py-10 mt-10">
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
      </div>
      <div className="py-10 flex flex-col justify-center bg-blue-950">
        <Container>
          <p className="text-xl text-center text-primary-foreground pb-5 lg:text-2xl">
            <span className="font-bold text-red-300">Fique atento: </span>
            inscrições abertas a partir de 8 de abril
          </p>
          <p className="text-xl pb-4 text-center mt-5 font-bold">
            Organização:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
            <Link href="https://abravidro.org.br/">
              <Image width={185} src={AbravidroImg} alt="Logo Abravidro" />
            </Link>
            <Link href="https://nuernbergmesse-brasil.com.br/">
              <Image width={185} src={NMBImg} alt="NürnbergMesse Brasil" />
            </Link>
          </div>
        </Container>
      </div>
    </main>
  )
}
