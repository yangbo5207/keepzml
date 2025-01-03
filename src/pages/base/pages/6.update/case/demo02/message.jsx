import {use} from 'react'
import {MapPinPlus, Inbox} from 'lucide-react'
import Flex from 'components/Flex'

const Message = (props) => {
  const result = use(props.promise)

  if (!result.promise) {
    return (
      <Flex col className='border p-4 rounded'>
        <Inbox />
        <div className='mt-2'>no data.</div>
      </Flex>
    )
  }

  return (
    <Flex className='border p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{result.value}</div>
      </div>
    </Flex>
  )
}

export default Message
