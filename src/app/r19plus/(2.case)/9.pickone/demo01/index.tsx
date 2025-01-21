import { Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import UserAccount from './user-account'
import { getUsersInfo } from './api'

export default function Page() {
  const banners = getUsersInfo()
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <UserAccount promise={banners} />
      </Suspense>
    </div>
  )
}
