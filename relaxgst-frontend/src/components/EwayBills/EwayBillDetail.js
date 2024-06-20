import React, { useContext, useEffect } from 'react';
import { EwayBillContext } from '../../context/EwayBillContext';

const EwayBillDetail = ({ match }) => {
  const { ewayBill, fetchEwayBill } = useContext(EwayBillContext);

  useEffect(() => {
    fetchEwayBill(match.params.id);
  }, [match.params.id]);

  return (
    <div>
      <h1>EwayBill Detail</h1>
      <p>Total: {ewayBill.total}</p>
      {/* other ewayBill details */}
    </div>
  );
};

export default EwayBillDetail;
