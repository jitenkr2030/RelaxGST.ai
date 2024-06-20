import React, { useState, useContext } from 'react';
import { CRMContext } from '../../context/CRMContext';

const CreateCRM = () => {
  const { createCRM } = useContext(CRMContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createCRM({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Create CRM Record</button>
    </form>
  );
};

export default CreateCRM;
