import { useState } from "react";
// import Todo from "./Todo";

function App() {
  const [tasks, setTasks] = useState("");
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      // ✅ Fix: Proper update logic
      const newTodo = todo.map((val) =>
        val.id === editId ? { ...val, task: tasks } : val
      );
      setTodo(newTodo);
      setEditId(null);
    } else {
      // ✅ Fix: Correct object spread syntax
      let obj = {
        id: Math.floor(Math.random() * 100),
        task: tasks,
      };
      setTodo([...todo, obj]);
    }
    setTasks("");
  };

  const deleteTodo = (id) => {
    let newTodo = todo.filter((val) => val.id !== id);
    setTodo(newTodo);
  };

  const editTodo = (id) => {
    let newTodo = todo.find((val) => val.id === id);
    if (newTodo) {
      setTasks(newTodo.task);
      setEditId(newTodo.id);
    }
  };

  const changeStatus = (id) => {
    let newTodo = todo.map((val) =>
      val.id == id ? { ...val, status: "Active" } : {
       ...val,   status: "DeActive"
      }
    );
    setTodo(newTodo);
   
  };



  return (
    <>
      <div align="center">
        <h1>Todo List</h1>

        {/* ✅ Input Field */}
        <form onSubmit={handleSubmit}>
          Task:- <input type="text"  onChange={(e) => setTasks(e.target.value)}  value={tasks}  placeholder="Enter your task"  />
          <button type="submit">{editId !== null ? "Update" : "Submit"}</button>
        </form>

        {/* ✅ View Todo List */}
        {todo.length === 0 && <h1 style={{ color: "red" }}>No data found</h1>}

        <h1>View Todo</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Task</th>
              <th>Action</th>
              <th>Edit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.task}</td>
                <td>
                  <button onClick={() => deleteTodo(val.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => editTodo(val.id)}>Update</button>
                </td>
                <td>
                  <button onClick={ () => changeStatus(val.id)}>{
                    val.status=="Active"?"DeActive":"Active"   
                  }</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     {/* { <Todo/>} */}
    </>
  );
}

export default App;


