import React, { createContext, useState } from 'react';

export const ReportingContext = createContext();

export const ReportingProvider = ({ children }) => {
  const [reports, setReports] = useState([]);
  const [report, setReport] = useState(null);

  const fetchReports = () => {
    // Fetch reports logic here
    setReports([{ id: 1, title: 'Report 1' }]);
  };

  const fetchReport = (id) => {
    // Fetch report by id logic here
    setReport({ id, title: 'Report 1', content: 'Content of Report 1' });
  };

  const createReport = (newReport) => {
    // Create report logic here
    setReports([...reports, newReport]);
  };

  return (
    <ReportingContext.Provider value={{ reports, report, fetchReports, fetchReport, createReport }}>
      {children}
    </ReportingContext.Provider>
  );
};
