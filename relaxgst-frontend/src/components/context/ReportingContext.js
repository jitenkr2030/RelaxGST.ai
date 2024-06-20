import React, { createContext, useState } from 'react';
import { reportingService } from '../services/reportingService';

export const ReportingContext = createContext();

export const ReportingProvider = ({ children }) => {
  const [reports, setReports] = useState([]);
  const [report, setReport] = useState(null);

  const fetchReports = async () => {
    const data = await reportingService.fetchReports();
    setReports(data.reports);
  };

  const fetchReport = async (id) => {
    const data = await reportingService.fetchReport(id);
    setReport(data.report);
  };

  const createReport = async (reportData) => {
    const data = await reportingService.createReport(reportData);
    setReports((prev) => [...prev, data.report]);
  };

  return (
    <ReportingContext.Provider value={{ reports, report, fetchReports, fetchReport, createReport }}>
      {children}
    </ReportingContext.Provider>
  );
};
