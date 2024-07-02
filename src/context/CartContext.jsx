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

    const deleteItem = (id)=>{
        const updatedCartList = state.cartList.filter(cart => cart.id !==id)
        const deletedCart = state.cartList.find(cart => cart.id === id)
        console.log(deletedCart);
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:updatedCartList,
                updatedCartNumber:state.cartNumber - deletedCart.quantity
            }
        })
       
      }

    const value = {
        cartList:state.cartList,
        cartNumber: state.cartNumber,
        addCart,
        deleteItem,
      };
  
    console.log(state.cartList);
      

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
