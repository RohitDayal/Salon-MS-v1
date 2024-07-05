import React, { useState } from "react";
import LoginForm from "./LoginForm";
import GoogleAuth from "./GoogleAuth";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);

 const signup = (ev) => {
   ev.preventDefault();

   fetch("/users/signup", {
     method: "POST",
     body: JSON.stringify({ name, mail, password }),
     headers: { "Content-Type": "application/json" },
   })
     .then((response) => {
       if (response.ok) {
         return response.json().then((data) => {
           setName("");
           setPassword("");
           setMail("");
           alert("Registration successful");
         });
       } else {
         return response.json().then((data) => {
           console.error("Signup Error:", data.error);
           alert(`Registration failed: ${data.error}`);
         });
       }
     })
     .catch((error) => {
       console.error("Signup Error:", error.message);
       alert("Registration failed: Internal server error.");
     });
 };


  
  const handleToggleMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };
  return (
    <>
      {isLoginMode ? (
        <LoginForm />
      ) : (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign up</h3>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter full name"
                  required
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  required
                  value={mail}
                  onChange={(ev) => setMail(ev.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3 Auth-btn">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={signup}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <button onClick={handleToggleMode} className="toggle-btn">
        {isLoginMode ? "Sign up" : "Sign in"}
      </button>
      <div className="login-with-google">
        <GoogleAuth />
      </div>
    </>
  );
};

export default SignupForm;
