import React, { useContext } from 'react'
import { CounterContext } from '../App'

function Counter3() {
  const context = useContext(CounterContext)
  console.log(`context: `, context)
  return (
    <div>
      <h2>Counter3</h2>
    </div>
  )
}

export default Counter3
