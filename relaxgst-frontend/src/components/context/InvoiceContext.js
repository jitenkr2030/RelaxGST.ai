import React, { createContext, useState } from 'react';
import { invoiceService } from '../services/invoiceService';

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);
  const [invoice, setInvoice] = useState(null);

  const fetchInvoices = async () => {
    const data = await invoiceService.fetchInvoices();
    setInvoices(data.invoices);
  };

  const fetchInvoice = async (id) => {
    const data = await invoiceService.fetchInvoice(id);
    setInvoice(data.invoice);
  };

  const createInvoice = async (invoiceData) => {
    const data = await invoiceService.createInvoice(invoiceData);
    setInvoices((prev) => [...prev, data.invoice]);
  };

  return (
    <InvoiceContext.Provider value={{ invoices, invoice, fetchInvoices, fetchInvoice, createInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};
