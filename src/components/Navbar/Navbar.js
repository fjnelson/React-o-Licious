//rfce
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navtabs() {
    return (
        <Navbar className="nav-tabs-lg" expand="lg" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar">
                <Nav.Link as={Link} to="/" exact={true}>
                  Home1
                </Nav.Link>
                <Nav.Link as={Link} to="/" exact={true}>
                  Home2
                </Nav.Link>
                <Nav.Link as={Link} to="/" exact={true}>
                  Home3
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Navtabs