import React from 'react'

const View = ({allRecords , deleteRecord , editButton}) => {
  return (
    <div align="center">
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Courses</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                allRecords.map((val,index) => {
                  return(
                    <tr>
                      <td>{val.userid}</td>
                      <td>{val.username}</td>
                      <td>{val.useremail}</td>
                      <td>{val.userpassword}</td>
                      <td>{val.usergender}</td>
                      <td>{val.usercourses.join(" , ")}</td>
                      <td>
                        <button onClick={() => editButton(index)}>Edit</button>
                          <button onClick={() => deleteRecord(index) }>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
      
    </div>
  )
}

export default View
