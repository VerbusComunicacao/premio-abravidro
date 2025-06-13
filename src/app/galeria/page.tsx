'use client'

import { useState } from 'react'
import {
  Cross2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons'
import { Container } from '@/components/container'
import { Subtitle } from '@/components/subtitle'
import { Header } from '@/components/header'
import Background from '@/components/background'
import Image from 'next/image'
import Footer from '@/components/footer'

interface Projeto {
  nome: string
  cidade: string
  estado: string
  quantidadeFotos: number
}

function removeAccentsAndSpecialChars(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
}

interface ModalProps {
  foto: { url: string; alt: string } | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  hasNext: boolean
  hasPrev: boolean
}

function Modal({
  foto,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ModalProps) {
  if (!foto) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50" onClick={onClose}>
      <div className="z-[100] absolute top-4 right-4">
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Cross2Icon className="h-6 w-6" />
        </button>
      </div>

      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="z-[100] absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="z-[100] absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>
      )}

      <div
        className="w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={foto.url}
            alt={foto.alt}
            width={1200}
            height={1200}
            className="object-contain max-w-full max-h-full"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </div>
    </div>
  )
}

function GaleriaFotos({
  projeto,
  onSelectPhoto,
}: {
  projeto: Projeto
  onSelectPhoto: (foto: { url: string; alt: string }, index: number) => void
}) {
  const baseUrl = 'https://abravidro.org.br/wp-content/uploads/premio-2025'
  const nomeFormatado = removeAccentsAndSpecialChars(projeto.nome.toLowerCase())
  const cidadeFormatada = removeAccentsAndSpecialChars(
    projeto.cidade.toLowerCase(),
  )

  const fotos = Array.from({ length: projeto.quantidadeFotos }, (_, i) => ({
    url: `${baseUrl}/${nomeFormatado}_${cidadeFormatada}_${i + 1}.jpg`,
    alt: `Foto ${i + 1} do projeto ${projeto.nome} em ${projeto.cidade}`,
  }))

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {fotos.map((foto, index) => (
        <button
          key={index}
          onClick={() => onSelectPhoto(foto, index)}
          className="relative aspect-square w-full overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
        >
          <Image
            src={foto.url}
            alt={foto.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </button>
      ))}
    </div>
  )
}

function ProjetoCard({
  projeto,
  onSelectPhoto,
}: {
  projeto: Projeto
  onSelectPhoto: (foto: { url: string; alt: string }, index: number) => void
}) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-xl font-bold text-primary mb-4">
        {projeto.nome} - {projeto.cidade} ({projeto.estado})
      </h2>
      <GaleriaFotos projeto={projeto} onSelectPhoto={onSelectPhoto} />
    </div>
  )
}

const projetos: Projeto[] = [
  { nome: 'Alma', cidade: 'Brasília', estado: 'DF', quantidadeFotos: 3 },
  {
    nome: 'Almagah 227',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 3,
  },
  { nome: 'Arquipeo', cidade: 'São Paulo', estado: 'SP', quantidadeFotos: 10 },
  {
    nome: 'Atmosfera Air',
    cidade: 'Porto Alegre',
    estado: 'RS',
    quantidadeFotos: 4,
  },
  {
    nome: 'Cúpula Central do Flamboyant Shopping',
    cidade: 'Goiânia',
    estado: 'GO',
    quantidadeFotos: 5,
  },
  {
    nome: 'Domo Geodésico',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 10,
  },
  {
    nome: 'Edifício Beaumont',
    cidade: 'Campinas',
    estado: 'SP',
    quantidadeFotos: 6,
  },
  {
    nome: 'Edifício Salma Tower',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 5,
  },
  {
    nome: 'Four Seasons Residence',
    cidade: 'Maringá',
    estado: 'PR',
    quantidadeFotos: 5,
  },
  {
    nome: 'Hy Pinheiros',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 5,
  },
  { nome: 'JK Square', cidade: 'São Paulo', estado: 'SP', quantidadeFotos: 6 },
  {
    nome: 'Lago Center Business',
    cidade: 'Recife',
    estado: 'PE',
    quantidadeFotos: 5,
  },
  { nome: 'Luna Nova', cidade: 'São Paulo', estado: 'SP', quantidadeFotos: 9 },
  {
    nome: 'O Parque (Torre Orvalho)',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 4,
  },
  { nome: 'Sede CFM', cidade: 'Brasília', estado: 'DF', quantidadeFotos: 1 },
  { nome: 'Sede Soluti', cidade: 'Goiânia', estado: 'GO', quantidadeFotos: 5 },
  {
    nome: 'Sede Stella',
    cidade: 'Sapiranga',
    estado: 'RS',
    quantidadeFotos: 3,
  },
  { nome: 'Varanda', cidade: 'Porto Alegre', estado: 'RS', quantidadeFotos: 4 },
  {
    nome: 'Viva! Campo Belo',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 4,
  },
  {
    nome: 'W Residences',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 4,
  },
  {
    nome: 'Yachthouse',
    cidade: 'Balneário Camboriú',
    estado: 'SC',
    quantidadeFotos: 10,
  },
]

export default function Galeria() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string
    alt: string
  } | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0)
  const [currentProject, setCurrentProject] = useState<Projeto | null>(null)

  const handleSelectPhoto = (
    foto: { url: string; alt: string },
    index: number,
    projeto: Projeto,
  ) => {
    setSelectedPhoto(foto)
    setCurrentPhotoIndex(index)
    setCurrentProject(projeto)
  }

  const handleNext = () => {
    if (!currentProject) return
    const nextIndex = (currentPhotoIndex + 1) % currentProject.quantidadeFotos
    const baseUrl = 'https://abravidro.org.br/wp-content/uploads/premio-2025'
    const nomeFormatado = removeAccentsAndSpecialChars(
      currentProject.nome.toLowerCase(),
    )
    const cidadeFormatada = removeAccentsAndSpecialChars(
      currentProject.cidade.toLowerCase(),
    )

    setSelectedPhoto({
      url: `${baseUrl}/${nomeFormatado}_${cidadeFormatada}_${nextIndex + 1}.jpg`,
      alt: `Foto ${nextIndex + 1} do projeto ${currentProject.nome} em ${currentProject.cidade}`,
    })
    setCurrentPhotoIndex(nextIndex)
  }

  const handlePrev = () => {
    if (!currentProject) return
    const prevIndex =
      (currentPhotoIndex - 1 + currentProject.quantidadeFotos) %
      currentProject.quantidadeFotos
    const baseUrl = 'https://abravidro.org.br/wp-content/uploads/premio-2025'
    const nomeFormatado = removeAccentsAndSpecialChars(
      currentProject.nome.toLowerCase(),
    )
    const cidadeFormatada = removeAccentsAndSpecialChars(
      currentProject.cidade.toLowerCase(),
    )

    setSelectedPhoto({
      url: `${baseUrl}/${nomeFormatado}_${cidadeFormatada}_${prevIndex + 1}.jpg`,
      alt: `Foto ${prevIndex + 1} do projeto ${currentProject.nome} em ${currentProject.cidade}`,
    })
    setCurrentPhotoIndex(prevIndex)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Background />
      <Header />
      <Container>
        <div className="mt-28 md:mt-32">
          <Subtitle color="secondary">PROJETO QUE EMPREGA VIDROS</Subtitle>
          <p>
            Veja, abaixo, a relação com fotos dos projetos concorrentes e vote
            no seu preferido{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://pt.surveymonkey.com/r/NV7K8J9"
            >
              clicando aqui
            </a>
            :
          </p>
          <div className="grid gap-8 mt-8">
            {projetos.map((projeto) => (
              <ProjetoCard
                key={projeto.nome}
                projeto={projeto}
                onSelectPhoto={(foto, index) =>
                  handleSelectPhoto(foto, index, projeto)
                }
              />
            ))}
          </div>
          <div className="my-8 text-center">
            <a
              target="_blank"
              className=" text-lg inline-block bg-background text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              href="https://pt.surveymonkey.com/r/NV7K8J9"
            >
              Vote no seu projeto preferido clicando aqui
            </a>
          </div>
        </div>
      </Container>
      <Modal
        foto={selectedPhoto}
        onClose={() => {
          setSelectedPhoto(null)
          setCurrentPhotoIndex(0)
          setCurrentProject(null)
        }}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={
          currentProject
            ? currentPhotoIndex < currentProject.quantidadeFotos - 1
            : false
        }
        hasPrev={currentProject ? currentPhotoIndex > 0 : false}
      />
      <Footer />
      <div className="my-10" />
    </main>
  )
}
