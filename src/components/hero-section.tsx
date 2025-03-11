'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'
import Link from 'next/link'
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
          O prêmio que reconhece empresas de todos os elos do setor está de
          volta em 2ª edição!
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
          Teremos xx categorias contempladas e as empresas que desejam concorrer
          devem fazer a inscrição até 16 de maio.
        </ParagraphAnimated>
        <ParagraphAnimated>
          Não deixe para a última hora! Inscreva-se e dê visibilidade à sua
          marca no prêmio organizado pela maior entidade vidreira do Brasil e
          pela organizadora da principal feira vidreira da América Latina.{' '}
        </ParagraphAnimated>
        <div className="my-10">
          <Link
            className="bg-yellow-400 text-primary uppercase p-5 rounded-lg font-bold"
            href={'/vencedores'}
          >
            Inscreva sua empresa!{' '}
          </Link>
        </div>
      </div>
    </>
  )
}
