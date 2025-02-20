import { create } from 'zustand'

type Store = {
  count1: number,
  count2: number,
  inc_count1: () => void,
  dec_count1: () => void,
  inc_count2: () => void,
  dec_count2: () => void,
}

export const useStore = create<Store>()((set) => ({
  count1: 1,
  count2: 1,
  inc_count1: () => set((state) => ({ count1: state.count1 + 1 })),
  dec_count1: () => set((state) => ({ count1: state.count1 - 1 })),
  inc_count2: () => set((state) => ({ count2: state.count2 + 1 })),
  dec_count2: () => set((state) => ({ count2: state.count2 - 1 })),
}))
