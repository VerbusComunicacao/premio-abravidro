'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'
import Link from 'next/link'
import Image from 'next/image'

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
          Está aberta a votação popular até 18 de julho. Participe!
          <br className="hidden md:inline" />
        </Subtitle>

        <ParagraphAnimated>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg w-12 flex items-center justify-center">
              <Image
                src="/icons/torneio.png"
                alt="Abravidro"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2 max-w-64">
              São catorze categorias (duas delas com premiação regional)
            </p>
          </div>
        </ParagraphAnimated>
        <ParagraphAnimated>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg w-12 flex items-center justify-center">
              <Image
                src="/icons/conexao.png"
                alt="Abravidro"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2 max-w-64">106 concorrentes </p>
          </div>
        </ParagraphAnimated>
        <ParagraphAnimated>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg w-12 flex items-center justify-center">
              <Image
                src="/icons/predio.png"
                alt="Abravidro"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2 max-w-64">
              21 projetos comerciais e residenciais com o uso do vidro
            </p>
          </div>
        </ParagraphAnimated>
        <ParagraphAnimated>
          <p className="mt-2">
            O concorrente mais votado de cada categoria integrará a seleção de
            finalistas, avaliada pelo júri técnico, e computará um ponto
            adicional na votação da comissão julgadora.
          </p>
        </ParagraphAnimated>
        <div className="mt-10">
          <Link
            className="bg-yellow-400 text-primary uppercase p-5 rounded-lg font-bold"
            href={'https://pt.surveymonkey.com/r/NV7K8J9'}
          >
            Vote agora nos seus favoritos!{' '}
          </Link>
        </div>
      </div>
    </>
  )
}
