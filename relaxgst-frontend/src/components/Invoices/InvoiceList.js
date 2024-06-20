import React, { useEffect, useContext } from 'react';
import { InvoiceContext } from '../../context/InvoiceContext';

const InvoiceList = () => {
  const { invoices, fetchInvoices } = useContext(InvoiceContext);

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>{invoice.total}</li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
