import Layout from 'components/post-layout'
import { PropsWithChildren } from 'react'

export default function Article({ children }: PropsWithChildren) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}
