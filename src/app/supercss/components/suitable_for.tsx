import { Projector } from 'lucide-react'

export default function SuitableFor() {
  return (
    <div className='p-4 border-gray-200 border rounded keep'>
      <header className='font-bold'>适合人群</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li><Projector className='inline-block text-red-500 mr-2' size={18} />千万注意，由于本专栏包含大量进阶内容，涉及到的实践内容比较多、用到的专栏之外的知识与理念也比较多，不适合纯新人，适合有一定工作经验、基础积累、并且想要进阶的朋友阅读学习</li>
        <li>想要冲击大厂、但是对 CSS 掌握比较薄弱的朋友</li>
        <li>缺乏 CSS 工作经验，对布局不熟悉的朋友</li>
        <li>由于缺乏 CSS 体系，无法晋升资深前端工程师的朋友</li>
        <li>眼馋案例演示实现方案，想要额外单独购买（1000R）专栏案例源码的朋友</li>
      </ul>
    </div>
  )
}
