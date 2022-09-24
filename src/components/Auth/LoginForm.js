import { useRef,useContext } from 'react';
import AuthContext from '../../store/auth-context';
import {Link,useNavigate,useLocation} from 'react-router-dom'
import classes from './loginForm.module.css';
import {Form, InputGroup,Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


const LoginForm = props => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const authCtx = useContext(AuthContext);
    let Navigate = useNavigate();
    const Location = useLocation();

   

    const submitHandler = (event) => {
        event.preventDefault();

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB-xdLfZ_bpt7IhGtk7s5f4URlZvoijVJ4',{
            method: 'POST',
            body : JSON.stringify({
                email : emailRef.current.value,
                password : passwordRef.current.value,
                returnSecureToken : true
            }),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res => {
            if(res.ok){
                return res.json();
            } else {
                return res.json(data => {
                    console.log(data)
                })
            }
        }).then(data => {
            console.log(data);
            const expiresTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
            
            authCtx.login(data.idToken,expiresTime.toISOString());
            Navigate('/profile',{replace:true});

        });

    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.logo}>
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
       
            </div>
            <div className='text-center mt-4' >
                My ToDo App
             
            </div>
            <Form className='p-3 mt-3' onSubmit={submitHandler}>
            <InputGroup>
            <InputGroup.Text>
                <Icon.Person />
            </InputGroup.Text>
                <Form.Control  type="email" name="email" id="email" placeholder="Email" ref={emailRef}/>
            </InputGroup>
            <InputGroup className='mt-3 pt-3'>
            <InputGroup.Text>
                <Icon.Key />
            </InputGroup.Text>
                <Form.Control type="password" placeholder='password' ref={passwordRef}/>
             </InputGroup>

             <Button variant = "primary" className={classes.button} onClick={submitHandler}>Login</Button>

            </Form>
            <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#"><Link to="/register">Sign up</Link></a>
        </div>

        </div>
    )
}

export default LoginForm