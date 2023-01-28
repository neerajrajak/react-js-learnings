import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [expenseInput, setExpenseInput] = useState({
  //   title:'',
  //   amount: '',
  //   date:''
  // });

  const titleChangeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
    // setExpenseInput({
    //   ...expenseInput,
    //   title: e.target.value
    // });

    // If your current state depends on previous state than it is recommended to use this approach
    // setExpenseInput((prevState)=>{
    //   return {
    //     ...prevState,
    //     title: e.target.value
    //   }
    // });
  };

  const amountChangeHandler = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
    // setExpenseInput({
    //   ...expenseInput,
    //   amount: e.target.value
    // });
  };

  const dateChangeHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    // setExpenseInput({
    //   ...expenseInput,
    //   date: e.target.value
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    props.onExpenseAdded(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          onClick={() => {
            props.onCancelClick(true);
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
