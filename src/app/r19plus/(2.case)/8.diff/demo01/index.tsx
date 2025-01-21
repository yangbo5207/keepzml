import { useState, Suspense, useDeferredValue, useEffect, useRef } from 'react'
import Skeleton from 'components/ui/skeleton'
import Spin from 'components/ui/spin'
import { getOverUsersInfo } from './controller'
import List from './list'
import Input from './Input'

export default function Page() {
  const [over, update] = useState(getOverUsersInfo)
  const deferred = useDeferredValue(over.promise)
  const timer = useRef<any>(null)

  const __inputChange = () => {
    over.abort()
    update(getOverUsersInfo())
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      update(getOverUsersInfo('up'))
    }, 3000)

    return () => {
      clearInterval(timer.current)
      over.clear()
    }
  }, [])

  return (
    <div className='space-y-2'>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={over.promise !== deferred}>
          <List promise={deferred} />
        </Spin>

      </Suspense>
    </div>
  )
}