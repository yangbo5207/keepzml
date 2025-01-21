import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import Tabs from './tabs'
import List from './list'
import { tabs } from './config'
import { getUsersInfo } from './api'

export default function Page() {
  const [_tabs, changeTabs] = useState(tabs)
  const [selected, switchToSelected] = useState(() => _tabs.findIndex(tab => tab.current))
  const [promise, update] = useState(getUsersInfo)

  function __handler(index: number) {
    _tabs[selected].current = false
    _tabs[index].current = true
    switchToSelected(index)
    changeTabs([..._tabs])

    promise.cancel()
    update(getUsersInfo())
  }

  function __completed(number: number) {
    _tabs[selected].count = number
    changeTabs([..._tabs])
  }

  return (
    <div className='space-y-4'>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <List promise={promise} onCompleted={__completed} />
      </Suspense>
    </div>
  )
}
