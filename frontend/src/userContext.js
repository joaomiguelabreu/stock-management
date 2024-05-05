import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("userInfo"));

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    setUser(storedUserInfo);
  }, []); // Run once on component mount to sync with localStorage

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
