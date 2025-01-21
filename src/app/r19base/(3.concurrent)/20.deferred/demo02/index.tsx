import { useState, Suspense, useDeferredValue } from 'react'
import Skeleton from 'components/ui/skeleton'
import Spin from 'components/ui/spin'
import { getUsersInfo } from './api'
import Input from './Input'
import List from './list'

export default function Search() {
  const [promise, update] = useState(getUsersInfo)
  const deferred = useDeferredValue(promise)

  const __inputChange = () => {
    promise.cancel()
    update(getUsersInfo())
  }

  return (
    <div className='space-y-2'>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}