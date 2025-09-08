'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
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
        {/* <Subtitle color="secondary">
          Participe da cerimônia de premiação!
          <br className="hidden md:inline" />
        </Subtitle>  */}
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
            No dia 3 de setembro, na Arena de Conteúdo da Glass South America,
            foi realizada a cerimônia de premiação do Prêmio Abravidro South
            America 2025. No total, tivemos 105 concorrentes validados em
            catorze categorias, além de 21 projetos comerciais e residenciais
            com uso do vidro.
          </p>
        </ParagraphAnimated>
        <ParagraphAnimated>
          <p className="mt-2">
            Em sua 2ª edição, o prêmio ganhou novas categorias em relação ao ano
            passado. Assim, foram contemplados ainda mais elos da cadeia
            vidreira, tornando o prêmio mais representativo da excelência de
            nosso setor.
          </p>
        </ParagraphAnimated>
        <div className="mt-10 flex justify-start">
          <Link
            className="bg-yellow-400 text-primary uppercase px-4 py-3 md:px-8 md:py-5 rounded-lg font-bold text-left block w-full max-w-xs md:max-w-none"
            href={'/edicoes-anteriores'}
          >
            Clique aqui e confira a relação de vencedores
          </Link>
        </div>
      </div>
    </>
  )
}
