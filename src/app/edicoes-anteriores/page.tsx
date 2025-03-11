import { Container } from '@/components/container'
import { Subtitle } from '@/components/subtitle'
import Footer from '@/components/footer'
import Background from '@/components/background'
import { Header } from '@/components/header'

const judges = [
  {
    category: 'Fabricantes de Vidros Planos',
    names: ['Cebrace'],
  },
  {
    category: 'Processadores de Vidro',
    names: [
      'Região Sul: Vipel',
      'Região Sudeste: GlassecViracon',
      'Região Centro-Oeste: LM Vidros',
      'Região Nordeste: Casas Bandeirantes',
      'Região Norte: Portal Vidros',
    ],
  },
  {
    category:
      'Fabricantes de Máquinas e Equipamentos para Processamento de Vidro',
    names: ['Lisec'],
  },
  {
    category: 'Fabricantes de Insumos para o Processamento de Vidro',
    names: ['Eastman'],
  },
  {
    category: 'Fabricantes de Ferragens e Acessórios para Vidro',
    names: ['AL Indústria'],
  },
  {
    category: 'Fabricantes de Sistemas para Envidraçamentos',
    names: ['Roll Door'],
  },
  {
    category:
      'Fabricantes de Selantes, Gaxetas, e Adesivos (Materiais para Fixação e Vedação)',
    names: ['Dow Brasil'],
  },
  {
    category: 'Vidraçarias',
    names: [
      'Região Sul: Steinglass',
      'Região Sudeste: Decorvid',
      'Região Centro-Oeste: Blindex Store Goiânia',
      'Região Nordeste: Sujvidros',
    ],
  },
  {
    category: 'Projetos e Obras que Empregam Vidros',
    names: ['Rua da Saúde, em Porto Alegre (RS)'],
  },
  {
    category: 'Arquitetos Especificadores de Obras com Vidro',
    names: ['Zanettini Arquitetura'],
  },
]

export default function Judges() {
  return (
    <main className="flex min-h-screen flex-col">
      <Background />
      <Header />
      <Container>
        <div className="mt-40 max-w-96 mb-10">
          <Subtitle color="secondary">Edições anteriores</Subtitle>
          <div className="bg-yellow-500 w-min py-1 px-5 rounded-sm mb-5 mt-5">
            <h3 className="font-bold text-primary text-lg">2024</h3>
          </div>
          <p>
            No dia 12 de junho de 2024, primeiro dia da 15ª Glass South America,
            realizou-se a cerimônia de entrega da 1ª edição do Prêmio Abravidro
            Glass South America. Os números da edição de estreia foram
            grandiosos: dez categorias contempladas, 105 empresas e 94 obras com
            vidro inscritas, 31 escritórios de arquitetura mencionados e 6 mil
            votos na fase de votação popular. Conheça os vencedores de cada
            categoria:
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
      <div className="py-10 flex flex-col justify-center bg-blue-950">
        <Container>
          <Footer />
        </Container>
      </div>
    </main>
  )
}
