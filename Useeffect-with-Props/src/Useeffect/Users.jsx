
import React from 'react'

const Users = ({use}) => {
  return (
   <>
   <h1 align="center">Users Data:-</h1>

   <table border={1}>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>image</th>
            <th>Company</th>
            <th>Crypto</th>
            <th>Email</th>
            <th>Password</th>

        </tr>
    </thead>
    <tbody>
        {
            use.map((val) => {
                return(
                    <tr>
                        <td>{val.id}</td>
                        <td>{val.firstName}</td>
                        {/* <td>
                        
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <th>Card Expiry</th>
                                            <th>Card Number</th>
                                            <th>Card type</th>
                                            <th>Currancy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            val.bank.map((val) => {
                                                return(
                                                    <tr>
                                                        <td>{val.cardExpire}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            
                        </td> */}
                        <td>{val.image}</td>
                        <td> Department :- {val.company.department} Name:-{val.company.name}</td>
                        <td>Coin :-{val.crypto.coin} Netwrok :-{val.crypto.network}</td>
                        <td>{val.email}</td>
                        <td>{val.password}</td>
                    </tr>
                )
            })
        }
    </tbody>
   </table>
   
   </>
  )
}

export default Users
