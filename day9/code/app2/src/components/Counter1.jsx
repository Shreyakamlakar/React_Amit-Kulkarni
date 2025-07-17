import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction } from '../slices/CounterSlice'

function Counter1() {
  // get the store and return required slice
  const { value } = useSelector((store) => store.counter)

  // get reference to the dispatch function
  const dispatch = useDispatch()

  const onIncrement = () => {
    // send the increment action to invoke the required reducer
    dispatch(incrementAction())
  }

  const onDecrement = () => {
    // send the decrement action to invoke the required reducer
    dispatch(decrementAction())
  }

  return (
    <div>
      <h2>Counter1</h2>

      <div>
        <button onClick={onIncrement}>+</button>
        <div>counter = {value}</div>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  )
}

export default Counter1
