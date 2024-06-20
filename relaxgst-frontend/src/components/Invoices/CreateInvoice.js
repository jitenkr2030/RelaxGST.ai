import React, { useState, useContext } from 'react';
import { InvoiceContext } from '../../context/InvoiceContext';

const CreateInvoice = () => {
  const { createInvoice } = useContext(InvoiceContext);
  const [items, setItems] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createInvoice({ items, total });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={items} onChange={(e) => setItems(e.target.value)} />
      <input type="text" value={total} onChange={(e) => setTotal(e.target.value)} />
      <button type="submit">Create Invoice</button>
    </form>
  );
};

export default CreateInvoice;
