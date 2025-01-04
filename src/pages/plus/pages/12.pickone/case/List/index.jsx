import { Suspense, useState, useDeferredValue } from 'react';
import {fetchListController} from './controller'
import UserList from './user-list'
import Skeleton from 'components/Skeleton'
import Flex from 'components/Flex'
import Spin from 'components/Spin'

export default function List() {
  const [promise, update] = useState(() => fetchListController(5))
  const deferred = useDeferredValue(promise)

  function clickhandler() {
    promise.cancel()
    update(fetchListController(5))
  }

  return (
    <>
      <Flex between justify className='mt-8'>
        <div className="text-gray-400 text-sm">Account users</div>
        <button onClick={clickhandler}>update</button>
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <Spin loading={deferred !== promise} type='icon'>
          <UserList promise={deferred}/>
        </Spin>
      </Suspense>
    </>
  )
}