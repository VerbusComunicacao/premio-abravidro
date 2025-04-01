import Link from 'next/link'
import logoEsquadria from '../../public/logo-Esquadria.png'
import logoGlass from '../../public/logo-glass.png'
import AbravidroImg from '../../public/abravidro.png'
import NMBImg from '../../public/NMB.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div>
        <div>
          <p className="text-xl pb-4 text-center mt-5 font-bold">Realização:</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10">
            <Link href="https://abravidro.org.br/">
              <Image width={185} src={AbravidroImg} alt="Logo Abravidro" />
            </Link>
            <Link href="https://nuernbergmesse-brasil.com.br/">
              <Image width={185} src={NMBImg} alt="NürnbergMesse Brasil" />
            </Link>
          </div>
        </div>
        <div className="md:flex items-center justify-center gap-5">
          <div className="flex flex-col items-center">
            <p className="text-xl pb-4 text-center mt-10 font-bold">Evento:</p>
            <Link href="https://home.glassexpo.com.br/">
              <Image
                src={logoGlass}
                alt="Logo Glass South America"
                width={250}
                style={{
                  objectFit: 'fill',
                }}
                className="h-14 w-56"
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-xl pb-4 text-center mt-10 font-bold">
              Evento simultâneo:
            </p>
            <Link href="https://home.esquadriashow.com.br/">
              <Image
                src={logoEsquadria}
                alt="Logo Abravidro"
                width={250}
                style={{
                  objectFit: 'cover',
                }}
                className="h-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
