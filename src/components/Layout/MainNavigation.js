import Container from "react-bootstrap/Container";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./MainNavigation.module.css";
import { Link, useNavigate } from "react-router-dom";

const MainNavigation = (props) => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Container className={classes.container}>
        <Navbar.Brand href="#home">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            width="50"
            height="50"
            //className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={classes.nav}>
            {authCtx.isLoggedIn && (
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <Nav.Link style={{ color: "white" }}>Profile</Nav.Link>
              </Link>
            )}

            {!authCtx.isLoggedIn && (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Nav.Link href="#link" style={{ color: "white" }}>
                  login
                </Nav.Link>
              </Link>
            )}
            {authCtx.isLoggedIn && (
              <Nav.Link style={{ color: "white" }} onClick={logoutHandler}>
                logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
