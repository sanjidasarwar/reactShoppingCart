import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="py-2">
        <Row className="align-items-center">
          <Col md="auto" className="text-center text-md-left">
            <span className="text-sm text-white">
              © 2023{" "}
              <a href="/" className="text-white text-decoration-none">
                Sanjida
              </a>
              . All Rights Reserved.
            </span>
          </Col>
          <Col md="auto" className="ms-md-auto">
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Link href="#" className="text-white nav-item">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-white nav-item">
                Privacy Policy
              </Nav.Link>
              <Nav.Link href="#" className="text-white nav-item">
                Licensing
              </Nav.Link>
              <Nav.Link href="#" className="text-white nav-item">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
