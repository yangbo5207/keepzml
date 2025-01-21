import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'

export interface ContextValue {
  count: number,
  incrementer: Dispatch<SetStateAction<number>>
}

export const Context = createContext({} as ContextValue)

export default function Provider({ children }: PropsWithChildren) {
  const [count, incrementer] = useState(0)

  const value = {
    count,
    incrementer
  }

  return (
    <Context value={value}>{children}</Context>
  )
}
