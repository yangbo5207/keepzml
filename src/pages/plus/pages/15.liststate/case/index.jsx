import {useState, Suspense, useRef} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'

import {fetchListController} from './controller'
import Filter from './Filter'

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __filterChange(option) {
    promise.cancel()
    parameter.current = Object.assign(parameter.current, option)
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
