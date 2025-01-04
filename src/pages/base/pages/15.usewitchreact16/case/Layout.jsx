import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import use__ from './use.js?raw'
import useinfo__ from './Userinfo.jsx?raw'
import api__ from './api.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'use': use__, 
        'useinfo': useinfo__,
        'api': api__,
      }}
      caseRender={<Case />}
      active={2}
    />
  )
}