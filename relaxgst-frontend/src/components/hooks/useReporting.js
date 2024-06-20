import { useContext } from 'react';
import { ReportingContext } from '../context/ReportingContext';

const useReporting = () => {
  return useContext(ReportingContext);
};

export default useReporting;
