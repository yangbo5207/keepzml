import { Suspense, useState, useDeferredValue } from 'react'
import Skeleton from 'components/ui/skeleton'
import Flex from 'components/ui/flex'
import Spin from 'components/ui/spin'
import { getOverAccounts } from './controller'
import UserList from './user-list'

export default function List() {
  const [promise, update] = useState(getOverAccounts)
  const deferred = useDeferredValue(promise)

  function __click() {
    promise.cancel()
    update(getOverAccounts())
  }

  return (
    <>
      <Flex between className='mt-8'>
        <div className="text-gray-400 text-sm">Account users</div>
        <button onClick={__click}>update</button>
      </Flex>

      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='icon'>
          <UserList promise={deferred} />
        </Spin>
      </Suspense>
    </>

  )
}