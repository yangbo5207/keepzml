import { useState, Suspense, use } from 'react'
import { Outlet } from 'react-router'
import NavHeader from 'app/components/nav-header'
import { getAuth } from 'app/service'

export default function RootLayout() {
  const [promise] = useState(getAuth)
  return (
    <>
      <NavHeader />
      <Suspense>
        <ItextOutlet promise={promise} />
      </Suspense>
    </>
  )
}

function ItextOutlet({ promise }: {
  promise: ReturnType<typeof getAuth>
}) {
  const result = use(promise)
  return <Outlet />
}