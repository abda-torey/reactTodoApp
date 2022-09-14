import classes from './ProfileForm.module.css';
import { useRef,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';


const ProfileForm = () => {
  const passwordRef = useRef();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const submitHandler = event => {
    event.preventDefault();
    const enteredNewPassword = passwordRef.current.value;

    
  }
  return (
    <form className={classes.form} onSubmit = {submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
