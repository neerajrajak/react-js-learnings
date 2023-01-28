import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemClasses from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amt) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amt,
      price: props.price,
    });
  };
  return (
    <li className={MealItemClasses.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={MealItemClasses.description}>{props.description}</div>
        <div className={MealItemClasses.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
