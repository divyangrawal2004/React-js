import React from 'react'
import Counter from './Counter'

const ComponentA = ({cnt, increment, decriment, showData , user}) => {
  return (
    <div className="counter-container">
        <h1>Counter App :- 1</h1>
        <h2>Counter A</h2>
        <div className="counter-display">Count :- {cnt}</div>
        <div className="counter-buttons">
            <button className="counter-button increment-btn" onClick={() => increment()}>Increment</button>
            <button className="counter-button decrement-btn" onClick={() => decriment()}>Decrement</button>
            <button className="counter-button show-data-btn" onClick={() => showData()}>Show Data</button>
        </div>
        <div className="user-list">
            {user.map((val,index) => {
                return(
                    <div className="user-item" key={index}>
                        <span className="user-name">Name: {val.name}</span>
                        <span className="user-age">Age: {val.age}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
let C = Counter(ComponentA)

export default C
