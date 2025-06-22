import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER } from '../Redux/Action/CrudAction'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {

    const data = useSelector(state => state.crud.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const editUser = (id) => {
        navigate(`/edit/${id}`)
    }


  return (
    <div align="center">
      <h1>View</h1>
      <Link to ="/">ADD</Link>
      <form >
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
                data.map((item , index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>
                                <button onClick={() => dispatch(DELETE_USER(item.id))}>Delete</button>
                                <button  onClick={() => editUser(item.id)}>Edit</button>
                            </td>
                        </tr>
                    )
                })

            }
          </tbody>

        </table>
      </form>
      
    </div>
  )
}

export default View
