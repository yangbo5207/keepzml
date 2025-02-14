import Drawer from 'components/ui/modal/drawer'
import ActiveLink from 'components/active-link'
import { Milestone, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import Proflile from './profile'
import ChatButton from './chat-button'
import { motion } from 'motion/react'
import { links } from './index'

export default function MobileHeader() {
  const modal = useRef<any>(null)

  return (
    <>
      <div className='lg:hidden flex items-center text-gray-700' onClick={() => modal.current.show()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
      </div>

      <Drawer ref={modal} direction='right' width='70%'>
        <motion.header className='sticky top-0 flex px-6 h-24 items-center' {...variants()}>
          <div className='rounded-full p-2 bg-gray-800'><Milestone size={20} color='#FFF' /></div>
          <div className='ml-3'>
            <div>导航</div>
            <div className='text-xs text-gray-400'>开发者：这波能反杀</div>
          </div>
        </motion.header>

        {links.map((item, index) => (
          <motion.div key={item.path} className='flex items-center px-6 py-4' {...variants(0.1 * (index + 1))}>
            <ActiveLink className='flex items-center justify-between w-full' href={item.path} onClick={() => modal.current.close()}>
              <div className='flex items-center'>
                <item.icon size={20} />
                <div className='ml-2'>{item.text}</div>
              </div>

              <ChevronRight size={18} />
            </ActiveLink>
          </motion.div>
        ))}

        <motion.div className='flex items-center px-6 py-4 justify-between' {...variants(0.4)}>
          <ChatButton />
          <ChevronRight size={18} />
        </motion.div>

        <motion.div className='flex justify-center mt-8' {...variants(0.5)}>
          <Proflile />
        </motion.div>
      </Drawer>
    </>
  )
}

export function variants(delay = 0) {
  return {
    initial: { x: 30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.4, delay: delay },
  }
}