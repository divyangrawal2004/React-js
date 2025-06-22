import React, { useContext } from 'react'
import { CounterContext } from './Counter'



const Counter_context = () => {
    const {no , Increment , Decrement} = useContext(CounterContext)
  return (
    <div>
      <h1>Counter APP</h1>
        <h2>Counter :-{no} </h2>
        <button onClick={ () => Increment()}>+</button>
        <button onClick={ () => Decrement()}>-</button>
    </div>
  )
}

export default Counter_context
