import { Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import Account from './account'
import { getUsersInfo } from './api'

export default function Page() {
  const promise = getUsersInfo(4)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <Account promise={promise} />
      </Suspense>
    </div>
  )
}