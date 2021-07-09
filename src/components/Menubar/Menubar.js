import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div>
      <Navbar
        className="d-flex justify-content-between menu-bar"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand style={{ color: "#79B530" }} as={Link} to="/">
          <strong>Student & Subject</strong>
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto align-items-end">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="ml-4" as={Link} to="/addSubject">
                Add Subject
              </Nav.Link>
              <Nav.Link className="ml-4" as={Link} to="/addStudent">
                Add Student
              </Nav.Link>
              <Nav.Link className="ml-4" as={Link} to="/studentList">
                Student List
              </Nav.Link>
              <Nav.Link className="ml-4" as={Link} to="/filterBySubject">
                Filter By Subject
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Menubar;
