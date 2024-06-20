import React, { useEffect, useContext } from 'react';
import { DocumentationContext } from '../../context/DocumentationContext';

const DocumentList = () => {
  const { documents, fetchDocuments } = useContext(DocumentationContext);

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div>
      <h1>Documents</h1>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>{document.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
