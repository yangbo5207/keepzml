import Button from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

export default function Banner() {
  return (
    <section id="banner" className='relative'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute w-[80%] max-w-[1280px] right-0 scale-100'>
          <img className='w-full' src="https://buildui.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F82X8TbwR0mxbABn6Hyoi&w=750&q=75" alt="" />
          <div className='absolute -inset-px bg-white/50'></div>
          <div className='absolute -inset-px bg-gradient-to-b from-transparent via-transparent to-white'></div>
          <div className='absolute -inset-px bg-gradient-to-l from-transparent via-transparent to-white'></div>
        </div>

      </div>
      <div className='pt-14'>
        <div className='w-full max-w-7xl px-4 md:px-6 mx-auto py-36 space-y-3 md:space-y-6'>
          <div className='space-y-2'>
            <motion.h2 className='text-xl md:text-3xl font-bold' {...variants()}>一步强、步步强</motion.h2>
            <motion.h2 className='text-xl md:text-3xl font-bold' {...variants(0.1)}>体系化掌握前端知识</motion.h2>
            <motion.h2 className='text-xl md:text-3xl font-bold' {...variants(0.2)}>从 usehook 开始</motion.h2>
          </div>

          <p className='max-w-lg text-sm md:text-lg leading-7'>High-quality videos, a private Discord server, and enough reference code to help you make the web what you always dreamed it could be.</p>
          <Button primary lg><span>立即开始学习</span><ArrowRight size={20} /></Button>
        </div>
      </div>
    </section>
  )
}

export function variants(delay = 0) {
  return {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: delay },
    viewport: { once: true }
  }
}
