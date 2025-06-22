import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ADD_DATA } from '../Redux/Action/CrudAction'

const Add = () => {
       const dispatch = useDispatch()
       const navigate = useNavigate()
       const Data = useSelector(state => state.crud.data)
       console.log(Data);
    
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''
    })

 

    const changeInput = (e) => {
        const {name,value} = e.target
        setFormInput({
            ...formInput,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('submitted')
        console.log(formInput);

        let obj = {
            id:Math.floor(Math.random() * 10000),
           ...formInput
        }

        const allData = [...Data,obj]
        dispatch(ADD_DATA(allData))

        navigate('/view')
        setFormInput({
            name: '',
            email: '',
            password: ''
        })
      
        
    }

  return (
    <div align="center">
      <h1 align='center'>Add</h1>
      <Link to = "/view">View</Link>
      <form onSubmit={handleSubmit}>
        <table  align='center' cellPadding={10} border={1}>
            <tr>
                <td>Name</td>
                <td><input type="text" placeholder='enter name' name='name' value={formInput.name} onChange={changeInput} /></td>
            </tr>
              <tr>
                <td>Email</td>
                <td><input type="email" placeholder='enter email' name='email' value={formInput.email} onChange={changeInput}  /></td>
            </tr>
              <tr>
                <td>Password</td>
                <td><input type="password" placeholder='enter password' name='password' value={formInput.password} onChange={changeInput} /></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit"/></td>
            </tr>
        </table>
      </form>
      
    </div>
  )
}

export default Add
