import { useState } from "react";
import "./Form.css";

function App() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    courses: [],
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let check = true;
    const errors = {};
    if(!inputData.name){
      errors.name = "Name is required *";
    }
    if(!inputData.email){
      errors.email = "Email is required *";
    }
    if(!inputData.password){
      errors.password = "Password is required *";
    }
    if(!inputData.gender){
      errors.gender = "Gender is required *";
    }
    if(inputData.courses == 0){
      errors.courses = "Courses is required *";
    }
    if(!inputData.city){
      errors.city = "City is required *";
    }
    setFormErrors(errors);
    check = false
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if(type == "checkbox"){
      if(checked){
        setInputData({
          ...inputData,
          courses: [...inputData.courses, value],
        });
      }else{
        setInputData(
          {
            ...inputData,
            courses: [...inputData.courses.filter((val) => val !== value)]
          }
        )
      }
    }else{
      setInputData({ ...inputData, [name]: value });

    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
      console.log(inputData);
    
   if(validateForm()){
    setInputData({
      name: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      courses: [],
    });
    setFormErrors({});  
   }

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
                <td><input type="text" name="name" onChange={handleChange}  value={inputData.name} placeholder="Enter Your Name" />
                {
                  formErrors.name && <span style={{color:"red"}}>{formErrors.name}</span>
                }
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><input type="email" name="email" onChange={handleChange} value={inputData.email} placeholder="Enter Your Email" />
                {
                  formErrors.email && <span style={{color:"red"}}> {formErrors.email}</span>
                }</td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input type="password" name="password" onChange={handleChange} value={inputData.password} placeholder="Enter Your Password" />
                {
                  formErrors.password && <span style={{color:"red"}}>{formErrors.password}</span>
                }
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>
                  <input type="radio" name="gender" value="male" onChange={handleChange} checked={inputData.gender === "male"} /> Male
               
                  <input type="radio" name="gender" value="female" onChange={handleChange} checked={inputData.gender === "female"} /> Female
                  {
                    formErrors.gender && <span style={{color:"red"}}>{formErrors.gender}</span>
                  }
                </td>
              </tr>
              <tr>
                <td>Courses:</td>
                <td>
                  <input type="checkbox" name="courses"  value="c" checked={inputData.courses.includes("c")} onChange={handleChange}  /> C
                  <input type="checkbox" name="courses"  value="c++" checked={inputData.courses.includes("c++")} onChange={handleChange}  /> C++
                  <input type="checkbox" name="courses" value="java" checked={inputData.courses.includes("java")} onChange={handleChange}  /> Java
                  <input type="checkbox" name="courses" value="python" checked={inputData.courses.includes("python")} onChange={handleChange}  /> Python
                  {
                    formErrors.courses && <span style={{color:"red"}}>{formErrors.courses}</span>
                  }
                </td>
              </tr>
              <tr>
                <td>City:</td>
                <td>
                  <select name="city" onChange={handleChange} value={inputData.city}>
                    <option value="">Select City</option>
                    <option value="surat">Surat</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="vadodra">Vadodra</option>
                    <option value="baroda">Baroda</option>
                  </select>
                  {
                  formErrors.city && <span style={{color:"red"}}>{formErrors.city}</span>
                }
                </td>
               
              </tr>
              <tr>
                <td></td>
                <td><button type="submit" className="submit-btn">Submit</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default App;
