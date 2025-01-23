import { create } from 'zustand'

type Store = {
  x: number,
  y: number,
  update: (event: MouseEvent) => void
}

// !mark(1:1)
export const useStore = create<Store>((set) => ({
  x: 0,
  y: 0,
  update: (event: MouseEvent) => set({ 
    x: event.pageX,
    y: event.pageY
  }),
}))
