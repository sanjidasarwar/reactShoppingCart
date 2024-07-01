import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Card from "react-bootstrap/Card";

function ShopingCartCard({item}) {
  const {id, image, title, price, category} =item
    return ( 
        <Card className="mb-3">
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={image} className="rounded-3" style={{ width: "65px" }}
                            alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                          <Card.Title tag="h5">
                            {title}
                          </Card.Title>
                          <Card.Text className="small mb-0">{category}</Card.Text>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                          <Card.Text tag="h5" className="fw-normal mb-0">
                            2
                          </Card.Text>
                        </div>
                        <div style={{ width: "80px" }}>
                          <Card.Title tag="h5" className="mb-0">
                            {price}
                          </Card.Title>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
     );
}

export default ShopingCartCard;