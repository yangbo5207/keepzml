import {useState, Suspense, useDeferredValue} from 'react'
import Spin from 'components/Spin'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(fetchListWithCancel)
  const deferred = useDeferredValue(promise)

  function __inputChange() {
    promise.cancel()
    update(fetchListWithCancel())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}
