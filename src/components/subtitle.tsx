'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function Subtitle({
  children,
  color = 'primary',
}: {
  children: ReactNode
  color?: 'primary' | 'secondary'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2
        className={`font-bold text-3xl pb-4 ${color === 'primary' ? 'text-background' : 'text-white'}`}
      >
        {children}
      </h2>
    </motion.div>
  )
}
