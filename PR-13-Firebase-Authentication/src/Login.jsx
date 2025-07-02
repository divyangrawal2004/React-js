import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../Firebase';
import './Login.css'; // Import CSS

const Login = () => {
  const handleLogin = async () => {
    try {
      let user = await signInWithPopup(auth, googleAuthProvider);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign in with Google</h2>
        <h3>in React</h3>

        <button className="google-btn" onClick={handleLogin}>
          <img
            src="https://static.designboom.com/wp-content/uploads/2025/05/google-changes-G-logo-gradient-color-effect-designboom-04.jpg"
            alt="Google" style={{ width: '30px', height: '30px' }}
          />
          <span>Sign in with Google</span>
        </button>

     
      </div>
    </div>
  );
};

export default Login;
