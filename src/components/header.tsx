import logoGlass from '../../public/logo-glass.png'
import logoEsquadria from '../../public/logo-Esquadria.png'
import logoAbravidro from '../../public/abravidro.png'
import Image from 'next/image'
import { Container } from './container'

export function Header(){
  return (
    <div className="flex top-0 fixed bg-background h-28 w-screen justify-start items-end">
      <Container>
        <div className='flex w-100 h-16 mb-5'>
          <Image
            src={logoAbravidro}
            alt='Logo Abravidro'
            width={150}
            style={{
              objectFit: 'cover'
            }}
            />
            <Image
            className='ml-5'
            src={logoGlass}
            alt='Logo Abravidro'
            width={190}
            style={{
              objectFit: 'cover'
          }}
            />
            <Image
            src={logoEsquadria}
            alt='Logo Abravidro'
            width={250}
            style={{
              objectFit: 'cover'
            }}
            />
        </div>
      </Container>
    </div>
  )
}