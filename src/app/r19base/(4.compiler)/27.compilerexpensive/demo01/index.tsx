import { useState } from 'react'
import Expensive from './expensive'

function App() {
  var [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>A Expensive Case</div>
      <div className="flex items-center justify-between mt-4">
        <div className="counter">current counter is: <span className='font-bold text-lg'>{counter}</span></div>
        <button onClick={__clickHanler}>counter++</button>
      </div>
      <Expensive />
    </div>
  )
}

export default App
