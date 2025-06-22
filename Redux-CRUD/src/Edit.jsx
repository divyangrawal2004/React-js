import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Edit_User, Update_User } from './Redux/Action/Addaction'
import { Add_User } from './Redux/Action/Addaction'

const Edit = () => {
    const {id}= useParams();

    let navigate = useNavigate()

    const [formInput,setFormInput] = useState({
        name : "",
        email : "",
        password : ""
})

   
    const dispatch = useDispatch()
   
    const changeInput = (e) => {
        const{name,value} = e.target
        setFormInput({
            ...formInput,
            [name] : value
        })
    }
    useEffect(() => {
    dispatch (Edit_User(parseInt(id)))
    } , [dispatch,id])

     const single = useSelector(state => state.add.single)

    useEffect(() => {
        if(single){
            setFormInput(single)
        }
    } , [single])


    const handleSubmit = (e) => {
        e.preventDefault()

          let obj = {
        id: formInput.id,  // ✅ Existing ID maintain karo (Random ID mat do)
        name: formInput.name,
        email: formInput.email,
        password: formInput.password
    };
      
        dispatch(Update_User(obj))


        console.log(formInput)
          navigate("/view");
    }
  return (
    <div align="center">
    
      <Link to = "/">Add</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to = "/view">View</Link>
        <h1>Edit Page</h1>

      <form  style={{marginTop:"20px"}} onSubmit={handleSubmit}>
        <table border="1">
           
               <tbody>
                 <tr>
                <td>Name</td>
                <td><input type="text" placeholder='Enter Name' name='name' onChange={changeInput} value={formInput.name} /></td>
            </tr>
             <tr>
                <td>Email</td>
                <td><input type="email" placeholder='Enter Email' name='email' onChange={changeInput} value={formInput.email}/></td>
            </tr>
             <tr>
                <td>Password</td>
                <td><input type="password" placeholder='Enter password' name='password' onChange={changeInput} value={formInput.password} /></td>
            </tr>
            <tr>
                <td></td>
                <td><button type='submit'>Submit</button></td>
            </tr>
            
               </tbody>
        </table>
      </form>
    </div>
  )
}

export default Edit
