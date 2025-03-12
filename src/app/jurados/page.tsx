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
          <p className="text-white">
            Em julho, anunciaremos a comissão julgadora que atuará na edição
            deste ano do prêmio. Aguarde!
          </p>
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
