import React from 'react'
import SignupForm from '../Authentication/SignupForm';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="login-board">
      <SignupForm/>
      <Link to="/privacy-policy">Privacy policy</Link>
    </div>
  );
}

export default Auth