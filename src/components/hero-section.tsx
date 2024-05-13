'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'
import Link from 'next/link'

export function HeroSection() {
  return (
    <>
      <motion.div>
        <Logo />
      </motion.div>
      <Link
        className="block w-96 text-blue-950 text-center mt-5 bg-yellow-500 hover:scale-110 transition-all duration-200 px-4 py-4 rounded-lg text-xl font-bold"
        href="/votacao"
      >
        Vote nas suas empresas favoritas
      </Link>
      <div className="max-w-md mt-12 [&>p]:pt-5">
        <Subtitle color="secondary">
          Celebrando o trabalho
          <br className="hidden md:inline" /> do setor
        </Subtitle>
        <ParagraphAnimated>
          A Abravidro e a NürnbergMesse Brasil se juntaram para criar a mais
          nova premiação do segmento vidreiro nacional, o Prêmio Abravidro Glass
          South America. A iniciativa tem o objetivo de reconhecer as marcas que
          atuam nos diversos elos de nossa cadeia, trabalhando com produtos de
          qualidade e excelência no atendimento aos clientes.
        </ParagraphAnimated>
        <ParagraphAnimated>
          O prêmio terá periodicidade bienal, sendo apresentado durante a Glass
          South America, a maior feira do mercado de vidro na América Latina. A
          primeira edição ocorre este ano, com cerimônia de entrega marcada para
          o dia 12 de junho, na noite do primeiro dia da mostra.
        </ParagraphAnimated>
        <ParagraphAnimated>
          Após, nesta primeira edição, receber inscrições de empresas de todo o
          Brasil, estamos em fase de validação das inscrições para, no dia 15 de
          maio, abrir o período de votação popular. Ao todo, são 10 categorias
          diferentes – confira a lista a seguir.
        </ParagraphAnimated>
        <ParagraphAnimated>
          Participe conosco dessa celebração do setor vidreiro!
        </ParagraphAnimated>
      </div>
    </>
  )
}
