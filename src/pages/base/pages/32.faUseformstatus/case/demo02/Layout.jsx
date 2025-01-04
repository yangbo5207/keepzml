import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import actions__ from './actions.js?raw'
import sub__ from './SubmitButton.jsx?raw'
import input__ from 'components/Input/index.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'actions': actions__,
        'SubmitButton': sub__,
        'Input': input__,
      }}
      caseRender={<Case />}
    />
  )
}