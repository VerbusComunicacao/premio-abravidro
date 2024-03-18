import Image from "next/image";
import logo from '../../public/logo.webp'

export default function Logo(){
  return (
    <>
      <div className="md:flex md:w-4/5 lg:w-1/2 mt-32 md:mt-40">
          <h1 className="">
            <Image
              sizes="100vw"
              quality={100}
              alt='Prêmio Abravidro'
              src={logo}
              style={{
                objectFit: 'cover',
              }} />
          </h1>
        </div>
      </>
  )
}