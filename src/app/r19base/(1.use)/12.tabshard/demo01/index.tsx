import { useState, useRef } from 'react'
import Tabs from './tabs'
import { tabs } from './config'

export default function Page() {
  const t = useRef(tabs)
  const [selected, switchToSelected] = useState(t.current.findIndex(tab => tab.current))
  const map = useRef(new Set([t.current[selected]]))

  function __handler(index: number) {
    t.current[selected].current = false
    t.current[index].current = true

    const item = t.current[index]
    if (!map.current.has(item)) {
      map.current.add(item)
    }

    switchToSelected(index)
  }

  let arr = Array.from(map.current)

  return (
    <div className='space-y-4'>
      <Tabs tabs={t.current} onSwitch={__handler} />
      {arr.map((item, index) => (
        <item.element selected={item.current} key={`v-${index}`} />
      ))}
    </div>
  )
}