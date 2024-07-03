import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

function ShopingCartCard({ item }) {
  const { id, image, title, productTotal, category, quantity } = item;

  let {deleteItem, handleInputChange, handleIncrement, handleDecrement} =useContext(CartContext)


  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center" style={{width:"65%"}}>
            <div>
              <img
                src={image}
                className="rounded-3"
                style={{ width: "65px" }}
                alt="Shopping item"
              />
            </div>
            <div className="ms-3">
              <Card.Title tag="h5">{title}</Card.Title>
              <Card.Text className="small mb-0">{category}</Card.Text>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center" style={{width:"35%"}}>
            <div style={{width:"120px"}}>
              <InputGroup className="mb-3">
                <InputGroup.Text onClick={()=>handleDecrement(id)} >-</InputGroup.Text>
                <Form.Control
                  value={quantity}
                  onChange={(e)=>handleInputChange(e, id)}
                />
                <InputGroup.Text onClick={()=>handleIncrement(id)}>+</InputGroup.Text>
              </InputGroup>
              {/* {errors[item.id] && <p style={{ color: 'red' }}>{errors[item.id]}</p>} */}
            </div>
            <div style={{ width: "80px" }}>
              <Card.Title tag="h5" className="mb-3 ms-2">
                {productTotal}
              </Card.Title>
            </div>
            <a href="#!" className="mb-3">
              <FontAwesomeIcon icon={faTrashAlt} onClick={()=>deleteItem(id)}/>
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ShopingCartCard;
