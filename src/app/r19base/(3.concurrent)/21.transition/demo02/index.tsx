import { useState, Suspense, useDeferredValue } from 'react'
import Skeleton from 'components/ui/skeleton'
import Spin from 'components/ui/spin'
import { getUsersInfo } from './api'
import Tabs from './tabs'
import { tabs } from './config'
import List from './list'

const Index = () => {
  const [selected, switchToSelected] = useState(tabs.findIndex(tab => tab.current))
  const [promise, update] = useState(getUsersInfo)
  const deferred = useDeferredValue(promise)

  function __handler(index: number) {
    tabs[selected].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    update(getUsersInfo())
  }

  return (
    <div className='space-y-2'>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}

export default Index