import React, { useContext, useEffect } from 'react';
import { InvoiceContext } from '../../context/InvoiceContext';

const InvoiceDetail = ({ match }) => {
  const { invoice, fetchInvoice } = useContext(InvoiceContext);

  useEffect(() => {
    fetchInvoice(match.params.id);
  }, [match.params.id]);

  return (
    <div>
      <h1>Invoice Detail</h1>
      <p>Total: {invoice.total}</p>
      {/* other invoice details */}
    </div>
  );
};

export default InvoiceDetail;
