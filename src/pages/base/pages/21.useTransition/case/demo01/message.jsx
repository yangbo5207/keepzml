import {MapPinPlus} from 'lucide-react'
import Flex from 'components/Flex'
import { use } from 'react'

const Message = ({promise}) => {
  const {value} = use(promise)
  return (
    <Flex className='border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{value}</div>
      </div>
    </Flex>
  )
}

export default Message
