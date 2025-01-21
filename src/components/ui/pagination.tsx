import { useRef, useState } from 'react'
import clsx from 'clsx'
import Button from './button'

export default function Pagination(props: {
  total: number,
  current?: number,
  onChange: (i: number) => any
}) {
  const pageSize = 8
  const { total = 8, current = 1, onChange } = props
  const curPage = useRef(Math.ceil(current / pageSize))
  const pageIndex = useRef(current)
  const [index, setIndex] = useState((current - 1) % pageSize)

  const showArr = []
  const max = curPage.current === Math.ceil(total / pageSize)
    ? total % pageSize === 0 ? pageSize : total % pageSize
    : pageSize

  for (let i = 0; i < max; i++) {
    showArr.push(pageSize * (curPage.current - 1) + i + 1)
  }

  const active = 'border border-blue-600'

  function onClickHnadler(i: number) {
    setIndex(i)
    pageIndex.current = pageSize * (curPage.current - 1) + i + 1
    onChange && onChange(pageIndex.current)
  }

  function next() {
    let _index = index + 1
    pageIndex.current += 1

    if (_index >= pageSize) {
      _index = 0
      curPage.current += 1
    }
    setIndex(_index)
    onChange && onChange(pageIndex.current)
  }

  function prev() {
    let _index = index - 1
    pageIndex.current -= 1

    if (_index < 0) {
      _index = pageSize - 1
      curPage.current -= 1
    }
    setIndex(_index)
    onChange && onChange(pageIndex.current)
  }

  const isLeftEnd = pageIndex.current === 1
  const isRightEnd = pageIndex.current === total

  const base = 'flex items-center justify-center'
  const preCls = clsx(base, {
    ['cursor-not-allowed']: isLeftEnd
  })
  const nexCls = clsx(base, {
    ['cursor-not-allowed']: isRightEnd
  })

  return (
    <div className='flex space-x-2'>
      <Button disabled={isLeftEnd} rect className={preCls} onClick={prev}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </Button>
      {showArr.map((item, i) => (
        <Button
          onClick={() => onClickHnadler(i)} key={item} ghost rect
          className={clsx('w-10', { [active]: index === i })}>
          {item}
        </Button>
      ))}
      <Button
        disabled={isRightEnd}
        rect
        className={nexCls}
        onClick={next}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </Button>
    </div>
  )
}
