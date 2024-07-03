import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcMastercard,
  faCcVisa,
  faCcAmex,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import ShopingCartCard from "../components/shoppingCart/ShoppingCartCard";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { cartList, subtotal, total } = useContext(CartContext);
  const variant = cartList.length > 0 ? "success" : "secondary";

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
                      <Link to="/" className="text-body">
                        <FontAwesomeIcon
                          icon={faLongArrowAltLeft}
                          className="me-2"
                        />
                      </Link>
                      Continue shopping
                    </Card.Title>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">
                          You have {cartList.length}{" "}
                          {cartList.length === 1 ? "item" : "items"} in your
                          cart
                        </p>
                      </div>
                    </div>
                    {cartList?.map((item) => (
                      <ShopingCartCard key={item.id} item={item} />
                    ))}
                  </Col>

                  <Col lg="5">
                    <Card className="bg-primary text-white rounded-3">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <Card.Title className="mb-0">
                            Card details
                          </Card.Title>
                          <Card.Img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="card-avatar"
                            alt="Avatar"
                          />
                        </div>

                        <p className="small">Card type</p>
                        <div>
                          <a href="#!" className="text-white">
                            <FontAwesomeIcon
                              icon={faCcMastercard}
                              size="2x"
                              className="me-2"
                            />
                          </a>
                          <a href="#!" className="text-white">
                            <FontAwesomeIcon
                              icon={faCcVisa}
                              size="2x"
                              className="me-2"
                            />
                          </a>
                          <a href="#!" className="text-white">
                            <FontAwesomeIcon
                              icon={faCcAmex}
                              size="2x"
                              className="me-2"
                            />
                          </a>
                          <a href="#!" className="text-white">
                            <FontAwesomeIcon
                              icon={faCcPaypal}
                              size="2x"
                              className="me-2"
                            />
                          </a>
                        </div>

                        <Form className="mt-4">
                          <Form.Group className="mb-4">
                            <Form.Label>Cardholder's Name</Form.Label>
                            <Form.Control
                              type="text"
                              size="lg"
                              placeholder="Cardholder's Name"
                            />
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                              type="text"
                              size="lg"
                              minLength="19"
                              maxLength="19"
                              placeholder="1234 5678 9012 3457"
                            />
                          </Form.Group>

                          <Row className="mb-4">
                            <Col md="6">
                              <Form.Group className="mb-4">
                                <Form.Label>Expiration</Form.Label>
                                <Form.Control
                                  type="text"
                                  size="lg"
                                  minLength="7"
                                  maxLength="7"
                                  placeholder="MM/YYYY"
                                />
                              </Form.Group>
                            </Col>
                            <Col md="6">
                              <Form.Group className="mb-4">
                                <Form.Label>CVV</Form.Label>
                                <Form.Control
                                  type="text"
                                  size="lg"
                                  minLength="3"
                                  maxLength="3"
                                  placeholder="&#9679;&#9679;&#9679;"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">${subtotal}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total (Incl. taxes)</p>
                          <p className="mb-2">${total.toFixed(2)}</p>
                        </div>

                        <Button
                          disabled={variant === "secondary"}
                          variant={variant}
                          size="lg"
                          className="checkout-button d-flex justify-content-between w-100"
                        >
                          <span>${total.toFixed(2)}</span>
                          <span>
                            Checkout
                            <FontAwesomeIcon
                              icon={faLongArrowAltRight}
                              className="ms-2"
                            />
                          </span>
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
