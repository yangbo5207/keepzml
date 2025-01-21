import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface FlexProps {
  start?: boolean,
  end?: boolean,
  around?: boolean,
  between?: boolean,
  className?: string,
  center?: boolean,
  col?: boolean,
  children?: any
}

// 默认方向为 Row
export default function Flex(props: FlexProps) {
  const { children, start, end, around, between, className, center, col, ...other } = props

  const base = 'flex items-center flex-row'

  const cls = clsx(base, {
    ['flex-col']: col,
    ['justify-start']: start,
    ['justify-end']: end,
    ['justify-around']: around,
    ['justify-between']: between,
    ['justify-center']: center,
  }, className)

  return (
    <TailwindDiv className={twMerge(cls)} {...other}>{children}</TailwindDiv>
  )
}

function TailwindDiv(props: any) {
  const { className, children, ...other } = props

  let bgclass = ''
  let borderclass = ''
  let roundclass = ''

  Object.keys(other).forEach(key => {
    if (key.indexOf('bg-') === 0) {
      bgclass += `${key} `
    }

    if (key.indexOf('border-') === 0) {
      borderclass += ` ${key} `
    }

    if (key.indexOf('rounded-') === 0) {
      roundclass += ` ${key} `
    }
  })

  const cls = clsx(bgclass, borderclass, roundclass, className)

  return (
    <div className={twMerge(cls)} {...other}>{children}</div>
  )
}
