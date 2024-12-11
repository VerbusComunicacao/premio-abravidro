'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'
// import Link from 'next/link'

export function HeroSection() {
  return (
    <>
      <motion.div>
        <Logo />
      </motion.div>
      {/* <Link
        className="block w-96 text-blue-950 text-center mt-5 bg-yellow-500 hover:scale-110 transition-all duration-200 px-4 py-4 rounded-lg text-xl font-bold"
        href="/votacao"
      >
        Vote nas suas empresas favoritas
      </Link> */}
      <div className="max-w-md mt-12 [&>p]:pt-5">
        <Subtitle color="secondary">
          Celebrando o trabalho
          <br className="hidden md:inline" /> do setor
        </Subtitle>
        <ParagraphAnimated>
          A Abravidro e a NürnbergMesse Brasil criaram o Prêmio Abravidro Glass
          South America, iniciativa com o objetivo de reconhecer as marcas que
          atuam nos diversos elos da cadeia vidreira.
        </ParagraphAnimated>
        <ParagraphAnimated>
          No dia 12 de junho de 2024, primeiro dia da 15ª Glass South America,
          realizou-se a cerimônia de entrega da 1ª edição do prêmio. Os números
          da edição de estreia foram grandiosos: dez categorias contempladas,
          105 empresas e 94 obras com vidro inscritas, 31 escritórios de
          arquitetura mencionados e 6 mil votos na fase de votação popular.
        </ParagraphAnimated>
        <ParagraphAnimated>
          Aguarde! Em breve, divulgaremos informações sobre a próxima edição!
        </ParagraphAnimated>
      </div>
    </>
  )
}
