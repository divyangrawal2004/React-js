import React, { useState } from "react";

const Form = ({ allRecords, setAllRecords , formInput  , changeInput , handleSubmit}) => {


  return (
    <div align="center">
      <h1>Props-state with From </h1>
      <form>
        <table border={1}>
          <thead>
            <tr>
              <td>Name :-</td>
              <td>
                <input
                  type="text"
                  placeholder="enter your name"
                  value={formInput.username}
                  onChange={changeInput}
                  name="username"
                />
              </td>
            </tr>
            <tr>
              <td>Email :-</td>
              <td>
                <input
                  type="email"
                  placeholder="enter your email"
                  value={formInput.useremail}
                  onChange={changeInput}
                  name="useremail"
                />
              </td>
            </tr>
            <tr>
              <td>Password :-</td>
              <td>
                <input
                  type="password"
                  placeholder="enter your Password"
                  name="userpassword"
                  value={formInput.userpassword}
                  onChange={changeInput}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="radio"
                  value={"male"}
                  name="usergender"
                  onChange={changeInput}
                  checked={formInput.usergender === "male"}
                />
                male
                <input
                  type="radio"
                  value={"female"}
                  name="usergender"
                  onChange={changeInput}
                  checked={formInput.usergender === "female"}
                />
                female
              </td>
            </tr>
            <tr>
              <td>Courses</td>
              <td>
                <input
                  type="checkbox"
                  value={"Python"}
                  onChange={changeInput}
                  name="usercourses"
                  checked={formInput.usercourses.includes("Python")}
                />
                Python
                <input
                  type="checkbox"
                  value={"Java"}
                  onChange={changeInput}
                  name="usercourses"
                  checked={formInput.usercourses.includes("Java")}
                />
                Java
                <input
                  type="checkbox"
                  value={"React"}
                  onChange={changeInput}
                  name="usercourses"
                  checked={formInput.usercourses.includes("React")}
                />
                React
                <input
                  type="checkbox"
                  value={"C"}
                  onChange={changeInput}
                  name="usercourses"
                  checked={formInput.usercourses.includes("C")}
                />
                C
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <input
                  type="button"
                  value={"Submit"}
                  onClick={() => handleSubmit()}
                />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default Form;
