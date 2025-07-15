import React, { createContext, useState } from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'

export const CounterContext = createContext()

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <Counter1 />
        <hr />
        <Counter2 />
        <hr />
        <Counter3 />
      </CounterContext.Provider>
    </div>
  )
}

export default App
