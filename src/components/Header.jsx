import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const {cartNumber} =useContext(CartContext)

  return (
    <Navbar expand="md" className="bg-body-dark mb-3">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="fw-bold" to="/">
                  Home
            </NavLink>
            <NavLink className="fw-bold" to="cart">
              Cart({cartNumber})
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
