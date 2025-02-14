import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type PropsOf<C> = C extends (props: infer P) => any ? P : never
type LinkProps = PropsOf<typeof Link> & {
  end?: boolean,
  activeName?: string,
  href: string
}

/**
 * end: 是否从尾部开始比较
 */
function ActiveLink(props: LinkProps) {
  const { children, className = '', end = true, activeName = '', href, onClick, ...prop } = props
  const pathname = usePathname()
  let match = true

  if (end) {
    match = pathname.endsWith(href)
  } else {
    match = pathname.startsWith(href)
  }

  const __cls = twMerge(clsx(className, 'transition cursor-pointer', {
    [activeName]: !!match
  }))

  function __handler(e: any) {
    if (!!match) e.preventDefault()
    onClick && onClick(e)
  }

  return (
    <Link
      className={__cls}
      href={href}
      {...prop}
      onClick={__handler}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
