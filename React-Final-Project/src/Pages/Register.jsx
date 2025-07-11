import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthAction } from '../Redux/Action/AuthAction';
const Register = () => {
    const dispatch = useDispatch()
    const [formInput, setFormInput] = useState({
        name : '',
        email : '',
        password : ''
    })
    const changeInput = (e) => {
       const {name,value} = e.target
       setFormInput({...formInput,[name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formInput);
        dispatch(AuthAction(formInput))
        console.log(formInput);
        
    }
  return (
    <div>
        <div className="container">
            <div className="row-6">
               
   <h1>Register Page</h1>
   <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
    <input type="text" className="form-control" name='name' onChange={changeInput} value={formInput.name} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" className="form-control" name='email' onChange={changeInput} value={formInput.email} />
  </div>
   <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' onChange={changeInput} value={formInput.password} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>

                
            </div>
        </div>
    </div>
  )
}

export default Register
