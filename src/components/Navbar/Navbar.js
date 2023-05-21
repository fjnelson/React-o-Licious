//rfce
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navtabs() {
  return (
    <Navbar className="nav-tabs-lg navbar" expand="lg" variant="dark">
      <Container className="navbar-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-menu">
            <Nav.Link as={Link} to="/" exact={true} className="nav-item">
              <span className="nav-links">Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/" exact={true} className="nav-item">
              <span className="nav-links">Locations</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/" exact={true} className="nav-item">
              <span className="nav-links">About</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navtabs;