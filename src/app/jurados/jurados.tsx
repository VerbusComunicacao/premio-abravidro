import { Container } from '@/components/container'
import { Subtitle } from '@/components/subtitle'

const judges = [
  {
    category: 'Fabricantes de Vidros Planos',
    names: [
      'Maurício Ribeiro',
      'Vítor Casaca',
      'Alfredo dos Anjos Martins',
      'José Domingos Seixas',
      'Leonir Nicaretta',
    ],
  },
  {
    category: 'Processadores de Vidro',
    names: [
      'Dinho Nakano',
      'Jorge Menezes',
      'José Ricardo D´Araujo Martins',
      'Pedro Ruiz',
      'Edweiss Silva',
    ],
  },
  {
    category:
      'Fabricantes de Máquinas e Equipamentos para Processamento de Vidro',
    names: [
      'Dinho Nakano',
      'Rafael Brumm Ribeiro',
      'Albert Pestana',
      'Leandro Gonçalves Pedro',
      'Marcus Aurélius Pezotti',
    ],
  },
  {
    category: 'Fabricantes de Insumos para o Processamento de Vidro',
    names: [
      'Emerson Arcênio',
      'Leandro Gonçalves Pedro',
      'Albert Pestana',
      'Rafael Brumm Ribeiro',
      'Jairo Martins',
    ],
  },
  {
    category: 'Fabricantes de Ferragens e Acessórios para Vidro',
    names: [
      'Leandro Gonçalves Pedro',
      'Gabriel Batista',
      'Gi Matos',
      'Jorge Menezes',
      'Leandro de Carvalho Santana',
    ],
  },
  {
    category: 'Fabricantes de Sistemas para Envidraçamentos',
    names: [
      'Leandro Gonçalves Pedro',
      'Gabriel Batista',
      'Gi Matos',
      'Jorge Menezes',
      'Leandro de Carvalho Santana',
    ],
  },
  {
    category:
      'Fabricantes de Selantes, Gaxetas, e Adesivos (Materiais para Fixação e Vedação)',
    names: [
      'Renato Santana',
      'Gabriel Batista',
      'Gi Matos',
      'Sandro Rensi',
      'Leandro de Carvalho Santana',
    ],
  },
  {
    category: 'Vidraçarias',
    names: [
      'Leandro Gonçalves Pedro',
      'Gabriel Batista',
      'Gi Matos',
      'Jorge Menezes',
      'Leandro De Carvalho Santana',
    ],
  },
  {
    category: 'Projetos e Obras que Empregam Vidros',
    names: [
      'Iara Bentes',
      'João Paulo Picolo',
      'Fernando Westphal',
      'Crescêncio Petrucci Jr',
      'Raimundo Calixto de Melo Neto',
    ],
  },
  {
    category: 'Arquitetos Especificadores de Obras com Vidro',
    names: [
      'Iara Bentes',
      'João Paulo Piccolo',
      'Fernando Westphal',
      'Crescêncio Petrucci Jr',
      'Raimundo Calixto de Melo Neto',
    ],
  },
]

export default function jurados() {
  return (
    <Container>
      <div className="mt-40 max-w-96 mb-10">
        <Subtitle color="secondary">JURADOS | EDIÇÃO 2024</Subtitle>
        <p>
          {' '}
          Em julho, anunciaremos a comissão julgadora que atuará na edição deste
          ano do prêmio. Aguarde!
        </p>

        {judges.map((group, index) => (
          <div key={index} className="mt-10">
            <h2 className="text-xl font-bold">{group.category}</h2>
            <ul className="list-disc list-inside mt-3">
              {group.names.map((name, idx) => (
                <li key={idx} className="text-lg">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
