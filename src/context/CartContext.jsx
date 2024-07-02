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

    const addCart = (product) => {
      let updatedCartList;  
      const existingProduct = state.cartList.find(item => item.id===product.id )
      if(existingProduct){
        updatedCartList=state.cartList.map(item =>(
            item.id===product.id? {...item, quantity: item.quantity+1, productTotal:(item.quantity+1)* item.price } : item
        ) )
      }else{
        updatedCartList= state.cartList.concat({
            ...product,
            quantity: 1,
            productTotal: product.price
        })
      }
      dispatch({
        type: "ADD_TO_CART",
        payload:{
            products:updatedCartList
        }
      });
    }

    const value = {
        cartList:state.cartList,
        cartNumber: state.cartNumber,
        addCart,
      };
  
    console.log(state.cartList);
      

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
