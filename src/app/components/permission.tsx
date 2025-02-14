'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { getAuth } from 'app/service'

export default function Permission({ children }: PropsWithChildren) {
  useEffect(() => {
    getAuth()
  }, [])

  return children
}