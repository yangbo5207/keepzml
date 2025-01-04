import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import reducer__ from './reducer.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'reducer': reducer__
      }}
      caseRender={<Case />}
    />
  )
}