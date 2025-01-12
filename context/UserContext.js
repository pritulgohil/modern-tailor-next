"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  const [logoutState, setLogoutState] = useState(true);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userData,
        setUserData,
        loginStatus,
        setLoginStatus,
        logoutState,
        setLogoutState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
