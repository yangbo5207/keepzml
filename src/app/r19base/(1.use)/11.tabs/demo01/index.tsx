import { useState } from 'react'
import Tabs from './tabs'
import { tabs } from './config'

export default function Demo01() {
  const [current, switchToSelected] = useState(0)

  function __handler(index: number) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <div className='mt-4 font-bold'>
        当前选中：{tabs[current].name}
      </div>
    </div>
  )
}