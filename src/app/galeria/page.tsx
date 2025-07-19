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
  informacoes?: string
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
            unoptimized
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
            loading="lazy"
          />
        </button>
      ))}
    </div>
  )
}

function ProjetoCard({
  projeto,
  onSelectPhoto,
  onShowInfo,
}: {
  projeto: Projeto
  onSelectPhoto: (foto: { url: string; alt: string }, index: number) => void
  onShowInfo: () => void
}) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6">
      <div className="flex flex-col md:flex-row items-start justify-start md:justify-between md:items-center mb-4">
        <h2 className="text-xl font-bold text-primary">
          {projeto.nome} - {projeto.cidade} ({projeto.estado})
        </h2>
        {projeto.informacoes && (
          <button
            onClick={onShowInfo}
            className="text-sm bg-primary text-white px-4 py-2 mt-2 md:mt-0 rounded hover:bg-primary/90 transition-colors"
          >
            Clique e confira informações sobre o projeto
          </button>
        )}
      </div>
      <GaleriaFotos projeto={projeto} onSelectPhoto={onSelectPhoto} />
    </div>
  )
}

const projetos: Projeto[] = [
  {
    nome: 'Alma',
    cidade: 'Brasília',
    estado: 'DF',
    quantidadeFotos: 3,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados:</strong><br>Habitat Neutro Incolor<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Por meio de sua alta transmissão luminosa, possibilitando maior integração com o ambiente externo.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> Reduzindo o calor em até 36%, mais que o dobro em relação ao vidro incolor comum, que reduz apenas 15%.<br><strong>Certificações conquistadas pelo empreendimento:</strong> O projeto do Alma foi o vencedor do prêmio internacional LOOP Design Awards 2023, concorrendo com 690 outros projetos de 50 países.<br><strong>Percentual de área envidraçada:</strong> 90%<br><strong>Diferenciais da obra: </strong>Sofisticação e exclusividade em uma das melhores localizações do mais novo bairro de alto padrão e sustentável de Brasília.<br><strong>Empresa que inscreveu o projeto: </strong>Cebrace<br><strong><em>Site</em> ou redes sociais do projeto: </strong><a href="https://lotuscidade.com.br/empreendimentos/alma/?gad_source=1&amp;gad_campaignid=21878474522&amp;gbraid=0AAAAABHgvLUKHCpA1SYWqBxZmdyVAOR7h&amp;gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZVAinei_uXbL8AXjV51omdZvRPn0j0Slijksw08zKGuPzC1jsibFEIaApXTEALw_wcB">https://lotuscidade.com.br/empreendimentos/alma/?gad_source=1&amp;gad_campaignid=21878474522&amp;gbraid=0AAAAABHgvLUKHCpA1SYWqBxZmdyVAOR7h&amp;gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZVAinei_uXbL8AXjV51omdZvRPn0j0Slijksw08zKGuPzC1jsibFEIaApXTEALw_wcB</a></p>',
  },
  {
    nome: 'Almagah 227',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 3,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados:</strong><br>Vidro Laminado Cebrace Cool-Lite BRN148 10 mm e vidro Laminado Cebrace Habitat Neutro Incolor 10 mm<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>O Cool Lite BR148, que foi aplicado no pavimento de laje tipo ponte e no <em>coworking</em>, é a linha de vidros que nasceu especialmente para atender o mercado brasileiro de arquitetura. Combina uma excelente solução estética com um alto desempenho no controle de entrada de luz e calor.O BRN148 reduz em 55% a entrada de calor, deixando entrar 48% de luz.<br>O Habitat Neutro Incolor foi aplicado nos caixilhos das unidades de estúdio, e é o vidro que reduz 36% a entrada de calor, com alta entrada de luz (70%).<br>Com o uso desses vidros, existe menos necessidade de uso de ar-condicionado e iluminação natural ao longo do ano, reduzindo o consumo de energia.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> A escolha de materiais é fundamental para o sucesso de um projeto arquitetônico, influenciando não apenas a estética, mas também a funcionalidade, a sustentabilidade e a experiência dos ocupantes.<br>Os vidros de proteção solar afetam diretamente a aparência e a sensação do espaço.<br>Ao regular a entrada de luz, os vidros de proteção solar reduzem a dependência de iluminação artificial e criam um ambiente mais confortável, aumentando a satisfação dos ocupantes e a produtividade em espaços comerciais.<br><strong>Certificações conquistadas pelo empreendimento:</strong> A certificação é a <em>AQUA Green Building</em>, que atesta a qualidade ambiental da construção, com foco em qualidade de vida, respeito ao meio ambiente, desempenho econômico e gestão de governança.<br><strong>Percentual de área envidraçada:</strong> 60%<br><strong>Diferenciais da obra: </strong>Um ecossistema que reúne oportunidades profissionais e muito conforto para morar, com lazer e espaços funcionais, além da facilidade de ter serviços, lojas e um <em>coworking</em> no mesmo edifício.<br>O empreendimento também foi pensado para atender as normas de sustentabilidade. Com isso, possui bicicletário, aproveitamento de água da chuva para irrigação e limpeza das áreas comuns, aquecimento de água por energia solar e fachada ventilada, que, além de proporcionar conforto térmico para as unidades, necessita de menos manutenção e reduz a geração de resíduos no canteiro de obras.<br>Outros diferenciais são a irrigação automatizada e a escolha por plantas nativas, que exigem menos necessidade de cuidados e irrigação. <strong><br>Empresa que inscreveu o projeto: </strong>Cebrace<br><strong><em>Site</em> ou redes sociais do projeto: </strong><a href="https://porte.com.br/empreendimento/almagah227">https://porte.com.br/empreendimento/almagah227</a></p>',
  },
  {
    nome: 'Arquipeo',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 10,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados:</strong><br>Fachadas<br>Vidros Laminados de Segurança de Controle Solar Neutro<br>Sunlux 60 4 mm + PVB incolor de 0,38 mm + Vidro Incolor 6 mm<br>Dados de desempenho Transmissão Luminosa:&nbsp; 59%<br>Reflexão Luminosa Externa: 13%<br>Fator Solar: 58%<br>Índice de Seletividade: 1,02Térreo<br>Vidros Laminados Temperados Incolores Planos e Curvos<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>A escolha do vidro traz fatores alinhados aos requisitos de desempenho energético, lumínico, segurança e estética, incluindo a preocupação de utilizar material com teor de reciclagem em sua composição. Em parte das fachadas, além dos vidros, foram combinados brises metálicos, para aumentar o conforto térmico e o ofuscamento.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O projeto contou com simulações energéticas e lumínicas, desde o início, com a preocupação de proporcionar conforto aos usuários e eficiência na operação, otimizando os custos com o sistema de condicionamento e de energia elétrica para a iluminação. Vidros laminados de controle solar bem-especificados proporcionam o conforto desejado e bem-estar ao usuário, além de trazer atenuação acústica ao ambiente.<br><strong>Certificações conquistadas pelo empreendimento:</strong><em>Ledd BD+C Core &amp; Shell v4</em> - Nível Gold (sustentabilidade) e <em>Fitwel 2</em> estrelas (saúde e bem-estar).<br><strong>Percentual de área envidraçada:</strong> 100% da fachada é envidraçada, totalizando cerca de 10.500 m² de vidro.<br><strong>Diferenciais da obra: </strong>O projeto inovador do Arquipeo é um marco arquitetônico de sustentabilidade e requalificação urbana. A concepção modular e pré-fabricada promove flexibilidade e integração de espaços, com amplas áreas livres e passarelas com vista para o exuberante paisagismo de espécies nativas. Sua fachada disruptiva cria uma combinação única dos vidros de controle solar de alta transparência, com o brise metálico dando forma e volumetria à fachada. Essa combinação, além do diferencial arquitetônico, trouxe alta eficiência e sustentabilidade ao empreendimento. O Arquipeo integra-se harmoniosamente ao entorno, aliando a sustentabilidade à eficiência do negócio. Um verdadeiro templo sustentável para a economia criativa, conquistou as certificações <em>Fitwel®</em> e <em>Leed Gold</em>.<strong><br></strong><strong>Empresa que inscreveu o projeto: </strong>Brookfield Properties e Claudia Mitne Consultoria em Vidros<br><strong><em>Site</em></strong><strong> ou redes sociais do projeto: </strong><a href="https://www.brookfieldproperties.com/en/our-properties/arquipeo-brazil-office-1942/">https://www.brookfieldproperties.com/en/our-properties/arquipeo-brazil-office-1942/</a></p>',
  },
  {
    nome: 'Atmosfera Air',
    cidade: 'Porto Alegre',
    estado: 'RS',
    quantidadeFotos: 4,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Cool Lite BRS 131 (4+4)<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Reduzindo o consumo de energia, melhorando o conforto térmico e o conforto visual do empreendimento, além de diminuir a necessidade de ar-condicionado e iluminação artificial. Contribuindo para a eficiência energética da construção, tornou-a mais sustentável.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O vidro BRS 131 oferece um conjunto de benefícios que vão além da estética, contribuindo para a eficiência energética, o conforto térmico e a qualidade de vida no ambiente, principalmente por sua reflexão interna baixa, promovendo uma maior interação com a vista do Rio Guaíba.<br><strong>Certificações conquistadas pelo empreendimento:</strong> não informado<br><strong>Percentual de área envidraçada:</strong> não informado<br><strong>Diferenciais da obra:</strong> não informado<br><strong>Empresa que inscreveu o projeto:</strong> Cebrace<br><strong><em>Site</em> ou redes sociais do projeto:</strong> não informado</p>',
  },
  {
    nome: 'Cúpula Central do Flamboyant Shopping',
    cidade: 'Goiânia',
    estado: 'GO',
    quantidadeFotos: 10,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vidro laminado termoendurecido de 12 mm composto por Neutral 50 6 mm + PVB + Verde&nbsp; 6 mm (Transmissão Luminosa 36% e Fator Solar 29%), com aplicação de serigrafia em padrão degradê.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>A especificação do vidro contribuiu significativamente para o desempenho sustentável do projeto ao proporcionar iluminação natural com filtragem solar eficiente. Essa solução, integrada a sensores de luminosidade, permitiu o uso inteligente da iluminação artificial, acionando-a apenas quando necessária, o que reduziu o consumo energético e melhorou o conforto ambiental.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O vidro especificado, com 36% de Transmissão Luminosa e Fator Solar de 29%, otimizado pela serigrafia em padrão degradê, proporcionou a redução da entrada de calor para, em média, 18%, que equivale a, aproximadamente, 1/3 do fator solar original de 50% dos vidros antigos.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Embora o empreendimento do Flamboyant Shopping como um todo possua muitas certificações, não foi possível atribuí-las exclusivamente ao projeto de reforma da cúpula.<br><strong>Percentual de área envidraçada:</strong> A nova cúpula central do Flamboyant Shopping é 100% envidraçada, perfazendo uma área de 1.085 m².<br><strong>Diferenciais da obra:</strong> Correção dos defeitos geométricos da estrutura. Especificação do vidro e aplicação da serigrafia em padrão degradê. Aplicação do sistema <em>Ecoglazing</em>. Execução de brises especiais. Resultados técnicos e estéticos. Redução do consumo de energia.<br><strong>Empresa que inscreveu o projeto:</strong> Avec<br><strong>Site ou redes sociais do projeto:</strong> https://www.flamboyant.com.br/</p>',
  },
  {
    nome: 'Domo Geodésico',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 10,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Laminado refletivo de 10 mm<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Contribuiu com controle solar e térmico.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> Conforto térmico: redução na temperatura e proteção contra raios UV.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Não se aplica.<br><strong>Percentual de área envidraçada:</strong> 90% de área envidraçada (em relação a área da obra).<br><strong>Diferenciais da obra:</strong> A Casa Mansur tem o orgulho de apresentar um projeto pioneiro no Brasil: um domo geodésico de vidro de grandes dimensões, concebido e executado integralmente por nossa equipe técnica para a Escola Sphere, localizada em Cotia (SP). Inspirado nos estudos do arquiteto e inventor Buckminster Fuller, o domo geodésico é uma estrutura composta por uma malha de triângulos que conformam uma superfície esferoidal, proporcionando máxima eficiência estrutural com o mínimo uso de material. Essa geometria favorece a distribuição homogênea de cargas, conferindo à estrutura uma combinação singular de leveza, resistência e estética.<br>O projeto foi desenvolvido em total alinhamento com a filosofia da Casa Mansur, que prioriza a sofisticação, a modernidade e, acima de tudo, a segurança em cada detalhe.<br>O domo possui 18 m de diâmetro e, aproximadamente, 9 m de altura, cobrindo uma área circular de cerca de 254 m². Sua configuração semiesférica é composta por 650 painéis de vidro laminado refletivo de 10 mm, cortados em diferentes formatos triangulares, de acordo com a malha geodésica. As peças foram coladas com silicone estrutural, dispensando caixilhos aparentes — o que resulta em um visual limpo, contemporâneo e altamente sofisticado.<br>A estrutura metálica é formada por 2 t de perfis tubulares de alumínio com pintura eletrostática branca, conectados por nós estruturais exclusivos, projetados sob medida para esse desafio arquitetônico. A fixação foi realizada com parafusos de aço inoxidável, garantindo resistência à corrosão e alta durabilidade em ambientes externos.<br>Além do impacto visual, o projeto incorpora critérios rigorosos de desempenho:<br>- Isolamento térmico e controle solar, graças ao uso do vidro refletivo;<br>- Conforto acústico, proporcionado pela laminação dos vidros;<br>- Segurança estrutural, validada por ensaios e análises conforme normas técnicas aplicáveis (<em>NBR 7199</em>, entre outras);<br>- Sustentabilidade, por meio do uso racional de materiais e do aproveitamento da iluminação natural.<br>Mais do que um espaço funcional para atividades pedagógicas e eventos, esse domo geodésico representa uma obra icônica que simboliza a união entre engenharia, arquitetura e inovação. O projeto evidencia o potencial do vidro estrutural colado como solução construtiva de alto desempenho, reduzindo a necessidade de materiais complementares e destacando-se pela leveza visual sem comprometer a robustez.<br>Trata-se de uma realização inédita no território nacional, que posiciona a Casa Mansur na vanguarda da aplicação arquitetônica do vidro em estruturas especiais.<br><strong>Empresa que inscreveu o projeto:</strong> Casa Mansur<br><strong>Site ou redes sociais do projeto:</strong> www.instagram.com/casamansurvidros</p>',
  },
  {
    nome: 'Edifício Beaumont',
    cidade: 'Campinas',
    estado: 'SP',
    quantidadeFotos: 6,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Cebrace Cool Lite BRN 130 4 mm + Incolor 4 mm.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Melhoria no conforto térmico, resultando na redução da carga térmica do ar-condicionado e redução no uso de iluminação artificial, proporcionando ambientes mais agradáveis.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O Cebrace Cool Lite BRN 130 possui um aspecto semirrefletivo prata e oferece uma redução de calor de, aproximadamente, 67%, uma transmissão de luz de 31%, proporcionando um controle de calor e equilíbrio de iluminação artificial. Devido à sua composição e espessura, garante um isolamento acústico eficiente, reduzindo ruídos externos e proporcionando maior tranquilidade dentro do ambiente.<br><strong>Certificações conquistadas pelo empreendimento:</strong> <em>Leed BD+C: Core and Shell (v4).</em><br><strong>Percentual de área envidraçada:</strong> 80%.<br><strong>Diferenciais da obra:</strong> O Edifício Beaumont, localizado em Campinas (SP) é um empreendimento corporativo de alto padrão, projetado pelos escritórios Lucas Padovani e XOK Arquitetura. Ele se destaca por sua fachada moderna, revestida com pele de vidro e abas de concreto aparente, proporcionando máxima iluminação natural.<br><strong>Empresa que inscreveu o projeto:</strong> Cebrace<br><strong><em>Site</em></strong><strong> ou redes sociais do projeto:</strong> https://www.cpn.com.br/project/beaumont/</p>',
  },
  {
    nome: 'Edifício Salma Tower',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 5,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>No vão luz: Insulado Laminado Stopray Vision 52 30 mm (46.1/12/44.1) = Incolor 4 mm + PVB Incolor 0,38 mm + Stopray Vision 52 #4 / Câm Ar 12 mm / Incolor 4 mm + Pvb Incolor 0,38 mm + Incolor 4 mm<br>No cobre laje: Laminado Sunlux 60 10 mm (46.1) = Sunlux 60 4 mm + Pvb Incolor 0,38 mm + Incolor 6 mm.<br>Foram utilizados diferentes soluções com vidro, conforme as necessidades do projeto: vidros insulados com <em>low-e</em> com dupla camada de prata, que oferecem alta performance térmica e eficiência energética; vidros laminados de controle solar, que reduzem a entrada de calor sem comprometer a luminosidade; além de vidros laminados e vidros laminados temperados, que garantem segurança e resistência mecânica.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>A especificação dos vidros contribuiu diretamente para a sustentabilidade do empreendimento ao equilibrar conforto térmico, eficiência energética e proteção solar.<br>Os vidros de controle solar especificados, Stopray Vision 52 (<em>low-e</em>) na configuração de insulado e aplicado no vão luz, aliado ao Sunlux 60 laminado na frente de laje, reduzem significativamente o ganho de calor, mantendo o conforto térmico e aproveitando a luz natural. Isso diminui a necessidade de ar-condicionado e iluminação artificial, resultando em menor consumo de energia e maior eficiência energética para o edifício.<br>O edifício foi contemplado com certificação <em>Leed BD+C Core and Shell</em>, tornando-se o primeiro edifício corporativo em São Paulo a conquistar o <em>Platinum </em>na versão 4.0. Esse marco destaca o compromisso com práticas sustentáveis e eficientes, promovendo um ambiente de trabalho confortável e inovador.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O vidro Stopray Vision 52, aplicado em unidade insulada, proporciona alto desempenho em conforto térmico ao bloquear a entrada de calor e manter a temperatura interna mais estável. Além disso, a composição insulada atua como barreira contra ruídos externos, contribuindo também para o conforto acústico dos ambientes.<br>O vidro especificado e fornecido para o edifício Salma Tower é de alto desempenho energético, com excelentes índices: Transmissão Luminosa de 48%, Reflexão Luminosa Externa de 16% e Fator Solar de 26%, o que garante um alto nível de seletividade de 1,84. Na prática, isso significa mais conforto térmico para os usuários e economia no consumo de energia, tanto para climatização quanto para iluminação.<br>Além de bloquear boa parte do calor externo e reduzir a troca de temperatura entre os ambientes, esse vidro contribui para manter os espaços internos agradáveis ao longo do dia. Outro destaque é o desempenho acústico: ele atenua ruídos em diferentes frequências, criando um ambiente mais silencioso e confortável.<br><strong>Certificações conquistadas pelo empreendimento:</strong> O empreendimento conquistou a certificação <em>Leed BD+C Core and Shell</em>, versão 4.0, na categoria <em>Platinum </em>— a mais alta classificação do sistema. Esse é um marco importante, sendo o primeiro edifício corporativo de São Paulo a obter essa certificação, que reconhece projetos com práticas sustentáveis e eficientes, promovendo um ambiente de trabalho saudável e inovador.<br><strong>Percentual de área envidraçada:</strong> Aproximadamente, 70% das fachadas são envidraçadas, totalizando mais de 13 mil m² de vidros fornecidos.<br><strong>Diferenciais da obra:</strong> Trata-se de um projeto realizado pela Aflalo e Gasperini com a execução dos vidros realizada pela PKO Vidros. O partido de arquitetura apresenta um volume minimalista com fachadas de vidro de alta performance ao longo dos dezesseis pavimentos da torre única, onde cada andar tem 850 m² e altura de 4,68 m entre os pisos. Por meio de um jogo de subtração de volumes, o projeto propõe jardins suspensos dispostos num conceito de espiral em que os terraços, de 110 m², sobem em torno do núcleo central dos elevadores e escadas; juntas, essas áreas ajardinadas e abertas totalizam mais de 1.700 m² de um bosque verticalizado. A intenção é promover bem-estar e qualidade de vida aos trabalhadores que podem até tirar os sapatos e andar no meio de uma pequena floresta com vegetação densa, em uma das avenidas mais movimentadas da cidade de São Paulo.<br>O novo corporativo Triple A, localizado na Avenida Faria Lima, é o 3º projeto do Brasil com a maior pontuação (83 pontos) considerando a categoria <em>Leed v4 BD+C: CS</em> da certificação, sendo o primeiro em São Paulo a receber o<em> Leed Platinum v4</em>. Apenas 8% do total de projetos certificados no mundo conseguiu atingir esse nível de certificação que combina alta eficiência, conforto e sustentabilidade.<br>Alguns índices de eficiência do projeto:<br>- 32,8% de redução do consumo de energia<br>- 98% de redução do consumo de água potável nos sanitários<br>- 100% de redução do consumo de água potável para irrigação<br>- 99,64% de resíduos da obra desviados de aterro<br><strong>Empresas que inscreveram o projeto:</strong> AGC e PKO Vidros<br><strong><em>Site</em> ou redes sociais do projeto:</strong> <a href="https://aflalogasperini.com.br/corporativo-faria-lima/">https://aflalogasperini.com.br/corporativo-faria-lima/</a> e <a href="https://www.instagram.com/aflalogasperini_arquitetos/">https://www.instagram.com/aflalogasperini_arquitetos/</a></p>',
  },
  {
    nome: 'Four Seasons Residence',
    cidade: 'Maringá',
    estado: 'PR',
    quantidadeFotos: 5,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vidro laminado curvo/comum de controle solar âmbar + PVB incolor + incolor<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>O vidro refletivo contribui significativamente para a sustentabilidade de um projeto ao reduzir a necessidade de ar-condicionado e outros sistemas de refrigeração, diminuindo o consumo de energia e, consequentemente, as emissões de carbono.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> Ao controlar a entrada de luz e calor, o vidro refletivo contribui para um ambiente mais confortável e agradável, tanto no que diz respeito à temperatura como no que tange a qualidade da luz natural. Isso pode reduzir a necessidade de iluminação artificial, contribuindo para a economia de energia e melhoria acústica com a combinação de vidro e PVB, que reduz significativamente a transmissão de ruídos do exterior para o interior, melhorando o conforto acústico e o bem-estar dos ocupantes.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Não informado<br><strong>Percentual de área envidraçada:</strong> 70%<br><strong>Diferenciais da obra:</strong> Vidros de alta complexidade de curvatura, raios bem-fechados ficaram perfeitos e sem deformidades.<br><strong>Empresa que inscreveu o projeto:</strong> Vipel Vidros Temperados<br><strong><em>Site</em> ou redes sociais do projeto:</strong> https://www.instagram.com/construtora.futuro/reel/C4JZqc0N44B/?locale=en-TH</p>',
  },
  {
    nome: 'Hy Pinheiros',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 5,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vidro laminado de segurança de controle solar, vidro laminado temperado e vidro laminado de segurança.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Os vidros laminados de controle solar utilizados no Hy Pinheiros reduzem significativamente o ganho de calor nos ambientes internos, diminuindo a necessidade de climatização artificial e, consequentemente, o consumo de energia elétrica. Já os vidros laminados com SentryGlass, aplicados nas varandas, oferecem maior durabilidade, resistência e segurança, além de contribuírem para o desempenho sustentável do empreendimento, em linha com os critérios de certificações como a <em>Leed</em>.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O vidro de controle solar atua como uma barreira térmica, minimizando a entrada de calor e ajudando a manter a temperatura interna mais estável e confortável. A laminação dos vidros também proporciona isolamento acústico, atenuando ruídos externos e contribuindo para um ambiente interno mais silencioso e agradável.<br><strong>Certificações conquistadas pelo empreendimento:</strong> <em>Leed.</em><br><strong>Percentual de área envidraçada:</strong> Aprox. 7.500 m² de vidros fornecidos.<br><strong>Diferenciais da obra:</strong> No Hy Pinheiros, os vidros de alta performance têm papel fundamental na eficiência e sustentabilidade do edifício. Aplicados em uma construção de padrão AAA, esses vidros contribuem diretamente para o conforto térmico e acústico, reduzindo a entrada de calor e ruídos externos. Sua tecnologia avançada também favorece a economia de energia e o cumprimento dos critérios da certificação <em>Leed</em>, reforçando o compromisso com práticas construtivas responsáveis e de alto desempenho.<br><strong>Empresa que inscreveu o projeto:</strong> GlassecViracon<br><strong><em>Site</em></strong><strong> ou redes sociais do projeto:</strong> <a href="https://www.hirecapital.com.br/hy-pinheiros/">https://www.hirecapital.com.br/hy-pinheiros/</a> e <a href="https://portoferraz.com.br/portfolio/hy-pinheiros/">https://portoferraz.com.br/portfolio/hy-pinheiros/</a></p>',
  },
  {
    nome: 'JK Square',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 6,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vidros Laminados de controle Solar AG43 nas espessuras de 10, 12, e 14 mm.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Nesse projeto de grandes vãos com grande área de entrada de luz, utilizamos vidros AG 43, um vidro de alto desempenho térmico e energético.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> Vidro de controle solar, baixo emissivo, bloqueia parcialmente o calor e permite que a luminosidade entre, reduzindo utilização de luz artificial e gastos com ar condicionado.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Não informado<br><strong>Percentual de área envidraçada:</strong> 83%<br><strong>Diferenciais da obra:</strong> Empreendimento grande, de alta dificuldade de instalação, vãos não homogêneos, revestimentos em caixas destacadas do corpo do edifício, iluminação com <em>LED</em>.<br><strong>Empresa que inscreveu o projeto:</strong> Cyberglass<br><strong><em>Site</em> ou redes sociais do projeto:</strong> https://jksquare.com.br/</p>',
  },
  {
    nome: 'Lago Center Business',
    cidade: 'Recife',
    estado: 'PE',
    quantidadeFotos: 5,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vivix Performa Duo Cinza - Vidro de controle solar laminado.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Em meio à vibrante Campina Grande, o Lago Center Business ergue-se como um ícone contemporâneo que alia arquitetura inteligente, eficiência ambiental e compromisso com o bem-estar urbano. Sua fachada, inteiramente envidraçada com o Vivix Performa Duo Cinza, é mais do que uma expressão estética — é um sistema ativo de sustentabilidade.<br>Um envelope que responde ao clima, à cidade e às pessoas<br>O Vivix Performa Duo Cinza, especificado para toda a envoltória vertical do edifício, é um vidro laminado de controle solar de alta performance, concebido para proporcionar:<br>- Redução expressiva da carga térmica interna, diminuindo a necessidade de ar-condicionado;<br>- Aproveitamento máximo da luz natural, reduzindo o consumo de energia elétrica com iluminação artificial;<br>- Conforto térmico e lumínico constante, equilibrando transparência, sombra e performance energética;<p><strong><em>Silêncio, segurança e conformidade – uma fachada para o século 21</em></strong><strong><em></p></em></strong>Por ser laminado, o vidro também atua como uma barreira acústica de excelência, garantindo ambientes internos mais silenciosos — um diferencial crucial em centros urbanos densamente ocupados. Além disso, trata-se de um vidro de segurança classe 1, em conformidade com a <em>ABNT NBR 7199</em>, oferecendo:<br>- Proteção ativa aos ocupantes em caso de impacto ou quebra;<br>- Resistência a vandalismo e intempéries, com longa durabilidade e baixa manutenção.<br>Tecnologia com propósito estético e urbano.<br>A tonalidade do Vivix Performa Duo Cinza confere à edificação uma estética leve, contemporânea e integrada ao céu da cidade — com alta reflexão de luz externa na medida certa (agregando valorização arquitetônica) e uma das mais baixas reflexões luminosas internas, ampliando o conforto visual à noite.<br>Esse projeto não apenas dialoga com o ambiente urbano, mas o transforma, servindo como referência para novas construções que desejam conciliar beleza, eficiência e impacto positivo.<br><strong><em>Arquitetura que Inspira o Futuro Sustentável</em></strong><strong><em><br></em></strong>O Lago Center Business prova que é possível unir <em>design</em> sofisticado, rigor técnico e desempenho ambiental real. Ao escolher o Vivix Performa Duo Cinza, a obra adotou uma solução envidraçada que não apenas cumpre normas — mas supera expectativas.<br>Trata-se de um exemplo claro de como a arquitetura comercial pode ser protagonista na transição para cidades mais sustentáveis, humanas e preparadas para os desafios climáticos do presente e do futuro.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O Vivix Performa Duo Cinza, especificado para toda a envoltória vertical do edifício, é um vidro laminado de controle solar de alta performance, concebido para proporcionar:<br>- Redução expressiva da carga térmica interna, diminuindo a necessidade de ar-condicionado;<br>- Aproveitamento máximo da luz natural, reduzindo o consumo de energia elétrica com iluminação artificial;<br>- Conforto térmico e lumínico constante, equilibrando transparência, sombra e performance energética.<br>Por ser laminado, o vidro também atua como uma barreira acústica de excelência, garantindo ambientes internos mais silenciosos — um diferencial crucial em centros urbanos densamente ocupados. Além disso, trata-se de um vidro de segurança classe 1, em conformidade com a <em>ABNT NBR 7199</em>, oferecendo:<br>- Proteção ativa aos ocupantes em caso de impacto ou quebra;<br>- Resistência a vandalismo e intempéries, com longa durabilidade e baixa manutenção.<br><strong>Certificações conquistadas pelo empreendimento:</strong> N/A.<br><strong>Percentual de área envidraçada:</strong> 60%.<br><strong>Diferenciais da obra:</strong> Olhando para um dos principais cartões-postais da cidade, o Lago Business reflete em seu projeto conceito a grandiosidade de Campina Grande.<br>O Viaduto Elipídio de Almeida traduz a imponência e o crescimento da Rainha da Borborema! Possui uma localização estratégica, que une praticidade e acessibilidade, por estarmos em nossa principal avenida: a Floriano Peixoto.<br>O Lago Business Center, ecossistema com salas e lojas para locação, integra vários serviços em um só lugar. Possui:<br>- Localização privilegiada<br>- Vista incrível de Campina Grande e do viaduto estaiado Elipídio de Almeida<br>- Projeto exclusivo<br>- Paisagismo conceitual<br>- Estacionamento<br>- Salas e Lojas com tamanhos personalizados<br><strong>Empresa que inscreveu o projeto:</strong> Vivix Vidros Planos<br><strong><em>Site</em></strong><strong> ou redes sociais do projeto:</strong> Não possui</p>',
  },
  {
    nome: 'Luna Nova',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 9,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vidro laminado de segurança de controle solar, vidro laminado de segurança serigrafado e vidro laminado de segurança.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Os vidros especificados contribuíram para a sustentabilidade ao otimizar o uso de recursos naturais, como luz e energia. O vidro de controle solar reduziu o consumo energético com climatização, enquanto os vidros incolor e serigrafado favoreceram a iluminação natural, diminuindo a dependência de luz artificial. Além disso, a durabilidade e a segurança dos vidros laminados aumentam a vida útil dos materiais e reduzem a necessidade de substituições frequentes.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O vidro de controle solar atuou como uma barreira térmica, reduzindo a transferência de calor para o interior e ajudando a manter a temperatura interna mais agradável. Já a composição laminada dos vidros proporcionou isolamento acústico, atenuando ruídos externos e melhorando o conforto sonoro dos ambientes.<br><strong>Certificações conquistadas pelo empreendimento:</strong> <em>Leed Zero Energy</em>, <em>Leed Zero Carbon </em>e <em>Fitwel.</em><br><strong>Percentual de área envidraçada:</strong> Aprox. 10 mil m² de vidros fornecidos.<br><strong>Diferenciais da obra:</strong> A obra se destaca pelo foco em sustentabilidade, conforto dos usuários e alto padrão técnico. Entre os diferenciais estão a adoção de vidros laminados e de controle solar, que contribuem para eficiência energética, segurança e conforto ambiental; o cuidado com a iluminação e ventilação natural; e a preocupação com o bem-estar dos ocupantes, alinhada a certificações como<em> Leed</em> e <em>Fitwel</em>. Além disso, o projeto valoriza a durabilidade, o desempenho acústico e a integração com o entorno urbano.<br><strong>Empresa que inscreveu o projeto:</strong> GlassecViracon<br><strong><em>Site</em> ou redes sociais do projeto:</strong> <a href="https://www.instagram.com/luna_corporate/">https://www.instagram.com/luna_corporate/</a> e <a href="https://lunacorporate.com.br/">https://lunacorporate.com.br/</a></p>',
  },
  {
    nome: 'O Parque (Torre Orvalho)',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 4,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vidro Laminado Cebrace Cool-Lite BRS131 10 mm<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>O<strong> </strong>Cool Lite BRS131 aplicado na fachada integra a linha de vidros que nasceu especialmente para atender o mercado brasileiro de arquitetura.<br>Combina uma excelente solução estética com um alto desempenho no controle de entrada de luz e calor. O BRS131 reduz em 67% a entrada de calor, deixando entrar 31% de luz.<br>Esse produto tem uma baixa reflexão interna, o que traz mais conforto para o usuário, uma vez que permite melhor visualização da paisagem para o parque.<br>Com o uso desses vidros, existe menos necessidade de uso de ar-condicionado e iluminação artificial ao longo do ano, reduzindo o consumo de energia.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> A escolha de materiais é fundamental para o sucesso de um projeto arquitetônico, influenciando não apenas a estética, mas também a funcionalidade, sustentabilidade e a experiência dos ocupantes.<br>Os vidros de proteção solar afetam diretamente a aparência e a sensação do espaço.<br>Ao regular a entrada de luz, os vidros de proteção solar reduzem a dependência de iluminação artificial e criam um ambiente mais confortável, aumentando a satisfação dos ocupantes e a produtividade em espaços comerciais.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Certificação <em>Leed</em> <em>Gold</em>, na categoria <em>Core &amp; Shell</em>. Além disso, o empreendimento conquistou duas estrelas da certificação <em>Fitwel</em>, concebida pelo Center of Active Design, responsável por atestar o impacto positivo dos projetos na saúde e na produtividade de seus ocupantes.<br><strong>Percentual de área envidraçada:</strong> 80%.<br><strong>Diferenciais da obra:</strong> A instalação dos painéis de vidro na fachada foi feita de maneira angular, criando uma estética diferenciada e destacando o empreendimento na região.<br>A Torre Orvalho, inserida no Complexo O Parque, é um empreendimento corporativo que atinge os mais altos padrões de especificações técnicas, aliando bem-estar e tecnologia, propiciando aos seus ocupantes um ambiente moderno e acolhedor.<br>É uma ótima opção para trabalhar e fazer negócios em uma atmosfera inspiradora e rodeada por natureza.<br><strong>Empresa que inscreveu o projeto:</strong> Cebrace<br><strong><em>Site</em></strong><strong> ou redes sociais do projeto:</strong> https://busca.cbre.com.br/imoveis/o_parque__torre_orvalho</p>',
  },
  {
    nome: 'Sede CFM',
    cidade: 'Brasília',
    estado: 'DF',
    quantidadeFotos: 1,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Cebrace Cool Lite BRS 131 + Float Verde.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Por meio de seu excelente índice de Fator Solar (0,29), representando um menor consumo de aparelhos de ar-condicionado.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> Reduzindo o calor em até 71%, frisando sempre que o vidro incolor comum reduz apenas 15%.<br><strong>Certificações conquistadas pelo empreendimento:</strong> O projeto não teve certificações. Porém, a construtora sempre se preocupou com a questão da sustentabilidade durante a obra (<a href="https://www.capitaldoentorno.com.br/construcao-sustentavel-nova-sede-do-conselho-federal-de-medicina-em-brasilia-segue-tendencia-da-construcao-civil/">fonte</a>)<br><strong>Percentual de área envidraçada:</strong> 80%.<br><strong>Diferenciais da obra:</strong> Conforto térmico e acústico sempre foram preocupação do projeto, pensado no conforto dos colaboradores e visitantes.<br><strong>Empresa que inscreveu o projeto:</strong> Cebrace<br><strong><em>Site</em></strong><strong> ou redes sociais do projeto:</strong> https://portal.cfm.org.br/noticias/cfm-inaugura-sua-nova-sede-com-a-presenca-do-vice-presidente-da-republica-e-politicos</p>',
  },
  {
    nome: 'Sede Soluti',
    cidade: 'Goiânia',
    estado: 'GO',
    quantidadeFotos: 5,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Cebrace Cool Lite BRN 148 e Cebrace Cool Lite BRN 130.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Por meio de seu excelente índice de Fator Solar (0,33), representando um menor consumo com aparelhos de ar-condicionado.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> Reduzindo o calor em até 67%, lembrando sempre que o vidro incolor comum reduz apenas 15%.<br><strong>Certificações conquistadas pelo empreendimento:</strong><em>Leed Gold</em>.<br><strong>Percentual de área envidraçada:</strong> 90%.<br><strong>Diferenciais da obra:</strong> A Sede da Soluti é considerada o prédio mais tecnológico do Centro-Oeste (fonte).<br><strong>Empresa que inscreveu o projeto:</strong> Cebrace<br><strong><em>Site</em></strong><strong> ou redes sociais do projeto:</strong> https://www.youtube.com/watch?v=iqhE7b-JxZw</p>',
  },
  {
    nome: 'Sede Stella',
    cidade: 'Sapiranga',
    estado: 'RS',
    quantidadeFotos: 3,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Cool Lite BRN 130 (4+4).<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Reduzindo o consumo de energia, melhorando o conforto térmico e o conforto visual do empreendimento , além de diminuir a necessidade de ar-condicionado e iluminação artificial, contribuindo para a eficiência energética da construção tornando-a mais sustentável.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O vidro BRN 130 contribuiu significativamente para o conforto térmico e acústico do empreendimento, reduzindo a entrada de calor e ruídos externos, mantendo a temperatura interna mais estável e reduzindo a carga térmica do ambiente, o que, por sua vez, diminui a necessidade de climatização e, consequentemente, o consumo de energia, além de proteger contra a radiação UV, resultando em um ambiente mais agradável e eficiente energeticamente.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Não possui.<br><strong>Percentual de área envidraçada:</strong> Não informado.<br><strong>Diferenciais da obra:</strong> Não informado.<br><strong>Empresa que inscreveu o projeto:</strong> Cebrace.<br><strong>Site ou redes sociais do projeto:</strong> Não possui.</p>',
  },
  {
    nome: 'Varanda',
    cidade: 'Porto Alegre',
    estado: 'RS',
    quantidadeFotos: 4,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Habitat neutro cinza (6+8).<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>O vidro Habitat neutro cinza melhora a eficiência energética e reduz as emissões, gerando menos consumo de energia e menores emissões de CO². Sendo assim, o vidro ajuda a reduzir os impactos ambientais do edifício ao longo do seu ciclo de vida.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O vidro de proteção solar Habitat neutro cinza, além de bloquear parte do calor que entra na edificação, permite uma boa entrada de luz natural, contribui para o conforto visual e reduz a necessidade de luz artificial durante o dia. Dependendo da composição, também pode reduzir a entrada de ruídos.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Não se aplica.<br><strong>Percentual de área envidraçada:</strong> 80%.<br><strong>Diferenciais da obra:</strong> Não informado.<br><strong>Empresa que inscreveu o projeto:</strong> Cebrace.<br><strong><em>Site</em></strong><strong> ou redes sociais do projeto:</strong> Não possui.</p>',
  },
  {
    nome: 'Viva! Campo Belo',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 4,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vidro laminado insulado controle solar, vidro insulado de controle solar, vidro laminado de segurança de controle solar e vidro laminado de segurança.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>A aplicação de vidros de controle solar contribuiu para a sustentabilidade ao reduzir o ganho de calor nas fachadas, diminuindo a necessidade de resfriamento artificial e promovendo maior eficiência energética em todo o edifício.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O uso estratégico de vidros insulados nas áreas com maior exigência de desempenho permitiu controlar a transferência térmica e reduzir significativamente os ruídos externos, garantindo ambientes internos mais confortáveis, tanto em temperatura quanto em silêncio.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Embora o empreendimento ainda não possua certificações oficiais como <em>Leed</em> ou<em> Well</em>, ele atende os mais altos padrões de qualidade, sendo classificado como <em>Triple A</em>. Isso significa que sua infraestrutura, localização, tecnologia e acabamento seguem os critérios adotados em empreendimentos de excelência, alinhados com as melhores práticas do mercado corporativo e imobiliário.<br><strong>Percentual de área envidraçada:</strong> Aproximadamente, 12.600 m² de vidros fornecidos.<br><strong>Diferenciais da obra:</strong> No Viva! Campo Belo, os vidros de alto desempenho têm papel essencial na combinação entre arquitetura moderna e sustentabilidade. Aplicados nas fachadas, eles garantem conforto térmico e acústico aos ambientes internos, além de contribuir para a eficiência energética do edifício. Com tecnologias que atendem os padrões de empreendimentos <em>Triple A</em>, os vidros utilizados reforçam o compromisso com qualidade, desempenho e bem-estar dos usuários.<br><strong>Empresa que inscreveu o projeto:</strong> GlassecViracon.<br><strong><em>Site</em> ou redes sociais do projeto:</strong> https://www.jacaranda.capital/projetos/viva/</p>',
  },
  {
    nome: 'W Residences',
    cidade: 'São Paulo',
    estado: 'SP',
    quantidadeFotos: 4,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Cebrace Cool Lite ST 150 6 mm + incolor 6 mm<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>O Cebrace Cool Lite ST 150 garante uma redução na entrada do calor no edifício, diminuindo a carga de climatização. Ele ainda permite um equilíbrio na entrada de luz natural, promovendo conforto para os usuários do edifício.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> O Cebrace Cool Lite ST 150 garante uma redução na entrada do calor no edifício, diminuindo a carga de climatização. Ele ainda permite um equilíbrio na entrada de luz natural, promovendo conforto para os usuários do edifício.<br><strong>Certificações conquistadas pelo empreendimento:</strong> Não se aplica.<br><strong>Percentual de área envidraçada:</strong> 80%.<br><strong>Diferenciais da obra:</strong> Com sua estrutura esbelta e ângulos marcantes, o edifício se destaca na paisagem, conferindo identidade arquitetônica e imponência à região. O conceito de uso misto integra apartamentos residenciais e hotel, conectados no térreo por passagens semipúblicas, restaurantes e espaços para eventos, trazendo vitalidade ao bairro. No topo, um <em>rooftop </em>aberto ao público oferece uma visão panorâmica de 360 graus da cidade, abrangendo parques e grandes avenidas.<br><strong>Empresa que inscreveu o projeto:</strong> Cebrace<br><strong>Site ou redes sociais do projeto:</strong> https://www.wresidencessp.com.br/en/w-residences-sao-paulo</p>',
  },
  {
    nome: 'Yachthouse',
    cidade: 'Balneário Camboriú',
    estado: 'SC',
    quantidadeFotos: 10,
    informacoes:
      '<p><strong>Especificações dos vidros utilizados: </strong>Vidro duplo insulado de controle solar, vidro laminado de segurança de controle solar, vidro laminado temperado e vidro laminado de segurança.<br><strong>De que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento: </strong>Os vidros insulados contribuíram para a sustentabilidade do empreendimento ao oferecer maior eficiência energética. Ao reduzir a carga térmica sobre o edifício, diminuem a necessidade de uso constante de sistemas de ar-condicionado, o que resulta em menor consumo de energia e impacto ambiental.<br><strong>De que forma o vidro especificado contribuiu para o conforto térmico e acústico do empreendimento:</strong> Os vidros insulados garantem alto desempenho térmico, mantendo temperaturas internas mais estáveis, e atingem um corte acústico de até 41 dB, o que neutraliza ruídos externos, inclusive os dos helipontos. Isso proporciona mais conforto e qualidade de vida aos moradores.<br><strong>Certificações conquistadas pelo empreendimento:</strong> <em>Leed Platinum<br></em><strong>Percentual de área envidraçada:</strong> Aproximadamente, 41 mil m² de vidros fornecidos<br><strong>Diferenciais da obra:</strong> A obra se destaca pelo uso de fachadas envidraçadas de alto desempenho, que incorporam vidros com controle solar, isolamento térmico e segurança. O projeto priorizou soluções sustentáveis e inovadoras, com foco na eficiência energética, no conforto dos usuários e no atendimento a exigentes certificações ambientais, como a <em>Leed Platinum</em>. Também foram fornecidos vidros insulados para a cobertura das piscinas, garantindo excelente desempenho térmico e acústico em áreas de grande exposição solar.<br><strong>Empresa que inscreveu o projeto:</strong> GlassecViracon<br><strong><em>Site</em> ou redes sociais do projeto:</strong><a href="https://yachthousebypininfarinaa.com.br/">https://yachthousebypininfarinaa.com.br/</a> e <a href="https://www.instagram.com/yachthouseresidenceclub/">https://www.instagram.com/yachthouseresidenceclub/</a></p>',
  },
]

export default function Galeria() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string
    alt: string
  } | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0)
  const [currentProject, setCurrentProject] = useState<Projeto | null>(null)
  const [showInfo, setShowInfo] = useState<Projeto | null>(null)

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
        <div className="mt-28 md:mt-36">
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
                onShowInfo={() => setShowInfo(projeto)}
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
      {showInfo && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <div
            className="absolute inset-0 bg-primary/50"
            onClick={() => setShowInfo(null)}
          />
          <div className="absolute top-20 inset-0 flex items-center justify-center p-4">
            <div
              className="bg-white rounded-lg  max-w-[1000px] max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold text-primary">
                  {showInfo.nome} - {showInfo.cidade} ({showInfo.estado})
                </h2>
                <button
                  onClick={() => setShowInfo(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <Cross2Icon className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <div
                  className="prose text-gray-600 prose-sm md:prose-base max-w-none"
                  dangerouslySetInnerHTML={{
                    __html:
                      showInfo.informacoes?.replace(
                        /<a\s+(?:[^>]*?\s+)?href="([^"]*)"([^>]*)>/g,
                        '<a href="$1" target="_blank" rel="noopener noreferrer"$2>',
                      ) || '',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <div className="my-10" />
    </main>
  )
}
