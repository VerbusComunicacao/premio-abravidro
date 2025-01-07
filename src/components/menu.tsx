"use client"

import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Menu() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined)

  const menu = [
    {
      title: "Início",
      href: "inicio",
    },
    {
      title: "Vencedores",
      href: "vencedores",
    },
    {
      title: "Comissão Julgadora",
      href: "jurados",
    },
    {
      title: "Regulamento",
      href: "regulamento",
    },
    {
      title: "Contato",
      href: "contato",
    },
  ]

  function handleClickLink(id: string) {
    if (id === "jurados" || id === "vencedores") {
      return router.push(`/${id}`)
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - 90

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
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
