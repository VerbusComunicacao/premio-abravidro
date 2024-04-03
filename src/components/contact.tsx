import { Subtitle } from './subtitle'

export default function Contact() {
  return (
    <section className="mt-10 lg:mt-20">
      <Subtitle>Contato</Subtitle>
      <p className="text-zinc-700 text-sm">
        Em caso de dúvidas, entre em contato com a organização:{' '}
        <a href="mailto:premioabravidroglass@abravidro.org.br">
          premioabravidroglass@abravidro.org.br
        </a>
      </p>
      <p className="text-zinc-700 text-sm">(11) 3873-9908</p>
    </section>
  )
}
