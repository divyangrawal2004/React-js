import Counter from "./Counter"

const ComponentB = ({cnt , increment}) => {
  return (
    <div className="counter-container">
        <h1>Counter App :- 2</h1>
        <h2>Counter B</h2>
        <div className="counter-display">Count :- {cnt}</div>
        <div className="counter-buttons">
            <button className="counter-button increment-btn" onClick={() => increment()}>Increment</button>
        </div>
    </div>
  )
}
let B = Counter(ComponentB)

export default B
