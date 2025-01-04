import { useRef } from 'react'
import Modal from 'components/Modal'

export default function Demo01() {
  const modal = useRef(null)
  return (
    <div className='flex justify-between'>
      <button onClick={() => modal.current.show()} className='ml-3'>点击弹窗显示</button>
      <Modal ref={modal}>
        <div className='bg-white p-4 max-w-xl mt-48 mx-auto rounded'>
          这是一个小弹窗
        </div>
      </Modal>
    </div>
  )
}
