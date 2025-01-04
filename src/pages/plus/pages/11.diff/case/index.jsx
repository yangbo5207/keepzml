import {useState, Suspense, useEffect, useDeferredValue, useRef} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)
  const deferred = useDeferredValue(promise)
  const timer = useRef()

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      update(fetchListController('prev'))
    }, 3000)

    return () => {
      clearInterval(timer.current)
      promise.clear()
    }
  }, []);

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={deferred} />
      </Suspense>
    </div>
  )
}
