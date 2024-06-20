import React, { createContext, useState } from 'react';

export const CRMContext = createContext();

export const CRMProvider = ({ children }) => {
  const [crmEntries, setCrmEntries] = useState([]);
  const [crmEntry, setCrmEntry] = useState(null);

  const fetchCRMEntries = () => {
    // Fetch CRM entries logic here
    setCrmEntries([{ id: 1, name: 'CRM Entry 1' }]);
  };

  const fetchCRMEntry = (id) => {
    // Fetch CRM entry by id logic here
    setCrmEntry({ id, name: 'CRM Entry 1', details: 'Details about CRM Entry 1' });
  };

  const createCRMEntry = (newCRMEntry) => {
    // Create CRM entry logic here
    setCrmEntries([...crmEntries, newCRMEntry]);
  };

  return (
    <CRMContext.Provider value={{ crmEntries, crmEntry, fetchCRMEntries, fetchCRMEntry, createCRMEntry }}>
      {children}
    </CRMContext.Provider>
  );
};
