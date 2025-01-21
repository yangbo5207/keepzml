import { Tent } from 'lucide-react'
import { use } from 'react'
import { getMessage } from './api'

const Message = (props: { promise: ReturnType<typeof getMessage> }) => {
  const message = use(props.promise);
  return (
    <div className='flex border border-gray-200 p-4 rounded items-start'>
      <Tent />
      <div className='flex-1 ml-3'>
        <div>React introduction</div>
        <div className='text-sm leading-6 mt-2 text-gray-600'>
          {message.value}
        </div>
      </div>
    </div>
  )
}

export default Message