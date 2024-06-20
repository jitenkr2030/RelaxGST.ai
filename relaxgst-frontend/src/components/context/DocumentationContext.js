import React, { createContext, useState } from 'react';
import { documentationService } from '../services/documentationService';

export const DocumentationContext = createContext();

export const DocumentationProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [document, setDocument] = useState(null);

  const fetchDocuments = async () => {
    const data = await documentationService.fetchDocuments();
    setDocuments(data.documents);
  };

  const fetchDocument = async (id) => {
    const data = await documentationService.fetchDocument(id);
    setDocument(data.document);
  };

  const createDocument = async (documentData) => {
    const data = await documentationService.createDocument(documentData);
    setDocuments((prev) => [...prev, data.document]);
  };

  return (
    <DocumentationContext.Provider value={{ documents, document, fetchDocuments, fetchDocument, createDocument }}>
      {children}
    </DocumentationContext.Provider>
  );
};
