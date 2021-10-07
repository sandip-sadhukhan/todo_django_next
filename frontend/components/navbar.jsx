import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar bg="primary" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Todo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
