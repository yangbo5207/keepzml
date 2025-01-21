import { useState, Suspense, useRef, useDeferredValue } from 'react'
import Skeleton from 'components/ui/skeleton'
import Spin from 'components/ui/spin'
import { getOverUsersInfo } from './controller'
import Filter, { Parameter } from './filter'
import List from './list'

export default function Page() {
  const parameter = useRef({ search: '', count: 1, current: 1 })
  const [over, update] = useState(() => getOverUsersInfo(parameter.current))
  const defrered = useDeferredValue(over.promise)

  function __filterChange(p: Parameter) {
    over.abort()
    parameter.current = Object.assign(parameter.current, p)
    update(getOverUsersInfo(parameter.current))
  }

  return (
    <div className='space-y-4'>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={defrered !== over.promise} type='icon'>
          <List promise={defrered} onChange={__filterChange} />
        </Spin>
      </Suspense>
    </div>
  )
}