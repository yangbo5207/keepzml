'use client'

import Image from 'next/image'
import Link from 'next/link'
import { start_path, column_url } from '../config'
import { ArrowRight, User, Star, ShoppingCart } from 'lucide-react'
import Cover from './cover750x1000.jpg'
import Button from '@/components/ui/button'
import { useLoginStore } from 'app/service'

export default function Banner() {
  const subscrible = useLoginStore((state) => state.subscrible)
  console.log(subscrible)
  return (
    <div className='p-4 md:p-8 flex border-gray-200 border rounded gap-10'>
      <div className=''>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-semibold'>爆锤面试官之 React 原理面试</span>
        </div>

        <div className='flex items-center gap-2 mt-2'>
          <div className='text-sm flex items-center gap-1'>
            <Star size={16} className='text-pink-600' />
            <span className='text-pink-600'>45 人已订阅</span>
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
              <span>200元 . 立即订阅</span>
            </Link>
          )}

        </div>

        <div className='text-sm text-gray-600 leading-6 my-6'>本专栏专门聚焦于 React 原理面试题，可应对大厂资深前端面试场景。内容会先从基础理论切入，让读者对 React 底层原理有一个大概的印象，然后基于并发模式去深入理解 React，最后再着重聚焦于面试题的问答方式来展开内容。</div>

        <div className='flex items-center gap-4'>
          <Link href={start_path}>
            <Button primary><ArrowRight size={15} /> <span>快速开始</span></Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
