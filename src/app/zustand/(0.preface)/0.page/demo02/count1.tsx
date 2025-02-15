import Flex from '@/components/ui/flex'
import { useStore } from './store'
import Number from './number'

export default function Counter() {
  const { count1, inc_count1 } = useStore()
  return (
    <div className='flex flex-col items-center space-y-4'>
      <Flex center className='border border-gray-200 rounded size-48'>
        <Number value={count1} />
      </Flex>
      <div className='space-x-2'>
        <button className='button' onClick={inc_count1}>count++</button>
      </div>
    </div>
  )
}