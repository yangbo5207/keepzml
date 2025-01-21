import { useState, use, Suspense } from 'react'
import { getMessage } from './api'

export default function Message({ message }: {
  message: string
}) {
  const [promise] = useState(() => getMessage(message))

  return (
    <div className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
      <Suspense fallback={<>{message}<small>(Sendding...)</small></>}>
        <MessageInner promise={promise} />
      </Suspense>
    </div>
  )
}

function MessageInner({ promise }: {
  promise: ReturnType<typeof getMessage>
}) {
  const message = use(promise)
  return message.value
}