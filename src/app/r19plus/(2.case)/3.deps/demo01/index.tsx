import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import { getOverUsersInfo } from './controller'
import List from './list'
import Input from './Input'

export default function Page() {
  const [over, update] = useState(getOverUsersInfo)

  const __inputChange = () => {
    over.abort()
    update(getOverUsersInfo())
  }

  return (
    <div className='space-y-2'>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={over.promise} />
      </Suspense>
    </div>
  )
}