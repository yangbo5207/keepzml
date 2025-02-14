import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { UserRoundPlus } from 'lucide-react'

const Dialog = dynamic(() => import('components/ui/dialog'), { ssr: false })

export default function ChatButton() {
  const dialog = useRef<any>(null)

  function __clickhandler(e: any) {
    e.preventDefault();
    dialog.current.show();
  }

  return (
    <>
      <div className='flex items-center' onClick={__clickhandler}>
        <UserRoundPlus size={18} />
        <div className='ml-2'>交流群</div>
      </div>
      <Dialog ref={dialog} title='Message' onSure={() => dialog.current.close()}>
        添加我的微信：
        <span className='text-red-500 text-xl'>icanmeetu</span>，
        注明：添加 react19 付费交流群
      </Dialog>
    </>
  )
}
