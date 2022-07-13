import React from "react";
import logo from "../../../logos/Group 1329.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/'><img src={logo} alt="img"></img></Navbar.Brand>
          <Nav className="">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/register'>Registration</Nav.Link>
            <Nav.Link as={Link} to='/admin-login'>Admin</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
