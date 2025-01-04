import Playground from 'components/Playground'
import Article from './article.mdx'

export default function App() {
  return (
    <Playground renderArticle={code => <Article components={{code}} />} />
  )
}
