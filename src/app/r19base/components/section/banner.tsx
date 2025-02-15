import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ercode from '/src/assets/ercode.png'
import { motion } from 'motion/react'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import { variants } from './variants'
import { start_path } from 'app/r19base/config'

import dynamic from 'next/dynamic'

const Dialog = dynamic(() => import('components/ui/dialog'), { ssr: false })

export default function Banner() {
  const dialog = useRef<any>(null)
  const containerRef = useRef<any>(null)

  function __viewclick(e: any) {
    e.preventDefault()
    dialog.current.show()
  }

  function __scrollToAnchor(name: string) {
    if (name) {
      const anchor = document.getElementById(name)
      if (anchor) {
        anchor.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <motion.div id='banner' ref={containerRef} className='relative overflow-hidden'>
      <div className='bg-white bg-opacity-90'>
        <div className='pb-14 mx-auto px-0'>
          <motion.div
            className='flex items-center space-x-2 justify-center text-sm text-gray-600'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>Created by</span>
            <img className='size-5 rounded-full overflow-hidden' src='https://avatars.githubusercontent.com/u/13758605?u=75da5f0ab0a298d380242929e17fb28d4314b635&v=4' alt='' />
            <span>这波能反杀</span>
          </motion.div>

          <motion.h1 {...variants()} className='text-3xl mt-2 text-center font-bold'>React 19 全解</motion.h1>

          <motion.p {...variants(0.1)} className="mt-10 leading-8 text-center tracking-wide">
            React@19 为开发者带来了新的开发理念，这是一次开发方式上的变革，在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习。 本专栏是全网第一本系统学习 React 19 的专栏。在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习，赶紧行动吧。
          </motion.p>

          <motion.div {...variants(0.15)} className='flex items-center justify-center mt-10'>
            <Link href={start_path} className='inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded'>
              <span className='mr-2'>快速开始</span>
              <ArrowRight size={16} />
            </Link>

            <a onClick={__viewclick} href=""
              className='inline-flex px-4 py-2 text-gray-600 text-sm rounded ml-4 border border-gray-300'>
              <span>关注公众号</span>
            </a>
            <Dialog ref={dialog} title='Follow me!'>
              <Image src={ercode} alt='' width={500} height={500} />
            </Dialog>

            <a onClick={() => __scrollToAnchor('price')}
              className='inline-flex px-4 py-2 text-white text-sm rounded ml-4 bg-blue-600 space-x-2'
            >
              <ShoppingCart size={18} />
              <span>立即购买</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
