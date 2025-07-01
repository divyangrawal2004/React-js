import React, { useEffect, useState } from "react";
import { getDatabase, ref, set , update } from "firebase/database";
import firebase from "firebase/compat/app";
import { app } from "../Firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate()

    const loacation = useLocation();
    // console.log(loacation.state);

    useEffect(() => {
        setFormInput({
            ...formInput,
            name: loacation.state.name,
            email: loacation.state.email,
            password: loacation.state.password,
            age: loacation.state.age
        })
    } ,[loacation.state])
    
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  

  const db = getDatabase(app);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
    console.log(formInput);

    let obj = {
      userId: Math.floor(Math.random() * 10000),
      ...formInput,
    };

    const updateRecord = ref(db,`users/${loacation.state.id}`)
    update(updateRecord,{
        name:formInput.name,
        email:formInput.email,
        password:formInput.password,
        age:formInput.age
    }).then((res) => {
      alert("Data Updated");
      setFormInput({
        name: "",
        email: "",
        password: "",
        age: "",
      });
      navigate("/view")
    })

  
  };
  return (
    <div align="center">
      <h1>Edit USER</h1>
      <form onSubmit={handleSubmit}>
        <table border={1} cellPadding={10} align="center">
          <tr>
            <td>Name :-</td>
            <td>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formInput.name}
                onChange={changeInput}
              />
            </td>
          </tr>
          <tr>
            <td>Email :-</td>
            <td>
              <input
                type="Email"
                placeholder="Enter Email"
                name="email"
                value={formInput.email}
                onChange={changeInput}
              />
            </td>
          </tr>
          <tr>
            <td>Password :-</td>
            <td>
              <input
                type="Password"
                placeholder="Enter Password"
                name="password"
                value={formInput.password}
                onChange={changeInput}
              />
            </td>
          </tr>
          <tr>
            <td>Age :-</td>
            <td>
              <input
                type="text"
                placeholder="Enter Age"
                name="age"
                value={formInput.age}
                onChange={changeInput}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Submit</button>
            </td>
          </tr>
        </table>
      </form>
      <hr />
       <Link to={"/view"}>View</Link>
    </div>
   
  );
};

export default Edit;
