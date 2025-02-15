import { useState, useRef } from "react"
import MessageUI from './message'
import { Message } from './reducer'
import { uuid } from '@/utils';

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([]);
  const form = useRef<any>(null);

  async function formAction(formData: FormData) {
    let newMessage = formData.get("message") as string
    setMessages([...messages, {
      value: newMessage,
      id: uuid()
    }])
    form.current.reset();
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input type="text" name="message" placeholder="enter your message" />
        <button type="submit" className='button ml-2'>Send</button>
      </form>

      {messages.map(msg => (
        <MessageUI key={msg.id} message={msg.value} />
      ))}
    </>
  );
}

