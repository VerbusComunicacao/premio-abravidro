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
    <AccordionItem value={title} className="mb-2 md:mb-0">
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent className="text-primary p-2 [&>p]:mb-3 [&>p]:leading-6 lg:w-full lg:text-base">
        <p className="hidden lg:flex text-xl font-bold uppercase">{title}</p>
        {children}
      </AccordionContent>
    </AccordionItem>
  )
}
