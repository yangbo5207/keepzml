import Codepack from 'components/Codepack'
import Case from './compiler'

import index__ from './compiler.jsx?raw'
import expensive__ from './expensive.jsx?raw'
import usecache__ from './useCache.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'expensive': expensive__, 
        'useCache': usecache__, 
      }}
      caseRender={<Case />}
    />
  )
}