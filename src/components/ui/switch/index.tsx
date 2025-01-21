import { useState } from 'react'
import './index.css'

export default function Switch(props: {
  value?: boolean,
  onChange: (value: boolean) => any
}) {
  const { value = false, onChange } = props
  const [checked, toggle] = useState(value)

  const cls = checked ? 'switch right' : 'switch left'

  function __click(value: boolean) {
    toggle(value)
    onChange && onChange(value)
  }

  return (
    <div className={cls} onClick={() => __click(!checked)}>
      <div className='circle'></div>
    </div>
  )
}
