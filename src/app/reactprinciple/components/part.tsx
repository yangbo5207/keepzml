export default function SuitableFor() {
  return (
    <div className='p-4 md:p-8 border-gray-200 border rounded'>
      <header className='font-bold'>主要内容包括</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li>一、浏览器事件循环体系<span className='text-sm text-gray-500 ml-4'>详细解读完整的事件循环体系</span></li>
        <li>二、并发模式 <span className='text-sm text-gray-500 ml-4'>最核心的理论基础</span> </li>
        <li>三、React 内置循环体系</li>
        <li>四、Fiber 架构 <span className='text-sm text-gray-500 ml-4'>系统级的概念</span></li>
        <li>五、状态管理与 hooks 原理</li>
        <li>五、diff 算法详解</li>
        <li>六、内置事件系统 <span className='text-sm text-gray-500 ml-4'>React 重写了事件系统</span></li>
        <li>六、性能分析<span className='text-sm text-gray-500 ml-4'>结合原理分析 React 性能优化方案</span></li>
        <li>七、面试与面试题解答 <span className='text-sm text-gray-500 ml-4'>各种可能出现的面试题与沟通技巧</span></li>
      </ul>
    </div>
  )
}
