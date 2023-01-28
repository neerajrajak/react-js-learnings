import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../common/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const placeOrderHandler = () => {
    setShowCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    const orderDetails = {
      userDetails: userData,
      selectedMeals: cartCtx.items,
    };

    try {
      setIsSubmitting(true);
      const result = await fetch(
        "https://react-swiggy-app-default-rtdb.firebaseio.com/orders.json",
        {
          body: JSON.stringify(orderDetails),
          method: "POST",
        }
      );

      const response = await result.json();
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearAllItem();
    } catch (e) {
      console.log("Error in Placing Order.");
    }
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items?.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <CartItem
            key={item.id}
            {...item}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );

  const actiobButtons = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Cancel
      </button>
      {hasItems && (
        <button className={classes.button} onClick={placeOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModelContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <Checkout onCancel={props.onClose} onSubmitOrder={submitOrderHandler} />
      )}
      {!showCheckout && actiobButtons}
    </Fragment>
  );

  const submitInProgress = <p className={classes.submitting}>Your order is getting placed.</p>

  const orderPlaced = <Fragment><p className={classes.submitting}>Order Placed bc.</p></Fragment>

  return <Modal onClose={props.onClose}>
    { (!isSubmitting && !didSubmit) && cartModelContent }
    { isSubmitting && submitInProgress}
    { !isSubmitting && didSubmit && orderPlaced}    
  </Modal>;
};

export default Cart;
