import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const a= 10;
    const navigate = useNavigate();
    const data = {
        color : ["red" , "black" , "pink"],
        users : [
            {id:1,name : "divu", phone : 12345},
            {id:2,name : "Shivu", phone : 1234567},
            {id:3,name : "Amu", phone : 123457990},

        ]
    }

    const handleSubmit = () => {
        // alert("hiii")
        navigate('./about',{state:data})
    }
  return (
    <div>
      <h1>Home pages</h1>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to ="/about" state={a}>About</Link>&nbsp;&nbsp;&nbsp;
      <Link to ="/contact">Contact</Link>&nbsp;&nbsp;&nbsp;
      <button onClick={() => handleSubmit()}>Click</button>
    </div>
  )
}

export default Home
