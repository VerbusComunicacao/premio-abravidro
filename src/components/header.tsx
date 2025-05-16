import logoGlass from '../../public/logo-glass.png'
import logoAbravidro from '../../public/abravidro-35-anos.png'
import Image from 'next/image'
import Menu from './menu'
import Link from 'next/link'

export function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-background z-10">
      {/* Desktop/Tablet View */}
      <div className="hidden md:flex md:justify-between md:items-center lg:pr-10 lg:pl-40 md:px-32 h-28 w-full">
        <div className="flex gap-6 items-center flex-shrink-0">
          <Link href="https://abravidro.org.br/" className="flex-shrink-0">
            <div className="w-[180px] h-[64px] relative flex-shrink-0">
              <Image
                src={logoAbravidro}
                alt="Logo Abravidro"
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>
          </Link>
          <Link href="https://home.glassexpo.com.br/" className="flex-shrink-0">
            <div className="w-[180px] h-[64px] relative flex-shrink-0">
              <Image
                src={logoGlass}
                alt="Logo Glass"
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          </Link>
        </div>
        <div className="flex-shrink overflow-x-auto">
          <Menu />
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden justify-between items-center px-10 h-16 w-full">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="https://abravidro.org.br/" className="flex-shrink-0">
            <div className="w-[100px] h-[43px] relative flex-shrink-0">
              <Image
                src={logoAbravidro}
                alt="Logo Abravidro"
                fill
                className="object-contain"
                sizes="100px"
              />
            </div>
          </Link>
          <Link href="https://home.glassexpo.com.br/" className="flex-shrink-0">
            <div className="w-[140px] h-[60px] relative flex-shrink-0">
              <Image
                src={logoGlass}
                alt="Logo Glass"
                fill
                className="object-contain"
                sizes="140px"
              />
            </div>
          </Link>
        </div>
        <div className="flex-shrink-0">
          <Menu />
        </div>
      </div>
    </div>
  )
}
