// ✅ src/Components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formInput, setFormInput] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.email === formInput.email && u.password === formInput.password
    );

    if (matchedUser) {
      localStorage.setItem("auth", true);
      alert("Login Successful");
      navigate("/students");
    } else {
      alert("Invalid Email or Password");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleLogin} className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3>Login</h3>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control mb-3"
        onChange={handleInput}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form-control mb-3"
        onChange={handleInput}
        required
      />
      <button type="submit" className="btn btn-success w-100">Login</button>

      <div className="text-center mt-3">
        <p>Don't have an account?</p>
        <Link to="/" className="btn btn-outline-primary">Register Here</Link>
      </div>
    </form>
  );
};

export default Login;
