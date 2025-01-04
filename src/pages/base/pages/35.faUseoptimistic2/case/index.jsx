import { useOptimistic, useState, useRef, useTransition } from 'react'
import { getMessage } from './api'
import {reducer} from './reducer'

export default function Index() {
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, reducer);
  const [isPending, startTransition] = useTransition()

  const form = useRef(null);

  async function formAction(formData) {
    let newMessage = formData.get("message")
    form.current.reset();
    startTransition(async () => {
      addOptimisticMessage(newMessage);
      let message = await getMessage(newMessage);
      setMessages([...messages, {text: message}])
    })
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input
          type="text"
          name="message"
          placeholder="enter your message"
          disabled={isPending}
        />
        <button type="submit" className='ml-2' disabled={isPending}>Send</button>
      </form>

      {optimisticMessages.map((message, index) => (
        <div key={index} className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
          {message.text} {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}

