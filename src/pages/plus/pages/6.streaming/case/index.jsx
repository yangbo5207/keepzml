import {Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import UserAccount from './user-account'
import {fetchList} from './api'

export default function Page() {
  const banners = fetchList(4)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <UserAccount promise={banners} />
      </Suspense>
    </div>
  )
}
