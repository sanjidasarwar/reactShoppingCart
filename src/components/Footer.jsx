import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="py-4">
        <Row className="align-items-center">
          <Col md="auto" className="text-center text-md-left">
            <span className="text-sm text-gray-500">
              © 2023{" "}
              <a href="/" className="text-white">
                Sanjida
              </a>
              . All Rights Reserved.
            </span>
          </Col>
          <Col md="auto" className="ml-md-auto">
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Link href="#" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Privacy Policy
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Licensing
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
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
