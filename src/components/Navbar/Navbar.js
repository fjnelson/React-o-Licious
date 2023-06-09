//rfce
import React from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navtabs() {
  return (
    <Navbar className="navbar-custom" expand="lg" variant="dark" collapseOnSelect>
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <span className="brand-text">Dream Escapes, Inc.</span>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-menu">
            <Nav.Link as={Link} to="/" exact className="nav-item">
              <span className="nav-links">Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/locations" className="nav-item">
              <span className="nav-links">Destinations</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">
              <span className="nav-links">About</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Navtabs;