import React, { useEffect, useContext } from 'react';
import { EwayBillContext } from '../../context/EwayBillContext';

const EwayBillList = () => {
  const { ewayBills, fetchEwayBills } = useContext(EwayBillContext);

  useEffect(() => {
    fetchEwayBills();
  }, []);

  return (
    <div>
      <h1>EwayBills</h1>
      <ul>
        {ewayBills.map((ewayBill) => (
          <li key={ewayBill.id}>{ewayBill.total}</li>
        ))}
      </ul>
    </div>
  );
};

export default EwayBillList;
