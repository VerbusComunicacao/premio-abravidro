"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export function Category({
  title,
  children,
  link,
  callAction,
}: {
  title: string
  children?: ReactNode
  link?: string
  callAction?: string
}) {
  return (
    <motion.div
      className="bg-white shadow-sm rounded-md p-3 py-4 flex flex-col gap-3 justify-between hover:bg-yellow-400 transition-colors"
      initial={{
        opacity: 0,
        translateY: 50,
      }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, easings: ["easeInOut"] }}
      viewport={{ once: true }}
    >
      <h3 className="text-background font-bold uppercase">{title}</h3>
      <div className="flex flex-col">
        {children && (
          <Popover>
            <PopoverTrigger className="text-sm text-start text-zinc-500 hover:text-white underline">
              Saiba mais
            </PopoverTrigger>
            <PopoverContent>{children}</PopoverContent>
          </Popover>
        )}
        {link && (
          <a
            className="text-sm text-zinc-500 underline hover:text-white"
            href={link}
          >
            {callAction ?? "Inscreva-se"}
          </a>
        )}
      </div>
    </motion.div>
  )
}
