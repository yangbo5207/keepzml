import { useState, Suspense, useRef } from 'react'
import Skeleton from 'components/ui/skeleton'
import { getOverUsersInfo } from './controller'
import Filter, { Parameter } from './filter'
import List from './list'

export default function Page() {
  const parameter = useRef({ search: '', count: 1 })
  const [over, update] = useState(() => getOverUsersInfo(parameter.current))

  function __filterChange(p: Parameter) {
    over.abort()
    parameter.current = Object.assign(parameter.current, p)
    update(getOverUsersInfo(parameter.current))
  }

  return (
    <div className='space-y-4'>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton />}>
        <List promise={over.promise} />
      </Suspense>
    </div>
  )
}