import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let updatedItems;
    const existingIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[existingIndex];
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  if(action.type === 'REMOVE_FROM_CART'){
    const existingIndex = state.items.findIndex((item) => item.id === action.id);
    debugger;
    const existingItem = state.items[existingIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id);
    }
    else{
        const updatedItem = {...existingItem, amount: existingItem.amount - 1}
        updatedItems = [...state.items];
        updatedItems[existingIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_TO_CART",
      item,
    });
  };

  const removeFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_FROM_CART",
      id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
