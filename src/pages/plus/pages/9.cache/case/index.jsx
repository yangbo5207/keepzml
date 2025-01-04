import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController(e.target.value))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
