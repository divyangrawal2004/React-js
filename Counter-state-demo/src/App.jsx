import { useState } from "react";
import Add from "./Counter/Counter";
import Counter from "./Counter/Counter";

function App() {
  let[cnt,setCnt] = useState(0);

  const plus = () => {
    setCnt(cnt+1);
  }

  let[add,setAdd] = useState(0);


  const Add= () => {
    setAdd(add+1);
  }

  const minus= () => {
    setAdd(add-1);
  }

  const reset= () => {
    setAdd(0);
  }


  return (
  <div>
      <div align="center">
      <h1 >Counter</h1>
      <h2>Counter :- {cnt}</h2>
      <button onClick={() => plus()}>Plus</button>
    </div>

    <Counter
      add = {add}
      Add = {Add}
      minus = {minus}
      reset = {reset}
    />
  </div>


  )
}

export default App
