import { useOptimistic, useState, useRef, useTransition } from "react"
import { getMessage } from './api'
import { reducer, Message } from './reducer'
import { uuid } from '@/utils';

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, reducer);
  const [isPending, startTransition] = useTransition()

  const form = useRef<any>(null);

  function formAction(formData: FormData) {
    let newMessage = formData.get("message") as string
    form.current.reset();

    startTransition(async () => {
      addOptimisticMessage({ value: newMessage, id: uuid() });
      let msg = await getMessage(newMessage);
      setMessages([...messages, msg])
    })
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input disabled={isPending} type="text" name="message" placeholder="enter your message" />
        <button disabled={isPending} type="submit" className='button ml-2'>Send</button>
      </form>

      {optimisticMessages.map((message) => (
        <div key={message.id} className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
          {message.value} {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}