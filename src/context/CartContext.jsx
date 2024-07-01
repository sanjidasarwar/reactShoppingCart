import {createContext, useState} from 'react';

export const CartContext =createContext(null)


export const CartProvider =({children})=>{
    let [cartNumber, setCartNumber] =useState(0)
    const value = {
        cartNumber,
        setCartNumber,
      };
      
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
