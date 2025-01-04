import Article from './article.mdx'
import Playground from "components/Playground2";

export default function App() {
  return (
    <Playground 
      renderArticle={(code) => <Article components={{code}} />} 
      isGiscus={false} 
    />
  )
}
