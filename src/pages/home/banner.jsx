import {useRef} from 'react'
import {Link} from 'react-router-dom'
import Dialog from "components/Dialog";
import ercode from '/src/assets/ercode.png'
import {motion, useScroll, useTransform} from 'motion/react'
import {ShoppingCart} from 'lucide-react'
import {variants} from './index'

export default function Banner() {
  const dialog = useRef(null)
  const containerRef = useRef(null)
  const {scrollYProgress} = useScroll({target: containerRef, offset: ['end start', 'start start']})

  function __viewclick(e) {
    e.preventDefault()
    dialog.current.show()
  }

  function __scrollToAnchor(name) {
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

  const translateY = useTransform(scrollYProgress, [1, 0], [0, 555])
  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0])
  const scale = useTransform(scrollYProgress, [1, 0], [1.5, 1])

  return (
    <motion.div id='banner' ref={containerRef} className='relative overflow-hidden -mt-16'>
      <div className='bg-white bg-opacity-90'>
        <div className='pt-32 pb-14 md:py-56 max-w-[800px] mx-auto px-6 md:px-8 space-y-8 md:space-y-12'>
          <motion.div
            className='flex items-center space-x-2 justify-center'
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
          >
            <span>Created by</span>
            <img className='size-8 rounded-full overflow-hidden' src='https://avatars.githubusercontent.com/u/13758605?u=75da5f0ab0a298d380242929e17fb28d4314b635&v=4' alt=''/>
            <span>这波能反杀</span>
          </motion.div>

          <motion.h2 {...variants()} className='text-3xl md:text-5xl text-center font-bold'>React 19 全解</motion.h2>

          <motion.p {...variants(0.1)} className="text-gray-800 leading-8 text-md text-center text-lg tracking-wide">
            React@19 为开发者带来了新的开发理念，这又是一次开发方式上的一次变革。并且在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习。 本专栏是全网第一本系统学习 React 19 的专栏。在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习，赶紧行动吧。
          </motion.p>

          <motion.div {...variants(0.2)} className='flex items-center justify-center'>
            <Link to='tutorial/index' className='inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-md'>
              <span className='mr-2'>快速开始</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>

            <a onClick={__viewclick} href=""
              className='inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-md ml-4'>
              <span>关注公众号</span>
            </a>
            <Dialog ref={dialog} title='Follow me!'>
              <img src={ercode} alt=''/>
            </Dialog>

            <a onClick={() => __scrollToAnchor('price')}
              className='inline-flex px-4 py-2 text-white text-sm rounded-md ml-4 bg-red-600 space-x-2 cursor-pointer'
            >
              <ShoppingCart size={18} />
              <span>立即购买</span>
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div className='absolute -z-10 bottom-0 h-full w-full bg-blue-300 min-w-[1255px]' style={{opacity, translateY, scale }}>
        <img className='w-full' src="https://buildui.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F82X8TbwR0mxbABn6Hyoi&w=750&q=75" alt="" />
      </motion.div>
    </motion.div>
  )
}
