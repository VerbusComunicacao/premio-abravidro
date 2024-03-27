import { ReactNode } from 'react'

export function Category({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <div className="bg-white rounded-md p-3 py-4 flex flex-col justify-center hover:bg-yellow-400 transition-all">
      <h3 className="text-background font-bold">{title}</h3>
      <p className="text-zinc-500">{children}</p>
    </div>
  )
}
