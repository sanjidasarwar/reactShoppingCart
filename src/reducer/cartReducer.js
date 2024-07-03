export const cartReducer = (state, action) => {
  const { type, payload } = action;
  const SHIPPING_COST = 20.00;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: payload.products,
        cartNumber: state.cartNumber + 1,
        subtotal:payload.subtotal,
        total:payload.subtotal- SHIPPING_COST
      };

    case "REMOVE_FROM_CART":
      return{
        ...state,
        cartList:payload.products,
        cartNumber:payload.updatedCartNumber
      };

    case "UPDATE_QUANTITY":
      return{
        ...state,
        cartList:payload.cartList,
        cartNumber:payload.cartNumber,
        subtotal:payload.total,
        total:payload.subtotal- SHIPPING_COST
      };
    
    default:
      throw new Error("No case found");
  }
};
