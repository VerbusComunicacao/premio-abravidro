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
            <p> O Prêmio Saint-Gobain AsBEA de Arquitetura está completando uma década de fomento à inovação e à sustentabilidade e segue sendo uma inspiração para o mercado.</p>
            <p>São duas categorias com 5 tipologias. Além de 5 destaques e o Melhor Projeto da Edição, serão premiados os melhores projetos com foco em Conforto, Inovação e Sustentabilidade, e menções honrosas.</p>
            <p>A grande novidade deste ano é a inclusão do destaque Retrofit, que comemora uma década de premiação reforçando a grande tendência mundial de projetos revitalizados com foco na modernidade e recuperação das edificações, sem interferir nos elementos arquitetônicos originais.</p> 
         </div>
      </Container>
      <div className="bg-white/80 py-10 mt-10">
        <Container>
          <div className=" ">
            <h2 className="font-bold lg:text-5xl text-background">Categorias</h2>
            
            <div className="grid grid-cols-3 gap-3">
          
            </div>

          </div>
        </Container>
        <Container>
          <div className="mt-10 ">
            <h2 className="font-bold lg:text-5xl text-background">Regulamento</h2>
            
            <div className="grid grid-cols-3 gap-3">
          
            </div>

          </div>
        </Container>

        
       
      </div>
    

    </main>
  );
}
