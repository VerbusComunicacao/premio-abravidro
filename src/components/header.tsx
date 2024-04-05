import logoGlass from '../../public/logo-glass.png'
import logoAbravidro from '../../public/abravidro.png'
import Image from 'next/image'
import Menu from './menu'

export function Header() {
  return (
    <div className="flex top-0 justify-center fixed bg-background h-20 md:h-28 w-screen items-end z-10">
      <div className="md:px-32 lg:px-40 hidden md:flex w-full h-16 mb-5">
        <Image
          src={logoAbravidro}
          alt="Logo Abravidro"
          width={150}
          style={{
            objectFit: 'cover',
          }}
        />
        <Image
          className="ml-5"
          src={logoGlass}
          alt="Logo Abravidro"
          width={290}
          style={{
            objectFit: 'cover',
          }}
        />
        <Menu />
      </div>
      <div className="px-8 flex justify-center items-center md:hidden w-full h-10 mb-5">
        <div>
          <Image
            src={logoAbravidro}
            alt="Logo Abravidro"
            width={140}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="ml-2">
          <Image
            src={logoGlass}
            alt="Logo Abravidro"
            width={180}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <Menu />
      </div>
    </div>
  )
}
