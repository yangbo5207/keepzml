import {MapPinPlus} from 'lucide-react'

const Message = (props) => {
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{props.message}</div>
      </div>
    </div>
  )
}

export default Message
