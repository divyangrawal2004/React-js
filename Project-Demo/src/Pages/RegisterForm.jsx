import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {

    const navigate = useNavigate()

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeInput = (e) => {
        const {name, value} = e.target
        setFormInput({
            ...formInput,
            [name] : value

        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formInput)
        navigate('/login')
        setFormInput({
            name: '',
            email: '',
            confirmPassword: '',
            password: ''
        })

    }
  return (
    <div align="center">
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit} >
            <table border={1}>
                <tr>
                    <td>UserName</td>
                    <td><input type="text" name='name' onChange={changeInput} value={formInput.name} placeholder='Enter your UserName' /></td>
                </tr>
                  <tr>
                    <td>Email</td>
                    <td><input type="email" name='email' onChange={changeInput} value={formInput.email} placeholder='Enter your Email' /></td>
                </tr>
                 <tr>
                    <td>Password</td>
                    <td><input type="password" name='password' onChange={changeInput} value={formInput.password} placeholder='Enter your Password' /></td>
                </tr>
                 <tr>
                    <td>Confirm-Password</td>
                    <td><input type="password" name='confirmPassword' onChange={changeInput} value={formInput.confirmPassword} placeholder='Enter your Confirm-Password' /></td>
                </tr>
                  <tr>
                    <td></td>
                    <td><button type='submit'>Register</button></td>
                </tr>

            </table>
        </form>
      
    </div>
  )
}

export default RegisterForm
