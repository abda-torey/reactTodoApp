import logo from "./logo.svg";
import "./App.css";
import { Routes, Redirect, Route,Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import UserProfile from "./components/Profile/UserProfile";
import AuthGuard from "./components/Auth/AuthGuard";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        {!authCtx.isLoggedIn && <Route path="/login" element={<LoginForm  /> } />}
        {authCtx.isLoggedIn && <>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Navigate to = "/profile" />} />
        
        </>}
   
      
      <Route path="/"  element={<LoginForm /> } exact/>
      <Route path="*"  element={<Navigate to="/login"/>} />
      </Routes>
    </Layout>
  );
}

export default App;
