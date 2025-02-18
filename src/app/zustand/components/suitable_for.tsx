import { Projector } from 'lucide-react'

export default function SuitableFor() {
  return (
    <div className='p-4 border-gray-200 border rounded keep'>
      <header className='font-bold'>适合人群</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li><Projector className='inline-block text-red-500 mr-2' size={18} />千万注意，本专栏目前更新优先级较低，仅用于提前投资购买，大家请根据目前内容酌情购买。未来本专栏会计划扩展到大型项目中的代码组织方式，预计最终完整定价 200 元</li>
        <li>需要 zustand 入门学习的朋友</li>
        <li>不知道选哪个状态管理器的朋友</li>
      </ul>
    </div>
  )
}
