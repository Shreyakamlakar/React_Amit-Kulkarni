import React, { useCallback, useState } from 'react'
import Header from './components/Header'

function App() {
  const [counter, setCounter] = useState(0)

  const dummyFunction = useCallback(() => {
    console.log(`inside dummy function`)
  }, [])

  return (
    <div>
      <h2>App</h2>
      <Header dummyFunction={dummyFunction} />

      <div>counter: {counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        decrement
      </button>
    </div>
  )
}

export default App
