import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { userInfo, logout } = useContext(UserContext);
  const handleLogout = () => {
    logout();
  };
  // console.log(userInfo.name);
  if (!userInfo) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="profile-section">
      <h1>Profile</h1>

      {userInfo ? (
        <div>
          <img src={userInfo.picture} alt={userInfo.name} />
          <p>Name: {userInfo.Name || userInfo.name}</p>
          <p>UserName: {userInfo.UserName || userInfo.given_name}</p>
          <p>Email: {userInfo.Email || userInfo.email}</p>
          {/* Add other user information as needed */}
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
