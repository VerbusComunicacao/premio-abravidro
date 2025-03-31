import Link from 'next/link'
import CardRegulament from './card-regulament'
import CardRegulamentItem from './card-regulament-item'
import { Subtitle } from './subtitle'
import { FaFilePdf } from 'react-icons/fa'

const categoriesHtml = `
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">O Pr&ecirc;mio Abravidro Glass South America, em sua 2&ordf; edi&ccedil;&atilde;o, conta com catorze categorias assim descritas:&nbsp;</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 1: Fabricante de vidro plano&nbsp;</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisito: Ind&uacute;stria com planta produtiva instalada em territ&oacute;rio nacional, produtora de&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">float</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, espelhos e/ou vidros de controle solar.&nbsp;</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO </span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, Educavidro etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em comiss&otilde;es de estudo do ABNT/CB-37</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de consultoria t&eacute;cnica para especifica&ccedil;&atilde;o correta do vidro</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: log&iacute;stica reversa, tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente e ao consumidor</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Diferenciais da empresa</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 2: Processador de vidro&nbsp;</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">A premia&ccedil;&atilde;o para essa categoria ser&aacute; regional, contemplando um vencedor de cada regi&atilde;o do Brasil: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.&nbsp;</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Ind&uacute;stria com planta produtiva instalada em territ&oacute;rio nacional; processamento em planta pr&oacute;pria de pelo menos um destes produtos: vidro temperado, vidro laminado e/ou vidro insulado.&nbsp;</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como a do vidro temperado (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">Inmetro</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) ou&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Realiza testagem regular dos produtos para atendimento &agrave;s normas? (Se sim, quais delas e se &eacute; interna ou externa)</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (PPCPE, Especializa&ccedil;&atilde;o T&eacute;cnica Abravidro, Educavidro, cursos&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Contribui&ccedil;&atilde;o para pesquisas de mercado: a empresa dever&aacute; informar se participa das pesquisas de mercado (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">Panorama </span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">e&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">Term&ocirc;metro Abravidro</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Data de funda&ccedil;&atilde;o</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em comiss&otilde;es de estudo do ABNT/CB-37&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de consultoria t&eacute;cnica para especifica&ccedil;&atilde;o correta do vidro&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico ao cliente para a realiza&ccedil;&atilde;o de pedido&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente e ao consumidor&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Diferenciais da empresa&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Fachada da f&aacute;brica identificada com a marca da empresa (enviar foto)</span></p>
<p><br></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 3: Fabricante de m&aacute;quinas e equipamentos de pr&eacute;-processamento e lamina&ccedil;&atilde;o de vidros</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio ou representante atuante no Brasil, assim como equipamentos instalados e em funcionamento no Pa&iacute;s. Podem participar dessa categoria, dentre outros, os fabricantes de mesas de corte, lapidadoras, centros de usinagem, furadeiras, lavadoras, impressoras digitais, calandras, autoclaves, fornos de lamina&ccedil;&atilde;o, ventosas, bra&ccedil;os girat&oacute;rios, classificadores, carrinhos e cavaletes. &nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Data de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega de pe&ccedil;as de reposi&ccedil;&atilde;o no Brasil</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Treinamento operacional dos equipamentos ap&oacute;s a instala&ccedil;&atilde;o</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Manual de opera&ccedil;&atilde;o do equipamento em portugu&ecirc;s&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Informar os diferenciais da empresa&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Efici&ecirc;ncia energ&eacute;tica dos equipamentos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Estoque de pe&ccedil;as de reposi&ccedil;&atilde;o no Brasil&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; N&uacute;mero de equipes/profissionais dispon&iacute;veis para servi&ccedil;os de manuten&ccedil;&atilde;o no Brasil&nbsp;</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 4: Fabricante de fornos de t&ecirc;mperas&nbsp;</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio ou representante atuante no Brasil, assim como fornos de t&ecirc;mpera instalados e em funcionamento no Pa&iacute;s.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;"> workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Data de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega de pe&ccedil;as de reposi&ccedil;&atilde;o no Brasil&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Treinamento operacional dos equipamentos ap&oacute;s a instala&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Manual de opera&ccedil;&atilde;o do equipamento em portugu&ecirc;s&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Informar os diferenciais da empresa&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Efici&ecirc;ncia energ&eacute;tica dos equipamentos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Estoque de pe&ccedil;as de reposi&ccedil;&atilde;o no Brasil&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; N&uacute;mero de equipes/profissionais dispon&iacute;veis para servi&ccedil;os de manuten&ccedil;&atilde;o no Brasil</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 5: Fabricante de rebolos e brocas</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio local ou representante atuante no Brasil, assim como produtos em uso no Pa&iacute;s.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Testagem regular dos produtos para atendimento &agrave;s normas (Realiza a testagem? Se sim, quais s&atilde;o elas e se &eacute; interna ou externa)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Data de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pronta entrega de produtos para o mercado brasileiro&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: log&iacute;stica reversa, tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo interno padronizado para desenvolvimento de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Informar os diferenciais da empresa</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 6: Fabricante de insumos para o processamento de vidros (exceto rebolos e brocas)</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio local ou representante atuante no Brasil, assim como produtos em uso no Pa&iacute;s. Podem participar dessa categoria, dentre outros, os fabricantes de &oacute;leos de corte,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">interlayers</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, esmaltes, etiquetas, cantoneiras/separadores e embalagens.</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Testagem regular dos produtos para atendimento &agrave;s normas (Realiza a testagem? Se sim, quais s&atilde;o elas e se &eacute; interna ou externa)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Data de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pronta entrega de produtos para o mercado brasileiro&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: log&iacute;stica reversa, tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo interno padronizado para desenvolvimento de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Informar os diferenciais da empresa</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 7: Fabricante de ferragens e acess&oacute;rios para vidro</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio local ou representante atuante no Brasil, assim como produtos em uso no Pa&iacute;s. Podem participar dessa categoria, dentre outros, os fabricantes de dobradi&ccedil;as, fechaduras, suportes, piv&ocirc;s, bot&otilde;es de corre&ccedil;&atilde;o, roldanas, carrinhos, puxadores, torres, prolongadores, aparadores, guias e batedores.&nbsp;</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;"> workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Tempo de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em comiss&otilde;es de estudo do ABNT/CB-37</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de consultoria t&eacute;cnica para especifica&ccedil;&atilde;o correta do produto</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial no p&oacute;s-venda</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pronta entrega de produtos para o mercado brasileiro</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: log&iacute;stica reversa, tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo interno padronizado para desenvolvimento de produtos</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente e ao consumidor&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Diferenciais da empresa</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Distribuidores regionais dos produtos (Quantas unidades? Por regi&atilde;o?)</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 8: Fabricante de sistemas de guarda-corpos de vidro</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio local ou representante atuante no Brasil, assim como produtos em uso no Pa&iacute;s.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Testagem regular dos produtos/sistemas para atendimento &agrave;s normas (Realiza a testagem? Se sim, quais delas e se &eacute; interna ou externa)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Tempo de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em comiss&otilde;es de estudo do ABNT/CB-37</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de consultoria t&eacute;cnica para especifica&ccedil;&atilde;o do produto/sistema&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Treinamento para a instala&ccedil;&atilde;o correta do produto/sistema&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial no p&oacute;s-venda&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pronta entrega de produtos para o mercado brasileiro&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: log&iacute;stica reversa, tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo interno padronizado para desenvolvimento de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente e ao consumidor&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Diferenciais da empresa&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;&bull; Distribuidores regionais dos produtos (Quantas unidades? Por regi&atilde;o?)</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 9: Fabricante de sistemas de envidra&ccedil;amento de sacadas</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio local ou representante atuante no Brasil, assim como produtos em uso no Pa&iacute;s.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Testagem regular dos produtos/sistemas para atendimento &agrave;s normas (Realiza a testagem? Se sim, quais delas e se &eacute; interna ou externa)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Tempo de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em comiss&otilde;es de estudo do ABNT/CB-37</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de consultoria t&eacute;cnica para especifica&ccedil;&atilde;o do produto/sistema&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Treinamento para a instala&ccedil;&atilde;o correta do produto/sistema&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial no p&oacute;s-venda&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pronta entrega de produtos para o mercado brasileiro&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: log&iacute;stica reversa, tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo interno padronizado para desenvolvimento de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente e ao consumidor&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Diferenciais da empresa&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;&bull; Distribuidores regionais dos produtos (Quantas unidades? Por regi&atilde;o?)</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 10: Fabricante de&nbsp;</span></strong><strong><em><span style="font-size:13pt;font-family:Arial,sans-serif;">kits</span></em></strong><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;de boxes de vidro para banheiro</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio local ou representante atuante no Brasil, assim como produtos em uso no Pa&iacute;s.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO </span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Testagem regular dos produtos/sistemas para atendimento &agrave;s normas (Realiza a testagem? Se sim, quais delas e se &eacute; interna ou externa)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Tempo de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em comiss&otilde;es de estudo do ABNT/CB-37</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de consultoria t&eacute;cnica para especifica&ccedil;&atilde;o do produto/sistema&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Treinamento para a instala&ccedil;&atilde;o correta do produto/sistema&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial no p&oacute;s-venda&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pronta entrega de produtos para o mercado brasileiro&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: log&iacute;stica reversa, tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo interno padronizado para desenvolvimento de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente e ao consumidor&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Diferenciais da empresa&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;&bull; Distribuidores regionais dos produtos (Quantas unidades? Por regi&atilde;o?)</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 11: Fabricante de sistemas de portas de vidro</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir f&aacute;brica, escrit&oacute;rio local ou representante atuante no Brasil, assim como produtos em uso no Pa&iacute;s.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Testagem regular dos produtos/sistemas para atendimento &agrave;s normas (Realiza a testagem? Se sim, quais delas e se &eacute; interna ou externa)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Tempo de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em comiss&otilde;es de estudo do ABNT/CB-37</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de consultoria t&eacute;cnica para especifica&ccedil;&atilde;o do produto/sistema&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Treinamento para a instala&ccedil;&atilde;o correta do produto/sistema&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial no p&oacute;s-venda&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pronta entrega de produtos para o mercado brasileiro&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade: log&iacute;stica reversa, tratamento de res&iacute;duos industriais, tratamento de &aacute;gua etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo interno padronizado para desenvolvimento de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou algum produto inovador, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente e ao consumidor&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Diferenciais da empresa&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;&bull; Distribuidores regionais dos produtos (Quantas unidades? Por regi&atilde;o?)</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 12: Desenvolvedor de&nbsp;</span></strong><strong><em><span style="font-size:13pt;font-family:Arial,sans-serif;">softwares</span></em></strong><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;para o mercado vidreiro</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir empresa, escrit&oacute;rio local ou representante atuante no Brasil, assim como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">softwares</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;em uso em empresas do mercado vidreiro no Pa&iacute;s.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: a empresa dever&aacute; informar quais certifica&ccedil;&otilde;es possui, como&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ISO</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;(</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">9001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">14001</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">) etc.&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (treinamentos internos,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">workshops</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Data de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de implanta&ccedil;&atilde;o</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de implanta&ccedil;&otilde;es dentro do prazo&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Treinamento operacional do&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">software</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;ap&oacute;s a implementa&ccedil;&atilde;o: a empresa dever&aacute; informar o seu diferencial</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de suporte t&eacute;cnico&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">online</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;e/ou presencial&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Possibilidade de customiza&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo de implementa&ccedil;&atilde;o de melhorias: a empresa dever&aacute; informar se possui um padr&atilde;o estabelecido</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Pr&aacute;ticas instaladas de sustentabilidade na empresa</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processo interno padronizado para desenvolvimento de&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">softwares</span></em></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Inova&ccedil;&atilde;o: se nos &uacute;ltimos dois anos a empresa lan&ccedil;ou alguma inova&ccedil;&atilde;o, informar o nome do produto e qual solu&ccedil;&atilde;o inovadora ele oferece&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Informar os diferenciais da empresa</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 13: Vidra&ccedil;aria</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">A premia&ccedil;&atilde;o para essa categoria ser&aacute; regional, contemplando um vencedor de cada regi&atilde;o do Brasil: Norte, Nordeste, Centro-Oeste, Sudeste e Sul.&nbsp;</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Possuir endere&ccedil;o em ponto comercial e inscri&ccedil;&atilde;o estadual ativa e atuar na venda e na instala&ccedil;&atilde;o de produtos no Pa&iacute;s.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, as empresas inscritas ser&atilde;o avaliadas e pontuadas conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Associativismo: a empresa dever&aacute; informar de quais entidades &eacute; associada&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Promo&ccedil;&atilde;o de qualifica&ccedil;&atilde;o dos funcion&aacute;rios (Senai, Educavidro, trabalho em altura/</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">NR35</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Data de funda&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Prazo m&eacute;dio de entrega&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de entrega de pedidos dentro do prazo&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em comiss&otilde;es de estudo do ABNT/CB-37&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presta&ccedil;&atilde;o de consultoria t&eacute;cnica para especifica&ccedil;&atilde;o correta do vidro&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Portf&oacute;lio de produtos&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em eventos do setor (feiras, palestras de entidades etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Participa&ccedil;&atilde;o em cursos de gest&atilde;o como os oferecidos pelo Sebrae&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Processos internos padronizados: or&ccedil;amento, vendas, medi&ccedil;&atilde;o, instala&ccedil;&atilde;o e entrega de manuais de utiliza&ccedil;&atilde;o dos sistemas (boxes e envidra&ccedil;amentos de sacada, por exemplo) ap&oacute;s a instala&ccedil;&atilde;o&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Seguran&ccedil;a do trabalho: fornecimento e utiliza&ccedil;&atilde;o de EPI&rsquo;s, rotina instalada de treinamentos etc.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Presen&ccedil;a digital (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">,&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">, redes sociais, an&uacute;ncios, canal de WhatsApp etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Canais de atendimento ao cliente e ao consumidor&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Informar os diferenciais da empresa&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; A comiss&atilde;o julgadora tamb&eacute;m ir&aacute; avaliar o hist&oacute;rico da empresa no mercado (</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">Reclame Aqui </span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">etc.)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Formul&aacute;rio padronizado de pedidos ao processador ou uso de ferramenta&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">e-commerce</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Fachada da vidra&ccedil;aria identificada com a logomarca da empresa (enviar foto)</span></p>
<p><br></p>
<p><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Categoria 14: Projeto que emprega vidros (residencial, comercial ou multiuso)</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">Requisitos: Obra comercial ou residencial constru&iacute;da no Brasil e inaugurada a partir de 1&ordm; de janeiro de 2022 at&eacute; 16 de maio de 2025 com vidros de fabrica&ccedil;&atilde;o nacional. Obra em que o vidro seja protagonista do projeto e esteja aplicado em conformidade com as normas t&eacute;cnicas vigentes no Pa&iacute;s. Projetos j&aacute; premiados na edi&ccedil;&atilde;o anterior do Pr&ecirc;mio Abravidro Glass South America n&atilde;o podem concorrer novamente.</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">Para efeito de classifica&ccedil;&atilde;o, os trabalhos inscritos ser&atilde;o avaliados e pontuados conforme os crit&eacute;rios detalhados a seguir:</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Certifica&ccedil;&otilde;es: o incorporador dever&aacute; informar as certifica&ccedil;&otilde;es conquistadas pelo empreendimento</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Sustentabilidade: o incorporador dever&aacute; informar de que forma o vidro especificado contribuiu para a sustentabilidade do empreendimento&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Conforto dos usu&aacute;rios: o incorporador dever&aacute; informar de que forma o vidro especificado contribuiu para o conforto t&eacute;rmico e ac&uacute;stico do empreendimento&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Seguran&ccedil;a: o incorporador dever&aacute; informar se as aplica&ccedil;&otilde;es de vidro no empreendimento atenderam as determina&ccedil;&otilde;es da&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">ABNT NBR 7199</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Percentual de &aacute;rea envidra&ccedil;ada: o incorporador dever&aacute; informar o percentual da &aacute;rea envidra&ccedil;ada do empreendimento&nbsp;</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Informar outros diferenciais do projeto&nbsp;</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Enviar fotos e arquivos do projeto arquitet&ocirc;nico (em&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">PDF</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">)&nbsp;</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Utiliza&ccedil;&atilde;o de vidros de fabrica&ccedil;&atilde;o nacional&nbsp;</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Declara&ccedil;&atilde;o de conformidade t&eacute;cnica do respons&aacute;vel pela obra</span><span style="font-size:13pt;font-family:Arial,sans-serif;"><br></span><span style="font-size:13pt;font-family:Arial,sans-serif;">A comiss&atilde;o julgadora tamb&eacute;m ir&aacute; avaliar:</span></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">&bull; Quanto os benef&iacute;cios oferecidos pelo vidro (seguran&ccedil;a, efici&ecirc;ncia energ&eacute;tica, conforto ac&uacute;stico e t&eacute;rmico) foram explorados na edifica&ccedil;&atilde;o e a criatividade do uso no projeto.</span></p>
`

export function Regulamento() {
  return (
    <div className="mt-10 md:mt-20 relative" id="regulamento">
      <Subtitle>Regulamento</Subtitle>
      <CardRegulament>
        <CardRegulamentItem title="1. Objetivo">
          <p>
            1.1 O Prêmio, uma iniciativa da Associação Brasileira de
            Distribuidores e Processadores de Vidros Planos (Abravidro) e
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
            respectivos familiares) da(s) promotora(s).{' '}
          </p>
          <p>
            2.3 A inscrição do interessado dar-se-á exclusivamente no website
            www.premioabravidroglass.com.br.
          </p>
          <p>
            2.4 A inscrição (e participação) do interessado será integralmente
            gratuita.
          </p>{' '}
          <p>
            2.5 Com a inscrição, o(a) participante autoriza, em caráter
            irrevogável e irretratável, de forma gratuita, a utilização de seus
            dados, imagem e/ou voz pela(s) promotora(s) por meio de seus canais
            de divulgação (website, redes sociais, impressos etc.) – mas não se
            limitando a isso –, podendo, ainda, a(s) promotora(s), deles
            livremente dispor, bem como de seus extratos, trechos e/ou partes e,
            ainda, editá-los em trechos e/ou em partes, fazer uso de tais
            atributos (dados, imagem e/ou voz) sem limitação de tempo e/ou
            número de vezes (de exibição), podendo ocorrer no Brasil e/ou no
            exterior, de forma análoga ou digital, por meio de qualquer mídia
            e/ou plataforma (atualmente existente ou a ser futuramente criada),
            não cabendo qualquer quantia ou compensação ao(a) participante,
            tampouco ser devida qualquer importância pela(s) promotora(s).
          </p>
        </CardRegulamentItem>
        <CardRegulamentItem title="3. Categorias e requisitos">
          <div dangerouslySetInnerHTML={{ __html: categoriesHtml }} />
        </CardRegulamentItem>
        <CardRegulamentItem title="4. Cadastro">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">4.1 Empresas e profissionais aut&ocirc;nomos dever&atilde;o preencher o cadastro dispon&iacute;vel no&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;www.premioabravidroglass.com.br e incluir imagens, dados e textos relevantes sobre a sua atua&ccedil;&atilde;o, sua hist&oacute;ria, n&uacute;mero de colaboradores e inova&ccedil;&otilde;es implementadas, contextualizando o impacto positivo (da empresa etc.) gerado no mercado vidreiro.&nbsp;</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">4.2 A identifica&ccedil;&atilde;o dos autores (pessoas naturais, pessoas jur&iacute;dicas) dever&aacute; ser inserida exclusivamente na ficha de cadastro e n&atilde;o nas imagens enviadas.&nbsp;</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">4.3 As inscri&ccedil;&otilde;es com arquivos que estiverem fora das especifica&ccedil;&otilde;es relacionadas acima ser&atilde;o desclassificadas.&nbsp;</span></p>
            `,
            }}
          />
        </CardRegulamentItem>

        <CardRegulamentItem title="5. Etapas do Concurso">
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <p>A premia&ccedil;&atilde;o ser&aacute; realizada em sete etapas:</p>
<p><br></p>

<p>5.1. ETAPA 1 &ndash; CADASTRO 
<p><br></p>
Cadastro de inscri&ccedil;&atilde;o do interessado (pessoa natural, jur&iacute;dica) em formul&aacute;rio eletr&ocirc;nico, sendo necess&aacute;rio informar o respons&aacute;vel para contatos e para recebimento do pr&ecirc;mio. Essa etapa ser&aacute; realizada at&eacute; o dia 16 de maio.</p>
<p><br></p>

<p>5.2. ETAPA 2 &ndash; VALIDA&Ccedil;&Atilde;O 
<p><br></p>
A valida&ccedil;&atilde;o do(a) inscrito(a) ser&aacute; realizada mediante an&aacute;lise do correto preenchimento do formul&aacute;rio eletr&ocirc;nico, bem como an&aacute;lise do correto envio da documenta&ccedil;&atilde;o pertinente. Essa etapa ocorrer&aacute; de forma concomitante ao prazo de cadastro das empresas, sendo finalizada no dia 16 de maio.</p>
<p><br></p>
<p>5.3. ETAPA 3 &ndash; DIVULGA&Ccedil;&Atilde;O DOS INSCRITOS
<p><br></p>
De 2 a 13 de junho ser&aacute; feita a divulga&ccedil;&atilde;o dos participantes (pessoa natural, jur&iacute;dica) regularmente inscritos (e aptos) a serem votados.</p>
<p><br></p>
<p>5.4. ETAPA 4 &ndash; PER&Iacute;ODO DA VOTA&Ccedil;&Atilde;O POPULAR  
<p><br></p>
O prazo da vota&ccedil;&atilde;o pelo p&uacute;blico ser&aacute; das 00h00 de 16 de junho de 2025 at&eacute; as 23h59 do dia 18 de julho de 2025. O participante mais votado de cada categoria pelo j&uacute;ri popular integrar&aacute; a sele&ccedil;&atilde;o de finalistas e computar&aacute; um ponto adicional na vota&ccedil;&atilde;o da comiss&atilde;o julgadora.</p>
<p><br></p>
<p>5.5. ETAPA 5 &ndash; VOTA&Ccedil;&Atilde;O DA COMISS&Atilde;O JULGADORA 
<p><br></p>
De 28 de julho a 12 de agosto ocorrer&aacute; a vota&ccedil;&atilde;o da comiss&atilde;o julgadora, quando at&eacute; cinco finalistas (quatro selecionados por somarem mais pontos nos crit&eacute;rios de avalia&ccedil;&atilde;o e um selecionado por ter vencido a vota&ccedil;&atilde;o popular) ser&atilde;o avaliados individualmente pelos membros do j&uacute;ri, recebendo notas de 1 a 10. Caso uma empresa vencedora da vota&ccedil;&atilde;o popular esteja entre as quatro que somaram mais pontos nos crit&eacute;rios de avalia&ccedil;&atilde;o de sua categoria, a quinta colocada em n&uacute;mero de pontos estar&aacute; classificada para a avalia&ccedil;&atilde;o da comiss&atilde;o julgadora.</p>
<p><br></p>
<p>5.6. ETAPA 6 &ndash; VENCEDORES  
<p><br></p>
O finalista de cada uma das catorze categorias com maior pontua&ccedil;&atilde;o ser&aacute; considerado vencedor, bem como ser&aacute; premiado em cerim&ocirc;nia. A cerim&ocirc;nia ser&aacute; realizada pela Abravidro e N&uuml;rnbergMesse Brasil durante a Glass South America, em 3 de setembro de 2025. </p>
            `,
            }}
          />
        </CardRegulamentItem>

        <CardRegulamentItem title="6. Validação e seleção dos vencedores">
          <div
            dangerouslySetInnerHTML={{
              __html: `
              6.1. As organizadoras farão a validação dos inscritos (pessoas naturais, jurídicas, conforme o caso) que atenderem os critérios estabelecidos neste regulamento (item 3). 
<p><br></p>
6.2.  Acaso haja um único inscrito para dada categoria, ela será desconsiderada, não havendo, por conseguinte, premiação (ou o que valha).
<p><br></p>
6.3 Projetos já premiados na edição anterior do Prêmio Abravidro Glass South America não podem concorrer novamente na Categoria 14: Projeto que emprega vidros (residencial, comercial ou multiuso).
<p><br></p>
6.4 Cada categoria terá um único vencedor, exceto para as categorias 2 e 13 do item 3, que terão um vencedor por região. Em caso de empate, caberá às organizadoras definir o premiado.
<p><br></p>
6.5 A decisão das comissões (organizadora, julgadora etc.) da presente premiação será soberana e irrevogável. 
<p><br></p>
6.6 Ao participar (e aderir) à presente premiação, o interessado/participante anui (e concorda) com todos os seus respectivos itens e/ou termos, renunciando a qualquer eventual futuro questionamento, em qualquer esfera ou instância que for. 

              `,
            }}
          />
        </CardRegulamentItem>
        <CardRegulamentItem title="7. Comissão Julgadora">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <p><span style="font-size:13pt;font-family:Arial,sans-serif;">7.1 Os nomes dos profissionais que integrar&atilde;o as comiss&otilde;es julgadoras ser&atilde;o divulgados at&eacute; o m&ecirc;s de junho do presente ano nos canais de comunica&ccedil;&atilde;o da Abravidro e no&nbsp;</span><em><span style="font-size:13pt;font-family:Arial,sans-serif;">site</span></em><span style="font-size:13pt;font-family:Arial,sans-serif;">&nbsp;da premia&ccedil;&atilde;o (www.premioabravidroglass.com.br).&nbsp;</span></p>
            `,
            }}
          />
        </CardRegulamentItem>
        <CardRegulamentItem title="8. Premiação">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <p><span style="font-size:13pt;font-family:Arial,sans-serif;">8.1 Os vencedores da 2&ordf; edi&ccedil;&atilde;o do Pr&ecirc;mio Abravidro Glass South America receber&atilde;o seus respectivos trof&eacute;us em cerim&ocirc;nia promovida pelas promotoras no dia 3 de setembro de 2025, durante a feira Glass South America 2025, a ser realizada no Distrito Anhembi, localizado na Rua Professor Milton Rodrigues, s/n&ordm; &ndash; no bairro de Santana, em S&atilde;o Paulo (SP), CEP 02012-021.&nbsp;</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">8.2 Os respons&aacute;veis se obrigam a manter seus dados atualizados.</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">8.3 Os respons&aacute;veis ser&atilde;o entrevistados (foto, v&iacute;deo) para divulga&ccedil;&atilde;o nos canais da(s) promotora(s).</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">8.4 A premia&ccedil;&atilde;o (trof&eacute;u) &eacute; pessoal e intransfer&iacute;vel.</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Arial,sans-serif;">8.5 A premia&ccedil;&atilde;o (trof&eacute;u), em hip&oacute;tese alguma, ser&aacute; convertida em dinheiro.&nbsp;</span></p>
            `,
            }}
          />
        </CardRegulamentItem>
        <CardRegulamentItem title="9. Selo de premiação">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            9.1 Os vencedores da 2ª edição do Prêmio Abravidro Glass South America poderão, ainda, fazer uso do selo criado pela(s) promotora(s) em forma impressa ou virtual (produtos, website etc.). 
            `,
            }}
          />
        </CardRegulamentItem>

        <CardRegulamentItem title="10. Disposições gerais">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <p>10.1. A inscrição e a participação na premiação importarão na concordância e aceitação, pelos participantes, de todos os termos e/ou condições previstos no presente regulamento. 
<p><br></p>

<p>10.2. Caberá, exclusivamente, à comissão organizadora decidir sobre eventuais casos omissos relativos ao presente regulamento, sendo suas decisões soberanas e irrecorríveis. </p>
	<p><br></p>

<p>10.3. A comissão organizadora reserva-se ao direito de modificar as datas informadas no presente regulamento sem prévia comunicação aos eventuais interessados e/ou participantes, cabendo-lhe divulgar novas datas no website das promotoras, em suas redes sociais e no website www.premioabravidroglass.com.br. </p>
<p><br></p>

<p>10.4. A comissão organizadora reserva-se ao direito de modificar os termos e/ou condições previstos no presente regulamento sem prévia comunicação aos eventuais interessados e/ou participantes, cabendo-lhe divulgar regulamento (atualizado) no website das promotoras, em suas redes sociais e no website www.premioabravidroglass.com.br. </p>
<p><br></p>

<p>10.5. Os vencedores poderão fazer uso do material de divulgação dos resultados desde que citando/divulgando, em conjunto, o nome e a logomarca do prêmio, da Abravidro e da Glass South America. </p>
<p><br></p>

<p>10.6. Os interessados assumem total e exclusiva responsabilidade a respeito de todo e qualquer dado e/ou documento e/ou informação e/ou imagem fornecidos por ocasião de sua inscrição e/ou necessários à sua participação, isentando, integralmente, a(s) promotora(s), a(s) comissão(ões) (organizadora, julgadora etc.) de qualquer reivindicação/reclamação de terceiros, respondendo judicialmente (conforme o caso). </p>
<p><br></p>

<p>10.7. Conforme dispõe os artigos 3º, II, da Lei 5.768/71 e 30 do Decreto 70.951/72, a participação no presente prêmio é voluntária e gratuita, não estando condicionada, em hipótese alguma, à sorte, ao pagamento de preço e/ou à compra de produtos ou uso de qualquer bem, direito ou serviço pelo participante. </p>
<p><br></p>

<p>10.8. Os signatários do termo/ficha de inscrição asseguram e afirmam serem os representantes legais competentes para assumir obrigações em nome da parte e representar de forma efetiva seus interesses. </p>
<p><br></p>

<p>10.9. Os participantes têm ciência de que não poderão exigir resultados concretos em razão ou em decorrência da presente premiação (e/ou de sua respectiva divulgação). </p>
<p><br></p>

<p>10.10. O presente regulamento entrará em vigor na data de sua divulgação. </p>

            `,
            }}
          />
        </CardRegulamentItem>
        <div className="mt-5" />
        <Link
          download="Regulamento"
          target="_blank"
          className="flex gap-5 justify-center items-center md:hover:bg-yellow-500 lg:max-w-60 bg-background py-2 px-4 rounded-lg font-bold"
          href="https://abravidro.org.br/wp-content/uploads/2025/03/Regulamento_PAGSA-2025.pdf"
        >
          <p className="w-36 lg:w-36"> Veja regulamento completo em PDF</p>
          <FaFilePdf size={30} />
        </Link>
      </CardRegulament>
    </div>
  )
}
