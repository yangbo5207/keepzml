import Image from 'next/image'
import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from './vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center flex-col'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Image src={viteLogo} className="logo" width={50} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <Image src={reactLogo} className="logo react" width={50} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="text-center">
        <button className='button' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App