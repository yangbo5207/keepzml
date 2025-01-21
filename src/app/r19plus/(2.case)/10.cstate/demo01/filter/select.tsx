import { useState } from 'react'
import Flex from 'components/ui/flex'

// 这里的 value，只影响初始化的值
export default function Select({ value, onChange }: {
  value: string | number,
  onChange: (v: number) => any
}) {
  const [current, setCurrent] = useState(value)

  function __selected(e: any) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}
