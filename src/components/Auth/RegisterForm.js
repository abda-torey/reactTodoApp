import classes from './loginForm.module.css';
import {Form, InputGroup,Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


const RegisterForm = props => {
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
             <InputGroup className='mt-3 pt-3'>
            <InputGroup.Text>
                <Icon.Key />
            </InputGroup.Text>
                <Form.Control type="password" placeholder='confirm Password'/>
             </InputGroup>

             <Button variant = "primary" className={classes.button}>Register</Button>

            </Form>
            <div class="text-center fs-6">
            <a href="#">Sign in</a>
        </div>

        </div>
    )
}

export default RegisterForm