import { useContext } from "react";
import { useNavigate } from "react-router";
import { Outlet,Navigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
const AuthGuard = ({children}) => {

    const authCtx = useContext(AuthContext);
    const Navigate = useNavigate();

    return (
        authCtx.isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )

}

export default AuthGuard;