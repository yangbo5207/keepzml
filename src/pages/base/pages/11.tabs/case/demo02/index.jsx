import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './tabs'
import List from './List'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(fetchListWithCancel)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    update(fetchListWithCancel())
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
