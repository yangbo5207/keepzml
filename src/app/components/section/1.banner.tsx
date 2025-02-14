'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { User, Orbit, TreePalm } from 'lucide-react'
import { variants } from './variants'

export default function Banner() {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['end start', 'start start'] })

  const translateY = useTransform(scrollYProgress, [1, 0], [0, 355])
  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0])
  const scale = useTransform(scrollYProgress, [1, 0], [1.5, 1])

  return (
    <motion.div id='banner' ref={containerRef} className='relative overflow-hidden -mt-16'>
      <div className='bg-white/70'>
        <div className='pt-56 pb-32 max-w-[1080px] mx-auto px-6 md:px-8'>
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
            className='w-full flex tems-center justify-center mt-6 space-x-10'
          >
            <div className='flex items-center space-x-1'>
              <User size={18} />
              <span>这波能反杀</span>
            </div>

            <div className='flex items-center space-x-1'>
              <Orbit size={18} />
              <span>大前端架构师</span>
            </div>

            <div className='flex items-center space-x-1'>
              <TreePalm size={18} />
              <span>独立开发者</span>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div className='absolute -z-10 bottom-0 h-full w-full bg-blue-300 min-w-[1255px]' style={{ opacity, translateY, scale }}>
        <img className='w-full' src="https://buildui.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F82X8TbwR0mxbABn6Hyoi&w=750&q=75" alt="" />
      </motion.div>
    </motion.div>
  )
}
