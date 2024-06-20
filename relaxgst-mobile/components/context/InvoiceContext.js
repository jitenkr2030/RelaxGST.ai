import React, { createContext, useState } from 'react';

export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);
  const [invoice, setInvoice] = useState(null);

  const fetchInvoices = () => {
    // Fetch invoices logic here
    setInvoices([{ id: 1, title: 'Invoice 1' }]);
  };

  const fetchInvoice = (id) => {
    // Fetch invoice by id logic here
    setInvoice({ id, title: 'Invoice 1', amount: 100 });
  };

  const createInvoice = (newInvoice) => {
    // Create invoice logic here
    setInvoices([...invoices, newInvoice]);
  };

  return (
    <InvoiceContext.Provider value={{ invoices, invoice, fetchInvoices, fetchInvoice, createInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};
