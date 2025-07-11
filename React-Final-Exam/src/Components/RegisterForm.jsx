// ✅ src/Components/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 🔒 Optional check: if user already exists
    const userExists = existingUsers.some(user => user.email === formInput.email);
    if (userExists) {
      alert("User already registered");
      return;
    }

    const updatedUsers = [...existingUsers, formInput];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("User Registered Successfully");
    setFormInput({ name: '', email: '', password: '' });
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister} className="container mt-5">
      <h2>Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="form-control mb-3"
        onChange={changeInput}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control mb-3"
        onChange={changeInput}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form-control mb-3"
        onChange={changeInput}
        required
      />
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterForm;
