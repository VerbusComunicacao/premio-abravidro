import Background from "@/components/background";
import { Header } from "@/components/header";
import Image from "next/image";
import { Container } from "@/components/container";
import { Session } from "inspector";
import { Section } from "@/components/section";
import Logo from "@/components/logo";
import { Category } from "@/components/category";



export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col">
      <Background/>
      <Header/>
      <Container>     
          <Logo/>  
          <div className="max-w-md mt-10 [&>p]:pt-5">
          <h2 className="text-3xl font-bold">Celebrando o trabalho do setor</h2>
          <p>A Abravidro e a NürnbergMesse Brasil se juntaram para criar a mais nova premiação do segmento vidreiro nacional, o Prêmio Abravidro Glass South America. A iniciativa tem o objetivo de reconhecer as marcas que atuam nos diversos elos de nossa cadeia, trabalhando com produtos de qualidade e excelência no atendimento aos clientes.</p>
          <p>O prêmio terá periodicidade bienal, sendo apresentado durante a Glass South America, a maior feira do mercado de vidro na América Latina. A primeira edição ocorre este ano, com cerimônia de entrega marcada para o dia 12 de junho, na noite do primeiro dia da mostra.</p>
          <p>Para concorrerem, as empresas deverão se inscrever gratuitamente. Ao todo, são 8 categorias diferentes – confira a lista a seguir.</p>
          <p>Participe conosco dessa celebração do setor vidreiro!</p>
         </div>
      </Container>
      <div className="bg-white/80 py-10 mt-10">
        <Container>
          <div className=" ">
            <h2 className="font-bold lg:text-5xl text-background">Categorias</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
              <Category title={"FABRICANTE DE VIDROS PLANOS"} >
                Inclui fabricantes de <i>float</i>, espelho, vidros de controle solar etc.
              </Category>

              <Category title={"PROCESSADOR DE VIDROS PLANOS"} >
                Prêmio será concedido por região: Centro-Oeste, Nordeste, Norte, Sudeste e Sul
              </Category>

              <Category title={"FABRICANTE DE MAQUINÁRIOS E EQUIPAMENTOS PARA PROCESSAMENTO DE VIDROS"} >
                Inclui lavadoras, lapidadoras, máquinas de corte, fornos de têmpera etc.
              </Category>

              <Category title={"FABRICANTE DE INSUMOS PARA PROCESSAMENTO DE VIDROS"} >
                Inclui rebolos, brocas, <i>interlayers</i> etc.
              </Category>

              <Category title={"FABRICANTE DE FERRAGENS E ACESSÓRIOS PARA VIDROS"} />

              <Category title={"FABRICANTE DE SISTEMAS DIVERSOS PARA ENVIDRAÇAMENTO"} >
                Inclui kits de boxe de banheiro, envidraçamento de sacada, guarda-corpos, perfis de alumínio etc.
              </Category>

              <Category title={"SELANTES, GAXETAS E ADESIVOS"} >
                Inclui materiais para vedação
              </Category>

              <Category title={"VIDRAÇARIA"} />
            </div>

          </div>
        </Container>
        <Container>
          <div className="mt-10 ">
            <h2 className="font-bold lg:text-5xl text-background">Regulamento</h2>
            
            

          </div>
        </Container>

        
       
      </div>
    

    </main>
  );
}
