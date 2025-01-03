import {MapPinPlus} from 'lucide-react'
import Flex from 'components/Flex'

const Message = ({message}) => {
  return (
    <Flex className='border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{message}</div>
      </div>
    </Flex>
  )
}

export default Message
