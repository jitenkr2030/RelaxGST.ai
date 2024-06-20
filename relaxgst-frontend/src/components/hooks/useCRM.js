import { useContext } from 'react';
import { CRMContext } from '../context/CRMContext';

const useCRM = () => {
  return useContext(CRMContext);
};

export default useCRM;
