import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function ParagraphAnimated({
  children,
}: {
  children: ReactNode
}) {
  return (
    <motion.p
      initial={{ opacity: 0, translateY: 25 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  )
}
