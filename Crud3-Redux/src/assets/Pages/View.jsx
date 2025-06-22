import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Delete_User } from '../../Redux/Action/CrudAction'

const View = () => {
    const data = useSelector(state => state.crud.Data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const editUser = (id) => {
        navigate(`/edit/${id}`);
    }

  return (
    <div align="center">
      <h1>View page</h1>
      <Link to = "/">ADD</Link>
      <table border={1}>
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                data.map((val) => {
                    const {id,name,email,password} = val
                    return(
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{password}</td>
                            <td>
                                <button onClick={ () => dispatch(Delete_User(id)) }>Delete</button>
                                <button onClick={() => editUser(id) }>Edit</button>
                            </td>
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
