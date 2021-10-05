import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

export const Counter = () => {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
    <h1>Counter with Redux Toolkit</h1>
     <span style={{fontSize: '50px', marginBottom: '20px'}}>{count}</span>
    <div>
      <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
       
    <button
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
      style={{marginLeft: '30px'}}
    >
      Increment
    </button>
    </div>   
    </>
  )
}