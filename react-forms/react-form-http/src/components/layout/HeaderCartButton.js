import classes from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [highlightButton, setHighLightButton] = useState(false);

  const { items } = cartCtx;

  const numberOfCartItem = items.reduce(
    (CurNumber, item) => CurNumber + item.amount,
    0
  );

  let btnClasses = `${classes.button} ${highlightButton ? classes.bump : ""}`;

  useEffect(() => {
    if (!items.length) return;
    setHighLightButton(true);

    const timer =setTimeout(() => {
      setHighLightButton(false);
    }, 300);
    
    return ()=>{
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
