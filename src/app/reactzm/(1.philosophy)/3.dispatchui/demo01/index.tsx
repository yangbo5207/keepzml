import { useState } from 'react'
import Button from 'components/ui/button'
import Dialog from './dialog'

export default function Demo01() {
  const [show, setShow] = useState(false)
  return (
    <div className='p-4 space-y-4 text-center'>
      <Button primary onClick={() => setShow(true)}>显示弹窗</Button>
      <Dialog show={show} onClose={() => setShow(false)}>
        这是我封装好的一个简陋的弹窗组件，当你在演示时，你可以点击按钮来显示弹窗。然后点击下方的确认按钮关闭弹窗。
      </Dialog>
    </div >
  )
}
