import { useRef } from 'react'
import Modal, { ModalRef } from 'components/ui/modal'

export default function Demo01() {
  const modal = useRef<ModalRef>(null)
  function __click() {
    if (modal.current) {
      modal.current.show()
    }
  }
  return (
    <div className='flex justify-between'>
      <button onClick={__click} className='button ml-3'>点击弹窗显示</button>
      <Modal ref={modal}>
        <div className='bg-white p-4 max-w-xl mt-48 mx-auto rounded'>
          这是一个小弹窗
        </div>
      </Modal>
    </div>
  )
}
