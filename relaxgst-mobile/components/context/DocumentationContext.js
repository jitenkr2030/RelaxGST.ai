import React, { createContext, useState } from 'react';

export const DocumentationContext = createContext();

export const DocumentationProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [document, setDocument] = useState(null);

  const fetchDocuments = () => {
    // Fetch documents logic here
    setDocuments([{ id: 1, title: 'Document 1' }]);
  };

  const fetchDocument = (id) => {
    // Fetch document by id logic here
    setDocument({ id, title: 'Document 1', content: 'Content of Document 1' });
  };

  const createDocument = (newDocument) => {
    // Create document logic here
    setDocuments([...documents, newDocument]);
  };

  return (
    <DocumentationContext.Provider value={{ documents, document, fetchDocuments, fetchDocument, createDocument }}>
      {children}
    </DocumentationContext.Provider>
  );
};
