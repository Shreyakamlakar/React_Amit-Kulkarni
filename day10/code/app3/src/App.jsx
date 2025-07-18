import React, { useEffect, useMemo, useRef, useState } from 'react'

function App() {
  const [value, setValue] = useState(0)
  const [counter, setCounter] = useState(0)

  // const square = () => {
  //   console.log(`inside square = ${value}`)
  //   return value ** 2
  // }

  const square = useMemo(() => {
    console.log(`inside square`)
    return value ** 2
  }, [value])

  const onIncrement = () => {
    setCounter(counter + 1)
  }

  const onDecrement = () => {
    setCounter(counter - 1)
  }

  useEffect(() => {
    console.log(
      `state of the component is changed: value: ${value}, counter: ${counter}`
    )
  })

  return (
    <div>
      <h2>App</h2>
      <div>
        <label htmlFor=''>Enter a value: </label>
        <input
          type='number'
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
      <div>
        number = {value}, square = {square}
      </div>
      <hr />
      <h3>Counter</h3>
      <div>counter: {counter}</div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  )
}

export default App
