import { useEffect, useState } from "react"
import { app } from "./Firebase";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import './App.css'

function App() {

  const [allRecords,setAllRecords] = useState([])

  const [formInput,setFormInput] = useState({
    todo : ""
  })

  const changeInput = (e) => {
    const {name,value} = e.target;
    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const db = getFirestore(app)

  const getUser = async() => {
    try{
      const data = collection(db,"todos")
      const allRecords = await getDocs(data)

      const record = allRecords.docs.map(doc => ({
        id : doc.id,
         ...doc.data()

      }))
      // console.log(record);
      setAllRecords(record)
    }catch(err) {
      console.log(err);
      return false
      
    }

  }
  useEffect(() => {
    getUser()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formInput);

    try{
      const addRecord = await addDoc(collection(db,"todos"),{
        todo : formInput.todo
      })

      alert("Todo added successfully")
      getUser()
    }catch(err) {
      console.log(err);
      return false
      
    }
    setFormInput({
      todo : ""
    })
    
  }

  const allClearData = async () => {
  try {
    const data = await getDocs(collection(db, "todos"));

    const deletePromises = data.docs.map((docu) =>
      deleteDoc(doc(db, "todos", docu.id))
    );

    await Promise.all(deletePromises); 

    alert("All todos cleared successfully!");
    getUser(); 
  } catch (err) {
    console.log(err);
    return false
  }
};


  const removeUser = async (id) => {
    try{
      let deleteRecord = doc(db,`todos/${id}`);
      await deleteDoc(deleteRecord);

      alert("Todo deleted successfully")
      getUser()

    }catch(err) {
      console.log(err);
      return flase
      
    }
  }
 

  return (
    <div align="center">
    <h1>Todo List</h1>

   <form onSubmit={handleSubmit} >
     <input type="text" placeholder="Add a todo..." name="todo" value={formInput.todo} onChange={changeInput} />
     <button type="submit">Submit</button>
   </form>

   <h1>View Todos</h1>

    <table border="1">
      <thead>
        <tr>
          <th>Todo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          allRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.todo}</td>
              <td><button onClick={ () => removeUser(record.id)}>Remove</button></td>

            </tr>
          ))
        }
        <button className="clear-button" onClick={() => allClearData()}>Clear List</button>
      </tbody>
    </table>
  
    </div>
  )
}

export default App
