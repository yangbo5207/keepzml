import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import {remarkCodeHike, recmaCodeHike} from 'codehike/mdx'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: false,
  /* config options here */
  distDir: 'dist',
  output: 'export', // SPA
  images: {
    unoptimized: true,
  },
  // trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

const chConfig = {
  components: {
    inlineCode: 'InlineCode',
    code: 'Code'
  },
}

const autolinkHeadingOptions = {
  behavior: 'append',
  properties: {
    className: ['anchor-link'],
    title: 'Permalink to this heading',
  },
  content: {
    type: 'element',
    tagName: 'span',
    properties: { className: ['anchor-icon'] },
    children: [{ type: 'text', value: '#' }],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkToc, remarkGfm, [remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    rehypePlugins: [[rehypeSlug, [rehypeAutolinkHeadings, autolinkHeadingOptions]]],
    jsx: true
  }
})

export default withMDX(nextConfig);
