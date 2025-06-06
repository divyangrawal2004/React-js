import { useState } from "react";
import "./Form.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [editId, setEditId] = useState("");

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    courses: [],
  });

  const [allrecords, setAllRecords] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let check = true;
    const errors = {};
    if (!inputData.name) {
      errors.name = "Name is required *";
      check = false;
    }
    if (!inputData.email) {
      errors.email = "Email is required *";
      check = false;
    }
    if (!inputData.password) {
      errors.password = "Password is required *";
      check = false;
    }
    if (!inputData.gender) {
      errors.gender = "Gender is required *";
      check = false;
    }
    if (inputData.courses == 0) {
      errors.courses = "Courses is required *";
      check = false;
    }
    if (!inputData.city) {
      errors.city = "City is required *";
      check = false;
    }
    setFormErrors(errors);
    //  check = false
    return check;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      if (checked) {
        setInputData({
          ...inputData,
          courses: [...inputData.courses, value],
        });
      } else {
        setInputData({
          ...inputData,
          courses: [...inputData.courses.filter((val) => val !== value)],
        });
      }
    } else {
      setInputData({ ...inputData, [name]: value });
    }
  };

  const handleDelete = (index) => {
    let daleteRecord = allrecords.filter((val, i) => i !== index);
    setAllRecords(daleteRecord);
    localStorage.setItem("users", JSON.stringify(daleteRecord));
  };

  const handleEdit = (id) => {
    let editRecord = allrecords.find((val, i) => i == id);
    setInputData(editRecord);
    setEditId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // agar form valid nahi hai to kuch bhi nhi krega
    }

    if (editId !== "") {
      // Edit mode
      const updatedRecords = allrecords.map((val, i) => {
        if (i == editId) {
          return {
            name: inputData.name,
            email: inputData.email,
            password: inputData.password,
            gender: inputData.gender,
            city: inputData.city,
            courses: inputData.courses,
          };
        }
        return val;
      });

      setAllRecords(updatedRecords);
      localStorage.setItem("users", JSON.stringify(updatedRecords));
      alert("Record Updated");
    } else {
      // Insert mode
      const oldRecords = [...allrecords, inputData];
      setAllRecords(oldRecords);
      localStorage.setItem("users", JSON.stringify(oldRecords));
      alert("Record Inserted");
    }

    // Form reset after both insert or update
    setInputData({
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      courses: [],
    });
    setFormErrors({});
    setEditId(""); // editId reset
  };

  return (
    <>
      <div align="center">
        <h1>Form Registration</h1>

        <form onSubmit={handleSubmit} className="form-box">
          <table border={1}>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={inputData.name}
                    placeholder="Enter Your Name"
                  />
                  {formErrors.name && (
                    <span style={{ color: "red" }}>{formErrors.name}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={inputData.email}
                    placeholder="Enter Your Email"
                  />
                  {formErrors.email && (
                    <span style={{ color: "red" }}> {formErrors.email}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={inputData.password}
                    placeholder="Enter Your Password"
                  />
                  {formErrors.password && (
                    <span style={{ color: "red" }}>{formErrors.password}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>
                  <input  type="radio"  name="gender" value="male"  onChange={handleChange} checked={inputData.gender === "male"} />{" "}  Male
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={inputData.gender === "female"}
                  />{" "}
                  Female
                  {formErrors.gender && (
                    <span style={{ color: "red" }}>{formErrors.gender}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Courses:</td>
                <td>
                  <input
                    type="checkbox"
                    name="courses"
                    value="c"
                    checked={inputData.courses.includes("c")}
                    onChange={handleChange}
                  />{" "}
                  C
                  <input
                    type="checkbox"
                    name="courses"
                    value="c++"
                    checked={inputData.courses.includes("c++")}
                    onChange={handleChange}
                  />{" "}
                  C++
                  <input
                    type="checkbox"
                    name="courses"
                    value="java"
                    checked={inputData.courses.includes("java")}
                    onChange={handleChange}
                  />{" "}
                  Java
                  <input
                    type="checkbox"
                    name="courses"
                    value="python"
                    checked={inputData.courses.includes("python")}
                    onChange={handleChange}
                  />{" "}
                  Python
                  {formErrors.courses && (
                    <span style={{ color: "red" }}>{formErrors.courses}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>City:</td>
                <td>
                  <select
                    name="city"
                    onChange={handleChange}
                    value={inputData.city}
                  >
                    <option value="">Select City</option>
                    <option value="surat">Surat</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="vadodra">Vadodra</option>
                    <option value="baroda">Baroda</option>
                  </select>
                  {formErrors.city && (
                    <span style={{ color: "red" }}>{formErrors.city}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />

        <h1>Data show</h1>

        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Courses</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allrecords.map((val, index) => {
              const { name, email, password, gender, courses, city } = val;
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{gender}</td>
                  <td>{courses.join(" , ")}</td>
                  <td>{city}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}   style={{ marginRight: "5px" }}><FaEdit /> Edit </button>
                    <button onClick={() => handleDelete(index)}> <FaTrash /> Delete </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
