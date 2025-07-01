import { getDatabase, onValue, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../Firebase";
import { ref } from "firebase/database";

const View = () => {
  const [allUsers, setAllUsers] = useState("");
  const db = getDatabase(app);
  const navigate = useNavigate()

  const getUser = () => {
    const allRecord = ref(db, "users");
    onValue(allRecord, (row) => {
      setAllUsers(row.val());
    //   console.log(row.val());
    });
  };

  const deleteUser = (id) => {
    // alert(key);
    const deleteData = ref(db, `users/${id}`)
    remove(deleteData)
    getUser()
    // return delete.remove();
  }

  const editButton = (id,name,email,password,age) => {
    let data = {id,name,email,password,age}
    navigate("/edit",{state:data})

  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div align="center">
      <h1>View Page</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers &&
           Object.entries(allUsers).map(([key,value])=>{
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.password}</td>
                  <td>{value.age}</td>
                  <td>
                    <button onClick={ () => deleteUser(key)}>Delete</button>
                    <button onClick={ () => editButton(key,value.name,value.email,value.password,value.age)}>Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <hr />

      <Link to={"/add"}>Add</Link>
    </div>
  );
};

export default View;
