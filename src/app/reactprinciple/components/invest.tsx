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
        <span>注意：本专栏专门聚焦于 React 源码面试题，针对至少大厂资深前端面试场景进行课程设计。本专栏原价 2000 元，现在开启超前 2 折购买，欢迎有需要的读者提前投资购买，<span className='text-red-500'>超前购买将于专栏完结之时结束</span>。错过将无法享受超低折扣了哦，千万不要错过！</span>
      </p>

      <div className='text-right'>
        <Link href={column_url} target='_blank'>
          <Button signal>400 元 . 超前购买</Button>
        </Link>
      </div>
    </div>
  )
}
