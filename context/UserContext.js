"use client";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // New state to store fetched user data

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fetch user data based on the user.id
  // const fetchUserData = async () => {
  //   if (user && user.id) {
  //     try {
  //       const response = await fetch(`/api/users/${user.id}`);
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log("User Data:", data.firstname); // Or any other property you need
  //         // setUserData(data.firstname);
  //       } else {
  //         console.error("Failed to fetch user data");
  //       }
  //     } catch (err) {
  //       console.error("An error occurred while fetching user data", err);
  //     }
  //   }
  // };

  // Fetch user data when user is set and has a valid id
  // useEffect(() => {
  //   if (user && user.id) {
  //     fetchUserData();
  //   }
  // }, [user]);

  // Update localStorage whenever the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
