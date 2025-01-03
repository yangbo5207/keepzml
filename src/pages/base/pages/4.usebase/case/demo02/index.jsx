import {use, useState} from 'react'
import Button from 'components/Button'
import Skeleton from 'components/Skeleton'
import Message from './message'
import {createRandomMessage} from 'utils'

const _api2 = new Promise((resolve) => {
  resolve({ value: createRandomMessage() })
})

export default function Demo01() {
  const [loading, setLoading] = useState(false)
  let result = {value: ''}
  if (!loading) {
    result = use(_api2)
  }

  return (
    <>
      {loading ? <Skeleton /> : <Message message={result.value} />}
      <div className='mt-4 text-right'>
        <Button signal onClick={() => setLoading(!loading)}>切换</Button>
      </div>
    </>
  )
}
