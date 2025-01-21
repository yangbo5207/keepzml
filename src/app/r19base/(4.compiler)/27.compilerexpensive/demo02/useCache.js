import {useState} from 'react'
export function _c(size) {
  return useState(() => Array.from(size))[0]
}
