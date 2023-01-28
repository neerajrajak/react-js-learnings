import React, { useState } from "react";
import Card from "./../Common/Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

function Expenses(props) {
  const [seletedYear, setSelectedYear] = useState("2020");

  const getSelectedYear = (year) => {
    setSelectedYear(year);
  };

  const filteredExpense = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === seletedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={seletedYear}
          onYearSelected={getSelectedYear}
        ></ExpensesFilter>
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;
