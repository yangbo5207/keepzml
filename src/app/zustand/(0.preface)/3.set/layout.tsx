import Layout from 'components/post-layout'

export default function Article({ children }: any) {
  return (
    <Layout pass>{children}</Layout>
  )
}
