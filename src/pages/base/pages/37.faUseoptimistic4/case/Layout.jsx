import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import reducer__ from './reducer.js?raw'
import api__ from './api.js?raw'
import css_ from './index.module.css?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'reducer': reducer__,
        'api': api__,
        'index.module.css': css_
      }}
      caseRender={<Case />}
    />
  )
}