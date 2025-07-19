'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'
import Link from 'next/link'
// import Image from 'next/image'

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
          Votação popular encerrada! Agora é com o júri técnico
          <br className="hidden md:inline" />
        </Subtitle>
        {/*
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
            <p className="mt-2 max-w-64">105 concorrentes </p>
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
        */}
        <ParagraphAnimated>
          <p className="mt-2">
            Milhares de votos foram dados nos 105 concorrentes, além de 21
            projetos. Nos próximos dias, contabilizaremos os votos e o júri
            técnico fará a análise dos finalistas de cada categoria - o
            concorrente mais votado de cada categoria, além de estar entre os
            finalistas, ganha um ponto a mais na avaliação do júri.
          </p>
        </ParagraphAnimated>
        <ParagraphAnimated>
          <p className="mt-2">
            A cerimônia de premiação será no dia 3 de setembro, dentro da Glass
            South America. A feira será realizada no Distrito Anhembi, em São
            Paulo, e trará muitas novidades em produtos e serviços, além de
            muito conteúdo. Participe!
          </p>
        </ParagraphAnimated>
        <div className="mt-10">
          <Link
            className="bg-yellow-400 text-primary uppercase p-5 rounded-lg font-bold"
            href={'https://www.glassexpo.com.br/credenciamento'}
          >
            FAÇA SEU CREDENCIAMENTO GRATUITO{' '}
          </Link>
        </div>
      </div>
    </>
  )
}
