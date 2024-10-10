import React, { createContext, useContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

function AuthContext({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const alldata = { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn };
  return (
    <>
      <GlobalContext.Provider value={alldata}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
export default AuthContext;
