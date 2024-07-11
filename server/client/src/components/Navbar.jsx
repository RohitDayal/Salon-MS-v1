import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <>
      <nav className="">
        <div className="nav-item">
          <Link to="/" className="fs-5 fw-light nav-link">
            saLoon
          </Link>
        </div>

        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <label id="overlay-for-nav" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>

          {/* Replacing <a> tags with <Link> components */}
          <div className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </div>
          <div className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </div>
          <div className="left-last-item nav-item">
            <Link className="nav-link">More</Link>
            <Dropdown/>
          </div>
          <SearchBar/>
          <div className="nav-item">
            {userInfo && (userInfo.UserName || userInfo.given_name) ? (
              <Link to="/profile" className="nav-link">{userInfo.Name || userInfo.given_name}</Link>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}
          </div>
        </div>
      </nav>
      {/* 
      <div className="nav-bar">
        <NavItem name="saLoon" to="/" />
        <NavItem name="Home" to="/" />
        <NavItem name="About" to="/about" />
        <NavItem name="Services" to="/services" />
        <div className="nav-item">
          <Link to="#" className="nav-link">
            More
          </Link>
          <Dropdown />
        </div>

        <SearchBar />
        {userInfo && (userInfo.UserName || userInfo.given_name) ? (
          <NavItem
            name={userInfo.UserName || userInfo.given_name}
            to="/profile"
          />
        ) : (
          <NavItem name="Login" to="/login" />
        )}
      </div> */}
    </>
  );
};

export default Navbar;
