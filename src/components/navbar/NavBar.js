import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">La 21 Maxikiosco</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Cigarrillos</Nav.Link>
              <Nav.Link href="#link">Golosinas</Nav.Link>
              <Nav.Link href="#link">Snacks</Nav.Link>
              <Nav.Link href="#link">Bebidas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
