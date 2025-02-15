import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ercode from '/src/assets/ercode.png'
import { motion } from 'motion/react'
import { ShoppingCart, ArrowRight } from 'lucide-react'
import { variants } from './variants'
import { start_path } from 'app/r19plus/config'

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

          <motion.h1 {...variants()} className='text-3xl mt-2 text-center font-bold'>React 19 全解尊享版</motion.h1>

          <motion.p {...variants(0.1)} className="mt-10 leading-8 text-center tracking-wide">
            掌握一套优秀的项目代码架构是每一位前端工程师都必备的高级技能。本专栏通过扎实的理论模型与丰富的项目实践，为大家全面系统的呈现我在十多年工作经验的基础之上，结合 React 19 摸索出来的一套优质项目代码架构。一方面可以有效的提高你的开发效率，另外一方面，在个人综合能力的提高上，也会大有裨益。赶紧学习起来吧！
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
              <Image src={ercode} alt='' width={500} height={300} />
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
