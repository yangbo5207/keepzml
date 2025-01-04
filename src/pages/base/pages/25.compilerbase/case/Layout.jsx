import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import usecache__ from './useCache.js?raw'
import source__ from './source.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'useCache': usecache__, 
        '源码': source__,
      }}
      caseRender={<Case />}
    />
  )
}