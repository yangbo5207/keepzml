import { InputHTMLAttributes, RefAttributes } from 'react'
import { useFormStatus } from 'react-dom'
import clsx from 'clsx'
import './index.css'

type InputProps = RefAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>

interface CInputProps extends InputProps {
  label?: string,
  help?: string
}

export default function Input(props: CInputProps) {
  const { type = 'text', className, required, label, help = '此项规则不匹配', pattern, ...other } = props
  const { pending } = useFormStatus()

  return (
    <div className={clsx('flex items-center my-10', className)}>
      {label && <label className="w-20 text-right font-bold">{label}：</label>}
      <div className='input flex-1'>
        <input type={type} required={required} pattern={pattern} {...other} disabled={pending} />
      </div>
    </div>
  )
}
