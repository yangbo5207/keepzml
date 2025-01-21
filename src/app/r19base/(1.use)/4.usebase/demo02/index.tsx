import { use, useState } from 'react'
import { createRandomMessage } from 'utils/index'
import Skeleton from 'components/ui/skeleton'
import Message from './message'

const __api = new Promise<{ value: string }>((resolve) => {
  resolve({ value: createRandomMessage() })
})

export default function Demo02() {
  const [loading, setLoading] = useState(false)
  let result = { value: '' }
  if (!loading) {
    result = use(__api)
  }

  return (
    <>
      {loading ? <Skeleton /> : <Message message={result.value} />}
      <div className='mt-4 text-right'>
        <button onClick={() => setLoading(!loading)}>切换</button>
      </div>
    </>
  )
}
