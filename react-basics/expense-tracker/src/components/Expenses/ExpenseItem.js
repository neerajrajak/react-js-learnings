import React, { useState } from "react";
import Card from "./../Common/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const titleChangeHandler = () => {
    setTitle(title.toUpperCase());
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={titleChangeHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
