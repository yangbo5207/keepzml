import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import Account from './Account'
import {fetchList} from './api'

export default function Page() {
  const promise = fetchList(4)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <Account promise={promise} />
      </Suspense>
    </div>
  )
}
