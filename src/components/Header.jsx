import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const { cartNumber } = useContext(CartContext);

  return (
    <Navbar expand="md" className="bg-custom bg-primary mb-3"> 
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-white">
            <FontAwesomeIcon icon={faShopify} className="me-2" /> Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header-nav">
            <NavLink
              to="/"
              className="nav-link text-white me-2"
            >
              <FontAwesomeIcon icon={faHome} className="me-1" /> Home
            </NavLink>
            <NavLink
              to="/cart"
              className="nav-link text-white"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Cart (
              {cartNumber})
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
