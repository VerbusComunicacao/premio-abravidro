'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function Category({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <motion.div
      className="bg-white rounded-md p-3 py-4 flex flex-col justify-start hover:bg-yellow-400 transition-colors"
      initial={{
        opacity: 0,
        translateY: 50,
      }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, easings: ['easeInOut'] }}
      viewport={{ once: true }}
    >
      <h3 className="text-background font-bold uppercase">{title}</h3>
      <p className="text-zinc-500">{children}</p>
    </motion.div>
  )
}
