import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

function ShopingCartCard({ item }) {
  const { id, image, title, productTotal, category, quantity } = item;

  let {setCartItem, deleteItem} =useContext(CartContext)

//   const [errors, setErrors] =useState({})
// console.log(errors);

  // const handleDeleteItem = (id)=>{
  //   setCartItem(prevItems => {
  //     return prevItems.filter(prevItem => prevItem.id !== id)
  //   })
  // }

  const handleInputChange=(e, id)=>{
    const inputValue=e.target.value==='' ? 0 : parseInt(e.target.value)
    setCartItem(prevItems =>{
      return prevItems.map(prevItem =>
        prevItem.id===id ? {...prevItem, quantity:inputValue} : prevItem
      )
    })

    // if (inputValue === '' || parseInt(inputValue) === 0) {
    //   setErrors(prevErrors => ({
    //     ...prevErrors,
    //     [id]: 'Enter a valid input'
    //   }));
    // } else {
    //   setErrors(prevErrors => {
    //     const newErrors = { ...prevErrors };
    //     console.log("new error"+newErrors[id]);
    //     delete newErrors[id];
    //     return newErrors;
    //   });
    // }
  }


const handleIncrement=(id)=>{
  setCartItem(prevItems =>{
    return prevItems.map(prevItem =>
      prevItem.id===id ? {...prevItem, quantity:prevItem.quantity+1} : prevItem
    )
  })
}

const handleDecrement=(id)=>{
  setCartItem(prevItems =>{
    return prevItems.map(prevItem =>
      prevItem.id===id && prevItem.quantity > 1 ? {...prevItem, quantity:prevItem.quantity-1} : prevItem
    )
  })
}

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
