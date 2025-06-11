import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // NOTE for useState : 
  // 1. counter : a variable which at first has a value of 0.
  // 2. setCounter : a function that can change counter [0, func]

  return (
    <div style={{height:'100vh', background:'black', color: 'white'}} className='container'>
      <h1>Counter</h1>
      <div className="counter-section">
        <button onClick={() => setCounter(counter+1)}>+</button>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter-1)}>-</button>
      </div>
    </div>
  )
}

export default App
