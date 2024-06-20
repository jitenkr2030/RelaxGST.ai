import React, { useState, useContext } from 'react';
import { DocumentationContext } from '../../context/DocumentationContext';

const CreateDocument = () => {
  const { createDocument } = useContext(DocumentationContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createDocument({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button type="submit">Create Document</button>
    </form>
  );
};

export default CreateDocument;
