import { RefAttributes } from 'react'
import Input from './Input'

export default function AddComment(props: RefAttributes<HTMLInputElement>) {
  return (
    <Input placeholder="Add comment..." ref={props.ref} className="mt-4" />
  )
}
