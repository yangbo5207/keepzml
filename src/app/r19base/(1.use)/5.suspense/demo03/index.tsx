import React, { Suspense } from 'react';
import Skeleton from 'components/ui/skeleton'
import { createRandomMessage } from '@/utils'
import Message from './message'

export default function Demo03() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Message message={createRandomMessage()} />
    </Suspense>
  )
}
