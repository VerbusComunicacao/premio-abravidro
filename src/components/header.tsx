import logoGlass from "../../public/logo-glass.png"
import logoAbravidro from "../../public/abravidro.png"
import Image from "next/image"
import Menu from "./menu"
import Link from "next/link"

export function Header() {
  return (
    <div className="flex top-0 justify-start fixed bg-background h-20 md:h-28 w-screen items-end z-10">
      <div className="md:px-32 lg:px-40 hidden md:flex md:justify-between md:items-center h-16 mb-5 w-full">
        <div className="flex gap-3">
          <Link
            className="flex justify-center items-center"
            href="https://abravidro.org.br/"
          >
            <Image
              src={logoAbravidro}
              alt="Logo Abravidro"
              width={150}
              style={{
                objectFit: "cover",
              }}
              className="w-72 h-16"
            />
          </Link>
          <Link
            className="flex justify-center items-center"
            href="https://home.glassexpo.com.br/"
          >
            <Image
              src={logoGlass}
              alt="Logo Abravidro"
              width={290}
              style={{
                objectFit: "cover",
              }}
              className="ml-5 w-80 h-28"
            />
          </Link>
        </div>
        <Menu />
      </div>
      <div className="px-8 flex justify-between items-center md:hidden w-full h-10 mb-5">
        <div className="flex justify-center items-center">
          <Link href="https://abravidro.org.br/">
            <Image
              src={logoAbravidro}
              alt="Logo Abravidro"
              width={140}
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
          <div className="ml-2">
            <Link href="https://home.glassexpo.com.br/">
              <Image
                src={logoGlass}
                alt="Logo Abravidro"
                width={180}
                style={{
                  objectFit: "cover",
                }}
              />
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}
