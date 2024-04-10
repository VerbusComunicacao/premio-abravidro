'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'

export function HeroSection() {
  return (
    <>
      <motion.div>
        <Logo />
      </motion.div>
      <div className="max-w-md mt-10 [&>p]:pt-5">
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
          Para concorrer, as empresas deverão se inscrever gratuitamente a
          partir de 8 de abril. Ao todo, são 10 categorias diferentes – confira
          a lista a seguir.
        </ParagraphAnimated>
        <ParagraphAnimated>
          Participe conosco dessa celebração do setor vidreiro!
        </ParagraphAnimated>
      </div>
    </>
  )
}
