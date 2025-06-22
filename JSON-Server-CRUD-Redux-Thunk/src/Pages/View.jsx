import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Edit_User, Get_User } from '../Redux/Action/CrudAction'
import { Delete_User } from '../Redux/Action/CrudAction'

const View = () => { 

  const navigate = useNavigate()
  const dispatch = useDispatch() 
  useEffect(() => {
    dispatch(Get_User())
  } , [])

  const deleteUser = (id) => {
    dispatch(Delete_User(id))
  }

  const editUser = (id) => {
    navigate(`/edit/${id}`)
   
  }
  const users = useSelector((state => state.CrudData.users))

  return (
    <div align = "center">
         <Link to = "/">ADD</Link>
      <h1>View Page</h1>
      <table border={1}>
       <thead>
         <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
        
       </thead>
       <tbody>
    {
      users.map((user) => (
        <tr key = {user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>
            <button onClick = { () => deleteUser(user.id)} >Delete</button>
            <button onClick={() => editUser(user.id)}>Edit</button>
          </td>
        </tr>
      ))
    }

       </tbody>
      </table>
     
    </div>
  )
}

export default View
