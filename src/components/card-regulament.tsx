import { ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export default function CardRegulament({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <Accordion type="single" collapsible className="mb-2">
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className="text-primary p-2 [&>p]:mb-2">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
