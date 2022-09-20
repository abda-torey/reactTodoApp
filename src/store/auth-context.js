import React from "react";
import { useState, useEffect,useCallback } from "react";
import {Navigate} from 'react-router-dom';


let logoutTimer;
export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expiresTime) => {
    const currentTime = new Date().getTime();
    const expiresIn = new Date(expiresTime).getTime();
    const remainingTime = expiresIn - currentTime;

    return remainingTime;
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expiresIn");
  const remaintime = calculateRemainingTime(storedExpirationDate);

  if(remaintime <= 6000){
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  } 

  return {
    token: storedToken,
    duration : remaintime
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let intialToken;
  if (tokenData) {
    intialToken = tokenData.token;
  }

  const [token, setToken] = useState(intialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback((() => {
    setToken(null);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("expiresIn");
    if(logoutTimer){
        clearTimeout(logoutTimer);
    }
  }),[]);
  const loginHandler = (token,expiresTime) => {
    setToken(token);
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("expiresIn", expiresTime);
    const remainingTime = calculateRemainingTime(expiresTime);
    

    logoutTimer = setTimeout(logoutHandler,remainingTime);
  };
  useEffect(() => {
    if(tokenData){
        console.log(tokenData.duration);
        logoutTimer = setTimeout(logoutHandler,tokenData.duration);

    } else {
      <Navigate to ="/login" />
    }
},[tokenData,logoutHandler,Navigate]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
