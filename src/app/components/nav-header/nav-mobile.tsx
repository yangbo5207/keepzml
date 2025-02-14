import Drawer from '@/components/ui/modal/drawer'
import Button from '@/components/ui/button'
import { useRef } from 'react'
import Link from 'next/link'
import { Nut, AlignRight, Anchor, BriefcaseConveyorBelt, CupSoda, ShoppingCart } from 'lucide-react'
import { motion } from 'motion/react'


export default function NavMobile() {
  const modal = useRef<any>(null)

  function __handler() {
    if (modal.current) {
      modal.current.show()
    }
  }

  return [
    <Button rect ghost onClick={__handler} className='md:hidden' key='a'>
      <AlignRight size={20} />
    </Button>,
    <Drawer ref={modal} direction='right' width='50%' key='b'>
      <header className='px-6 h-14 flex items-center justify-between border-b border-b-white/[0.1]'>
        <Link href='/' className='font-bold flex text-sm items-center'><Nut className='mr-2' />KEEPCSS</Link>
      </header>

      <div className='px-6'>
        <motion.div className='flex items-center space-x-2 my-4' {...variants()}>
          <Anchor size={16} /><span>CSS</span>
        </motion.div>
        <motion.div className='flex items-center space-x-2 my-4' {...variants(0.1)}>
          <BriefcaseConveyorBelt size={16} /><span>Flex</span>
        </motion.div>
        <motion.div className='flex items-center space-x-2 my-4' {...variants(0.2)}>
          <CupSoda size={16} /><span>Grid</span>
        </motion.div>
        <div className='border-b border-gray-600 my-3.5'></div>
        <Button primary><ShoppingCart size={14} /><span>Buy Now</span></Button>
      </div>
    </Drawer>
  ]
}

export function variants(delay = 0) {
  return {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, delay: delay },
  }
}