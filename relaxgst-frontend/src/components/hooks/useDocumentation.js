import { useContext } from 'react';
import { DocumentationContext } from '../context/DocumentationContext';

const useDocumentation = () => {
  return useContext(DocumentationContext);
};

export default useDocumentation;
