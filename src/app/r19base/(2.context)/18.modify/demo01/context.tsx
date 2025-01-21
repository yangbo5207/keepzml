import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react'

const def = {
  task: 'TASK-8878',
  content: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
  status: 'Progress',
  priority: 'Medium'
}

export interface ContextValue {
  task: typeof def,
  updateTask: Dispatch<SetStateAction<typeof def>>
}

export const Context = createContext({} as ContextValue)

export default function Provider({ children }: PropsWithChildren) {
  const [task, updateTask] = useState(def)

  return (
    <Context value={{ task, updateTask }}>{children}</Context>
  )
}
