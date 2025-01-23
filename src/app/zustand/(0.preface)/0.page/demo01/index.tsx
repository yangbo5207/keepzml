import { useStore } from './store'
import Number from './number'
import Flex from '@/components/ui/flex'

export default function Counter() {
  const count = useStore(state => state.count)
  const inc = useStore(state => state.inc)
  const dec = useStore(state => state.dec)

  return (
    <div className='flex flex-col items-center space-y-4'>
      <Flex center className='border border-gray-200 rounded size-48'>
        <Number value={count} />
      </Flex>
      <div className='space-x-2'>
        <button onClick={dec}>count--</button>
        <button onClick={inc}>count++</button>
      </div>
    </div>
  )
}