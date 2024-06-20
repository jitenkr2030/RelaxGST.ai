import React, { createContext, useState } from 'react';

export const BookkeepingContext = createContext();

export const BookkeepingProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const fetchExpenses = () => {
    // Fetch expenses logic here
    setExpenses([{ id: 1, name: 'Expense 1' }]);
  };

  const fetchIncomes = () => {
    // Fetch incomes logic here
    setIncomes([{ id: 1, name: 'Income 1' }]);
  };

  const fetchTransactions = () => {
    // Fetch transactions logic here
    setTransactions([{ id: 1, name: 'Transaction 1' }]);
  };

  const createExpense = (newExpense) => {
    // Create expense logic here
    setExpenses([...expenses, newExpense]);
  };

  const createIncome = (newIncome) => {
    // Create income logic here
    setIncomes([...incomes, newIncome]);
  };

  return (
    <BookkeepingContext.Provider value={{ expenses, incomes, transactions, fetchExpenses, fetchIncomes, fetchTransactions, createExpense, createIncome }}>
      {children}
    </BookkeepingContext.Provider>
  );
};
