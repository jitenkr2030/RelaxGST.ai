import React, { useContext, useEffect } from 'react';
import { DocumentationContext } from '../../context/DocumentationContext';

const DocumentDetail = ({ match }) => {
  const { document, fetchDocument } = useContext(DocumentationContext);

  useEffect(() => {
    fetchDocument(match.params.id);
  }, [match.params.id]);

  return (
    <div>
      <h1>Document Detail</h1>
      <p>Title: {document.title}</p>
      <p>Content: {document.content}</p>
    </div>
  );
};

export default DocumentDetail;
