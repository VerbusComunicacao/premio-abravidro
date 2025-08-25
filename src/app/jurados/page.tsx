import { Container } from '@/components/container'
import { Subtitle } from '@/components/subtitle'
import Footer from '@/components/footer'
import Background from '@/components/background'
import { Header } from '@/components/header'

export default function Judges() {
  return (
    <main className="flex min-h-screen flex-col">
      <Background />
      <Header />
      <Container>
        <div className="mt-40 max-w-96 min-h-96 mb-10">
          <Subtitle color="secondary">Comissão Julgadora</Subtitle>
          <div className="text-white">
            <strong>JURADOS | EDIÇÃO 2025</strong>
            <p className="mt-4">
              O júri técnico da edição 2025 é formado por membros do mercado que atuam em diferentes elos e funções da cadeia, reconhecidos pelo nível de conhecimento técnico e experiência no mercado. Confira a relação a seguir:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li>Albert Pestana</li>
              <li>Crescêncio Petrucci</li>
              <li>Dilma Magalhães</li>
              <li>Dinho Nakano</li>
              <li>Edweiss Silva</li>
              <li>Emerson Arcênio</li>
              <li>Ezio Cabib</li>
              <li>Fernando Mungioli</li>
              <li>Fernando Westphal</li>
              <li>Gabriel Batista</li>
              <li>Gi Matos</li>
              <li>Iza Valadão</li>
              <li>Joaquim Ricardo de Oliveira</li>
              <li>Jorge Menezes</li>
              <li>José Domingos Seixas</li>
              <li>Laurenil de Castro</li>
              <li>Leandro de Carvalho Santana</li>
              <li>Leandro Gonçalves Pedro</li>
              <li>Leonir Nicaretta</li>
              <li>Marcus Aurelius Pezotti</li>
              <li>Maurício Silva Ribeiro</li>
              <li>Pedro Ruiz</li>
              <li>Rafael Ribeiro</li>
              <li>Raimundo Calixto de Melo Neto</li>
              <li>Rogério Oliveira</li>
              <li>Tulhio Moreira Israel</li>
              <li>Victor Villas Casaca</li>
              <li>Yveraldo Gusmão</li>
            </ul>
            <p className="mt-6 font-bold">IMPORTANTE:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Foram formados grupos de cinco jurados para avaliar cada categoria (diversos jurados avaliaram mais de uma categoria).
              </li>
              <li>
                Nenhum jurado poderia atuar na categoria avaliada (exemplo: processadores não avaliaram processadoras).
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="py-10 flex flex-col justify-center bg-blue-950">
        <Container>
          <Footer />
        </Container>
      </div>
    </main>
  )
}
