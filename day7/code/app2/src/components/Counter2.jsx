import React, { useContext } from 'react'
import { CounterContext } from '../App'

function Counter2() {
  const { counter, setCounter } = useContext(CounterContext)

  const onIncrement = () => {
    setCounter(counter + 1)
  }
  const onDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>Counter 2</h2>
      <div>counter = {counter}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Counter2
