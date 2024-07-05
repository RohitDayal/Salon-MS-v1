import React, {useContext } from "react";
import NavItem from "./NavItem";
import { UserContext } from "../context/UserContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="nav-bar">
      <NavItem name="saLoon" to="/" />
      <NavItem name="Home" to="/" />
      <NavItem name="About" to="/about" />
      <NavItem name="Services" to="/services" />
      {/* <NavItem name="More" to="/more" /> */}
      <div className="nav-item">
        <Link to="#" className="nav-link">
          More
        </Link>
        <Dropdown/>
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
    </div>
  );
};

export default Navbar;
