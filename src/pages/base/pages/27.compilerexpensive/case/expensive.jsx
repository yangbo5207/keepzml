export default function Expensive() {
  var cur = performance.now()
  while (performance.now() - cur < 300) {
    // block
  }

  return (
    <div className='border border-red-500 rounded p-4 mt-4 text-red-500 leading-6'>
      这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。
    </div>
  )
}
