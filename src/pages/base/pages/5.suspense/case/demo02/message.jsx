import {use} from 'react'
import {MapPinPlus} from 'lucide-react'

const Message = (props) => {
  const {value} = use(props.promise)
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}

export default Message
