import { useState, useRef } from "react"
import Message from './message'
import { uuid } from '@/utils';

export interface Payload {
  value: string,
  id: string,
}

export default function Index() {
  const [paylaods, setPayloads] = useState<Payload[]>([]);
  const form = useRef<any>(null);

  async function formAction(formData: FormData) {
    let newMessage = formData.get("message") as string
    setPayloads([...paylaods, { value: newMessage, id: uuid() }])
    form.current.reset();
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input type="text" name="message" placeholder="enter your message" />
        <button type="submit" className='ml-2'>Send</button>
      </form>

      {paylaods.map(paylaod => (
        <Message key={paylaod.id} message={paylaod.value} />
      ))}
    </>
  );
}

