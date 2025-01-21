import Page from './page.mdx'
import Layout from 'components/post-layout'

export default function Article() {
  return (
    <Layout post={Page} pass />
  )
}
