import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Header() {
  const {cartNumber} =useContext(CartContext)

  return (
    <Navbar expand="md" className="bg-body-dark mb-3">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fw-bold" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#link">
              Cart({cartNumber})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
