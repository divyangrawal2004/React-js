import { useState } from "react";
import Counter from "./Counter/Counter";
import Todo from "./Todo-list/Todo";

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
    setAdd(add = 0);
  }

  let [todo,setTodo] = useState([
    {id:1,name:"Divu"},
    {id:2,name:"Shivu"},
    {id:3,name:"Raju"},
    {id:4,name:"Babu"},
  ])



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

    <Todo
      todo = {todo}
    />
  </div>


  )
}

export default App
