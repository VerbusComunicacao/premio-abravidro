'use client'

import { motion } from 'framer-motion'
import Logo from './logo'
import { Subtitle } from './subtitle'
import ParagraphAnimated from './paragraph-animated'
import { HeroContent } from '@/types/hero-content'

interface HeroSectionProps {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <>
      <motion.div>
        <Logo />
      </motion.div>
      <div className="max-w-md mt-12 [&>p]:pt-5">
        <Subtitle color="secondary">
          {content.subtitle}
        </Subtitle>
        {content.paragraphs.map((paragrafo, index) => (
          <ParagraphAnimated key={index}>
            {paragrafo.paragraph}
          </ParagraphAnimated>
        ))}
      </div>
    </>
  )
}
