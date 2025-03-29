'use client'

import Link from 'next/link'
import { PartyPopper } from 'lucide-react'
import { column_url } from '../config'
import Button from '@/components/ui/button'
import { useLoginStore } from '@/app/service'

export default function SuitableFor() {
  const subscrible = useLoginStore((state) => state.subscrible)
  if (subscrible.reactprinciple === 1) return null
  return (
    <div className='p-4 md:p-8 border-gray-200 border rounded keep'>
      <header className='font-bold'>超前 2 折购买，火热进行中</header>

      <p className='space-x-2 mt-2'>
        <PartyPopper className='inline-block text-red-500' size={18} />
        <span>本专栏原价 <strong className='text-red-500'>2000 元</strong>。由于目前内容正在创作过程中，特推出 2 折优惠购买。<span className='text-red-500'>专栏完结之后该优惠将会结束</span></span>其他说明：购买之后请务必进群交流学习心得，群内提供答疑服务，以及不定时直播讲解。目前群内学习氛围良好，欢迎加入。
      </p>

      <div className='text-right'>
        <Link href={column_url} target='_blank'>
          <Button signal>400 元 . 超前购买</Button>
        </Link>
      </div>
    </div>
  )
}
