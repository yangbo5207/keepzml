import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function __clickHanler() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>A Base Case</div>
      <div className="flex items-center justify-between">
        <div>currnt count is: {count}</div>
        <button onClick={__clickHanler}>Increment</button>
      </div>
    </div>
  )
}
