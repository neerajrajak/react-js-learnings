import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const addExpenseHandler = (addedExpense) => {
    const newExpense = {
      ...addedExpense,
      id: Math.random(),
    };

    props.onNewExpenseAdded(newExpense);
    setShowExpenseForm(false);
  };

  const toggleExpenseFormHandler = (diplayForm) => {
    const show = diplayForm ? true : false;
    setShowExpenseForm(show);
  };

  return (
    <div className="new-expense">
      {showExpenseForm && (
        <ExpenseForm
          onExpenseAdded={addExpenseHandler}
          onCancelClick={toggleExpenseFormHandler}
        ></ExpenseForm>
      )}
      {!showExpenseForm && (
        <button onClick={toggleExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
