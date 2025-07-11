import React, { useState } from 'react'

const Login = () => {

    const [formInput, setFormInput] = useState({
        name: '',
        password: ''
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
        setFormInput({
            name: '',
            password: ''
        })

    }
  return (
    <div align="center">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit} >
            <table>
                <tr>
                    <td>UserName</td>
                    <td><input type="text" name='name' onChange={changeInput} value={formInput.name} placeholder='Enter your UserName' /></td>
                </tr>
                  <tr>
                    <td>Password</td>
                    <td><input type="password" name='password' onChange={changeInput} value={formInput.password} placeholder='Enter your Password' /></td>
                </tr>
                  <tr>
                    <td></td>
                    <td><button type='submit'>Login</button></td>
                </tr>

            </table>
        </form>
      
    </div>
  )
}

export default Login
