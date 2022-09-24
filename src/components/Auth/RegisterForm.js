import { useRef, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom';
import AuthContext from "../../store/auth-context";
import classes from "./RegisterForm.module.css";
import { Form, Spinner,InputGroup, Button, Alert } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const RegisterForm = (props) => {
  const passRef = useRef();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const [isvalidPassword, setIsValidPassword] = useState(true);
  const [emailExists,setEmailExists] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode : 'onChange'});

  const registerOptions = {
    email: {
         required: "Email Is Required",
         pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email address",
          },
         },
    password: {
      required: "Password Is Required",
      minLength: {
        value: 8,
        message: "Password Must Have atleast 8 characters",
      },
    },
  };

  const submitHandler = (data) => {
    setEmailExists(false);
    setIsLoading(true)
    

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-xdLfZ_bpt7IhGtk7s5f4URlZvoijVJ4',{

    method: 'POST',
    body: JSON.stringify({
        email : data.email,
        password: data.password,
        returnSecureToken: true
    }),
    headers: {
        'Content-Type': 'application/json'
    }
    }
    
    ).then(res => {
        setIsLoading(false);
       
        if(res.ok){
            return res.json();

        }else {
            return res.json().then(data => {
              let errorMessage;
              if(data.error.message === 'EMAIL_EXISTS'){
                errorMessage = 'The User Already Exists'

              }
                
                setEmailExists(true);
                throw new Error(errorMessage);
            })
        }
    }).then((data) => {
      console.log(data.email);
      authCtx.login(data.idToken);
      navigate('/profile');
    }).catch((err) => {
      // alert(err.message)
    })
    
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          alt=""
        />
      </div>
      <div className="text-center mt-4">My ToDo App</div>
      <Form className="p-3 mt-3" onSubmit={handleSubmit(submitHandler)}>
        <InputGroup>
          <InputGroup.Text>
            <Icon.Person />
          </InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            {...register("email", registerOptions.email)}
          />
        </InputGroup>
        <small className="text-danger">
            {errors?.email && errors.email.message}
        </small>
        {emailExists && <small className="text-danger text-center">user already exists</small>}

        <InputGroup className="mt-3 pt-3">
          <InputGroup.Text>
            <Icon.Key />
          </InputGroup.Text>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            {...register("password", registerOptions.password)}
          />
        </InputGroup>
        <small className="text-danger">
            {errors?.password && errors.password.message}
        </small>

        
        {!isLoading && <Button variant="primary" className={classes.button} type="submit">
          Register
        </Button>
         }
         {isLoading && <Button variant="primary" disabled className={classes.alertButton}>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>}
        
      </Form>
      <div className="text-center fs-6">
        <a href="#"><Link to="/login">Sign in</Link></a>
      </div>
    </div>
  );
};

export default RegisterForm;
