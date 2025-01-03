import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import message__ from './message.jsx?raw'
import api__ from './api.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 'index': index__, 'message': message__, 'api': api__ }}
      caseRender={<Case />}
    />
  )
}