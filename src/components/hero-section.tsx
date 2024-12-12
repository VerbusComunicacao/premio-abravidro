'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'
import { HeroContent } from '@/types/wordpress'

interface HeroSectionProps {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {

  console.log('content', content.content)

  return (
    <>
      <motion.div>
        <Logo />
      </motion.div>
      <div className="max-w-md mt-12 [&>p]:pt-5">
        <Subtitle color="secondary">
          {content.title}
        </Subtitle>
        {content.content.split('\n').map((paragrafo, index) => (
          <ParagraphAnimated key={index}>
            {paragrafo}
          </ParagraphAnimated>
        ))}
      </div>
    </>
  )
}
