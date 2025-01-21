import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { variants } from './variants'
import Block from './block'

export default function Banner() {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['end start', 'start start'] })

  const translateY = useTransform(scrollYProgress, [1, 0], [0, 555])
  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0])
  const scale = useTransform(scrollYProgress, [1, 0], [1.5, 1])

  return (
    <motion.div id='banner' ref={containerRef} className='relative overflow-hidden -mt-16'>
      <div className='bg-white/70'>
        <div className='pt-32 md:pt-56 pb-14 md:pb-32 max-w-[1080px] mx-auto px-6 md:px-8 space-y-8 md:space-y-12'>
          <motion.div
            className='flex items-center space-x-2 justify-center'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>

          <motion.h2 {...variants()} className='text-3xl md:text-4xl text-center font-bold'>前端顶级精英俱乐部</motion.h2>

          <motion.div
            {...variants(0.1)}
            className='w-full flex flex-col md:flex-row tems-center justify-around 
              space-y-4 md:space-y-0 
              space-x-0 md:space-x-4
              mt-14 md:mt-32'>
            <Block
              title='React 19 基础版'
              desc='React@19 为开发者带来了新的开发理念，这是一次开发方式上的变革，在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习'
              path='r19base'
              delay={0}
              className='flex-1'
            />
            <Block
              title='React 19 尊享版'
              desc='优雅的代码架构师是技术能力的体现，也是开发效率的保证。本专栏专为前端架构师提供，通俗易懂，帮助前端开发快速掌握一套代码架构最佳实践'
              path='r19plus'
              delay={0}
              className='flex-1'
            />
            <Block
              title='React 知命境'
              desc='React 知命境是沉淀了三年的诚意之作。为了帮助广大开发者轻松掌握 React 的学习，本专栏从基础知识出发，循序渐进，逐渐深入，是学习 React 的最佳最佳选择'
              path='r19plus'
              delay={0}
              className='flex-1'
            />
          </motion.div>
        </div>
      </div>
      <motion.div className='absolute -z-10 bottom-0 h-full w-full bg-blue-300 min-w-[1255px]' style={{ opacity, translateY, scale }}>
        <img className='w-full' src="https://buildui.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F82X8TbwR0mxbABn6Hyoi&w=750&q=75" alt="" />
      </motion.div>
    </motion.div>
  )
}
