import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

type PannelHead = {
  icon: string,
  label: string
}

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
]

const [tomato, lettuce, cheese] = allIngredients
const tabs: PannelHead[] = [tomato, lettuce, cheese]

// state
const store = {
  tabs,
  selectedTab: tabs[0],
  count: 0
}

export const useTabStore = create(immer(() => store))
const set = useTabStore.setState

// 普通 action
export const setSelectedTab = (item: PannelHead) => {
  set({ selectedTab: item })
}