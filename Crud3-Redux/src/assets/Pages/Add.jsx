import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USER } from '../../Redux/Action/CrudAction'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Add = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector(state => state.crud.Data)
    console.log(data);
    

    const [formInput,setFormInput] = useState({
        name: "",
        email: "",
        password: ""
    })



    const changeInput = (e) => {
        const {name,value} = e.target
        setFormInput({
            ...formInput,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id : Math.floor(Math.random() * 1000),
            ...formInput
        }
        navigate("/view")

        let allData = [...data,obj]
        dispatch(ADD_USER(allData))
        alert("form submitted")
        console.log(formInput);
        
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
