import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>This is a counter website, click '+' to increment the counter value. Click '-' to decrement the counter value. Reset button to reset counter value</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count - count)}>Reset</button>
      </div>
      <div>
        <h1>Counter : {count}</h1>
      </div>
    </>
  )
}

export default Counter;
