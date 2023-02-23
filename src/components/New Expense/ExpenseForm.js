import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, SetEnteredTitle] = useState(" ");
  const [enteredAmount, SetAmount] = useState(" ");
  const [enteredDate, SetDate] = useState(" ");

  const TitleChangeHandler = (e) => {
    SetEnteredTitle(e.target.value);
  };

  const AmountChangeHandler = (e) => {
    SetAmount(e.target.value);
  };

  const DateChangeHandler = (e) => {
    SetDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    SetEnteredTitle("");
    SetAmount("");
    SetDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input
            type="text"
            onChange={TitleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={DateChangeHandler}
            value={enteredDate}
            type="date"
            min="2021-01-01"
            max="2023-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
