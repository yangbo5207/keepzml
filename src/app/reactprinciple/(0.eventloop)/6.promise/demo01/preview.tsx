'use client'

import dynamic from 'next/dynamic'
import Preview from 'components/preview'

const Case = dynamic(() => import('./index'), {
  ssr: false,
})

export default function Previewer() {
  return (
    <Preview><Case /></Preview>
  )
}
