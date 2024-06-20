import api from './api';

const invoiceService = {
  fetchInvoices: async () => {
    const response = await api.get('/invoices');
    return response.data;
  },
  fetchInvoice: async (id) => {
    const response = await api.get(`/invoices/${id}`);
    return response.data;
  },
  createInvoice: async (invoiceData) => {
    const response = await api.post('/invoices', invoiceData);
    return response.data;
  },
};

export { invoiceService };
