import {useState, useRef} from 'react'
import Tabs from './tabs'

import Account from './Account'
import Search from './Search'

export default function Page() {
  const [current, switchToSelected] = useState(0)
  const t = useRef([
    { name: 'My Account', href: '#', current: true, element: Account },
    { name: 'Company', href: '#', current: false, element: Account },
    { name: 'Team Members', href: '#', current: false, element: Account },
    { name: 'Billing', href: '#', current: false, element: Search },
  ])
  const map = useRef(new Set([t.current[current]]))

  function __handler(index) {
    t.current[current].current = false
    t.current[index].current = true

    const item = t.current[index]
    if (!map.current.has(item)) {
      map.current.add(item)
    }

    switchToSelected(index)
  }

  let arr = Array.from(map.current)

  return (
    <div>
      <Tabs tabs={t.current} onSwitch={__handler} />
      {arr.map((item, index) => (
        <item.element selected={item.current} key={`v-${index}`}/>
      ))}
    </div>
  )
}
