import {useState} from 'react'
import Tabs from './tabs'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <div className='mt-4 text-gray-500'>
        当前选中：{tabs[current].name}
      </div>
    </div>
  )
}
