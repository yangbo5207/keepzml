import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(fetchListWithCancel)

  function __inputChange() {
    promise.cancel()
    update(fetchListWithCancel())
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
