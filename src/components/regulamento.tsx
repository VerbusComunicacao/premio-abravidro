import Link from 'next/link'
import CardRegulament from './card-regulament'
import CardRegulamentItem from './card-regulament-item'
import { Subtitle } from './subtitle'

export function Regulamento() {
  return (
    <div className="mt-10 md:mt-20 relative" id="regulamento">
      <Subtitle>Regulamento</Subtitle>
      <CardRegulament>
        <CardRegulamentItem title="1. Objetivo">
          <p>
            1.1 O Prêmio, uma iniciativa da Associação Brasileira de
            Distribuidores e Processadores de Vidros Planos (Abravidro) e da
            Nürnberg Messe Brasil (NMB), tem como objetivo contribuir para o
            reconhecimento, a divulgação e a modernização do setor de vidros
            planos em diferentes áreas da construção civil brasileira.
          </p>
        </CardRegulamentItem>
        <CardRegulamentItem title="2. Critérios de Participação">
          <p>
            2.1 Poderão participar da presente premiação empresas e
            profissionais autônomos (conforme o caso) que atuem no segmento
            vidreiro no Brasil.
          </p>
          <p>
            2.2 Não será permitida a participação dos colaboradores (e
            respectivos familiares) das promotoras.
          </p>
          <p>
            2.3 A inscrição do interessado dar-se-á exclusivamente no
            <i>website</i> www.premioabravidroglass.com.br.
          </p>
          <p>
            2.4 A inscrição (e participação) do interessado será integralmente
            gratuita.
          </p>
          <p>
            2.5 Com a inscrição, o(a) participante autoriza, em caráter
            irrevogável e irretratável, de forma gratuita, a utilização de seus
            dados, imagem e/ou voz pela promotora por meio de seus canais de
            divulgação (<i>website</i>, redes sociais, impressos etc.) – mas não
            se limitando a isto –, podendo, ainda, a promotora, deles livremente
            dispor, bem como de seus extratos, trechos e/ou partes e, ainda,
            editá-los em trechos e/ou em partes, fazer uso de tais atributos
            (dados, imagem e/ou voz) sem limitação de tempo e/ou número de vezes
            (de exibição), podendo ocorrer no Brasil e/ou no exterior, de forma
            análoga ou digital, por meio de qualquer mídia e/ou plataforma
            (atualmente existente ou a ser futuramente criada), não cabendo
            qualquer quantia ou compensação ao(a) participante, tampouco, ser
            devida qualquer importância pela promotora.
          </p>
        </CardRegulamentItem>
        <CardRegulamentItem title="3. Categorias e requisitos">
          <p>
            O Prêmio Abravidro Glass South America, nesta primeira edição, conta
            com dez categorias. São elas:
          </p>
          <p>
            <b>Categoria 1</b>: Fabricantes de vidro plano
          </p>
          <p>
            Requisito: Indústria com planta produtiva instalada em território
            nacional, produtora de float, espelhos e/ou vidros de controle
            solar.
          </p>
          <p>
            <b>Categoria 2</b>: Processadores de vidro
          </p>
          <p>
            A premiação para essa categoria será regional, contemplando um
            vencedor de cada região do Brasil: Norte, Nordeste, Centro-Oeste,
            Sudeste e Sul.
          </p>
          <p>
            Requisitos: Indústria com planta produtiva instalada em território
            nacional; processamento em planta própria de pelo menos um destes
            produtos: vidro temperado, vidro laminado e/ou vidro insulado.
          </p>
          <p>
            <b>Categoria 3</b>: Fabricantes de máquinas e equipamentos para
            processamento de vidro
          </p>
          <p>
            Requisitos: Possuir fábrica, escritório ou representante atuante no
            Brasil, assim como equipamentos instalados e em funcionamento no
            País. Podem participar, dentre outros, os fabricantes de lavadoras,
            lapidadoras, máquinas de corte e fornos de têmpera.
          </p>
          <p>
            <b>Categoria 4</b>: Fabricantes de insumos para o processamento de
            vidros
          </p>
          <p>
            Requisitos: Possuir fábrica, escritório local ou representante
            atuante no Brasil, assim como produtos em uso no País. Podem
            participar, dentre outros, fabricantes de rebolos, brocas e
            interlayers.
          </p>
          <p>
            <b>Categoria 5</b>: Fabricantes de ferragens e acessórios para vidro
          </p>
          <p>
            Requisitos: Possuir fábrica, escritório local ou representante
            atuante no Brasil, assim como produtos em uso no País.
          </p>
          <p>
            <b>Categoria 6</b>: Fabricantes de sistemas para envidraçamentos
          </p>
          <p>
            Requisitos: Possuir fábrica, escritório local ou representante
            atuante no Brasil, assim como produtos em uso no País. Podem
            participar dessa categoria, dentre outros, fabricantes de kits de
            boxe de banheiro, envidraçamento de sacada, guarda-corpos e perfis.
          </p>
          <p>
            <b>Categoria 7</b>: Fabricantes de selantes, gaxetas e adesivos
            (materiais para fixação e vedação)
          </p>
          <p>
            Requisitos: Possuir fábrica, escritório local ou representante
            atuante no Brasil, assim como produtos em uso no País.
          </p>
          <p>
            <b>Categoria 8</b>: Vidraçarias
          </p>
          <p>
            A premiação para essa categoria será regional, contemplando um
            vencedor de cada região do Brasil: Norte, Nordeste, Centro-Oeste,
            Sudeste e Sul.
          </p>
          <p>
            Requisitos: Possuir endereço em ponto comercial e inscrição estadual
            ativa e atuar na venda e na instalação de produtos no País.
          </p>
          <p>
            <b>Categoria 9</b>: Projetos e obras que empregam vidros
          </p>
          <p>
            Requisitos: Obra comercial ou residencial construída no Brasil e
            inaugurada a partir de 2020, com vidros de fabricação nacional. Obra
            em que o vidro seja protagonista do projeto e esteja aplicado em
            conformidade com as normas técnicas vigentes no País (apresentação
            de declaração de conformidade técnica do responsável pela obra).
          </p>
          <p>
            <b>Categoria 10</b>: Arquiteto especificador de obras com vidro
          </p>
          <p>
            Requisitos: Profissional em atividade no mercado, reconhecido por
            utilizar o vidro como protagonista em seus projetos residenciais ou
            comerciais; no portfólio deve constar um mínimo de cinco obras com
            vidro como protagonista, aplicado em conformidade com as normas
            técnicas vigentes no Brasil (apresentação de declaração de
            conformidade técnica do responsável pela obra).
          </p>
          <p>
            <i>
              Observação: Vale ressaltar que as categorias 9 e 10 terão os
              concorrentes indicados pela organização do prêmio, sendo que estes
              não precisam se inscrever como nas demais categorias. Haverá
              necessidade de aceite na indicação pelo representante da obra ou
              profissional escolhido, sendo necessário o envio de fotos e
              documentos que suportem a indicação.
            </i>
          </p>
        </CardRegulamentItem>
        <CardRegulamentItem title="4. Cadastro">
          <p>
            4.1 Empresas e profissionais autônomos deverão preencher o cadastro
            disponível no site www.premioabravidroglass.com.br e incluir
            imagens, dados e textos relevantes sobre a atuação da empresa, sua
            história, número de funcionários e inovações implementadas,
            contextualizando o impacto positivo da empresa gerado no mercado
            vidreiro.
          </p>
          <p>
            4.2 A identificação dos autores (pessoas e empresas) deverá ser
            inserida exclusivamente na ficha de cadastro e não nas imagens
            enviadas.
          </p>
          <p>
            4.3 As inscrições com arquivos que estiverem fora das especificações
            relacionadas acima serão desclassificadas.
          </p>
        </CardRegulamentItem>

        <CardRegulamentItem title="5. Etapas do Concurso">
          <p>A premiação será realizada em sete etapas:</p>
          <p>
            <b>5.1 ETAPA 1 – CADASTRO</b>
          </p>
          <p>
            Cadastro de inscrição do interessado (pessoa natural, jurídica) em
            formulário eletrônico, sendo necessário declinar o responsável para
            contatos e recebimento do prêmio.
          </p>
          <p>
            <b>5.2 ETAPA 2 – VALIDAÇÃO</b>
          </p>
          <p>
            A validação do inscrito mediante análise do correto preenchimento do
            formulário eletrônico. A validação do inscrito mediante análise do
            correto envio de documentação pertinente.
          </p>
          <p>
            <b>5.3 ETAPA 3 – SELEÇÃO</b>
          </p>
          <p>
            Seleção de participantes habilitados de cada categoria pela comissão
            organizadora da premiação.
          </p>
          <p>
            <b>5.4 ETAPA 4 – DIVULGAÇÃO DOS INSCRITOS</b>
          </p>
          <p>
            Divulgação dos participantes (pessoa natural, jurídica) regularmente
            inscritos (e aptos) a serem votados.
          </p>
          <p>
            <b>5.5 ETAPA 5 – PERÍODO DA VOTAÇÃO</b>
          </p>
          <p>
            O prazo da votação pelo público será das 00h00 de 15 de maio de 2024
            até as 23h59 do dia 22 de maio de 2024. Os cinco participantes mais
            votados de cada categoria pelo júri popular integrarão a seleção de
            finalistas e computarão um ponto adicional na votação da comissão
            julgadora.
          </p>
          <p>
            <b>5.6 ETAPA 6 – VOTAÇÃO DA COMISSÃO JULGADORA</b>
          </p>
          <p>
            Votação da comissão julgadora nas quais os finalistas serão
            avaliados individualmente pelos membros do júri recebendo notas de 1
            a 10.
          </p>
          <p>
            <b>5.7 ETAPA 7 – VENCEDORES</b>
          </p>
          <p>
            O finalista de cada uma das dez categorias com maior pontuação será
            considerado vencedor. O finalista de cada uma das dez categorias com
            maior pontuação será premiado em cerimônia. A cerimônia será
            realizada pela Abravidro e NürnbergMesse Brasil durante a Glass
            South America, em 12 de junho de 2024.
          </p>
        </CardRegulamentItem>

        <CardRegulamentItem title="6. Seleção">
          <p>
            6.1 A curadora, com o apoio da Abravidro, fará a seleção prévia das
            empresas inscritas que atenderem os requisitos estabelecidos neste
            regulamento, conforme consta no item 7, levando também em
            consideração a relevância dos inscritos para o mercado, abrangência
            de atuação, diversidade de portfólio etc.
          </p>
          <p>
            6.2 Cada categoria terá um único vencedor, exceto para as categorias
            2 e 8 que terão um vencedor por região. Em caso de empate, caberá à
            Abravidro junto à curadora definir o premiado.
          </p>
          <p>
            6.3 A decisão das comissões (organizadora, julgadora) da presente
            premiação será soberana e irrevogável.
          </p>
          <p>
            6.4 Ao participar (e aderir) à presente premiação, o
            interessado/participante anui (e concorda) com todos os seus
            respectivos itens e/ou termos, renunciando a qualquer eventual
            futuro questionamento.
          </p>
        </CardRegulamentItem>
        <CardRegulamentItem title="7. Critérios de avaliação">
          <p>
            Para efeito de classificação, os trabalhos inscritos serão avaliados
            e pontuados conforme os critérios detalhados a seguir:
          </p>
          <br />
          <p>
            <b>Fabricante de vidro plano</b>
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Certificações: a empresa deverá informar quais certificações
                possui, como ISO (9001, 14001) etc.
              </p>
            </li>
            <li>
              <p>
                Associativismo: a empresa deverá informar de quais entidades é
                associada
              </p>
            </li>
            <li>
              <p>
                Promoção de qualificação dos funcionários (treinamentos
                internos, workshops, Educavidro etc.)
              </p>
            </li>
            <li>
              <p>Prazo médio de entrega</p>
            </li>
            <li>
              <p>Percentual de entrega de pedidos dentro do prazo</p>
            </li>
            <li>
              <p>Participação em comissões de estudo do ABNT/CB-37</p>
            </li>
            <li>
              <p>
                Prestação de consultoria técnica para especificação correta do
                vidro
              </p>
            </li>
            <li>
              <p>Portfólio de produtos</p>
            </li>
            <li>
              <p>
                Práticas instaladas de sustentabilidade: logística reversa,
                tratamento de resíduos industriais, tratamento de água etc.
              </p>
            </li>
            <li>
              <p>
                Presença digital (site, e-commerce, redes sociais, anúncios,
                canal de WhatsApp etc.)
              </p>
            </li>
            <li>
              <p>Diferenciais da empresa</p>
            </li>
          </ul>
          <br />
          <p>
            <b>Processador</b>
          </p>
          <p>
            (Prêmio por região: Norte, Nordeste, Centro-Oeste, Sudeste e Sul)
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Certificações: a empresa deverá informar quais certificações
                possui, como a do vidro temperado (Inmetro) ou ISO (9001, 14001)
                etc.
              </p>
            </li>
            <li>
              <p>
                Realiza testagem regular dos produtos para atendimento às
                normas? (Se sim, quais delas e se é interna ou externa)
              </p>
            </li>
            <li>
              <p>
                Associativismo: a empresa deverá informar de quais entidades é
                associada
              </p>
            </li>
            <li>
              <p>
                Promoção de qualificação dos funcionários (PPCPE, Especialização
                Técnica Abravidro, Educavidro, cursos online etc.)
              </p>
            </li>
            <li>
              <p>
                Contribuição para pesquisas de mercado: a empresa deverá
                informar se participa das pesquisas de mercado (Panorama e
                Termômetro Abravidro)
              </p>
            </li>
            <li>
              <p>Data de fundação</p>
            </li>
            <li>
              <p>Prazo médio de entrega</p>
            </li>
            <li>
              <p>Percentual de entrega de pedidos dentro do prazo</p>
            </li>
            <li>
              <p>Participação em comissões de estudo do ABNT/CB-37</p>
            </li>
            <li>
              <p>
                Prestação de consultoria técnica para especificação correta do
                vidro
              </p>
            </li>
            <li>
              <p>
                Prestação de suporte técnico ao cliente para a realização de
                pedido
              </p>
            </li>
            <li>
              <p>Portfólio de produtos</p>
            </li>
            <li>
              <p>
                Práticas instaladas de sustentabilidade: tratamento de resíduos
                industriais, tratamento de água etc.
              </p>
            </li>
            <li>
              <p>
                Presença digital (site, e-commerce, redes sociais, anúncios,
                canal de WhatsApp etc.)
              </p>
            </li>
            <li>
              <p>Canais de atendimento ao cliente e ao consumidor</p>
            </li>
            <li>
              <p>Diferenciais da empresa</p>
            </li>
          </ul>
          <br />
          <p>
            <b>
              Fabricante de máquinas e equipamentos para processamento de vidro
            </b>
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Certificações: a empresa deverá informar quais certificações
                possui, como ISO (9001, 14001) etc.
              </p>
            </li>
            <li>
              <p>
                Associativismo: a empresa deverá informar de quais entidades é
                associada
              </p>
            </li>
            <li>
              <p>
                Promoção de qualificação dos funcionários (treinamentos
                internos, workshops etc.)
              </p>
            </li>
            <li>
              <p>Data de fundação</p>
            </li>
            <li>
              <p>Prestação de suporte técnico online e/ou presencial</p>
            </li>
            <li>
              <p>Portfólio de produtos</p>
            </li>
            <li>
              <p>Prazo médio de entrega de peças de reposição no Brasil</p>
            </li>
            <li>
              <p>Treinamento operacional dos equipamentos após a instalação</p>
            </li>
            <li>
              <p>Manual de operação do equipamento em português</p>
            </li>
            <li>
              <p>
                Práticas instaladas de sustentabilidade: tratamento de resíduos
                industriais, tratamento de água etc.
              </p>
            </li>
            <li>
              <p>
                Inovação: se nos últimos dois anos a empresa lançou algum
                produto inovador, informar o nome do produto e qual solução
                inovadora ele oferece.
              </p>
            </li>
            <li>
              <p>
                Presença digital (site, e-commerce, redes sociais, anúncios,
                canal de WhatsApp etc.)
              </p>
            </li>
            <li>
              <p>Canais de atendimento ao cliente e ao consumidor</p>
            </li>
            <li>
              <p>Informar os diferenciais da empresa</p>
            </li>
            <li>
              <p>Eficiência energética dos equipamentos</p>
            </li>
            <li>
              <p>Estoque de peças de reposição no Brasil</p>
            </li>
            <li>
              <p>
                Número de equipes/profissionais disponíveis para serviços de
                manutenção no Brasil
              </p>
            </li>
          </ul>
          <br />
          <p>
            <b>Fabricante de insumos para o processamento de vidros</b>
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Certificações: a empresa deverá informar quais certificações
                possui, como ISO (9001, 14001) etc.
              </p>
            </li>
            <li>
              <p>
                Testagem regular dos produtos para atendimento às normas
                (Realiza a testagem? Se sim, quais são elas e se é interna ou
                externa)
              </p>
            </li>
            <li>
              <p>
                Associativismo: a empresa deverá informar de quais entidades é
                associada
              </p>
            </li>
            <li>
              <p>
                Promoção de qualificação dos funcionários (treinamentos
                internos, workshops etc.)
              </p>
            </li>
            <li>
              <p>Data de fundação</p>
            </li>
            <li>
              <p>Prestação de suporte técnico online e/ou presencial</p>
            </li>
            <li>
              <p>Pronta entrega de produtos para o mercado brasileiro</p>
            </li>
            <li>
              <p>Prazo médio de entrega</p>
            </li>
            <li>
              <p>Percentual de entrega de pedidos dentro do prazo</p>
            </li>
            <li>
              <p>
                Práticas instaladas de sustentabilidade: logística reversa,
                tratamento de resíduos industriais, tratamento de água etc.
              </p>
            </li>
            <li>
              <p>
                Processo interno padronizado para desenvolvimento de produtos
              </p>
            </li>
            <li>
              <p>
                Inovação: se nos últimos dois anos a empresa lançou algum
                produto inovador, informar o nome do produto e qual solução
                inovadora ele oferece
              </p>
            </li>
            <li>
              <p>
                Presença digital (site, e-commerce, redes sociais, anúncios,
                canal de WhatsApp etc.)
              </p>
            </li>
            <li>
              <p>Canais de atendimento ao cliente e ao consumidor</p>
            </li>
            <li>
              <p>Portfólio de produtos</p>
            </li>
            <li>
              <p>Informar os diferenciais da empresa</p>
            </li>
          </ul>
          <br />
          <p>
            <b>Fabricante de ferragens e acessórios para vidro</b>
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Certificações: a empresa deverá informar quais certificações
                possui, como ISO (9001, 14001) etc.
              </p>
            </li>
            <li>
              <p>
                Associativismo: a empresa deverá informar de quais entidades é
                associada
              </p>
            </li>
            <li>
              <p>
                Promoção de qualificação dos funcionários (treinamentos
                internos, workshops etc.)
              </p>
            </li>
            <li>
              <p>Tempo de fundação</p>
            </li>
            <li>
              <p>Portfólio de produtos</p>
            </li>
            <li>
              <p>
                Prestação de consultoria técnica para especificação correta do
                produto
              </p>
            </li>
            <li>
              <p>
                Prestação de suporte técnico online e/ou presencial no pós-venda
              </p>
            </li>
            <li>
              <p>Pronta entrega de produtos para o mercado brasileiro</p>
            </li>
            <li>
              <p>Prazo médio de entrega</p>
            </li>
            <li>
              <p>Percentual de entrega de pedidos dentro do prazo</p>
            </li>
            <li>
              <p>
                Práticas instaladas de sustentabilidade: logística reversa,
                tratamento de resíduos industriais, tratamento de água etc.
              </p>
            </li>
            <li>
              <p>
                Processo interno padronizado para desenvolvimento de produtos
              </p>
            </li>
            <li>
              <p>
                Inovação: se nos últimos dois anos a empresa lançou algum
                produto inovador, informar o nome do produto e qual solução
                inovadora ele oferece
              </p>
            </li>
            <li>
              <p>
                Presença digital (site, e-commerce, redes sociais, anúncios,
                canal de WhatsApp etc.)
              </p>
            </li>
            <li>
              <p>Canais de atendimento ao cliente e ao consumidor</p>
            </li>
            <li>
              <p>Diferenciais da empresa</p>
            </li>
            <li>
              <p>
                Distribuidores regionais dos produtos (Quantas unidades? Por
                região?)
              </p>
            </li>
          </ul>
          <br />
          <p>
            <b>Fabricante de sistemas para envidraçamentos</b>
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Certificações: a empresa deverá informar quais certificações
                possui, como ISO (9001, 14001) etc.
              </p>
            </li>
            <li>
              <p>
                Testagem regular dos produtos/sistemas para atendimento às
                normas (Realiza a testagem? Se sim, quais delas e se é interna
                ou externa)
              </p>
            </li>
            <li>
              <p>
                Associativismo: a empresa deverá informar de quais entidades é
                associada
              </p>
            </li>
            <li>
              <p>
                Promoção de qualificação dos funcionários (treinamentos
                internos, workshops etc.)
              </p>
            </li>
            <li>
              <p>Tempo de fundação</p>
            </li>
            <li>
              <p>Portfólio de produtos</p>
            </li>
            <li>
              <p>
                Prestação de consultoria técnica para especificação do
                produto/sistema
              </p>
            </li>
            <li>
              <p>Treinamento para a instalação correta do produto/sistema</p>
            </li>
            <li>
              <p>
                Prestação de suporte técnico online e/ou presencial no pós-venda
              </p>
            </li>
            <li>
              <p>Pronta entrega de produtos para o mercado brasileiro</p>
            </li>
            <li>
              <p>Prazo médio de entrega</p>
            </li>
            <li>
              <p>Percentual de entrega de pedidos dentro do prazo</p>
            </li>
            <li>
              <p>
                Práticas instaladas de sustentabilidade: logística reversa,
                tratamento de resíduos industriais, tratamento de água etc.
              </p>
            </li>
            <li>
              <p>
                Processo interno padronizado para desenvolvimento de produtos
              </p>
            </li>
            <li>
              <p>
                Inovação: se nos últimos dois anos a empresa lançou algum
                produto inovador, informar o nome do produto e qual solução
                inovadora ele oferece.
              </p>
            </li>
            <li>
              <p>
                Presença digital (site, e-commerce, redes sociais, anúncios,
                canal de WhatsApp etc.)
              </p>
            </li>
            <li>
              <p>Canais de atendimento ao cliente e ao consumidor</p>
            </li>
            <li>
              <p>Diferenciais da empresa</p>
            </li>
            <li>
              <p>
                Distribuidores regionais dos produtos (Quantas unidades? Por
                região?)
              </p>
            </li>
          </ul>
          <br />
          <p>
            <b>
              Selantes, gaxetas e adesivos (materiais para fixação e vedação)
            </b>
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Certificações: a empresa deverá informar quais certificações
                possui, como ISO (9001, 14001) etc.
              </p>
            </li>
            <li>
              <p>
                Testagem regular dos produtos/sistemas para atendimento às
                normas (Realiza a testagem? Se sim, quais delas e se é interna
                ou externa)
              </p>
            </li>
            <li>
              <p>
                Associativismo: a empresa deverá informar de quais entidades é
                associada
              </p>
            </li>
            <li>
              <p>
                Promoção de qualificação dos funcionários (treinamentos
                internos, workshops etc.)
              </p>
            </li>
            <li>
              <p>Tempo de fundação</p>
            </li>
            <li>
              <p>
                Prestação de consultoria técnica para especificação do produto
              </p>
            </li>
            <li>
              <p>Treinamento para a aplicação correta do produto</p>
            </li>
            <li>
              <p>
                Prestação de suporte técnico online e/ou presencial no pós-venda
              </p>
            </li>
            <li>
              <p>Pronta entrega de produtos para o mercado brasileiro</p>
            </li>
            <li>
              <p>Prazo médio de entrega</p>
            </li>
            <li>
              <p>Percentual de entrega de pedidos dentro do prazo</p>
            </li>
            <li>
              <p>
                Práticas instaladas de sustentabilidade: logística reversa,
                tratamento de resíduos industriais, tratamento de água etc.
              </p>
            </li>
            <li>
              <p>
                Processo interno padronizado para desenvolvimento de produtos
              </p>
            </li>
            <li>
              <p>
                Inovação: se nos últimos dois anos a empresa lançou algum
                produto inovador, informar o nome do produto e qual solução
                inovadora ele oferece.
              </p>
            </li>
            <li>
              <p>
                Presença digital (site, e-commerce, redes sociais, anúncios,
                canal de WhatsApp etc.)
              </p>
            </li>
            <li>
              <p>Canais de atendimento ao cliente e ao consumidor</p>
            </li>
            <li>
              <p>Diferenciais da empresa</p>
            </li>
            <li>
              <p>
                Distribuidores regionais dos produtos (Quantas unidades? Por
                região?)
              </p>
            </li>
          </ul>
          <br />
          <p>
            <b>Vidraçaria</b>
          </p>
          <p>
            (Prêmio por região: Norte, Nordeste, Centro-Oeste, Sudeste e Sul)
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Associativismo: a empresa deverá informar de quais entidades é
                associada
              </p>
            </li>
            <li>
              <p>
                Promoção de qualificação dos funcionários (Senai, Educavidro,
                trabalho em altura/NR35 etc.)
              </p>
            </li>
            <li>
              <p>Data de fundação</p>
            </li>
            <li>
              <p>Prazo médio de entrega</p>
            </li>
            <li>
              <p>Percentual de entrega de pedidos dentro do prazo</p>
            </li>
            <li>
              <p>Participação em comissões de estudo do ABNT/CB-37</p>
            </li>
            <li>
              <p>
                Prestação de consultoria técnica para especificação correta do
                vidro
              </p>
            </li>
            <li>
              <p>Portfólio de produtos</p>
            </li>
            <li>
              <p>
                Participação em eventos do setor (feiras, palestras de entidades
                etc.)
              </p>
            </li>
            <li>
              <p>
                Participação em cursos de gestão como os oferecidos pelo Sebrae
              </p>
            </li>
            <li>
              <p>
                Processos internos padronizados: orçamento, vendas, medição,
                instalação e entrega de manuais de utilização dos sistemas
                (boxes e envidraçamentos de sacada, por exemplo) após a
                instalação
              </p>
            </li>
            <li>
              <p>
                Segurança do trabalho: fornecimento e utilização de EPI’s,
                rotina instalada de treinamentos etc.
              </p>
            </li>
            <li>
              <p>
                Presença digital (site, e-commerce, redes sociais, anúncios,
                canal de WhatsApp etc.)
              </p>
            </li>
            <li>
              <p>Canais de atendimento ao cliente e ao consumidor</p>
            </li>
            <li>
              <p>Informar os diferenciais da empresa</p>
            </li>
            <li>
              <p>
                A comissão julgadora também irá avaliar o histórico da empresa
                no mercado (Reclame Aqui etc.)
              </p>
            </li>
            <li>
              <p>
                Formulário padronizado de pedidos ao processador ou uso de
                ferramenta e-commerce
              </p>
            </li>
          </ul>
          <br />
          <p>
            <b>Projeto/Obra</b>
          </p>
          <p>(Residencial ou Comercial)</p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Certificações: o incorporador deverá informar as certificações
                conquistadas pelo empreendimento
              </p>
            </li>
            <li>
              <p>
                Sustentabilidade: o incorporador deverá informar de que forma o
                vidro especificado contribuiu para a sustentabilidade do
                empreendimento
              </p>
            </li>
            <li>
              <p>
                Conforto dos usuários: o incorporador deverá informar de que
                forma o vidro especificado contribuiu para o conforto térmico e
                acústico do empreendimento
              </p>
            </li>
            <li>
              <p>
                Segurança: o incorporador deverá informar se as aplicações de
                vidro no empreendimento atenderam as determinações da ABNT NBR
                7199
              </p>
            </li>
            <li>
              <p>
                Percentual de área envidraçada: o incorporador deverá informar o
                percentual da área envidraçada do empreendimento
              </p>
            </li>
            <li>
              <p>Informar outros diferenciais do projeto</p>
            </li>
            <li>
              <p>Enviar fotos e arquivos do projeto arquitetônico (em PDF)</p>
            </li>
            <li>
              <p>Utilização de vidros de fabricação nacional</p>
            </li>
          </ul>
          <br />
          <p>
            <i>A comissão julgadora também irá avaliar:</i>
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                <i>
                  Quanto os benefícios oferecidos pelo vidro (segurança,
                  eficiência energética, conforto acústico e térmico) foi
                  explorado na edificação e a criatividade do uso no projeto.
                </i>
              </p>
            </li>
          </ul>
          <br />
          <p>
            <b>Arquiteto especificador de obras com vidro</b>
          </p>
          <p>(Residencial ou Comercial)</p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                Busca de conhecimento sobre o vidro (benefícios, aplicações e
                normas)
              </p>
            </li>
            <li>
              <p>
                Porcentagem média de vidro especificado em cada projeto em
                relação aos outros materiais
              </p>
            </li>
            <li>
              <p>
                Porcentagem média de projetos em que o vidro é protagonista
                entre os demais materiais nos últimos cinco anos
              </p>
            </li>
            <li>
              <p>
                Especificações do vidro de acordo com as determinações da ABNT
                NBR 7199
              </p>
            </li>
            <li>
              <p>Enviar fotos das obras</p>
            </li>
            <li>
              <p>Uso de vidros de fabricação nacional</p>
            </li>
          </ul>
          <br />
          <p>
            <i>A comissão julgadora também irá avaliar:</i>
          </p>
          <ul className="[&>li]:list-disc [&>li]:ml-4">
            <li>
              <p>
                <i>
                  Quanto o profissional explora os benefícios oferecidos pelo
                  vidro (segurança, eficiência energética, conforto acústico e
                  térmico) em seus projetos.
                </i>
              </p>
            </li>
          </ul>
        </CardRegulamentItem>
        <CardRegulamentItem title="8. Comissão julgadora">
          <p>
            8.1 Os nomes dos profissionais que integrarão as comissões
            julgadoras serão divulgados ainda em abril nos canais de comunicação
            da Abravidro e no site da premiação
            (www.premioabravidroglass.com.br).
          </p>
        </CardRegulamentItem>
        <CardRegulamentItem title="9. Premiação">
          <p>
            9.1 Os vencedores da 1ª edição do Prêmio Abravidro Glass South
            America receberão seus respectivos troféus em cerimônia promovida
            pelas promotoras no dia 12 de junho de 2024, durante a feira Glass
            South America 2024, a ser realizada no Centro de Convenções São
            Paulo Expo, na Rodovia dos Imigrantes 5, s/nº, KM 1, São Paulo-SP,
            CEP 04329-900.
          </p>
          <p>9.2 Os responsáveis serão comunicados com antecedência. </p>
          <p>9.3 Os responsáveis se obrigam a manter seus dados atualizados.</p>
          <p>
            9.4 Os responsáveis se obrigam a manter confidencialidade/sigilo até
            o recebimento da premiação.
          </p>
          <p>
            9.5 Os responsáveis serão entrevistados (foto, vídeo) para
            divulgação nos canais das promotoras.
          </p>
          <p>9.6 A premiação (troféu) é pessoal e intransferível. </p>
          <p>
            9.7 A premiação (troféu), em hipótese alguma, será convertida em
            dinheiro.
          </p>
        </CardRegulamentItem>
        <CardRegulamentItem title="10. Selo de premiação">
          <p>
            10.1 Os vencedores da 1ª edição do Prêmio Abravidro Glass South
            America poderão, ainda, fazer uso do selo criado pelas promotoras em
            forma impressa ou virtual (produtos, <i>website</i> etc.).
          </p>
        </CardRegulamentItem>
        <CardRegulamentItem title="11. Disposições gerais">
          <p>
            11.1 A inscrição e a participação na premiação importarão na
            concordância e aceitação, pelos participantes, de todos os termos
            e/ou condições previstos no presente regulamento.
          </p>
          <p>
            11.2 Caberá exclusivamente à comissão organizadora decidir sobre
            eventuais casos omissos relativos ao presente regulamento, sendo
            suas decisões soberanas e irrecorríveis.
          </p>
          <p>
            11.3 A comissão organizadora reserva-se ao direito de modificar as
            datas informadas no presente regulamento sem prévia comunicação aos
            eventuais interessados e/ou participantes cabendo-lhe divulgar novas
            datas no <i>website</i> das promotoras, em suas redes sociais e no
            <i>website</i> www.premioabravidroglass.com.br.
          </p>
          <p>
            11.4 A comissão organizadora reserva-se ao direito de modificar os
            termos e/ou condições previstos no presente regulamento sem prévia
            comunicação aos eventuais interessados e/ou participantes
            cabendo-lhe divulgar regulamento (atualizado) no <i>website</i> das
            promotoras, em suas redes sociais e no <i>website</i>
            www.premioabravidroglass.com.br.
          </p>
          <p>
            11.5. Os vencedores poderão fazer uso do material de divulgação dos
            resultados desde que citando/divulgando, em conjunto, o nome e a
            logomarca do prêmio, da Abravidro e da Glass South America.
          </p>
          <p>
            11.6. Os interessados assumem total e exclusiva responsabilidade a
            respeito de todo e qualquer dado e/ou documento e/ou informação e/ou
            imagem fornecidos por ocasião de sua inscrição e/ou necessários à
            sua participação, isentando, integralmente, as promotoras, a
            comissão organizadora e/ou julgadora, de qualquer
            reivindicação/reclamo de terceiros, respondendo judicialmente
            (conforme o caso).
          </p>
          <p>
            11.7. Conforme dispõe os artigos 3º, II, da Lei 5.768/71 e 30 do
            Decreto 70.951/72, a participação no presente prêmio é voluntária e
            gratuita, não estando condicionada, em hipótese alguma, à sorte, ao
            pagamento de preço e/ou à compra de produtos ou uso de qualquer bem,
            direito ou serviço pelo participante.
          </p>
          <p>
            11.8. Os signatários do termo/ficha de inscrição asseguram e afirmam
            serem os representantes legais competentes para assumir obrigações
            em nome da parte e representar de forma efetiva seus interesses.
          </p>
          <p>
            11.9. Os participantes têm ciência de que não poderão exigir
            resultados concretos em razão ou em decorrência da presente
            premiação (e/ou de sua respectiva divulgação).
          </p>
          <p>
            11.10. O presente regulamento entrará em vigor na data de sua
            divulgação.
          </p>
        </CardRegulamentItem>
        <div className="mt-5" />
        <Link
          download="Regulamento"
          target="_blank"
          className="flex justify-center md:hover:bg-yellow-500 lg:max-w-60 bg-background py-4 px-4 rounded-lg font-bold"
          href="https://abravidro.org.br/wp-content/uploads/2024/04/Regulamento_premio-abravidro.pdf"
        >
          Visualizar PDF Completo
        </Link>
      </CardRegulament>
    </div>
  )
}
