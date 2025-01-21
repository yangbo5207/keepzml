import Gisucs from '@giscus/react'
import { Code, InlineCode } from 'components/codehike/code'
import Authentication from 'components/authentication'
import { MDXProps } from 'mdx/types'

interface LayoutProps {
  pass?: boolean,
  post: (props: MDXProps) => any
}

export default function Article(props: LayoutProps) {
  return [
    <Authentication pass={props.pass} key='a'>
      <div className='keep'>
        <props.post components={{ Code, InlineCode }} />
      </div>
    </Authentication>,
    <div id='diviler_' className='border-b border-gray-300 my-8 border-dashed scroll-mt-24' key='b' />,
    <Gisucs
      repo='yangbo5207/react19feature'
      repoId='R_kgDOMGiHOw'
      category='General'
      categoryId='DIC_kwDOMGiHO84Cf8dR'
      mapping='pathname'
      term='欢迎道友'
      strict='0'
      reactionsEnabled='1'
      emitMetadata="1"
      inputPosition="top"
      lang="zh-CN"
      key='c'
    />
  ]
}
