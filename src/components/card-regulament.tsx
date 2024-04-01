'use client'

import { ReactNode, useState } from 'react'
import { Accordion } from './ui/accordion'

export default function CardRegulament({ children }: { children: ReactNode }) {
  const [currentValue, setCurrentValue] = useState<string | undefined>(
    undefined,
  )

  function handleValueChange(value: string) {
    if (value.length > 0 || screen.width < 1024) {
      setCurrentValue(value)
    }
  }

  return (
    <Accordion
      type="single"
      defaultValue="Objetivo"
      value={currentValue}
      onValueChange={handleValueChange}
      collapsible
      className="mb-2"
    >
      {children}
    </Accordion>
  )
}
