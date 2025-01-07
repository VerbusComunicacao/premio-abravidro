"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b lg:border-none lg:flex", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex rounded-md">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "data-[state=open]:text-background lg:max-w-72 lg:text-lg lg:text-zinc-600 flex flex-col rounded-md flex-1 items-center justify-between py-1 px-2 lg:px-0 text-xl font-bold transition-all bg-yellow-500 lg:bg-transparent hover:text-blue-700 [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      <div className=" lg:flex flex-col justify-start text-start">
        {children}
      </div>
      <ChevronDownIcon className="lg:hidden h-8 w-8 font-bold -mt-2 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="lg:absolute lg:h-96 lg:top-14 lg:rounded-md lg:bg-zinc-300 lg:py-5 lg:px-10 left-64 overflow-scroll md:scrollbar-hide max-h-96 text-sm data-[state=closed]:animate-accordion-up lg:data-[state=closed]:animate-accordion-hide data-[state=open]:animate-accordion-down lg:data-[state=open]:animate-accordion-show"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
