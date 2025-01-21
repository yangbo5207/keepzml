import Input from 'components/ui/Input'
import { formAction } from './actions'
import SubmitButton from './submit-button'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}
