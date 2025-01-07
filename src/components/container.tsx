import React from "react"

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="px-10 md:px-32 lg:px-40">{children}</div>
}
