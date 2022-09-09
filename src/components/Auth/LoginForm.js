import classes from './loginForm.module.css';
import {Form, InputGroup,Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


const LoginForm = props => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.logo}>
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" />
       
            </div>
            <div className='text-center mt-4' >
                My ToDo App
             
            </div>
            <Form className='p-3 mt-3'>
            <InputGroup>
            <InputGroup.Text>
                <Icon.Person />
            </InputGroup.Text>
                <Form.Control  type="text" name="userName" id="userName" placeholder="Username" />
            </InputGroup>
            <InputGroup className='mt-3 pt-3'>
            <InputGroup.Text>
                <Icon.Key />
            </InputGroup.Text>
                <Form.Control type="password" placeholder='password'/>
             </InputGroup>

             <Button variant = "primary" className={classes.button}>Login</Button>

            </Form>
            <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>

        </div>
    )
}

export default LoginForm