import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import input__ from './Input.jsx?raw'
import list__ from './List.jsx?raw'
import api__ from './api.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index.jsx': index__, 
        'Input': input__,
        'List': list__,
        'api': api__ 
      }}
      caseRender={<Case />}
    />
  )
}