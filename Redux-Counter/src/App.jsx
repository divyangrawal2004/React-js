import { useDispatch, useSelector } from "react-redux"
import { Increment } from "./Redux/Action/CounterAction"


function App() {

  const no = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div align="center">
    <h1>Counter App</h1>
    <h2>Count :- {no}</h2>
    <button onClick={ () => dispatch(Increment())}>Increment</button>
    
    </div>
  )
}

export default App
