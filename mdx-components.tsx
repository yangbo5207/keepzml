import type { MDXComponents } from 'mdx/types'
import { Code, InlineCode } from 'components/codehike/code'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // @ts-ignore
    Code,
    // @ts-ignore
    InlineCode,
  }
}
