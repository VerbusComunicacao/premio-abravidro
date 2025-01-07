import { FaPhoneAlt } from "react-icons/fa"
import { Subtitle } from "./subtitle"
import { MdEmail } from "react-icons/md"

export default function Contact() {
  return (
    <section className="mt-10 lg:mt-20" id="contato">
      <Subtitle>Contato</Subtitle>
      <p className="text-zinc-700 text-sm lg:text-lg lg:mb-2">
        Em caso de dúvidas, entre em contato com a organização:
      </p>
      <div className="flex gap-2 items-center">
        <MdEmail className="text-zinc-700" />
        <p className="text-zinc-700 text-sm underline lg:text-lg">
          <a href="mailto:premioabravidroglass@abravidro.org.br">
            premioabravidroglass@abravidro.org.br
          </a>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <FaPhoneAlt className="text-zinc-700" />
        <p className="text-zinc-700 text-sm lg:text-lg">(11) 3873-9908</p>
      </div>
    </section>
  )
}
