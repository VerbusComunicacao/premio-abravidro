import Background from '@/components/background'
import { Header } from '@/components/header'
import { Container } from '@/components/container'
import Logo from '@/components/logo'
import { Category } from '@/components/category'
import { Subtitle } from '@/components/subtitle'
import AbravidroImg from '../../public/abravidro.png'
import NMBImg from '../../public/NMB.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Background />
      <Header />
      <Container>
        <Logo />
        <div className="max-w-md mt-10 [&>p]:pt-5">
          <h2 className="text-3xl font-bold">Celebrando o trabalho do setor</h2>
          <p>
            A Abravidro e a NürnbergMesse Brasil se juntaram para criar a mais
            nova premiação do segmento vidreiro nacional, o Prêmio Abravidro
            Glass South America. A iniciativa tem o objetivo de reconhecer as
            marcas que atuam nos diversos elos de nossa cadeia, trabalhando com
            produtos de qualidade e excelência no atendimento aos clientes.
          </p>
          <p>
            O prêmio terá periodicidade bienal, sendo apresentado durante a
            Glass South America, a maior feira do mercado de vidro na América
            Latina. A primeira edição ocorre este ano, com cerimônia de entrega
            marcada para o dia 12 de junho, na noite do primeiro dia da mostra.
          </p>
          <p>
            Para concorrer, as empresas deverão se inscrever gratuitamente a
            partir de 8 de abril. Ao todo, são 10 categorias diferentes –
            confira a lista a seguir.
          </p>
          <p>Participe conosco dessa celebração do setor vidreiro!</p>
        </div>
      </Container>
      <div className="bg-white/80 py-10 mt-10">
        <Container>
          <div className=" ">
            <Subtitle>Categorias</Subtitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
              <Category title={'FABRICANTE DE VIDROS PLANOS'}>
                Inclui fabricantes de <i>float</i>, espelho, vidros de controle
                solar etc.
              </Category>

              <Category title={'PROCESSADOR DE VIDROS PLANOS'}>
                Prêmio será concedido por região: Centro-Oeste, Nordeste, Norte,
                Sudeste e Sul
              </Category>

              <Category
                title={
                  'FABRICANTE DE MAQUINÁRIOS E EQUIPAMENTOS PARA PROCESSAMENTO DE VIDROS'
                }
              >
                Inclui lavadoras, lapidadoras, máquinas de corte, fornos de
                têmpera etc.
              </Category>

              <Category
                title={'FABRICANTE DE INSUMOS PARA PROCESSAMENTO DE VIDROS'}
              >
                Inclui rebolos, brocas, <i>interlayers</i> etc.
              </Category>

              <Category
                title={'FABRICANTE DE FERRAGENS E ACESSÓRIOS PARA VIDROS'}
              />

              <Category
                title={'FABRICANTE DE SISTEMAS DIVERSOS PARA ENVIDRAÇAMENTO'}
              >
                Inclui kits de boxe de banheiro, envidraçamento de sacada,
                guarda-corpos, perfis de alumínio etc.
              </Category>

              <Category title={'SELANTES, GAXETAS E ADESIVOS'}>
                Inclui materiais para vedação
              </Category>

              <Category title={'VIDRAÇARIA'} />
            </div>
          </div>
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
      <div></div>
    </main>
  )
}
