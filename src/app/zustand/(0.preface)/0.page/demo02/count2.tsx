import Flex from '@/components/ui/flex'
import { useStore } from './store'
import Number from './number'

export default function Counter() {
  const { count2, inc_count2 } = useStore()
  return (
    <div className='flex flex-col items-center space-y-4'>
      <Flex center className='border border-gray-200 rounded size-48'>
        <Number value={count2} />
      </Flex>
      <div className='space-x-2'>
        <button className='button' onClick={inc_count2}>count++</button>
      </div>
    </div>
  )
}