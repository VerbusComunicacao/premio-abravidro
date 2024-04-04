'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

export function Category({
  title,
  children,
  link,
}: {
  title: string
  children?: ReactNode
  link?: string
}) {
  return (
    <motion.div
      className="bg-white rounded-md p-3 py-4 flex flex-col gap-3 justify-between hover:bg-yellow-400 transition-colors"
      initial={{
        opacity: 0,
        translateY: 50,
      }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, easings: ['easeInOut'] }}
      viewport={{ once: true }}
    >
      <h3 className="text-background font-bold uppercase">{title}</h3>
      {children && (
        <Popover>
          <PopoverTrigger className="text-sm text-start text-zinc-500 underline">
            Saiba mais
          </PopoverTrigger>
          <PopoverContent>{children}</PopoverContent>
        </Popover>
      )}
      {link && (
        <a className="text-sm text-zinc-500 underline" href={link}>
          Inscreva-se
        </a>
      )}
    </motion.div>
  )
}
