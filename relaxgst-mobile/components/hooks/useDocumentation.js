import { useContext } from 'react';
import { DocumentationContext } from '../context/DocumentationContext';

const useDocumentation = () => {
  const context = useContext(DocumentationContext);
  if (!context) {
    throw new Error('useDocumentation must be used within a DocumentationProvider');
  }
  return context;
};

export default useDocumentation;
