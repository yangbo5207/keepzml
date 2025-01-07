import Gisucs from '@giscus/react'
import Code from 'components/Codepack/code'

export default function Playground(props) {
  const {renderArticle} = props
  return (
    <>
      {renderArticle(Code)}

      <div id='diviler_' className='border-b mt-20 mb-8 text-lg font-bold pb-3 border-dashed scroll-mt-24'></div>

      <Gisucs
        repo='yangbo5207/react19feature'
        repoId='R_kgDOMGiHOw'
        category='General'
        categoryId='DIC_kwDOMGiHO84Cf8dR'
        maping='pathname'
        term='欢迎道友'
        strict='0'
        reactionsEnabled='1'
        emitMetadata="1"
        inputPosition="top"
        lang="zh-CN"
        crossorigin="anonymous"
        async
      />
    </>
  )
}
