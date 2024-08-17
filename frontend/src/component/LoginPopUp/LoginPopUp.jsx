import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className='login-popup-input'>
          {currState === "Sign up" && <input type="text" placeholder='UserName' required />}
          <input type="text" placeholder='Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">
          {currState === "Sign up" ? "Create account" : "Log in"}
        </button>
        <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>By clicking on Sign Up, you agree to our Terms, Data Policy and Cookies.</p>    
        </div>
        { currState === "Log in"
        ?<p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={() => setCurrState("Log in")}>Log In</span></p>
        }
        </form>
    </div>
  );
}

export default LoginPopUp;
