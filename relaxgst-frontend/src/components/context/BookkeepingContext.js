import React, { createContext, useState } from 'react';
import { bookkeepingService } from '../services/bookkeepingService';

export const BookkeepingContext = createContext();

export const BookkeepingProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const fetchExpenses = async () => {
    const data = await bookkeepingService.fetchExpenses();
    setExpenses(data.expenses);
  };

  const fetchIncomes = async () => {
    const data = await bookkeepingService.fetchIncomes();
    setIncomes(data.incomes);
  };

  const fetchTransactions = async () => {
    const data = await bookkeepingService.fetchTransactions();
    setTransactions(data.transactions);
  };

  const createExpense = async (expenseData) => {
    const data = await bookkeepingService.createExpense(expenseData);
    setExpenses((prev) => [...prev, data.expense]);
  };

  const createIncome = async (incomeData) => {
    const data = await bookkeepingService.createIncome(incomeData);
    setIncomes((prev) => [...prev, data.income]);
  };

  return (
    <BookkeepingContext.Provider value={{ expenses, incomes, transactions, fetchExpenses, fetchIncomes, fetchTransactions, createExpense, createIncome }}>
      {children}
    </BookkeepingContext.Provider>
  );
};
