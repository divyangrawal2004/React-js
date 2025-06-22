import Counter from "./Counter"
import Counter_context from "./Counter_context"


function App() {

  return (
    <div align="center">
      <h1>UseContext Counter</h1>
      <Counter>
        <Counter_context/>
      </Counter>
    </div>
  )
}

export default App
