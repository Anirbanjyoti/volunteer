import React from "react";
import "./Admin.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import VolunteerRegisList from "../VolunteerRegisList/VolunteerRegisList";
import AddEvent from "../AddEvent/AddEvent";


const Admin = () => {
  return (
    <div style={{padding:'0 100px 0 0', margin:'auto'}}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column" style={{background:'#80808054', padding:'50px 0 50px 100px', height:'100%'}}>
              <Nav.Item>
                <Nav.Link eventKey="first" style={{cursor:'pointer'}}>
                  Volunteer Registration List
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" style={{cursor:'pointer'}}>
                  + Add Event
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <VolunteerRegisList />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AddEvent />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Admin;
