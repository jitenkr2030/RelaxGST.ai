import React, { createContext, useState } from 'react';
import { crmService } from '../services/crmService';

export const CRMContext = createContext();

export const CRMProvider = ({ children }) => {
  const [crms, setCrms] = useState([]);
  const [crm, setCrm] = useState(null);

  const fetchCRMs = async () => {
    const data = await crmService.fetchCRMs();
    setCrms(data.crms);
  };

  const fetchCRM = async (id) => {
    const data = await crmService.fetchCRM(id);
    setCrm(data.crm);
  };

  const createCRM = async (crmData) => {
    const data = await crmService.createCRM(crmData);
    setCrms((prev) => [...prev, data.crm]);
  };

  return (
    <CRMContext.Provider value={{ crms, crm, fetchCRMs, fetchCRM, createCRM }}>
      {children}
    </CRMContext.Provider>
  );
};
