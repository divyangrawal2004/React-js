import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {EDIT_USER } from '../Redux/Action/CrudAction'

const Edit = () => {

        const {id} = useParams()

       const dispatch = useDispatch()
       const navigate = useNavigate()
       const Data = useSelector(state => state.crud.data)
       console.log(Data);
    
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''
    })


    useEffect(() => { 
        const editUser = Data.find((val) => {
            return val.id == id
        })
          setFormInput(editUser)

    },[id])
 

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
        dispatch(EDIT_USER(formInput))
        // let obj = {
        //     id:Math.floor(Math.random() * 10000),
        //    ...formInput
        // }

        // const allData = [...Data,obj]
       

        navigate('/view')
        setFormInput({
            name: '',
            email: '',
            password: ''
        })
      
        
    }

  return (
    <div>
      <h1 align='center'>Edit-Page</h1>
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

export default Edit
