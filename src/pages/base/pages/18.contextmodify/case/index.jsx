import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <h3 className='font-bold'>Your Task</h3>
      <p className='!text-gray-400'>Here's a task for you!</p>
      <Task />
    </Provider>
  )
}
