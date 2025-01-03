import {use} from 'react'
import Message from './message'
import {createRandomMessage} from 'utils'

const _api2 = new Promise((resolve) => {
  resolve({ value: createRandomMessage() })
})

export default function Demo01() {
  const result = use(_api2)
  return (
    <Message message={result.value} />
  )
}
