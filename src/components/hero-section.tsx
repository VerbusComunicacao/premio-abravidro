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
      {/* <Link
        className="block w-96 text-blue-950 text-center mt-5 bg-yellow-500 hover:scale-110 transition-all duration-200 px-4 py-4 rounded-lg text-xl font-bold"
        href="/votacao"
      >
        Vote nas suas empresas favoritas
      </Link> */}
      <div className="max-w-md mt-12 [&>p]:pt-5">
        <Subtitle color="secondary">
          Conheça as marcas e projetos concorrentes
          <br className="hidden md:inline" />
        </Subtitle>
        <ParagraphAnimated>
          Após receber inscrições de 18 de março a 16 maio, a 2ª edição do
          Prêmio Abravidro Glass South America está com as empresas e projetos
          concorrentes definidos. São 106 marcas habilitadas a concorrer nas
          catorze categorias, além de 21 projetos comerciais e residenciais com
          uso do vidro. A votação popular terá início no dia 16 de junho e
          poderá ser feita até 18 de julho por este <i>site</i> oficial.
        </ParagraphAnimated>
        <ParagraphAnimated>
          Será permitido apenas um voto por dispositivo (IP) e por categoria. O
          voto não é obrigatório em todas as categorias, mas nossa sugestão é
          que cada votante participe indicando seu preferido em cada um dos
          quesitos. O concorrente mais votado de cada categoria integrará a
          seleção de finalistas, avaliada pelo júri técnico, e computará um
          ponto adicional na votação da comissão julgadora. O finalista de cada
          uma das catorze categorias com maior pontuação será considerado o
          vencedor e receberá o prêmio no dia 3 de setembro, em cerimônia
          realizada dentro da feira Glass South America –{' '}
          <b>
            <a href="https://home.glassexpo.com.br/" className="underline">
              faça aqui o seu credenciamento gratuito para visitar o evento, que
              será de 3 a 6 de setembro, em São Paulo.
            </a>
          </b>
        </ParagraphAnimated>
        <div className="mt-10">
          <Link
            className="bg-yellow-400 text-primary uppercase p-5 rounded-lg font-bold"
            href={'/#categorias'}
          >
            Conheça os concorrentes!{' '}
          </Link>
        </div>
      </div>
    </>
  )
}
