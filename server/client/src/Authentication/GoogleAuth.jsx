import React, { useState, useEffect, useContext} from "react";
import {GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; 

const clientId = "730829696932-uoin4k08s3j0is8rhvqa9a3n0ovh25s9.apps.googleusercontent.com";

const GoogleAuth = () => {
  const [redirect, setRedirect] = useState(false);

  const { userInfo, setUserInfo } = useContext(UserContext); // Using useContext with UserContext

  const handleLoginSuccess = (response) => {
    const userObject = jwtDecode(response.credential);
    console.log("User:", userObject);
     setUserInfo(userObject);
     setRedirect(true);
  };

  const handleLoginFailure = (response) => {
    console.error("Login failed:", response);
  };
  if (redirect) {
    return <Navigate to="/about" />;
  }
  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default GoogleAuth;
