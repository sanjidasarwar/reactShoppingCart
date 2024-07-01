import {createContext, useState} from 'react';

export const CartContext =createContext(null)


export const CartProvider =({children})=>{
    let [cartNumber, setCartNumber] =useState(0)
    let [cartItem, setCartItem] =useState([])
    const value = {
        cartNumber,
        setCartNumber,
        cartItem,
        setCartItem
      };
      

    console.log(cartItem);
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
