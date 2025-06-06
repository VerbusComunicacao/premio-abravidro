'use client'

import { ChevronDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Menu() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  type MenuType = {
    title: string
    href: string
    submenu?: { title: string; href: string }[]
  }

  const menu: MenuType[] = [
    {
      title: 'Início',
      href: 'inicio',
    },
    {
      title: 'Concorrentes',
      href: 'concorrentes',
    },
    {
      title: 'Comissão Julgadora',
      href: 'jurados',
    },
    {
      title: 'Regulamento',
      href: 'regulamento',
    },
    {
      title: 'Edições Anteriores',
      href: 'edicoes-anteriores',
    },
    {
      title: 'Contato',
      href: 'contato',
    },
  ]

  function toggleSubmenu(title: string) {
    setOpenSubmenu(openSubmenu === title ? null : title) // Abre/fecha o submenu
  }

  function handleClickLink(id: string | undefined) {
    if (!id) {
      return
    }

    if (
      id === 'jurados' ||
      id === 'edicoes-anteriores' ||
      id === 'concorrentes'
    ) {
      return router.push(`/${id}`)
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - 90

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <>
      <div className="lg:hidden">
        <Dialog onOpenChange={() => setIsOpen(undefined)} open={isOpen}>
          <DialogTrigger>
            <HamburgerMenuIcon className="ml-5 h-5 w-5" />
          </DialogTrigger>
          <DialogContent
            className="min-h-screen justify-center
         flex flex-col items-center border-none pb-20"
          >
            <nav className="text-center text-lg">
              <ul className="flex flex-col gap-3">
                {menu.map(({ href, title }) => {
                  return (
                    <li key={href}>
                      <button
                        className="uppercase bg-white text-background py-2 px-5 rounded-lg w-full"
                        onClick={() => handleClickLink(href)}
                      >
                        {title}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </DialogContent>
        </Dialog>
      </div>
      <div className="hidden lg:flex justify-end items-center w-full">
        <nav className="text-center justify-center text-sm">
          <ul className="flex gap-2">
            {menu.map((item) => (
              <li
                key={item.title}
                className="relative group self-center"
                onMouseEnter={() => setOpenSubmenu(item.title)} // Abre ao passar o mouse
                onMouseLeave={() => setOpenSubmenu(null)} // Fecha ao tirar o mouse
              >
                {item.submenu ? (
                  <>
                    <button
                      className="uppercase text-white rounded-lg py-2 hover:text-yellow-500 flex items-center gap-1"
                      onClick={() => toggleSubmenu(item.title)} // Mantém o clique como fallback
                    >
                      {item.title}
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    {openSubmenu === item.title && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2 mt-2">
                        {/* Seta (triângulo) */}
                        {/* Submenu */}
                        <ul className=" text-background gap-1 shadow-lg space-y-2 min-w-[200px]">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.title} className="bg-yellow-400">
                              <button
                                className="uppercase text-sm py-2 px-4 w-full text-left hover:bg-gray-100"
                                onClick={() => handleClickLink(subItem.href)}
                              >
                                {subItem.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    className="uppercase text-white rounded-lg py-2 px-2 hover:text-yellow-500"
                    onClick={() => handleClickLink(item.href)}
                  >
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
