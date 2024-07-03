import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faShoppingCart, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import useFetchData from "../hooks/useFetchData";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const ProductDetail = () => {
  const {productId} = useParams()

  const { data } = useFetchData(`https://fakestoreapi.com/products/${productId}`);

  const {addCart} = useContext(CartContext)

  // const changeImage = (e) => {
  //   const mainImage = document.getElementById('main-image');
  //   mainImage.src = e.target.src;
  // };

  console.log(data);

  return (
    <Container className="mt-5 mb-5">
      <Row className="d-flex justify-content-center">
        <Col md={10}>
          <Card>
            <Row>
              <Col md={6}>
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img id="main-image" src={data?.image} alt="Main" width="250" />
                  </div>
                  {/* <div className="thumbnail text-center">
                    <img onClick={changeImage} src="https://i.imgur.com/Rx7uKd0.jpg" alt="Thumbnail 1" width="70" />
                    <img onClick={changeImage} src="https://i.imgur.com/Dhebu4F.jpg" alt="Thumbnail 2" width="70" />
                  </div> */}
                </div>
              </Col>
              <Col md={6}>
                <div className="product p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Link to="/">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                      </Link>
                        <span className="ml-1">Back</span>
                    </div>
                    <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} className="text-muted" />
                    </Link>
                  </div>
                  <div className="mt-4 mb-3">
                    <span className="text-uppercase text-muted brand">{data?.category}</span>
                    <h5 className="text-uppercase">{data?.title}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price">${data?.price}</span>
                    </div>
                  </div>
                  <p className="about">{data?.description}</p>
                  <div className="sizes mt-3">
                    <h6 className="text-uppercase">Size</h6>
                    <Form.Check inline label="S" name="size" type="radio" value="S" defaultChecked />
                    <Form.Check inline label="M" name="size" type="radio" value="M" />
                    <Form.Check inline label="L" name="size" type="radio" value="L" />
                    <Form.Check inline label="XL" name="size" type="radio" value="XL" />
                    <Form.Check inline label="XXL" name="size" type="radio" value="XXL" />
                  </div>
                  <div className="cart mt-4 align-items-center">
                    <Button variant="danger" className="text-uppercase mr-2 px-4" onClick={()=>addCart(data)}>Add to cart</Button>
                    <FontAwesomeIcon icon={faHeart} className="text-muted" />
                    <FontAwesomeIcon icon={faShareAlt} className="text-muted" />
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
