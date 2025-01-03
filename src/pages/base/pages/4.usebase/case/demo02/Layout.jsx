import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import message__ from './message.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 'index': index__, 'message': message__ }}
      caseRender={<Case />}
    />
  )
}