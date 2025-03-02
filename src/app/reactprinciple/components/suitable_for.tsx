import { Projector } from 'lucide-react'

export default function SuitableFor() {
  return (
    <div className='p-4 md:p-8 border-gray-200 border rounded keep'>
      <header className='font-bold'>适合人群</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li><Projector className='inline-block text-red-500 mr-2' size={18} />请千万注意，本专栏并不针对入门级小伙伴提供，主要针对需要冲击高难度面试的小伙伴设计课程内容</li>
        <li>想要找到给力候选人的面试官</li>
        <li>想要进入优秀团队的候选人</li>
        <li>适合有一定的 React 使用基础的小伙伴</li>
        <li>适合原理掌握不扎实的小伙伴</li>
        <li>适合正在冲击大厂面试的小伙伴</li>
        <li>适合想要通过高难度面试涨薪的小伙伴</li>
        <li>适合需要通过理解 React 原理做项目性能优化的小伙伴</li>
      </ul>
    </div>
  )
}
