import Button from 'components/ui/button'
import { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const [arr, setArr] = useState([{
    name: '111',
  }, {
    name: '222',
  }, {
    name: '333',
  }])

  useEffect(() => {
    // 执行 mountState 返回的 dispatch 函数
    setCount(count + 1)
  }, [])



  return (
    <div>
      {arr.map((item, index) => {
        return <div className='flex'>
          <div>索引: {index}</div>
          <div>姓名：{item.name}</div>
        </div>
      })}
      <Button onClick={() => {
        const newArr = [...arr]
        newArr.unshift({
          name: '',
        })
        setArr(newArr)
      }}>修改</Button>
    </div>
  )
}