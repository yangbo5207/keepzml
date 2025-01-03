import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchList} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(fetchList)

  function __inputChange() {    
    update(fetchList())
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
