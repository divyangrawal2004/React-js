import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, googleAuthProvider } from '../Firebase';

const Login = () => {

    const handleLogin = async() => {
        try{
            let user = await signInWithPopup(auth,googleAuthProvider)
            console.log(user);
        }catch(err) {
            console.log(err);
            return false           
        }

    }

  return (
    <div align="center">
        <h2>Google Authentication</h2>
        <button onClick={ () => handleLogin()}>Google</button>

      
    </div>
  )
}

export default Login
