import { useState } from 'react'
import './App.css'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Counter</h1>
        <Counter />
      </div>
      
    </>
  )
}

export default App
