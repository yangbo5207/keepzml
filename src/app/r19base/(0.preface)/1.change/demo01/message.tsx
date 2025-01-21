import { use } from 'react'
import { getApi } from '../api'

const Message = (props: { response: ReturnType<typeof getApi> }) => {
  const content = use(props.response)
  return (
    <div className='leading-6 transition border rounded-md p-4 text-gray-600 border-gray-200 my-4'>
      {content.value}
    </div>
  )
}
export default Message
