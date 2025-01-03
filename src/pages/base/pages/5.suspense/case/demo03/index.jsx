import React, { Suspense } from 'react';
import Skeleton from 'components/Skeleton'
import {createRandomMessage} from 'utils'
import Message from './message'


export default function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Message message={createRandomMessage()} title='Primary' />
    </Suspense>
  )
}
