'use client'

import { motion } from 'framer-motion'
import Logo from './logo'

export function HeroSection() {
  return (
    <>
      <motion.div>
        <Logo />
      </motion.div>
      <div className="max-w-md mt-10 [&>p]:pt-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-3">
          Aguarde!
        </h2>
        <p className="md:text-lg lg:text-xl mb-20">
          Em breve, mais informações.
        </p>
      </div>
    </>
  )
}
