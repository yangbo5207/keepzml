import { RefObject } from 'react'
import Dialog, { DialogRef } from 'components/ui/dialog'
import Input from 'components/ui/Input'
import { uuid } from '@/utils'

export default function Modal(props: {
  ref: RefObject<DialogRef>,
  onChange: (item: any) => any
}) {
  const { ref, onChange } = props

  function action(f: FormData) {
    const item = {
      id: uuid(),
      name: f.get('name'),
      desc: f.get('desc'),
      hours: f.get('hours'),
      rate: f.get('rate'),
      price: f.get('price'),
    }
    ref.current.close()
    onChange && onChange(item)
  }

  return (
    <Dialog title='Editor' ref={ref} footer>
      <form action={action}>
        <Input label='Name' name='name' placeholder='Plase input your project name.' required />
        <Input label='Desc' name='desc' placeholder='please input your project description.' required />
        <Input label='Hours' name='hours' type='number' placeholder='please input hours.' required />
        <Input label='Rate' name='rate' type='number' placeholder='please input rate.' required />

        <div className='flex justify-end'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </Dialog>
  )
}
