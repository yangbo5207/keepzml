import Show from 'components/ui/show'
import { twMerge } from 'tailwind-merge'
import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  danger?: boolean;
  sm?: boolean;
  lg?: boolean;
  success?: boolean;
  signal?: boolean;
  ghost?: boolean;
  rect?: boolean
}

export default function Button(props: ButtonProps) {
  const { className, primary, danger, sm, lg, signal, success, ghost, rect, disabled, ...other } = props
  const base = 'rounded border border-transparent font-medium cursor-pointer transition relative text-gray-700 inline-flex items-center justify-center space-x-1.5'

  // size
  const md = 'text-[13px] py-1 px-3'

  const def = !primary && !danger && !success && !signal

  const cls = twMerge(clsx(base, md, {
    // type
    [generatorDefault(!!disabled, !!ghost)]: def,
    [generatorPrimary(!!disabled, !!ghost)]: primary,
    [generatorDanger(!!disabled, !!ghost)]: danger,
    [generatorSucess(!!disabled, !!ghost)]: success,
    [generatorSignal(!!disabled)]: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-md py-2 px-4']: lg,
    ['p-2']: rect,
  }, className))

  return (
    <button className={cls} {...other} disabled={disabled}>
      {props.children}
      <Show when={signal}>
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </Show>
    </button>
  )
}

function generatorDefault(disabled: boolean, ghost: boolean) {
  let base = 'bg-gray-100 text-gray-600'
  let inter = 'hover:bg-gray-200 active:bg-gray-300'

  if (ghost) {
    base = 'bg-transparent text-gray-500'
    inter = 'hover:text-gray-700 active:text-gray-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorPrimary(disabled: boolean, ghost: boolean) {
  let base = 'bg-blue-500 text-white'
  let inter = 'hover:bg-blue-600 active:bg-blue-700'

  if (ghost) {
    base = 'bg-transparent text-blue-500'
    inter = 'hover:text-blue-600 active:text-blue-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorDanger(disabled: boolean, ghost: boolean) {
  let base = 'bg-red-500 text-white'
  let inter = 'hover:bg-red-600 active:bg-red-700'

  if (ghost) {
    base = 'bg-transparent text-red-500'
    inter = 'hover:text-red-600 active:text-red-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorSucess(disabled: boolean, ghost: boolean) {
  let base = 'bg-green-500 text-white'
  let inter = 'hover:bg-green-600 active:bg-green-700'

  if (ghost) {
    base = 'bg-transparent text-green-500'
    inter = 'hover:text-green-600 active:text-green-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorSignal(disabled: boolean) {
  let base = 'bg-white border-sky-300 text-sky-500'
  let inter = 'hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100'

  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}
