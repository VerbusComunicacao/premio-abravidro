import Image from "next/image";
import logo from '../../public/logo.png'

export default function Logo(){
  return (
    <><div className="md:invisible">
      <Image
        sizes="100vw"
        fill
        quality={100}
        alt='Logo Prêmio Abravidro'
        src={logo}
        style={{
          objectFit: 'contain',
        }} />
    </div><div className="invisible md:visible w-1/2 mt-40">
        <h1 className="-ml-12">
          <Image
            sizes="50vw"
            quality={100}
            alt='Prêmio Abravidro'
            src={logo}
            style={{
              objectFit: 'cover',
            }} />
        </h1>
      </div></>
  )
}