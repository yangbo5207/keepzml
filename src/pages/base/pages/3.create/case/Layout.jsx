import Codepack from 'components/Codepack'
import Page from './index'

import index__ from './index.jsx?raw'

export default function Case() {
  return (
    <Codepack
      files={{ 'index': index__ }}
      caseRender={<Page />}
    />
  )
}