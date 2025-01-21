import { Suspense } from 'react'
import Case from './index'

export default function Layout() {
  return (
    <Suspense>
      <Case />
    </Suspense>
  )
}