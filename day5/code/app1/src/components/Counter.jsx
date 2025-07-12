import React, { useState } from 'react'

function Counter() {
  // add a state member named value
  const [value1, updateValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  const onIncrement1 = () => {
    // update the state member
    updateValue1(value1 + 1)
  }

  const onDecrement1 = () => {
    // update the state member
    updateValue1(value1 - 1)
  }

  const onIncrement2 = () => {
    // update the state member
    setValue2(value2 + 1)
  }

  const onDecrement2 = () => {
    // update the state member
    setValue2(value2 - 1)
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>Value1 = {value1}</div>
      <button onClick={onIncrement1}>increment</button>
      <button onClick={onDecrement1}>decrement</button>
      <hr />
      <div>Value2 = {value2}</div>
      <button onClick={onIncrement2}>increment</button>
      <button onClick={onDecrement2}>decrement</button>
    </div>
  )
}

export default Counter
