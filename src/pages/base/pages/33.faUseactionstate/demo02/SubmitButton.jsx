import {useFormStatus} from 'react-dom'
import Button from "components/Button";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {children}{pending ? '...' : ''}
    </Button>
  )
}
