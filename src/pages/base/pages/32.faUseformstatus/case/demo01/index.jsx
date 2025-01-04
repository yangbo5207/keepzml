import Input from 'components/Input'
import Button from 'components/Button'
import {formAction} from './actions'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <Button>Submit</Button>
    </form>
  )
}
