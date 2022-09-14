import logo from './logo.svg';
import './App.css';
import {Routes, Redirect,Route} from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import Layout from './components/Layout/Layout';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import UserProfile from './components/Profile/UserProfile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/profile' element={<UserProfile />} />
    </Routes>
    </Layout>
  );
}

export default App;
