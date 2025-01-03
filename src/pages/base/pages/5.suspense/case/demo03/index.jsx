import React, { Suspense } from 'react';
import Skeleton from 'components/Skeleton'
import Message from './message'

export default function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Message
        message='Whether you work on your own or with thousands of other developers, using React feels the same.'
        title='Primary'
      />
    </Suspense>
  )
}
