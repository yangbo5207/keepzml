'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Code, BookOpen, Github } from 'lucide-react'
import { variants } from './variants'

export default function Banner() {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['end start', 'start start'] })

  const translateY = useTransform(scrollYProgress, [1, 0], [0, 355])
  const opacity = useTransform(scrollYProgress, [1, 0], [1, 0])
  const scale = useTransform(scrollYProgress, [1, 0], [1.5, 1])

  return (
    <motion.div id='banner' ref={containerRef} className='relative overflow-hidden -mt-16'>
      <div className=''>
        <div className='pt-56 pb-32 max-w-[1080px] mx-auto px-6 md:px-8'>
          <motion.div
            className='flex items-center space-x-2 justify-center'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className='px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm'>个人技术博客</span>
          </motion.div>

          <motion.h2 {...variants()} className='text-3xl md:text-4xl text-center font-bold mt-6'>
            探索前端技术的无限可能
          </motion.h2>

          <motion.p {...variants(0.1)} className='text-center text-gray-600 mt-4 max-w-2xl mx-auto'>
            分享Web开发经验、前端架构设计、性能优化等技术文章，致力于帮助开发者构建更好的应用
          </motion.p>

          <motion.div
            {...variants(0.2)}
            className='w-full flex items-center justify-center mt-8 space-x-10'
          >
            <div className='flex items-center space-x-2'>
              <Code size={18} className="text-blue-600" />
              <span>技术博文</span>
            </div>

            <div className='flex items-center space-x-2'>
              <BookOpen size={18} className="text-blue-600" />
              <span>学习笔记</span>
            </div>

            <div className='flex items-center space-x-2'>
              <Github size={18} className="text-blue-600" />
              <span>开源项目</span>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className='absolute -z-10 bottom-0 h-full w-full min-w-[1255px]'
        style={{ opacity, translateY, scale }}
      >
        {/* 添加渐变背景和几何图案 */}
        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 opacity-30">
          {/* 模糊圆形装饰 */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-white/20 blur-xl animate-pulse" />
            <div className="absolute top-40 right-40 w-60 h-60 rounded-full bg-white/20 blur-xl animate-pulse delay-100" />
            <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-white/20 blur-xl animate-pulse delay-200" />
          </div>

          {/* 几何图形装饰 */}
          <div className="absolute inset-0">
            {/* 正方形 */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 border-4 border-white/30 rotate-45 animate-spin-slow" />
            {/* 圆形 */}
            <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-white/30 rounded-full animate-bounce-slow" />
            {/* 矩形 */}
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/10 transform rotate-12 animate-float" />
            {/* 三角形 */}
            <div className="absolute top-1/2 right-1/3 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-white/20 animate-wiggle" />
            {/* 六边形 */}
            <div className="absolute top-2/3 left-1/2 w-16 h-16 bg-white/15 clip-path-hexagon animate-pulse-slow" />
            {/* 菱形 */}
            <div className="absolute bottom-1/3 right-1/2 w-12 h-12 border-4 border-white/25 transform rotate-45 animate-spin-reverse-slow" />
            {/* 半圆 */}
            <div className="absolute top-1/4 right-1/2 w-20 h-10 border-t-4 border-l-4 border-r-4 border-white/20 rounded-t-full animate-bounce-slow" />
            {/* 星形 - 使用伪元素创建 */}
            <div className="absolute bottom-1/2 left-2/3 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[30px] border-b-white/25 before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-[15px] before:border-l-transparent before:border-r-[15px] before:border-r-transparent before:border-t-[30px] before:border-t-white/25 before:-rotate-90 before:-translate-x-1/2 before:-translate-y-1/2 animate-spin-slow" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
