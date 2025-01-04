import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'
import clsx from 'clsx'

export default function Search(props) {
  const [promise, update] = useState(fetchListWithCancel)

  function __inputChange() {
    promise.cancel()
    update(fetchListWithCancel())
  }

  const cls = clsx('pt-4', {
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
