export const cartReducer = (state, action) =>{
    const {type, payload} = action

    switch(type){
        case "ADD_TO_CART" :
            return {...state, cartNumber: state.cartNumber+1}
        case "REMOVE_FROM_CART" :
            return
        case "UPDATE_QUANTITY" :
            return
        case "UPDATE_TOTAL" :
            return
        case "SET_ERROR" :
            return
        case "CLEAR_ERROR" :
            return
        
    }

}