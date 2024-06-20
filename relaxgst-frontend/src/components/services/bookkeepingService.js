import api from './api';

const bookkeepingService = {
  fetchExpenses: async () => {
    const response = await api.get('/expenses');
    return response.data;
  },
  fetchIncomes: async () => {
    const response = await api.get('/incomes');
    return response.data;
  },
  fetchTransactions: async () => {
    const response = await api.get('/transactions');
    return response.data;
  },
  createExpense: async (expenseData) => {
    const response = await api.post('/expenses', expenseData);
    return response.data;
  },
  createIncome: async (incomeData) => {
    const response = await api.post('/incomes', incomeData);
    return response.data;
  },
};

export { bookkeepingService };
