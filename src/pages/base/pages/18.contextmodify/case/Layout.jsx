import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import context__ from './context.jsx?raw'
import editor__ from './editor.jsx?raw'
import task__ from './task.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'Context': context__,
        'Editor': editor__,
        'Task': task__,
      }}
      caseRender={<Case />}
    />
  )
}