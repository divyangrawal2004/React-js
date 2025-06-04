import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const About = () => {

    const location = useLocation()
    const [allUsers,setAllUsers] = useState([])
  
    console.log(location);

    useEffect(() => {
       if(location.state != null){
         setAllUsers(location.state.users)
       }else{
        setAllUsers([])
       }
    }, [location.state])
    
  return (
    <div>
          {/* A = {location.state}  */}
     
      <h1>About pages</h1>
    
      <Link to="/"  >Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/contact">Contact</Link>&nbsp;&nbsp;&nbsp;
      <h1>View Data</h1>
      {
          allUsers.map((user) => (
            <div key={user.id}>
             <table border={1}>
               <tr>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.phone}</td>
               </tr>
             </table>
            </div>
          ))
      }
    
       
    </div>
  )
}

export default About
