import Playground from 'components/Playground/index.jsx'
import Article from './article.mdx'

export default function App() {
  return (
    <Playground renderArticle={code => <Article components={{code}} />} />
  )
}
