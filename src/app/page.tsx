import Background from '@/components/background'
import { Header } from '@/components/header'
import { Container } from '@/components/container'

import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Background />
      <Header />
      <Container>
        <HeroSection />
      </Container>
    </main>
  )
}
