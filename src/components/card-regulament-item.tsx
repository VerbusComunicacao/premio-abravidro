import { ReactNode } from 'react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export default function CardRegulamentItem({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent className="text-primary p-2 [&>p]:mb-2 lg:w-full">
        <p className="hidden lg:flex text-xl font-bold">{title}</p>
        {children}
      </AccordionContent>
    </AccordionItem>
  )
}
