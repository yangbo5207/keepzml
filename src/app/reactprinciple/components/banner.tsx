'use client'

import Link from 'next/link'
import { start_path, column_url } from '../config'
import { ArrowRight, User, Star, ShoppingCart } from 'lucide-react'
import Button from '@/components/ui/button'
import { useLoginStore } from 'app/service'

export default function Banner() {
  const subscrible = useLoginStore((state) => state.subscrible)
  console.log(subscrible)
  return (
    <div className='relative p-4 md:p-8 flex border-gray-200 border rounded gap-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50'>
      {/* 现代几何装饰背景 */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* 主背景渐变 */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/50 to-pink-50/30'></div>

        {/* 网格背景 */}
        <div className='absolute inset-0' style={{
          backgroundImage: 'linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(209, 213, 219, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: '-25px -25px',
        }}></div>

        {/* 动态模糊圆环 */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full filter blur-xl animate-[spin_20s_linear_infinite]'></div>
        <div className='absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full filter blur-xl animate-[spin_15s_linear_infinite]'></div>

        {/* 动态光斑效果 */}
        <div className='absolute inset-0'>
          <div className='absolute w-32 h-32 bg-blue-400/10 rounded-full filter blur-3xl animate-[pulse_4s_ease-in-out_infinite]' style={{ top: '20%', left: '30%' }}></div>
          <div className='absolute w-40 h-40 bg-purple-400/10 rounded-full filter blur-3xl animate-[pulse_6s_ease-in-out_infinite]' style={{ bottom: '25%', right: '25%' }}></div>
        </div>
      </div>


      <div className='relative z-10 flex-1'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-semibold'>爆锤面试官之 React 原理面试</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <div className='text-sm flex items-center gap-1'>
            <Star size={16} className='text-pink-600' />
            <span className='text-pink-600'>234 人已订阅</span>
          </div>

          <div className='hidden md:block'> · </div>

          <div className='hidden md:flex text-sm items-center gap-1 text-gray-600'>
            <User size={16} />
            <span>这波能反杀</span>
          </div>

          <div> · </div>

          {subscrible.reactprinciple === 1 ? (
            <Link href={column_url} className='text-sm flex items-center gap-1 text-pink-600'>
              <ShoppingCart size={16} />
              <span>已订阅</span>
            </Link>
          ) : (
            <Link href={column_url} className='text-sm flex items-center gap-1 text-pink-600'>
              <ShoppingCart size={16} />
              <span>400元 . 立即订阅</span>
            </Link>
          )}
        </div>

        <div className='text-base text-gray-600 leading-8 my-6'>
          本专栏专为<strong>有意进阶顶尖资深 React 开发者</strong>的前端小伙伴而设计，<strong>聚焦中高端面试场景</strong>，深入探讨 React 核心原理，可应对大厂资深前端面试场景。由于整个内容理解难度较高，因此专栏内容会先从基础理论切入，做好前期铺垫，让读者对 React 底层原理有一个大概印象，然后基于并发模式去深入理解 React，最后再着重聚焦于源码的具体实现。
        </div>

        <div className='flex items-center gap-4'>
          <Link href={start_path}>
            <Button primary><ArrowRight size={15} /> <span>快速开始</span></Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
