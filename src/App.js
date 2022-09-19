import logo from './logo.svg';
import './App.css';
import {Routes, Redirect,Route} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import AuthPage from './pages/AuthPage';
import Layout from './components/Layout/Layout';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import UserProfile from './components/Profile/UserProfile';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<LoginForm />} />

        
      
         <Route path='/profile' element={<UserProfile />} />
       
        
       <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm />} />
        
    </Routes>
    </Layout>
  );
}

export default App;
