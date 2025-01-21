import { use } from 'react'
import { getApi } from '../api'

const Message = (props: { response: ReturnType<typeof getApi>, isPending: boolean }) => {
  const { isPending, response } = props
  const content = use(response)
  return (
    <div className='leading-6 transition border border-gray-200 rounded p-4' style={{ opacity: isPending ? 0.5 : 1 }}>
      {content.value}
    </div>
  )
}
export default Message
