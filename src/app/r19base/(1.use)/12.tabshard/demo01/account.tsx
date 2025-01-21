import clsx from 'clsx'
import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import { getUsersInfo } from './api'
import List from './list'

export default function Account(props: { selected: boolean }) {
  const [promise] = useState(getUsersInfo)

  const cls = clsx({
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
