import { useRef } from 'react'
import Dialog, { DialogRef } from 'components/ui/dialog'

export default function Demo02() {
  const dialog = useRef<DialogRef>(null)

  function __click() {
    if (dialog.current) {
      dialog.current.show()
    }
  }

  function __close() {
    if (dialog.current) {
      dialog.current.close()
    }
  }

  return (
    <div className='flex justify-between'>
      <button onClick={__click} className='ml-3'>点击我，显示对话框组件</button>
      <Dialog ref={dialog} title='Message For You' onSure={__close}>
        <strong className='text-red-500'>React 19</strong> 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。
        <div className='mt-4'>
          <img src='https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>
      </Dialog>
    </div>
  )
}
