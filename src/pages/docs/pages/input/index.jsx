import Article from './article.mdx'
import Playground from 'components/Playground'

export default function Page() {
  return (
    <Playground renderArticle={(code) => <Article components={{code}} />} />
  )
}