import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function extractFlags(meta: string) {
  const tags = meta.split(' ')
  // 并且以 - 开头的标记
  const flags = tags.filter((flag) => flag.startsWith("-")) ?? ""

  // 以 .md 这种格式结尾的，第一个元素
  const title = tags.filter((tag) => !tag.startsWith('-'))[0]

  return { title, flags }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
