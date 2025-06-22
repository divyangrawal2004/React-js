import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Add_User } from '../Redux/Action/CrudAction';

const Add = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [formInputs, setFormInputs] = useState({
        name : "",
        email : "",
        password : ""
    })

    const changeInput = (e) => {
       const {name, value} = e.target;
       setFormInputs({
        ...formInputs,
        [name]: value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Add_User(formInputs))
         alert("Submitted");
         navigate("/view")          
        console.log(formInputs);
        setFormInputs({
            name : "",
            email : "",
            password : ""
        })
        
       
    }
  return (
    <div align = "center">
      <Link to = "/">ADD</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/view"}>VIEW</Link>

      <h1>Add Page</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
            <tr>
                <td>Name</td>
                <td><input type="text" name="name" placeholder='Enter Name' value={formInputs.name} onChange={changeInput}/></td>
            </tr>
              <tr>
                <td>Email</td>
                <td><input type="email" name="email" placeholder='Enter Email' value={formInputs.email} onChange={changeInput}/></td>
            </tr>
              <tr>
                <td>Password</td>
                <td><input type="password" name="password" placeholder='Enter Password' value={formInputs.password} onChange={changeInput}/></td>
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
