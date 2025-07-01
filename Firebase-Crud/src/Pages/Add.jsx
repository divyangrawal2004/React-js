import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import firebase from "firebase/compat/app";
import { app } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const navigate = useNavigate()
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

    set(ref(db, `users/${obj.userId}`), {
      name: formInput.name,
      email: formInput.email,
      password: formInput.password,
      age: formInput.age,
    })
      .then((res) => {
        alert("Data Saved");
        setFormInput({
          name: "",
          email: "",
          password: "",
          age: "",
        });
        navigate("/view")
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };
  return (
    <div align="center">
      <h1>ADD USER</h1>
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

export default Add;
