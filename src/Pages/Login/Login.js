import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import auth from "../../firebase.init";
// import { useAuthState } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate()
  // let errorElement;
  // if (error) {
  //   errorElement = (
  //     <div>
  //       <p className="text-danger">Error: {error.message}</p>
  //     </div>
  //   );
  // }
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  // if (user) {
  //   navigate('/donation');
  // }
  return (
    <div style={{ width: "600px", margin: "50px auto" }}>
      <h1>This is User log in page</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {/* {errorElement} */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
