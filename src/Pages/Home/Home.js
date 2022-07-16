// import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import useDonates from "../../Hooks/useDonates";
import Aid from "../Aid/Aid";
import "./Home.css";

const Home = () => {
  const [donates] = useDonates();
  // Search functionality
  // const searchAid = e =>{
  //   const search = e.target.value;
  //   console.log(search);
    
  //  }
  return (
    <div>
      <div style={{ width: "620px", margin: "50px auto" }}>
        <h1>I grow by helping people in need</h1>
        <InputGroup
          className="mb-3"
          style={{ width: "350px", margin: "50px auto" }}
        >
          <Form.Control
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            // onChange={searchAid}
          />
          <Button
            style={{ color: "white" }}
            className="btn btn-primary"
            variant="outline-secondary"
            id="button-addon2"
            
          >
            Search
          </Button>
        </InputGroup>
      </div>
      {/* Volunteers */}
      <h1 className="title">TOTAL Aid: {donates.length}</h1>
      <div className="volunteers">
        {donates.map((donate) => (
          <Aid donate={donate}></Aid>
        ))}
      </div>
    </div>
  );
};

export default Home;
