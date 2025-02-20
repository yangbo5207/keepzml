import { create } from 'zustand'

type Store = {
  counter: number,
  increment: () => void
}

export const useStore = create<Store>((set) => ({
  counter: 0,
  increment: () => set(state => ({counter: state.counter + 1})),
}))