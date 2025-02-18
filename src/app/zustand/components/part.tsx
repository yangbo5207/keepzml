export default function SuitableFor() {
  return (
    <div className='p-4 border-gray-200 border rounded'>
      <header className='font-bold'>大章节分类</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li>一、基础使用介绍</li>
        <li>二、最佳实践方案 <span className='text-sm text-gray-500 ml-4'>根据实际情况，结合 zustand 的更新机制分享如何正确使用 zustand</span></li>
        <li>三、TypeScript 类型推导</li>
        <li>四、异步处理方案</li>
        <li>五、大型项目中使用方案 <span className='text-sm text-gray-500 ml-4'>结合生产实践分享大型项目中如何合理使用，补全工作经验的缺失</span></li>
        <li>六、底层原理分析 <span className='text-sm text-gray-500 ml-4'>结合 React 分析底层原理实现</span></li>
      </ul>
    </div>
  )
}
