import { Suspense, useState } from 'react'
import {fetchListController} from './controller'
import UserList from './user-list'
import Skeleton from 'components/Skeleton'

export default function List() {
  const [promise] = useState(() => fetchListController(5))

  return (
    <Suspense fallback={<Skeleton/>}>
      <UserList promise={promise}/>
    </Suspense>
  )
}