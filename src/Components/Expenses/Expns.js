import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expns.css';

const Expenses = (props) => {
  const [expenses, setExpenses] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState('2020');

  useEffect(() => {
    setExpenses(props.items);
  }, [props.items]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((expense) => expense.id !== id);
      return updatedExpenses;
    });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        onDelete={deleteExpenseHandler}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
