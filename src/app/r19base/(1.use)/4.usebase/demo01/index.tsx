import { use } from 'react'
import { createRandomMessage } from 'utils/index'
import Message from './message'

const __api = new Promise<{ value: string }>((resolve) => {
  resolve({ value: createRandomMessage() })
})

export default function Demo01() {
  const result = use(__api)
  return (
    <Message message={result.value} />
  )
}