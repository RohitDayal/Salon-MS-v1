
//with persistent user data
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {

  
  const [userInfo, setUserInfo] = useState(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  });

  const logout = () => {
    // Clear user authentication information from storage
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    // Reset userInfo state
    setUserInfo(null);
  };

  useEffect(() => {
    // Update local storage when userInfo changes
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      localStorage.removeItem("userInfo");
    }
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

