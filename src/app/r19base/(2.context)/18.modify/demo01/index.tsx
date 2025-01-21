import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <div className='font-bold'>Your Task</div>
      <div className='!text-gray-500 text-sm my-2'>Here's a task for you!</div>
      <Task />
    </Provider>
  )
}
