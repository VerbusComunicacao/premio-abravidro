import { ReactNode } from "react";

export function Subtitle({children} : {children: ReactNode}){
  return <h2 className="font-bold text-3xl lg:text-4xl text-background pb-4">{children}</h2>
}