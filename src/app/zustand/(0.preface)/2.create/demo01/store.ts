import { create } from 'zustand'

type Store = {
  x: number,
  y: number
}

export const useStore = create<Store>((set) => ({
  x: 0,
  y: 0
}))

// !mark(1:6)
export function update() {
  useStore.setState(state => ({
    x: state.x + 1,
    y: state.y + 1
  }))
}
