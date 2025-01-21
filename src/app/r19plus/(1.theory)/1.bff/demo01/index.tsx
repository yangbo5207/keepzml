import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import { getOverUsersInfo } from './controller'
import List from './list'

export default function Page() {
  const [promise] = useState(getOverUsersInfo)

  return (
    <div className='space-y-2'>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}