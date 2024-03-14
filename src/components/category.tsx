'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Category(){
  return (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-black">
        <h3>Categoria Profissional</h3>
        <p className="text-sm">Primeira categoria</p>
        </AccordionTrigger>
      <AccordionContent>
       <div className="p-2 text-black"> Yes. It adheres to the WAI-ARIA design pattern.</div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}