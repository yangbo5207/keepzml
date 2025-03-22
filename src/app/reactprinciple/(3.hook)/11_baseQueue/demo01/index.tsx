import Button from 'components/ui/button'
import { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 执行 mountState 返回的 dispatch 函数
    setCount(count + 1)
  }, [])

  useEffect(() => {
    // 执行 mountState 返回的 dispatch 函数
    setCount(count + 2)
  }, [])

  useEffect(() => {
    // 执行 mountState 返回的 dispatch 函数
    setCount(count + 1)
  }, [])

  // 通过观察这行代码的执行次数来验证多个 副作用任务中的 dispatch 被合并
  console.log('xxxxxx')

  function _clickhandler() {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={_clickhandler}>Increment</Button>
    </div>
  )
}