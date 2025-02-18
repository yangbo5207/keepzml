export default function SuitableFor() {
  return (
    <div className='p-4 border-gray-200 border rounded'>
      <header className='font-bold'>大章节分类</header>

      <ul className='list-disc space-y-3 pl-4 pt-6'>
        <li>一、尺寸单位详解 <span className='text-sm text-gray-500 ml-4'>结合工作实践，深入理解尺寸单位，是掌握好 css 的基础核心</span></li>
        <li>二、CSS 底层设计模型 <span className='text-sm text-gray-500 ml-4'>从底层设计模型出发，构建 CSS 知识体系</span></li>
        <li>三、文档流与渲染树</li>
        <li>四、CSS 基础样式与调试</li>
        <li>五、响应式布局 <span className='text-sm text-gray-500 ml-4'>结合生产实践分享响应式经验，补全工作经验的缺失</span></li>
        <li>六、CSS 动画 <span className='text-sm text-gray-500 ml-4'>多种 CSS 动画的实现与运用</span></li>
        <li>七、矩阵变换</li>
        <li>八、CSS 滤镜</li>
        <li>九、CSS 3D</li>
        <li>十、CSS 性能优化策略<span className='text-sm text-gray-500 ml-4'>结合渲染原理分析性能策略</span></li>
        <li>十一、CSS 变量与函数</li>
      </ul>
    </div>
  )
}
