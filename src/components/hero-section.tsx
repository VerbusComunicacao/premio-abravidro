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
      {/* <Link
        className="block w-96 text-blue-950 text-center mt-5 bg-yellow-500 hover:scale-110 transition-all duration-200 px-4 py-4 rounded-lg text-xl font-bold"
        href="/votacao"
      >
        Vote nas suas empresas favoritas
      </Link> */}
      <div className="max-w-md mt-12 [&>p]:pt-5">
        <Subtitle color="secondary">
          Inscrições encerradas! Em breve, anunciaremos as empresas concorrentes
          <br className="hidden md:inline" />
        </Subtitle>
        <ParagraphAnimated>
          Criado em 2024 pela Abravidro e a NürnbergMesse Brasil para homenagear
          marcas que atuam nos diversos elos da cadeia vidreira, o Prêmio
          Abravidro Glass South America está de volta em 2025, com cerimônia de
          entrega agendada para 3 de setembro, primeiro dia da Glass South
          America deste ano.
        </ParagraphAnimated>
        <ParagraphAnimated>
          Temos agora <b>14 categorias</b>, diversas delas novas, e as empresas
          puderam fazer suas inscrições até 16 de maio.
        </ParagraphAnimated>
        <ParagraphAnimated>
          <b>No dia 16 de junho, será aberta a votação popular.</b> A empresa
          mais votada em cada categoria ganhará um ponto a mais, que será somado
          às notas do júri técnico. Fique atento para deixar o seu voto ou
          divulgar sua empresa!
        </ParagraphAnimated>
        {/* <div className="my-10">
          <Link
            className="bg-yellow-400 text-primary uppercase p-5 rounded-lg font-bold"
            href={'/#categorias'}
          >
            Inscreva sua empresa!{' '}
          </Link>
        </div> */}
      </div>
    </>
  )
}
