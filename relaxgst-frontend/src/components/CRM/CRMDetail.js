import React, { useContext, useEffect } from 'react';
import { CRMContext } from '../../context/CRMContext';

const CRMDetail = ({ match }) => {
  const { crm, fetchCRM } = useContext(CRMContext);

  useEffect(() => {
    fetchCRM(match.params.id);
  }, [match.params.id]);

  return (
    <div>
      <h1>CRM Detail</h1>
      <p>Name: {crm.name}</p>
      <p>Email: {crm.email}</p>
      <p>Phone: {crm.phone}</p>
    </div>
  );
};

export default CRMDetail;
