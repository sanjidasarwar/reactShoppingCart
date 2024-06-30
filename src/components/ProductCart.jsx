import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faEye } from '@fortawesome/free-regular-svg-icons';
import lipstickImg from '../assets/images/lipstick-1.jpg'

function ProductCart() {
  return (
    <Card style={{ width: "18rem" }} className="product-card">
      <div className="cart-top position-relative">
        <Card.Img variant="top" src={lipstickImg} />
        <h5 className="position-absolute top-0 start-100 translate-middle">
          <Badge bg="success">New</Badge>
          <Badge bg="danger">-10%</Badge>
        </h5>
        <div className="product-card-buttons position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center">
        <Button variant="outline-info" className="me-2">
             <FontAwesomeIcon icon={faEye} />
        </Button>
        <Button variant="outline-info">
            <FontAwesomeIcon icon={faCartShopping} />
        </Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            <span>$123</span><span className="text-overline">$123</span>
        </Card.Text>
        <Card.Text>
             <FontAwesomeIcon icon={fasStar} className="text-warning" />
             <FontAwesomeIcon icon={fasStar} className="text-warning" />
             <FontAwesomeIcon icon={fasStar} className="text-warning" />
             <FontAwesomeIcon icon={fasStar} className="text-warning" />
             <FontAwesomeIcon icon={farStar} className="text-warning" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCart;
