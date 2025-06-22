import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Add_User, Edit_User, Update_User } from "../Redux/Action/CrudAction";

const Edit = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.CrudData.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const users = data.find((val) => val.id == id);
    if (users) {
      setFormInputs(users);
    }
  }, [id, data]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Update_User({ ...formInputs, id })); // ✅ FIXED: used Update_User
    alert("Submitted");
    navigate("/view");
    setFormInputs({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div align="center">
      <Link to="/">ADD</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/view"}>VIEW</Link>
      <h1>Add Page</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formInputs.name}
                onChange={changeInput}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formInputs.email}
                onChange={changeInput}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formInputs.password}
                onChange={changeInput}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Edit;
