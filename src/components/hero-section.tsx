'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'
import Link from 'next/link'
import Image from 'next/image'
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
        Participe da cerimônia de premiação!
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
          Está chegando a hora de conhecer os vencedores da edição 2025 do prêmio que reconhece a excelência das empresas que atuam nos diversos elos da cadeia produtiva vidreira!

          </p>
        </ParagraphAnimated>
        <ParagraphAnimated>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 mt-4 rounded-lg w-12 flex items-center justify-center">
              <Image
                src="/icons/calendario.png"
                alt="Ícone de calendário"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2 max-w-64">
              3 de setembro | 19 horas
            </p>
          </div>
        </ParagraphAnimated>
        <ParagraphAnimated>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg w-12 flex items-center justify-center">
              <Image
                src="/icons/localizacao.png"
                alt="Ícone de localização"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-2 max-w-64">
              Arena de Conteúdo da Glass South America<br />
              Distrito Anhembi, São Paulo
            </p>
          </div>
        </ParagraphAnimated>
        <ParagraphAnimated>
          <p className="mt-2">
          Venha celebrar conosco! Para isso, basta se credenciar para a Glass South America, feira realizada de 3 a 6 de setembro, no Distrito Anhembi.

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
