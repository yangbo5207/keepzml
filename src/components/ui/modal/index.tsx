import React, { useState, useImperativeHandle, RefObject } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import './index.css'

export type ModalRef = {
  show: () => any,
  close: () => any
}

export interface ModalProps {
  onClose?: () => any,
  ref: RefObject<ModalRef | null>,
  children: any
}

export default function Modal(props: ModalProps) {
  const { onClose, children, ref } = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      setShow(true)
      document.body.style.overflow = 'hidden'
      setDisplay(true)
    },
    close: () => {
      document.body.style.overflow = 'visible'
      setShow(false)
    }
  }), [])

  const cls = clsx('modal', {
    'animation-in': show,
    'animation-out': !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  function __closeHandler() {
    setShow(false)
    document.body.style.overflow = 'visible'
    onClose && onClose()
  }

  if (!display) { return null }

  return createPortal(
    <div
      onAnimationEnd={__animationendHandler}
      className={cls}
      onClick={__closeHandler}
    >{children}</div>, document.body
  )
}

