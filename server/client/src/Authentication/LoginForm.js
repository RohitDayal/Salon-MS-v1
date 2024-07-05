import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { UserContext } from "../context/UserContext"; // Importing UserContext

export default function LoginForm() {
  const [mail, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo, setUserInfo } = useContext(UserContext); // Using useContext with UserContext
  const navigate = useNavigate(); // Using useNavigate for navigation
  const location = useLocation(); // Using useLocation to get current location

  const from = location.state?.from?.pathname || "/"; // Default to home if no previous location

  useEffect(() => {
    if (userInfo) {
      navigate(from, { replace: true }); // Navigate to previous page or default page
    }
  }, [userInfo, navigate, from]);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ mail, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const data = await response.json();
      setUserInfo(data.user);
      localStorage.setItem("token", data.token);
    } else {
      alert("Wrong credentials or user doesn't exist");
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={login}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
              value={mail}
              onChange={(ev) => setUsername(ev.target.value)}
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <Link to="/forget-password" className="text-primary">
              Forget password?
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
