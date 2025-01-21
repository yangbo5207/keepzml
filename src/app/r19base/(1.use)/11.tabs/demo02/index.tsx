import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import { getUsersInfo } from './api'
import Tabs from './tabs'
import { tabs } from './config'
import List from './list'

const Index = () => {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(getUsersInfo)

  function __handler(index: number) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    update(getUsersInfo())
  }

  return (
    <div className='space-y-2'>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}

export default Index