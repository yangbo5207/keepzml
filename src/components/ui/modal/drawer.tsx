import React, { useState, useImperativeHandle, useRef, MouseEvent, RefObject } from 'react'
import Modal, { ModalProps, ModalRef } from './index'
import clsx from 'clsx'
import './index.css'

interface DrawerProps extends ModalProps {
  direction: string,
  width: string,
  ref: RefObject<ModalRef>
}

export default function Drawer(props: DrawerProps) {
  const { onClose, children, ref, width, direction = 'left', ...other } = props
  const modal = useRef<ModalRef>(null)
  const [show, setShow] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      modal.current && modal.current.show()
      setShow(true)
    },
    close: () => {
      modal.current && modal.current.close()
      setShow(false)
    }
  }), [])

  const cls = clsx('drawer', {
    'animation-in': show,
    'animation-out': !show
  })

  function __closeHandler() {
    setShow(false)
    onClose && onClose()
  }

  function __click(e: MouseEvent<any, any>) {
    e.stopPropagation()
  }

  let styles = {}

  if (direction === 'right') {
    styles = {
      right: 0,
      '--drawer-wdith': width,
      '--drawer-x': width
    }
  }

  if (direction === 'left') {
    styles = {
      left: 0,
      '--drawer-wdith': width,
      '--drawer-x': `-${width}`
    }
  }

  return (
    <Modal onClose={__closeHandler} ref={modal} {...other}>
      <div className={cls} onClick={__click} style={styles}>{children}</div>
    </Modal>
  )
}

