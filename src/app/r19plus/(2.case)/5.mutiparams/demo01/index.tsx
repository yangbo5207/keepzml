import { useState, Suspense, useRef } from 'react'
import Skeleton from 'components/ui/skeleton'
import Flex from 'components/ui/flex'
import { getOverUsersInfo } from './controller'
import List from './list'
import Input from './Input'

export default function Page() {
  const parameter = useRef({ search: '', count: 1 })
  const [over, update] = useState(() => getOverUsersInfo(parameter.current))

  const __inputChange = (e: any) => {
    over.abort()
    parameter.current.search = e.target.value
    update(getOverUsersInfo(parameter.current))
  }

  function __selected(e: any) {
    parameter.current.count = e.target.value
    update(getOverUsersInfo(parameter.current))
  }

  return (
    <div className='space-y-2'>
      <Flex between>
        <Input onChange={__inputChange} placeholder='Enter something' />
        <Flex>
          <label htmlFor='cars' className='mr-8'>每一页个数</label>
          <select id='cars' className='border border-gray-200 rounded px-3 py-1' onChange={__selected}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </Flex>
      </Flex>

      <Suspense fallback={<Skeleton />}>
        <List promise={over.promise} />
      </Suspense>
    </div>
  )
}