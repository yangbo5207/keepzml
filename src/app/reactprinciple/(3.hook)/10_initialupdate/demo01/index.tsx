import Button from 'components/ui/button'
import { useEffect, useLayoutEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    // 执行 mountState 返回的 dispatch 函数
    setCount(count + 1)
  }, [])

  useLayoutEffect(() => {
    // 执行 mountState 返回的 dispatch 函数
    setCount(count + 2)
  }, [])

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