import React, { createContext, useState } from 'react';
import isAuthTokenAvailable from "../../helpers/isLoggedIn";
export const AuthContext = createContext({
  isAuth: false,
  username: undefined 
});

export const ContextWrapper = props => {
  const [isAuth, setAuth] = useState(isAuthTokenAvailable());
  const [username, setUsername] = useState(localStorage.getItem("username") || undefined)
  
  return (
    <AuthContext.Provider value={{isAuth, setAuth, username, setUsername}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default ContextWrapper;