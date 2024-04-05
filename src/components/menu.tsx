'use client'

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { useState } from 'react'

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined)

  const menu = [
    {
      title: 'Início',
      href: 'inicio',
    },
    {
      title: 'Categorias',
      href: 'categorias',
    },
    {
      title: 'Regulamento',
      href: 'regulamento',
    },
  ]

  function handleClickLink(id: string) {
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
    }
  }

  return (
    <>
      <div className="md:hidden">
        <Dialog onOpenChange={() => setIsOpen(undefined)} open={isOpen}>
          <DialogTrigger>
            <HamburgerMenuIcon className="ml-5 h-5 w-5" />
          </DialogTrigger>
          <DialogContent
            className="min-h-screen  justify-center
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
      <div className="hidden md:flex justify-end items-center w-full">
        <nav className="text-center text-base">
          <ul className="flex gap-5">
            {menu.map(({ href, title }) => {
              return (
                <li key={href}>
                  <button
                    className="uppercase text-white rounded-lg w-full hover:text-yellow-500"
                    onClick={() => handleClickLink(href)}
                  >
                    {title}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}
