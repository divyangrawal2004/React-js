import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Add_User } from "./Redux/Action/Addaction";

const Add = () => {
  let navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 10000),
      ...formInput,
    };

    dispatch(Add_User(obj));

    console.log(formInput);
    navigate("/view");
  };
  return (
    <div align="center">
      <Link to="/">Add</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/view">View</Link>
      <h1>Add Page</h1>
      <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        <table border="1">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={changeInput}
                  value={formInput.name}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={changeInput}
                  value={formInput.email}
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={changeInput}
                  value={formInput.password}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Add;
