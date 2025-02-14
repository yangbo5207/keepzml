'use client'

import { createContext, useState, PropsWithChildren } from 'react'

export const CodeTabsContext = createContext<{
  index: number
  setIndex: (index: number) => void
}>({
  index: 0,
  setIndex: () => { }
})

export default function Provider({ children }: PropsWithChildren) {
  const [index, setIndex] = useState(0)

  return (
    <CodeTabsContext.Provider value={{
      index,
      setIndex
    }}>
      {children}
    </CodeTabsContext.Provider>
  )
}