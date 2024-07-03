import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as fasStar,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar, faEye } from "@fortawesome/free-regular-svg-icons";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function ProductCart({ item }) {
  const {id, title, category, image, price, rating } = item;
  let { addCart } = useContext(CartContext);

  return (
    <Card className="product-card">
      <div className="cart-top position-relative">
        <Card.Img variant="top" src={image} className="card-img" />
        <div className="product-card-buttons position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <Link to={`product/${id}`}>
            <Button variant="outline-info" className="me-2">
              <FontAwesomeIcon icon={faEye} />
            </Button>
          </Link>
          <Button
            variant="outline-info"
            onClick={() => {
              addCart(item);
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{category}</Card.Subtitle>
        <Card.Subtitle className="my-2">
          <span>${price}</span>
          <span className="text-overline"></span>
        </Card.Subtitle>
        <Card.Text>
          {[...Array(Math.floor(rating.rate))].map((_, i) => (
            <FontAwesomeIcon icon={fasStar} className="text-warning" key={i} />
          ))}
          {[...Array(5 - Math.floor(rating.rate))].map((_, i) => (
            <FontAwesomeIcon icon={farStar} className="text-warning" key={i} />
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCart;
