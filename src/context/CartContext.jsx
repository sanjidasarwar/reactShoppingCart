import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  cartNumber: 0,
  subtotal: 0,
  total:0
};

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const calculateCartNumber = (cartList) => {
    return cartList.reduce(
      (totalCartNumber, item) => totalCartNumber + item.quantity,
      0
    );
  };

  const updateCartNumber = (cartList) => {
    const updatedCartNumber = calculateCartNumber(cartList);
    const updateTotalValue =calculateSubtotalValue(cartList)

    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        cartList: cartList,
        cartNumber: updatedCartNumber,
        total:updateTotalValue
      },
    });
  };

  const calculateProductTotal=(item)=>{
    return  item.quantity * item.price;
  }

  const calculateSubtotalValue = (cartList) => {
    return cartList.reduce((total, item) => total + item.productTotal, 0);
  };

  const updateCartList =(cartList, id, updateFun) =>{
      return cartList.map(cart =>(
        cart.id===id ? updateFun(cart) : cart
      ))
  }

  const addCart = (product) => {
    let updatedCartList;
    const existingProduct = state.cartList.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      updatedCartList = updateCartList(state.cartList, product.id, (item)=>({
          ...item,
          quantity: item.quantity + 1,
          productTotal: calculateProductTotal({...item, quantity: item.quantity + 1}),
      }) )
    } else {
      updatedCartList = state.cartList.concat({
        ...product,
        quantity: 1,
        productTotal: product.price,
      });
    }

    const updateSubtotalValue =calculateSubtotalValue(updatedCartList)

    console.log(updateSubtotalValue)
    
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
        subtotal:updateSubtotalValue
      },
    });
  };

  const deleteItem = (id) => {
    const updatedCartList = state.cartList.filter((cart) => cart.id !== id);
    const updatedCartNumber=calculateCartNumber(updatedCartList)

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
        updatedCartNumber: updatedCartNumber,
      },
    });
  };

  const handleInputChange = (e, id) => {
    const inputValue = e.target.value === "" ? 0 : parseInt(e.target.value);
    const updatedCartList = updateCartList(state.cartList, id, (item)=>({
      ...item,
      quantity: inputValue,
      productTotal: calculateProductTotal({...item, quantity: inputValue}),
  }) )

    updateCartNumber(updatedCartList);
  };

  const handleIncrement = (id) => {
    const updatedCartList = updateCartList(state.cartList, id, (item)=>({
      ...item,
      quantity: item.quantity + 1,
      productTotal: calculateProductTotal({...item, quantity: item.quantity + 1}),
  }) )

    updateCartNumber(updatedCartList);
  };
  const handleDecrement = (id) => {
    const updatedCartList = updateCartList(state.cartList, id, (item)=>({
      ...item,
      quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
      productTotal: calculateProductTotal({...item, quantity: item.quantity + 1}),
  }) )

    updateCartNumber(updatedCartList);
  };

  console.log(state.cartList);
  const value = {
    cartList: state.cartList,
    cartNumber: state.cartNumber,
    subtotal:state.subtotal,
    total:state.total,
    addCart,
    deleteItem,
    handleInputChange,
    handleIncrement,
    handleDecrement,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
