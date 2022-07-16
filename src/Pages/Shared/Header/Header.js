import React from "react";
import logo from "../../../logos/Group 1329.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar style={{background:'#80808054', color:'white'}} variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="img"></img>
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Registration
            </Nav.Link>
            <Nav.Link as={Link} to="/donation">
              Donation
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/admin">
                  Admin
                </Nav.Link>
                <Nav.Link as={Link} to="/events">
                  Events
                </Nav.Link>

                <Nav.Link onClick={logout}>Log Out</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="login">
                {" "}
                Login{" "}
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
