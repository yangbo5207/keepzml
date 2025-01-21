import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import { getUsersInfo } from './api'
import Input from './Input'

import List from './list'

const Index = () => {
  const [promise, update] = useState(getUsersInfo)

  const __inputChange = () => {
    update(getUsersInfo())
  }

  return (
    <div className='space-y-2'>
      <Input onChange={__inputChange} placeholder='Enter your keywords' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}

export default Index