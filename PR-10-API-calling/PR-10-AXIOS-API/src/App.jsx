import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [users,setUsers ] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/users`)
    .then(res => {
      console.log(res.data.users);
      setUsers(res.data.users)
      
    }).catch(err => {
      console.log(err);
    })
  },[])

  if(users.length === 0){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <h1 align="center">AXIOS API METHOD</h1>
    <table border={1} align="center" cellPadding={10}>
      <thead>
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>MiddleName</th>
          <th>LastName</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody align="center">
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.maidenName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

export default App
