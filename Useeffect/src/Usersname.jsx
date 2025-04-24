import React, { useEffect, useState } from 'react'

const Usersname = () => {
    const [add,setAdd] = useState([])

    const admin = () => {
        fetch(`https://fakestoreapi.com/users`)
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            setAdd(data)
        })
    }
    useEffect(() => {
        admin()
    },[])
  return (
    <>
    <h1 align="center">UserData :-</h1>
    <table border={1} align='center' cellPadding={10}>
        <thead>
            <tr>
                <th>ID</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {
                add.map((user) => {
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    
    </>
  )
}

export default Usersname
