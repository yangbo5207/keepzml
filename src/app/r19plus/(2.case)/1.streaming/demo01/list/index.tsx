import { Suspense, useState } from 'react'
import { getOverAccounts } from './controller'
import UserList from './user-list'
import Skeleton from 'components/ui/skeleton'

export default function List() {
  const [promise] = useState(getOverAccounts)

  return (
    <Suspense fallback={<Skeleton />}>
      <UserList promise={promise} />
    </Suspense>
  )
}