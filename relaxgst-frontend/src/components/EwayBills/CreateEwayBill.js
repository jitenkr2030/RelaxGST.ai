import React, { useState, useContext } from 'react';
import { EwayBillContext } from '../../context/EwayBillContext';

const CreateEwayBill = () => {
  const { createEwayBill } = useContext(EwayBillContext);
  const [items, setItems] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createEwayBill({ items, total });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={items} onChange={(e) => setItems(e.target.value)} />
      <input type="text" value={total} onChange={(e) => setTotal(e.target.value)} />
      <button type="submit">Create EwayBill</button>
    </form>
  );
};

export default CreateEwayBill;
