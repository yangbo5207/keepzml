import Input from 'components/ui/Input'
import Button from 'components/ui/button'
import { formAction } from './actions'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <div className='flex justify-end'>
        <Button primary>Submit</Button>
      </div>
    </form>
  )
}
