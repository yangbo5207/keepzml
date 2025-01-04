import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import post__ from './Post.jsx?raw'
import commentList__ from './comment-list.jsx?raw'
import addComment__ from './add-comment.jsx?raw'
import input__ from './Input.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'Post': post__,
        'CommentList': commentList__,
        'AddComment': addComment__,
        'Input': input__,
      }}
      caseRender={<Case />}
    />
  )
}