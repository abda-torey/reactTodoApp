import React from "react"
import { useState } from "react";

export const AuthContext = React.createContext({
    token : '',
    isLoggedIn: false,
    login : (token) => {},
    logout : () => {}
});


export const AuthContextProvider = (props) => {
const [token,setToken] = useState(null);

const userIsLoggedIn = !!token;
const logoutHandler = () =>{
    setToken(null);
    window.localStorage.removeItem('token');
}
const loginHandler = (token) => {
    setToken(token);
    window.localStorage.setItem('token',token);
}
const contextValue = {
    token: token,
    isLoggedIn : userIsLoggedIn,
    login : loginHandler,
    logout : logoutHandler
}

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;