import React from 'react'

const Result = ({result}) => {
  return (
    <>
    <h1 align='center'> Result Data :-</h1>
    <table border={1} align='center'>
        <thead>
            <tr>
                <th>Gender</th>
                <th>Name</th>
                <th>Location</th>
                <th>E-mail</th>
                <th>Login</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody align="center">
            {
                result.map((val,index) => {
                    return(
                        <tr key={index}>
                            <td>{val.gender}</td>
                            <td>{val.name.title} {val.name.first} {val.name.last}</td>
                            <td>{val.location.city}</td>
                            <td>{val.email}</td>
                            {/* <td>
                                {
                                    val.login.map((val) => {
                                        return(
                                            <tr>
                                                <td>{val.username}</td>
                                                <td>{val.password}</td>
                                            </tr>
                                        )
                                    })
                                }


                            </td> */}
                            <td>{val.login.username}</td>
                            <td>{val.login.password}</td>
                        </tr>

                    )
                })
            }
        </tbody>
    </table>
    
    </>

  
  )
}

export default Result
