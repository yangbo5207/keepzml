import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import { getUsersInfo } from './api'
import Input from './Input'
import List from './list'
import clsx from 'clsx'

export default function Search(props: { selected: boolean }) {
  const [promise, update] = useState(getUsersInfo)

  const __inputChange = () => {
    promise.cancel()
    update(getUsersInfo())
  }

  const cls = clsx('space-y-2', {
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Input onChange={__inputChange} placeholder='Enter your keywords' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}