import React, { useEffect, useContext } from 'react';
import { CRMContext } from '../../context/CRMContext';

const CRMList = () => {
  const { crms, fetchCRMs } = useContext(CRMContext);

  useEffect(() => {
    fetchCRMs();
  }, []);

  return (
    <div>
      <h1>CRM Records</h1>
      <ul>
        {crms.map((crm) => (
          <li key={crm.id}>{crm.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CRMList;
