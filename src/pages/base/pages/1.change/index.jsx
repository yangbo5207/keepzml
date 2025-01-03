import Article from './page.mdx'
import Playground from 'components/Playground'

function Entry() {
  return (
    <Playground renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default Entry;
