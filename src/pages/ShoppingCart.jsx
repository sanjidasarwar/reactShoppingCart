import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import ShopingCartCard from "../components/shoppingCart/ShoppingCartCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function ShoppingCart() {
    const {cartItem} =useContext(CartContext)
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col>
            <Card>
              <Card.Body className="p-4">
                <Row>
                  <Col lg="7">
                    <Card.Title tag="h5">
                      <a href="#!" className="text-body">
                        <FontAwesomeIcon
                          icon={faLongArrowAltLeft}
                          className="me-2"
                        />{" "}
                        Continue shopping
                      </a>
                    </Card.Title>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price
                            {/* <Icon fas icon="angle-down mt-1" /> */}
                          </a>
                        </p>
                      </div>
                    </div>
                    {
                        cartItem?.map(item=>(
                            <ShopingCartCard key={item.id} item={item} />
                        ))
                    }
                  </Col>

                  <Col lg="5">
                    <Card className="bg-primary text-white rounded-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          {/* <Typography tag="h5" className="mb-0">
                        Card details
                      </Typography> */}
                          <Card.Img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          {/* <Icon fab icon="cc-mastercard fa-2x me-2" /> */}
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          {/* <Icon fab icon="cc-visa fa-2x me-2" /> */}
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          {/* <Icon fab icon="cc-amex fa-2x me-2" /> */}
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          {/* <Icon fab icon="cc-paypal fa-2x me-2" /> */}
                        </a>

                        <form className="mt-4">
                          {/* <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                        placeholder="Cardholder's Name" contrast /> */}

                          {/* <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast /> */}

                          <Row className="mb-4">
                            <Col md="6">
                              {/* <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast /> */}
                            </Col>
                            <Col md="6">
                              {/* <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast /> */}
                            </Col>
                          </Row>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <Button color="info" size="lg">
                          <div className="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ShoppingCart;
