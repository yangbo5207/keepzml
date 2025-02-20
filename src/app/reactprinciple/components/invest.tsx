import Link from 'next/link'
import { PartyPopper } from 'lucide-react'
import { column_url } from '../config'
import Button from '@/components/ui/button'

export default function SuitableFor() {
  return (
    <div className='p-4 md:p-8 border-gray-200 border rounded keep'>
      <header className='font-bold'>超前投资，火热开启</header>

      <p className='space-x-2 mt-2'>
        <PartyPopper className='inline-block text-red-500' size={18} />
        <span>注意：本专栏专门聚焦于 React 源码面试题，针对至少大厂资深前端面试场景进行课程设计。我们的学习方式会结合群内直播讲解的形式共同呈现。现在开启超前超级折扣预订，欢迎有需要的读者提前投资购买。错过超前预订将无法享受超低折扣了哦，千万不要错过！</span>
      </p>

      <div className='text-right'>
        <Link href={column_url} target='_blank'>
          <Button signal>200 元 . 超前投资</Button>
        </Link>
      </div>
    </div>
  )
}
