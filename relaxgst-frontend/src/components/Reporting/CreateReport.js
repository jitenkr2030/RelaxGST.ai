import React, { useState, useContext } from 'react';
import { ReportingContext } from '../../context/ReportingContext';

const CreateReport = () => {
  const { createReport } = useContext(ReportingContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createReport({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <button type="submit">Create Report</button>
    </form>
  );
};

export default CreateReport;
