import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Delete_User } from './Redux/Action/Addaction'


const View = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector(state => state.add.users)

    const editUser = (id) => {
        navigate(`/edit/${id}`)
    }

  return (
    <div align="center">
      <h1>View Page</h1>
      <Link to = "/">Add</Link>
      <table border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((val) => {
                    return(
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td><button onClick={() => dispatch(Delete_User(val.id))}>Delete</button>
                          <button onClick={() => editUser(val.id)}>Edit</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
 
    </div>
  )
}

export default View
