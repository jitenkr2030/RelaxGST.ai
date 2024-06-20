import { useContext } from 'react';
import { InvoiceContext } from '../context/InvoiceContext';

const useInvoice = () => {
  return useContext(InvoiceContext);
};

export default useInvoice;
