import { useContext } from 'react';
import { CRMContext } from '../context/CRMContext';

const useCRM = () => {
  const context = useContext(CRMContext);
  if (!context) {
    throw new Error('useCRM must be used within a CRMProvider');
  }
  return context;
};

export default useCRM;
