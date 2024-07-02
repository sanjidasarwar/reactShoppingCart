import {createContext, useReducer} from 'react';
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  cartNumber: 0,
  total: 0,
};


export const CartContext =createContext(null)


export const CartProvider =({children})=>{
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addCart = () => {
      dispatch({
        type: "ADD_TO_CART"
      });
    }

    const value = {
        cartNumber: state.cartNumber,
        addCart,
      };
  
    console.log(state.cartNumber);
      

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
