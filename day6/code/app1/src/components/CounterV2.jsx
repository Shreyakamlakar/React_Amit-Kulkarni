import React, { useReducer } from 'react'

function CounterV2() {
  // used to update the state
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        // returning a new state with incremented count
        return { ...state, count: state.count + 1 }
      case 'decrement':
        // returning a new state with decremented count
        return { ...state, count: state.count - 1 }
    }
  }

  // reducer is the function used to update the state,
  // {count: 0} is the initial state of the component
  const [state, dispatch] = useReducer(reducer, { count: 10 })

  const onIncrement = () => {
    // increment the count
    dispatch({ type: 'increment' })
  }

  const onDecrement = () => {
    // decrement the count
    dispatch({ type: 'decrement' })
  }

  return (
    <div>
      <h2>Counter v2</h2>
      <div>counter = {state.count}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default CounterV2
