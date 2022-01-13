import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editingEnabled, setEditingEnabled] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const editingHandler = () => {
    setEditingEnabled(true);
  };

  const onCancelHandler = () => {
    setEditingEnabled(false);
  };

  return (
    <div className="new-expense">
      {!editingEnabled && (
        <button onClick={editingHandler}>Add new expense</button>
      )}
      {editingEnabled && (
        <ExpenseForm
          onCancel={onCancelHandler}
          onSaveExpense={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
