import React, { useState } from 'react'

function CounterV1() {
  // add a state member using useState()
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(count + 1)
  }
  const onDecrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h2>Counter v1</h2>
      <div>counter = {count}</div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  )
}

export default CounterV1
