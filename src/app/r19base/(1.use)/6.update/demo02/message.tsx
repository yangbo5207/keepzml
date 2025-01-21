import { Tent, Inbox } from 'lucide-react'
import { use } from 'react'
import Flex from 'components/ui/flex'
import { getMessage } from './api'

const Message = (props: { promise: ReturnType<typeof getMessage> }) => {
  const { value } = use(props.promise);

  if (!value) {
    return (
      <Flex col className='border border-gray-200 p-4 rounded'>
        <Inbox />
        <div className='mt-2 text-sm'>no data.</div>
      </Flex>
    )
  }

  return (
    <div className='flex border border-gray-200 p-4 rounded items-start'>
      <Tent />
      <div className='flex-1 ml-3'>
        <div>React introduction</div>
        <div className='text-sm leading-6 mt-2 text-gray-600'>
          {value}
        </div>
      </div>
    </div>
  )
}

export default Message