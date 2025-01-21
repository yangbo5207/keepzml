import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import clsx from 'clsx'
import { variants } from './variants'

interface BlockProps {
  title: string,
  desc: string,
  path: string,
  className: string,
  delay: number,
}

export default function Block({ title, desc = '', path, className, delay }: BlockProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<any>(null)

  const _title = unescape(title.replace(/\\u/gi, '%u'));
  const _desc = unescape(desc.replace(/\\u/gi, '%u'));

  useEffect(() => {
    const elrect = ref.current.getBoundingClientRect()
    function move(e: any) {
      setPos({
        x: e.x - elrect.left,
        y: e.y + document.documentElement.scrollTop - elrect.top,
      })
    }
    ref.current.addEventListener('mouseenter', () => {
      document.addEventListener('mousemove', move, !1)
    }, false)
    ref.current.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', move, !1)
    }, !1)
  }, []);

  const maskImage = `radial-gradient(180px at ${pos.x}px ${pos.y}px, white, transparent)`

  const base = 'group relative flex rounded bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5'

  const cls = clsx(base, className)

  return (
    <motion.div ref={ref} className={cls} {...variants(delay)}>
      <div className="pointer-events-none">
        <div className="absolute inset-0 rounded transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5">
            <defs>
              <pattern id=":Rkq5jsqja:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:Rkq5jsqja:)"></rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
            </svg>
          </svg>
        </div>
        <div className="absolute inset-0 rounded bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]" style={{ maskImage }}></div>
        <div className="absolute inset-0 rounded opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100" style={{ maskImage }}>
          <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10">
            <defs>
              <pattern id=":R5kq5jsqja:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern></defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R5kq5jsqja:)"></rect>
            <svg x="50%" y="16" className="overflow-visible"><rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
            </svg>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 rounded ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
      <div className="relative rounded-md px-4 pb-4 pt-6">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400">
            <path strokeWidth="0" fillRule="evenodd" clipRule="evenodd" d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"></path>
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path>
          </svg>
        </div>
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link to={path}>
            <span className="absolute inset-0 rounded"></span>
            {_title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-6">{_desc}</p>
      </div>
    </motion.div>
  )
}
