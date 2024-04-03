import logoGlass from '../../public/logo-glass.png'
import logoAbravidro from '../../public/abravidro.png'
import Image from 'next/image'
import { Container } from './container'
import Menu from './menu'

export function Header() {
  return (
    <div className="flex top-0 fixed bg-background h-20 md:h-28 w-screen justify-start items-end z-10">
      <Container>
        <div className="hidden md:flex w-100 h-16 mb-5">
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
            width={190}
            style={{
              objectFit: 'cover',
            }}
          />
          <Menu />
        </div>
        <div className="flex justify-center items-center md:hidden w-full h-10 mb-5">
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
      </Container>
    </div>
  )
}
