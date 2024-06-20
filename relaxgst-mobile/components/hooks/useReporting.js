import { useContext } from 'react';
import { ReportingContext } from '../context/ReportingContext';

const useReporting = () => {
  const context = useContext(ReportingContext);
  if (!context) {
    throw new Error('useReporting must be used within a ReportingProvider');
  }
  return context;
};

export default useReporting;
