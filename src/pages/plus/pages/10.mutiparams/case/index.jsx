import {useState, Suspense, useRef} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'
import Flex from "components/Flex";

export default function Demo01() {
  const [promise, update] = useState(fetchListController)
  const parameter = useRef({
    search: '',
    number: 4
  })

  function __inputChange(e) {
    promise.cancel()
    parameter.current.search = e.target.value
    update(fetchListController(parameter.current))
  }

  function __selected(e) {
    parameter.current.number = e.target.value
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Flex between>
        <Input onChange={__inputChange} placeholder='Enter something' />
        <Flex>
          <label htmlFor='cars' className='mr-8'>每一页个数</label>
          <select id='cars' className='border rounded px-3 py-1' onChange={__selected}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </Flex>
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
