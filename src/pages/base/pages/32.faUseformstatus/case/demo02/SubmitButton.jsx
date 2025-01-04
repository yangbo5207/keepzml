import {useFormStatus} from 'react-dom'
import Button from "components/Button/index.jsx";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {pending ? 'loading...' : children}
    </Button>
  )
}
