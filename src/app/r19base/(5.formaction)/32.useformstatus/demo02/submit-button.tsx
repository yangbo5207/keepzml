import { useFormStatus } from 'react-dom'
import Button from 'components/ui/button'
import { PropsWithChildren } from 'react'

export default function SubmitButton({ children }: PropsWithChildren) {
  const { pending } = useFormStatus()
  return (
    <div className='text-right'>
      <Button primary disabled={pending}>
        {pending ? 'loading...' : children}
      </Button>
    </div>
  )
}
