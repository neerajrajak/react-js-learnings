import { useRef, useState } from "react";
import Input from "../../common/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amtInpRef = useRef();
  const [amtValid, setAmtValid] = useState(true);
  const addToCartHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amtInpRef.current.value;
    if (!enteredAmount || enteredAmount > 5) {
      setAmtValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        ref={amtInpRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button onClick={addToCartHandler}>+ Add</button>
      {!amtValid && <p> Please enter a valid amount (1-5). </p>}
    </form>
  );
};

export default MealItemForm;
