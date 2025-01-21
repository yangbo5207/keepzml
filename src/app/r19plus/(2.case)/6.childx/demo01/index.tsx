import { useState, Suspense, useRef } from 'react'
import Skeleton from 'components/ui/skeleton'
import Flex from 'components/ui/flex'
import { getOverUsersInfo } from './controller'
import List from './list'
import Input from './Input'
import Select from './select'

export default function Page() {
  const parameter = useRef({ search: '', count: 1 })
  const [over, update] = useState(() => getOverUsersInfo(parameter.current))

  const __inputChange = (e: any) => {
    over.abort()
    parameter.current.search = e.target.value
    update(getOverUsersInfo(parameter.current))
  }

  function __selected(value: number) {
    parameter.current.count = value
    update(getOverUsersInfo(parameter.current))
  }

  return (
    <div className='space-y-2'>
      <Flex between>
        <Input onChange={__inputChange} placeholder='Enter something' />
        <Select value={parameter.current.count} onChange={__selected} />
      </Flex>

      <Suspense fallback={<Skeleton />}>
        <List promise={over.promise} />
      </Suspense>
    </div>
  )
}