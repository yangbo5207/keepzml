import {use} from 'react'
import {MapPinPlus, Inbox} from 'lucide-react'
import Flex from 'components/Flex'

const Message = (props) => {
  if (!props.promise) {
    return (
      <Flex col className='border p-4 rounded'>
        <Inbox />
        <div className='mt-2'>no data.</div>
      </Flex>
    )
  }
  
  const result = use(props.promise)

  return (
    <Flex className='border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{result.value}</div>
      </div>
    </Flex>
  )
}

export default Message
