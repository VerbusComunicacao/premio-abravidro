import { Metadata } from 'next'
import Background from '@/components/background'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Concorrentes | Prêmio Abravidro Glass 2025',
  description:
    'Lista de concorrentes ao Prêmio Abravidro Glass 2025 em todas as categorias',
}

interface Concorrente {
  nome: string
}

interface CategoriaRegional {
  nome: string
  concorrentes: Concorrente[]
}

interface Categoria {
  titulo: string
  concorrentes: Concorrente[]
  regional?: boolean
  regioes?: CategoriaRegional[]
}

interface Projeto {
  nome: string
  local: string
}

const fabricantesVidroPlano: Categoria = {
  titulo: 'FABRICANTE DE VIDRO PLANO',
  concorrentes: [
    { nome: 'AGC' },
    { nome: 'Cebrace' },
    { nome: 'Guardian' },
    { nome: 'Vivix' },
  ],
}

const processadoresVidro: Categoria = {
  titulo: 'PROCESSADOR DE VIDRO',
  concorrentes: [],
  regional: true,
  regioes: [
    {
      nome: 'Norte',
      concorrentes: [
        { nome: 'CDE Indústria de Vidros' },
        { nome: 'Guaporé Vidros' },
        { nome: 'Portal Vidros' },
        { nome: 'União Center' },
      ],
    },
    {
      nome: 'Nordeste',
      concorrentes: [{ nome: 'Amazon Temper' }, { nome: 'Casas Bandeirantes' }],
    },
    {
      nome: 'Centro-Oeste',
      concorrentes: [
        { nome: 'Estrutural Vidros' },
        { nome: 'Govidros' },
        { nome: 'LM Vidros' },
        { nome: 'VPM Vidros' },
      ],
    },
    {
      nome: 'Sudeste',
      concorrentes: [
        { nome: '5Rs Reciclagem de Vidros' },
        { nome: 'ABC Temper' },
        { nome: 'Agroleite' },
        { nome: 'BrazilGlass' },
        { nome: 'CristalTemper' },
        { nome: 'Cyberglass' },
        { nome: 'Divinal Vidros' },
        { nome: 'Estrela Vidros' },
        { nome: 'GlassecViracon' },
        { nome: 'Grupo Araújo' },
        { nome: 'PKO Vidros' },
        { nome: 'Reflex Tempervidros' },
        { nome: 'Schott' },
        { nome: 'Speed Temper' },
        { nome: 'Tempermax' },
        { nome: 'Termari Vidros' },
        { nome: 'Viminas' },
      ],
    },
    {
      nome: 'Sul',
      concorrentes: [
        { nome: 'Cristal Sete' },
        { nome: 'Linde Vidros' },
        { nome: 'Modelo Vidros' },
        { nome: 'Rohden Vidros' },
        { nome: 'Tecnovidro' },
        { nome: 'Temperbras' },
        { nome: 'Temperline' },
        { nome: 'Unividros' },
        { nome: 'Vidrobox' },
        { nome: 'Vidroforte' },
        { nome: 'Vipel' },
      ],
    },
  ],
}

const fabricantesMaquinas: Categoria = {
  titulo:
    'FABRICANTE DE MÁQUINAS E EQUIPAMENTOS DE PRÉ PROCESSAMENTO E LAMINAÇÃO DE VIDROS',
  concorrentes: [
    { nome: 'Agmaq' },
    { nome: 'Biesse' },
    { nome: 'Bottero' },
    { nome: 'Lisec' },
    { nome: 'SGlass' },
  ],
}

const fabricantesFornos: Categoria = {
  titulo: 'FABRICANTE DE FORNOS DE TÊMPERA',
  concorrentes: [{ nome: 'Latamglass' }, { nome: 'SGlass' }],
}

const fabricantesRebolos: Categoria = {
  titulo: 'FABRICANTE DE REBOLOS E BROCAS',
  concorrentes: [
    { nome: 'Arbax' },
    { nome: 'Cia do Rebolo' },
    { nome: 'Diamanfer' },
    { nome: 'Latamglass' },
  ],
}

const fabricantesInsumos: Categoria = {
  titulo:
    'FABRICANTE DE INSUMOS PARA O PROCESSAMENTO DE VIDROS (EXCETO REBOLOS E BROCAS)',
  concorrentes: [
    { nome: 'Decent New Material' },
    { nome: 'Eastman' },
    { nome: 'Profilglass' },
    { nome: 'Sogelub' },
    { nome: 'Tag47 Solution' },
  ],
}

const fabricantesFerragens: Categoria = {
  titulo: 'FABRICANTE DE FERRAGENS E ACESSÓRIOS PARA VIDRO',
  concorrentes: [
    { nome: 'AL Indústria' },
    { nome: 'FVT Ferragens' },
    { nome: 'GDS' },
    { nome: 'Multi Metais' },
  ],
}

const fabricantesGuardaCorpos: Categoria = {
  titulo: 'FABRICANTE DE SISTEMAS DE GUARDA-CORPOS DE VIDRO',
  concorrentes: [
    { nome: 'Ideia Glass' },
    { nome: 'Q-Railing' },
    { nome: 'Reiki - Envidraçamentos Projetados' },
  ],
}

const fabricantesEnvidracamento: Categoria = {
  titulo: 'FABRICANTE DE SISTEMAS DE ENVIDRAÇAMENTO DE SACADAS',
  concorrentes: [
    { nome: 'AL indústria' },
    { nome: 'Casa Mansur' },
    { nome: 'Claroflex' },
    { nome: 'Reiki - Envidraçamentos Projetados' },
    { nome: 'Solid' },
    { nome: 'Solução Fechamento Inteligente' },
  ],
}

const fabricantesBoxes: Categoria = {
  titulo: 'FABRICANTE DE KITS DE BOXES DE VIDRO PARA BANHEIRO',
  concorrentes: [
    { nome: 'AL Indústria' },
    { nome: 'Casa Mansur' },
    { nome: 'Ideia Glass' },
  ],
}

const fabricantesPortas: Categoria = {
  titulo: 'FABRICANTE DE SISTEMAS DE PORTAS DE VIDRO',
  concorrentes: [
    { nome: 'AL Indústria' },
    { nome: 'Ideia Glass' },
    { nome: 'Roll Door' },
    { nome: 'Schott Flat Glass' },
  ],
}

const desenvolvedoresSoftware: Categoria = {
  titulo: 'DESENVOLVEDOR DE SOFTWARES PARA O MERCADO VIDREIRO',
  concorrentes: [
    { nome: 'GlassControl' },
    { nome: 'Meu Vidraceiro' },
    { nome: 'Portal Sym' },
    { nome: 'Reitech' },
    { nome: 'Softsystem' },
    { nome: 'SYM - Softwares Your Mode' },
    { nome: 'Sync Softwares' },
    { nome: 'SystemGlass' },
  ],
}

const vidracarias: Categoria = {
  titulo: 'VIDRAÇARIA',
  concorrentes: [],
  regional: true,
  regioes: [
    {
      nome: 'Norte',
      concorrentes: [
        { nome: 'Resplendor Vidraçaria e Serralheria' },
        { nome: 'União Center' },
        { nome: 'Vidrex' },
      ],
    },
    {
      nome: 'Nordeste',
      concorrentes: [
        { nome: 'SS Vidros' },
        { nome: 'Sujvidros' },
        { nome: 'Vidraçaria Mineiro' },
      ],
    },
    {
      nome: 'Centro-Oeste',
      concorrentes: [],
    },
    {
      nome: 'Sudeste',
      concorrentes: [
        { nome: 'Alfa Vidros' },
        { nome: 'Aluvidros' },
        { nome: 'BN Vidros' },
        { nome: 'Decorvid' },
        { nome: 'Dk Vidraçaria Orienta' },
        { nome: 'MG Glass' },
        { nome: 'Themper Esquadrias' },
      ],
    },
    {
      nome: 'Sul',
      concorrentes: [
        { nome: 'Divetro' },
        { nome: 'DS Vidros Caxias' },
        { nome: 'Heydt Esquadrias' },
        { nome: 'Lajeadense Vidros' },
        { nome: 'NM Vidros' },
        { nome: 'Startglass' },
        { nome: 'Steinglass' },
      ],
    },
  ],
}

const projetos: Projeto[] = [
  { nome: 'Alma', local: 'Brasília-DF' },
  { nome: 'Almagah 227', local: 'São Paulo-SP' },
  { nome: 'Arquipeo', local: 'São Paulo-SP' },
  { nome: 'Atmosfera Air', local: 'Porto Alegre-RS' },
  { nome: 'Cúpula Central do Flamboyant Shopping', local: 'Goiânia-GO' },
  { nome: 'Domo Geodésico', local: 'São Paulo-SP' },
  { nome: 'Edifício Beaumont', local: 'Campinas-SP' },
  { nome: 'Edifício Salma Tower', local: 'São Paulo-SP' },
  { nome: 'Four Seasons Residence', local: 'Maringá-PR' },
  { nome: 'Hy Pinheiros', local: 'São Paulo-SP' },
  { nome: 'JK Square', local: 'São Paulo-SP' },
  { nome: 'Lago Center Business', local: 'Recife-PE' },
  { nome: 'Luna Nova', local: 'São Paulo-SP' },
  { nome: 'O Parque (Torre Orvalho)', local: 'São Paulo-SP' },
  { nome: 'Sede CFM', local: 'Brasília-DF' },
  { nome: 'Sede Soluti', local: 'Goiânia-GO' },
  { nome: 'Sede Stella', local: 'Sapiranga-RS' },
  { nome: 'Varanda', local: 'Porto Alegre-RS' },
  { nome: 'Viva! Campo Belo', local: 'São Paulo-SP' },
  { nome: 'W Residences', local: 'São Paulo-SP' },
  { nome: 'Yachthouse', local: 'Balneário Camboriú-SC' },
]

const categorias: Categoria[] = [
  fabricantesVidroPlano,
  processadoresVidro,
  fabricantesMaquinas,
  fabricantesFornos,
  fabricantesRebolos,
  fabricantesInsumos,
  fabricantesFerragens,
  fabricantesGuardaCorpos,
  fabricantesEnvidracamento,
  fabricantesBoxes,
  fabricantesPortas,
  desenvolvedoresSoftware,
  vidracarias,
]

export default function Concorrentes() {
  return (
    <main className="flex min-h-screen flex-col">
      <Background />
      <Header />
      <div className="mt-28 md:mt-32">
        <div className="container mx-auto px-4 py-8 max-w-screen-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Concorrentes ao Prêmio Abravidro Glass 2025
          </h1>

          <div className="space-y-12">
            {categorias.map((categoria) => (
              <section
                key={categoria.titulo}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6"
              >
                <h2 className="text-xl text-primary font-semibold mb-4">
                  {categoria.titulo}
                </h2>

                {categoria.regional ? (
                  <div className="space-y-6">
                    {categoria.regioes?.map((regiao) => (
                      <div key={regiao.nome}>
                        <h3 className="text-lg text-background font-medium mb-2">
                          {regiao.nome}
                        </h3>
                        {regiao.nome === 'Centro-Oeste' &&
                        categoria.titulo === 'VIDRAÇARIA' ? (
                          <p className="text-gray-600 italic">
                            Esta região recebeu apenas uma inscrição de
                            vidraçaria. Seguindo o regulamento disponível no
                            site oficial, no item 6, em casos de um único
                            inscrito para dada categoria, ela será
                            desconsiderada, não havendo, por conseguinte,
                            premiação.
                          </p>
                        ) : (
                          <ul className="list-disc list-inside space-y-1">
                            {regiao.concorrentes.map((concorrente) => (
                              <li
                                key={concorrente.nome}
                                className="text-gray-700"
                              >
                                {concorrente.nome}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="list-disc list-inside space-y-1">
                    {categoria.concorrentes.map((concorrente) => (
                      <li key={concorrente.nome} className="text-gray-700">
                        {concorrente.nome}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6">
              <h2 className="text-xl text-primary font-semibold mb-4">
                PROJETO QUE EMPREGA VIDROS
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {projetos.map((projeto) => (
                  <li key={projeto.nome} className="text-gray-700">
                    {projeto.nome} - {projeto.local}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col justify-center bg-blue-950 mt-12">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </div>
    </main>
  )
}
